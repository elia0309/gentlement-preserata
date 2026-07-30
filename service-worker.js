const CACHE_NAME = "gentlement-preserata-v4";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isApiRequest = url.pathname.startsWith("/api/");
  const isMediaRequest = ["audio", "video"].includes(event.request.destination);
  const isMediaFile = /\.(mp4|webm|mov|mp3|m4a|wav|ogg)$/i.test(url.pathname);
  const isRangeRequest = event.request.headers.has("range");

  if (event.request.method !== "GET" || isApiRequest || isMediaRequest || isMediaFile || isRangeRequest) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("/index.html")))
  );
});
