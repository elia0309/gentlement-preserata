const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const rootDir = __dirname;
const port = Number(process.env.PORT || 3000);
const rooms = new Map();
const roomClients = new Map();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".m4a": "audio/mp4",
  ".mp4": "video/mp4",
  ".svg": "image/svg+xml",
};

const rangeEnabledExtensions = new Set([
  ".mp3",
  ".wav",
  ".m4a",
  ".mp4",
  ".webm",
  ".ogg",
  ".mov",
]);

function createRoomCode() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";

  do {
    code = "";
    for (let index = 0; index < 4; index += 1) {
      code += letters[Math.floor(Math.random() * letters.length)];
    }
  } while (rooms.has(code));

  return code;
}

function createPlayer(name, isHost = false) {
  return {
    id: crypto.randomUUID(),
    name,
    isHost,
    joinedAt: Date.now(),
  };
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function publicRoom(room) {
  return {
    code: room.code,
    version: room.version,
    players: room.players.map((player) => ({
      id: player.id,
      name: player.name,
      isHost: player.isHost,
    })),
    state: room.state,
  };
}

function writeRoomEvent(response, room) {
  response.write(`event: room\n`);
  response.write(`data: ${JSON.stringify({ room: publicRoom(room) })}\n\n`);
}

function broadcastRoom(room) {
  const clients = roomClients.get(room.code);
  if (!clients) return;

  for (const client of clients) {
    writeRoomEvent(client, room);
  }
}

function ensureRoom(code) {
  const room = rooms.get(String(code || "").toUpperCase());
  return room || null;
}

async function handleApi(request, response, url) {
  if (request.method === "POST" && url.pathname === "/api/rooms") {
    const body = await readBody(request);
    const name = String(body.name || "").trim().slice(0, 24);

    if (!name) {
      sendJson(response, 400, { error: "Nome giocatore mancante." });
      return;
    }

    const code = createRoomCode();
    const host = createPlayer(name, true);
    const room = {
      code,
      players: [host],
      version: 1,
      state: {
        selectedMode: body.mode || "omini",
        screen: "lobby",
        updatedAt: Date.now(),
      },
      createdAt: Date.now(),
    };

    rooms.set(code, room);
    broadcastRoom(room);
    sendJson(response, 201, { room: publicRoom(room), playerId: host.id });
    return;
  }

  const joinMatch = url.pathname.match(/^\/api\/rooms\/([A-Z0-9]+)\/join$/i);
  if (request.method === "POST" && joinMatch) {
    const room = ensureRoom(joinMatch[1]);
    const body = await readBody(request);
    const name = String(body.name || "").trim().slice(0, 24);

    if (!room) {
      sendJson(response, 404, { error: "Stanza non trovata." });
      return;
    }

    if (!name) {
      sendJson(response, 400, { error: "Nome giocatore mancante." });
      return;
    }

    let player = room.players.find((existingPlayer) => existingPlayer.name.toLowerCase() === name.toLowerCase());
    if (!player) {
      player = createPlayer(name, false);
      room.players.push(player);
      room.version += 1;
      room.state = {
        ...room.state,
        players: room.players.map((roomPlayer) => roomPlayer.name),
        updatedAt: Date.now(),
      };
      broadcastRoom(room);
    }

    sendJson(response, 200, { room: publicRoom(room), playerId: player.id });
    return;
  }

  const stateMatch = url.pathname.match(/^\/api\/rooms\/([A-Z0-9]+)\/state$/i);
  if (request.method === "GET" && stateMatch) {
    const room = ensureRoom(stateMatch[1]);
    if (!room) {
      sendJson(response, 404, { error: "Stanza non trovata." });
      return;
    }

    sendJson(response, 200, { room: publicRoom(room) });
    return;
  }

  const eventsMatch = url.pathname.match(/^\/api\/rooms\/([A-Z0-9]+)\/events$/i);
  if (request.method === "GET" && eventsMatch) {
    const room = ensureRoom(eventsMatch[1]);
    if (!room) {
      sendJson(response, 404, { error: "Stanza non trovata." });
      return;
    }

    response.writeHead(200, {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-store",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no",
    });
    response.write(": connected\n\n");
    writeRoomEvent(response, room);

    const clients = roomClients.get(room.code) || new Set();
    clients.add(response);
    roomClients.set(room.code, clients);

    const keepAliveId = setInterval(() => {
      response.write(": ping\n\n");
    }, 25000);

    request.on("close", () => {
      clearInterval(keepAliveId);
      clients.delete(response);
      if (clients.size === 0) {
        roomClients.delete(room.code);
      }
    });
    return;
  }

  const syncMatch = url.pathname.match(/^\/api\/rooms\/([A-Z0-9]+)\/sync$/i);
  if (request.method === "POST" && syncMatch) {
    const room = ensureRoom(syncMatch[1]);
    const body = await readBody(request);

    if (!room) {
      sendJson(response, 404, { error: "Stanza non trovata." });
      return;
    }

    const player = room.players.find((roomPlayer) => roomPlayer.id === body.playerId);
    if (!player) {
      sendJson(response, 403, { error: "Giocatore non valido." });
      return;
    }

    const incomingState = body.state || {};
    const nextState = player.isHost
      ? {
          ...room.state,
          ...incomingState,
        }
      : {
          ...room.state,
        };

    if (!player.isHost) {
      [
        "votesByPlayer",
        "gentlemanDayAnswersByPlayer",
        "gentlemanDayPitAnswersByPlayer",
        "gentlementAnswersByPlayer",
        "bonusCorrectPlayers",
        "bonusReactionTimes",
        "bonusAnswerLockedUntil",
        "penaltyCounts",
        "shotCounts",
        "drinkCounts",
      ].forEach((key) => {
        if (incomingState[key] && typeof incomingState[key] === "object") {
          nextState[key] = {
            ...(room.state[key] || {}),
            ...incomingState[key],
          };
        }
      });

      [
        "wheelRotation",
        "gentlementExtracted",
        "currentGentlement",
        "currentWheelPenalty",
        "extractedGentlements",
        "currentChallengePlayer",
      ].forEach((key) => {
        if (typeof incomingState[key] !== "undefined") {
          nextState[key] = incomingState[key];
        }
      });
    }

    const isEarlyBaseRoundResult =
      player.isHost
      && incomingState.screen === "results"
      && room.players.some((roomPlayer) => !nextState.votesByPlayer?.[roomPlayer.name])
      && (!nextState.roundEndsAt || Date.now() < nextState.roundEndsAt);

    if (isEarlyBaseRoundResult) {
      nextState.screen = "game";
    }

    room.state = {
      ...nextState,
      players: room.players.map((roomPlayer) => roomPlayer.name),
      updatedAt: Date.now(),
    };
    room.version += 1;
    broadcastRoom(room);
    sendJson(response, 200, { room: publicRoom(room) });
    return;
  }

  sendJson(response, 404, { error: "Endpoint non trovato." });
}

function serveStatic(request, response, url) {
  const requestedPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.normalize(path.join(rootDir, requestedPath));

  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const cacheControl = [".html", ".js", ".css", ".json", ".webmanifest"].includes(extension)
      ? "no-store"
      : "public, max-age=3600";
    const headers = {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Cache-Control": cacheControl,
      "Content-Length": stats.size,
    };

    if (rangeEnabledExtensions.has(extension)) {
      headers["Accept-Ranges"] = "bytes";
    }

    const rangeHeader = request.headers.range;
    if (rangeHeader && rangeEnabledExtensions.has(extension)) {
      const rangeMatch = rangeHeader.match(/^bytes=(\d*)-(\d*)$/);
      if (!rangeMatch) {
        response.writeHead(416, {
          ...headers,
          "Content-Range": `bytes */${stats.size}`,
        });
        response.end();
        return;
      }

      let start = rangeMatch[1] ? Number(rangeMatch[1]) : 0;
      let end = rangeMatch[2] ? Number(rangeMatch[2]) : stats.size - 1;

      if (!rangeMatch[1] && rangeMatch[2]) {
        const suffixLength = Number(rangeMatch[2]);
        start = Math.max(stats.size - suffixLength, 0);
        end = stats.size - 1;
      }

      if (
        Number.isNaN(start)
        || Number.isNaN(end)
        || start < 0
        || end >= stats.size
        || start > end
      ) {
        response.writeHead(416, {
          ...headers,
          "Content-Range": `bytes */${stats.size}`,
        });
        response.end();
        return;
      }

      response.writeHead(206, {
        ...headers,
        "Content-Range": `bytes ${start}-${end}/${stats.size}`,
        "Content-Length": end - start + 1,
      });
      fs.createReadStream(filePath, { start, end }).pipe(response);
      return;
    }

    response.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(response);
  });
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  try {
    if (url.pathname.startsWith("/api/")) {
      await handleApi(request, response, url);
      return;
    }

    serveStatic(request, response, url);
  } catch (error) {
    sendJson(response, 500, { error: "Errore server.", details: error.message });
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Gentlement Preserata online su http://localhost:${port}`);
});
