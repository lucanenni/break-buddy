# Pause buddy

Un tool ispirato a MakeCode Arcade per creare un "buddy" da desktop, installabile come PWA, che ricorda di fare pause a intervalli regolari e suggerisce buoni consigli di salute.

🔗 **App live:** https://lucanenni.github.io/pause-buddy/

## Stato attuale

- `index.html` — editor a blocchi (Blockly) per programmare il comportamento del buddy.
- `manifest.json` — manifest PWA (installabile su desktop/mobile).
- `sw.js` — service worker (cache offline, strategia stale-while-revalidate).
- `icon-192.png`, `icon-512.png` — icone dell'app.
- [`GUIDA-ATTIVITA.md`](GUIDA-ATTIVITA.md) — guida per un'attività di coding di circa un'ora, dall'introduzione ai blocchi fino a suggerimenti per proseguire in autonomia.

## Sviluppo

Il progetto è statico: basta servire la cartella con un server HTTP qualsiasi, es.

```bash
python3 -m http.server 8000
```

e aprire `http://localhost:8000`.
