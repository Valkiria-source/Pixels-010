# PIXELS · Maupiti Studios

Due giochi in uno per smartphone, solo touch. All'avvio si sceglie la modalità:

- **Mirror**: due pixel speculari che scivolano. Scorri il dito: il magenta scivola in quella direzione, il ciano in quella opposta, finché non urtano un ostacolo o un bordo. Falli toccare. 3 tutorial, 10 livelli scelti con una sola soluzione ottima, poi livelli generati e verificati.
- **Maze**: due segnali in un labirinto. Muovi un pixel alla volta, aprigli la strada con interruttori, blocchi, correnti e porte a tempo, evita il rumore. 50 livelli, tutti verificati risolvibili.

## Contenuto

```
src/                  il gioco (HTML, manifest, service worker, icone)
assets/               immagini sorgente per icone e splash Android
scripts/build.mjs     copia src/ in www/
.github/workflows/
  pages.yml           pubblica il gioco su GitHub Pages
  android.yml         compila l'APK Android
capacitor.config.json configurazione dell'app (id: com.maupitistudios.pixels)
```

## 1. Caricare su GitHub

1. Crea un nuovo repository su GitHub (es. `pixels`).
2. Carica **tutto il contenuto** di questa cartella, comprese le cartelle nascoste `.github` e il file `.gitignore`.
   Dal sito: *Add file → Upload files* e trascina i file. Se la cartella `.github` non viene caricata, creala a mano con *Add file → Create new file* scrivendo `.github/workflows/pages.yml` come nome e incollando il contenuto.
3. Il branch principale deve chiamarsi `main`.

## 2. Giocare dal browser (GitHub Pages)

1. Nel repository: *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.
2. Vai in *Actions*, apri "Pubblica su GitHub Pages" e premi *Run workflow* (oppure fai un nuovo commit).
3. Il gioco sarà online su `https://TUO-UTENTE.github.io/pixels/`.
4. Dal telefono puoi aggiungerlo alla schermata Home: funziona come un'app, anche offline.

## 3. Ottenere l'APK Android

1. Vai in *Actions → Compila APK Android → Run workflow*.
2. A fine compilazione (circa 5 minuti) apri l'esecuzione e scarica **PIXELS-apk** in fondo alla pagina.
3. Estrai lo zip e installa `app-debug.apk` sul telefono (serve consentire l'installazione da origini sconosciute).

L'APK è una build di **debug**, perfetta per provare il gioco. Per pubblicarlo sul Play Store serve una build *release* firmata con una tua chiave (keystore) in formato AAB: si può aggiungere al workflow in un secondo momento.

## Sviluppo in locale (facoltativo)

```
npm install
npm run build
npm run serve          # prova nel browser
npm run android:add    # crea il progetto Android (serve Android Studio)
npm run android:open
```

## Note

- Classifica, livello raggiunto, modalità e sigla sono salvati sul dispositivo.
- Il font Montserrat arriva da Google Fonts; senza connessione viene usato un font di sistema simile.
- Il suono parte al primo tocco (regola dei browser).
