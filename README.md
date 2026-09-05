# BreakBuddy

Un tool ispirato a MakeCode Arcade per creare un "buddy" da desktop che ricorda di fare pause a intervalli regolari e suggerisce buoni consigli di salute. Come in MakeCode: si programma in un editor a blocchi, poi si usa (e si installa come PWA) un'app separata e più leggera — il buddy vero e proprio.

🔗 **BreakBuddy Studio (editor):** https://lucanenni.github.io/break-buddy/index.html
🔗 **Il buddy (app installabile):** https://lucanenni.github.io/break-buddy/buddy.html

## Stato attuale

- `index.html` — **BreakBuddy Studio**, l'editor a blocchi (Blockly): qui si programma il comportamento del buddy, con galleria di skin, un editor pixel-art per disegnarne uno personalizzato, una libreria di programmi salvabili con un nome, blocchi orario per comportamenti diversi durante la giornata, statistiche giornaliere con serie di giorni consecutivi e blocchi in stile pomodoro per pause lunghe periodiche. Non è installabile come app: workspace vuota all'avvio (utile in aula), con "Vedi un esempio" per caricare un programma di riferimento.
- `buddy.html` — **il buddy**, l'app leggera e installabile (ha il suo `manifest.json`): esegue il programma salvato dallo Studio (senza bisogno di Blockly), mostra il buddy, i pulsanti pausa/acqua, l'aspetto e le statistiche, le notifiche di sistema e il prompt di installazione PWA. Se non è ancora stato programmato nulla, invita ad aprire lo Studio.
- `manifest.json` — manifest PWA del buddy (start_url `buddy.html`).
- `sw.js` — service worker condiviso (cache offline per entrambe le pagine, strategia stale-while-revalidate).
- `icon-192.png`, `icon-512.png` — icone dell'app.
- [`GUIDA-ATTIVITA.md`](GUIDA-ATTIVITA.md) — guida per un'attività di coding di circa un'ora, dall'introduzione ai blocchi fino a suggerimenti per proseguire in autonomia.

Le due pagine condividono lo stesso `localStorage` (stesso dominio): il programma, l'aspetto, i contatori e lo storico restano coerenti sia che tu lavori nello Studio sia che tu apra il buddy installato.

## Sviluppo

Il progetto è statico: basta servire la cartella con un server HTTP qualsiasi, es.

```bash
python3 -m http.server 8000
```

e aprire `http://localhost:8000` (Studio) o `http://localhost:8000/buddy.html` (buddy).
