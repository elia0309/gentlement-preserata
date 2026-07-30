# Multiplayer con telefoni su connessione dati

Per far giocare tutti dal proprio telefono anche con connessione dati serve un link pubblico HTTPS.
Il link locale `http://192.168.0.206:3000` funziona solo se i telefoni sono sulla stessa Wi-Fi del PC.

## Opzione consigliata: pubblicare online

1. Crea un account su Render, Railway o un hosting Node simile.
2. Carica questa cartella su GitHub.
3. Crea un nuovo servizio web Node.
4. Usa questi comandi:
   - Build: `npm install`
   - Start: `npm start`
5. Quando l'hosting pubblica il sito, ricevi un link tipo:
   - `https://gentlement-preserata.onrender.com`

Da quel momento gli amici possono aprire quel link da dati mobili, Wi-Fi o qualsiasi rete.

## Come installarla sul telefono

Android:
1. Apri il link pubblico con Chrome.
2. Premi il menu con i tre puntini.
3. Premi `Aggiungi a schermata Home` o `Installa app`.

iPhone:
1. Apri il link pubblico con Safari.
2. Premi il tasto condividi.
3. Premi `Aggiungi alla schermata Home`.

## Come si gioca

1. L'host apre il link pubblico.
2. Inserisce il proprio nome e crea una stanza.
3. Comunica il codice stanza agli amici.
4. Gli amici aprono lo stesso link pubblico, inseriscono nome e codice stanza.
5. Solo l'host manda avanti la partita.

## Nota importante

Le stanze sono salvate nella memoria del server. Se l'hosting riavvia il server, la stanza in corso si resetta.
Per una preserata va bene; in futuro si puo aggiungere un database se vuoi stanze persistenti.
