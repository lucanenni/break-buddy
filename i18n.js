// Traduzioni di BreakBuddy (italiano / inglese), condivise da index.html e buddy.html.
//
// Il testo sorgente è l'italiano: la chiave del dizionario EN è la frase italiana
// stessa. In italiano t() restituisce la chiave così com'è, in inglese cerca la
// traduzione (e se manca ricade sull'italiano, annotandola in I18N.missing).
// Il cambio lingua salva la scelta in localStorage e ricarica la pagina: i blocchi
// (e il programma salvato) non cambiano, cambia solo l'interfaccia.
(function () {
  "use strict";

  var STORAGE_LANG = 'breakbuddy.lang.v1';
  var LANGS = ['it', 'en'];

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_LANG);
      if (LANGS.indexOf(saved) >= 0) return saved;
    } catch (e) {}
    var nav = (navigator.language || 'it').toLowerCase();
    return nav.indexOf('it') === 0 ? 'it' : 'en';
  }

  var lang = detectLang();
  var missing = [];

  var EN = {
    // --- identità ---
    'BreakBuddy': 'BreakBuddy',
    'BreakBuddy Studio': 'BreakBuddy Studio',
    '🌐 Italiano': '🌐 Italiano',
    '🌐 English': '🌐 English',

    // --- pagina Studio (index.html) ---
    'Programma qui il tuo compagno digitale, poi apri o installa il buddy': 'Program your digital companion here, then open or install the buddy',
    'Velocità della simulazione': 'Simulation speed',
    'Lingua': 'Language',
    '⏱️ Tempo reale (1 min = 1 min)': '⏱️ Real time (1 min = 1 min)',
    '⚡ Demo (1 min = 1 sec)': '⚡ Demo (1 min = 1 sec)',
    '🚀 Test rapido (1 min = 0.2 sec)': '🚀 Fast test (1 min = 0.2 sec)',
    '📖 Vedi un esempio': '📖 See an example',
    'Sostituisce i blocchi attuali con un programma di esempio già pronto': 'Replaces the current blocks with a ready-made example program',
    '🗑️ Pulisci tutto': '🗑️ Clear all',
    "Svuota l'area di lavoro per ricominciare da zero": 'Empties the workspace so you can start from scratch',
    '💾 Programmi': '💾 Programs',
    '📊 Statistiche': '📊 Statistics',
    'I tuoi blocchi': 'Your blocks',
    'Legenda dei blocchi': 'Block legend',
    'Vedi il codice generato': 'See the generated code',
    '// premi Avvia per generare il codice': '// press Start to generate the code',
    'Il buddy': 'The buddy',
    '🎨 Aspetto del buddy': '🎨 Buddy appearance',
    'Minuti sim.': 'Sim. minutes',
    'Pause fatte': 'Breaks taken',
    'Bicchieri': 'Glasses',
    '🙌 Ho fatto la pausa': '🙌 I took a break',
    "💧 Ho bevuto un bicchiere d'acqua": '💧 I drank a glass of water',
    '▶ Avvia': '▶ Start',
    '■ Ferma': '■ Stop',
    '🐣 Apri il tuo buddy': '🐣 Open your buddy',
    "Gira tutto nel browser di questa pagina — non è un'app installata sul desktop, ma funziona con gli stessi blocchi con cui lo hai programmato tu.": "Everything runs in the browser on this page — it isn't an app installed on your desktop, but it works with the same blocks you programmed it with.",
    '"Dopo N minuti senza pausa" segue la velocità di simulazione scelta in alto, così puoi vedere il promemoria senza aspettare davvero N minuti.': '"After N minutes without a break" follows the simulation speed chosen at the top, so you can see the reminder without really waiting N minutes.',

    // --- legenda ---
    'quando il buddy si accende': 'when the buddy turns on',
    "— parte una volta sola, all'avvio.": '— runs only once, at start-up.',
    'dopo N minuti senza pausa, avvisa': 'after N minutes without a break, notify',
    '— conta i minuti dall\'ultima pausa; al termine avvisa una volta sola e resta in attesa finché non premi "Ho fatto la pausa".': '— counts the minutes since the last break; when time is up it notifies once and waits until you press "I took a break".',
    'quando premo "Ho fatto la pausa"': 'when I press "I took a break"',
    '— parte quando si clicca il pulsante a destra.': '— runs when the button on the right is clicked.',
    'quando premo "Ho bevuto un bicchiere d\'acqua"': 'when I press "I drank a glass of water"',
    '— parte quando si clicca quel pulsante.': '— runs when that button is clicked.',
    'il buddy dice': 'the buddy says',
    '— mostra un messaggio nel fumetto.': '— shows a message in the speech bubble.',
    'il buddy dice a caso una tra': 'the buddy says one of these at random',
    '— sceglie ogni volta una delle tre frasi scritte.': '— picks one of the three written phrases each time.',
    'il buddy mostra il numero': 'the buddy shows the number',
    '— fa vedere nel fumetto il valore di una variabile o di un calcolo.': '— shows the value of a variable or a calculation in the speech bubble.',
    'cambia faccia del buddy': "change the buddy's face",
    "— sceglie l'espressione: felice, stanco, energico...": '— picks the expression: happy, tired, energetic...',
    'riproduci suono': 'play sound',
    '— fa sentire un piccolo avviso sonoro.': '— plays a small alert sound.',
    'cambia la scena in': 'change the scene to',
    '— cambia lo sfondo dietro al buddy: giorno, tramonto, notte...': '— changes the background behind the buddy: day, sunset, night...',
    'aspetta N secondi': 'wait N seconds',
    '— mette in pausa la sequenza di blocchi per un attimo.': '— pauses the block sequence for a moment.',
    'azzera il timer della pausa': 'reset the break timer',
    '— rimette a zero il conteggio dei minuti; mettilo dentro "Ho fatto la pausa" per far ripartire il promemoria.': '— sets the minute count back to zero; put it inside "I took a break" to restart the reminder.',
    'ora attuale (0-23)': 'current hour (0-23)',
    '— un numero da confrontare col blocco "confronta", es. per sapere se è dopo le 18.': '— a number to compare with the "compare" block, e.g. to know whether it is after 6 pm.',
    'è tra le... e le...': 'is between... and...',
    '— vero se l\'ora attuale è in quella fascia (funziona anche di notte, es. 22-6); si incastra dentro "se... allora...".': '— true if the current hour is in that range (works overnight too, e.g. 22-6); snaps inside "if... then...".',
    'è mattina/pomeriggio/sera/notte': 'is morning/afternoon/evening/night',
    '— come sopra, ma con fasce già pronte; si incastra dentro "se... allora...".': '— like the above, but with ready-made ranges; snaps inside "if... then...".',
    'pause fatte finora': 'breaks taken so far',
    '— un numero da confrontare col blocco "confronta", per contare quante pause hai fatto in tutto.': '— a number to compare with the "compare" block, to count how many breaks you have taken in total.',
    'questa è la pausa lunga (ogni N pause)': 'this is the long break (every N breaks)',
    '— vero ogni N pause: tecnica del pomodoro, un "se... allora..." dentro "Ho fatto la pausa" per farla durare di più ogni tanto.': '— true every N breaks: the pomodoro technique, an "if... then..." inside "I took a break" to make it last longer every so often.',
    'il buddy suggerisce di': 'the buddy suggests to',
    '— un consiglio di salute: bere acqua, stretching, la postura...': '— a health tip: drinking water, stretching, posture...',
    'ripeti N volte': 'repeat N times',
    '— ripete i blocchi al suo interno tante volte di fila.': '— repeats the blocks inside it several times in a row.',
    'se... allora...': 'if... then...',
    '— esegue i blocchi solo se la condizione è vera (con i blocchi di confronto).': '— runs the blocks only if the condition is true (with the compare blocks).',
    'crea una variabile': 'create a variable',
    '— un contenitore con nome per un numero, che puoi leggere, impostare o aumentare.': '— a named container for a number, which you can read, set or increase.',

    // --- modali ---
    'Aspetto del buddy': 'Buddy appearance',
    'Chiudi': 'Close',
    '🖼️ Galleria': '🖼️ Gallery',
    '✏️ Disegna': '✏️ Draw',
    'Disegna il corpo del buddy pixel per pixel: la faccia (occhi e bocca) resta quella scelta dai blocchi, così tutte le espressioni continuano a funzionare sul tuo disegno.': "Draw the buddy's body pixel by pixel: the face (eyes and mouth) stays the one chosen by the blocks, so all the expressions keep working on your drawing.",
    'Disegna il corpo del buddy pixel per pixel: la faccia (occhi e bocca) resta quella scelta dal programma, così tutte le espressioni continuano a funzionare sul tuo disegno.': "Draw the buddy's body pixel by pixel: the face (eyes and mouth) stays the one chosen by the program, so all the expressions keep working on your drawing.",
    '🧽 Gomma': '🧽 Eraser',
    '🗑️ Cancella tutto': '🗑️ Erase everything',
    '✅ Usa questo disegno': '✅ Use this drawing',
    'I tuoi programmi': 'Your programs',
    'Salva il programma a blocchi attuale con un nome per ritrovarlo in futuro, oppure carica o elimina uno di quelli già salvati. Puoi anche esportarlo in un file per portarlo su un altro computer o condividerlo, e importare i file degli altri.': 'Save the current block program under a name to find it again later, or load or delete one you already saved. You can also export it to a file to take it to another computer or share it, and import other people\'s files.',
    'Nome del programma…': 'Program name…',
    '💾 Salva': '💾 Save',
    '📤 Esporta il programma attuale': '📤 Export the current program',
    '📥 Importa da file': '📥 Import from file',
    'Le tue statistiche': 'Your statistics',

    // --- buddy.html ---
    'Il tuo compagno per ricordarti di staccare': 'Your companion to remind you to take a break',
    '✏️ Modifica': '✏️ Edit',
    'Non hai ancora programmato il tuo buddy': "You haven't programmed your buddy yet",
    'Vai su BreakBuddy Studio per costruire il tuo primo programma a blocchi: bastano pochi minuti.': 'Go to BreakBuddy Studio to build your first block program: it only takes a few minutes.',
    'Vai a BreakBuddy Studio': 'Go to BreakBuddy Studio',
    '🔔 Attiva notifiche': '🔔 Enable notifications',
    '🔕 Notifiche bloccate dal browser': '🔕 Notifications blocked by the browser',
    "⬇ Installa l'app": '⬇ Install the app',
    'Una volta installato, il buddy resta a portata di clic anche fuori dal browser e continua a ricordarti le pause programmate in BreakBuddy Studio.': 'Once installed, the buddy stays one click away even outside the browser and keeps reminding you of the breaks you programmed in BreakBuddy Studio.',

    // --- skin ---
    'Foresta': 'Forest',
    'Oceano': 'Ocean',
    'Tramonto': 'Sunset',
    'Mirtillo': 'Blueberry',
    'Ardesia': 'Slate',
    'Oro': 'Gold',

    // --- messaggi del buddy ---
    'Disegna qualcosa prima di salvare! 🖍️': 'Draw something before saving! 🖍️',
    "Bevi un bicchiere d'acqua! 💧": 'Drink a glass of water! 💧',
    "Fai un po' di stretching! 🤸": 'Do a bit of stretching! 🤸',
    "Alzati e cammina un po'! 🚶": 'Stand up and walk around a bit! 🚶',
    "Riposa un po' gli occhi! 👀": 'Rest your eyes for a bit! 👀',
    'Controlla la tua postura! 🧍': 'Check your posture! 🧍',
    'Prenditi cura di te! 🌿': 'Take care of yourself! 🌿',
    "C'è un errore nei blocchi 🛠️": "There's an error in the blocks 🛠️",
    "C'è un errore nel programma 🛠️": "There's an error in the program 🛠️",
    "// (nessun blocco nell'area di lavoro)": '// (no blocks in the workspace)',
    'Sostituire i blocchi attuali con il programma di esempio?': 'Replace the current blocks with the example program?',
    "Svuotare l'area di lavoro? I blocchi attuali andranno persi.": 'Empty the workspace? The current blocks will be lost.',

    // --- programmi salvati ---
    'Non hai ancora salvato nessun programma.': "You haven't saved any programs yet.",
    'Carica': 'Load',
    'Caricare "{name}"? Sostituirà i blocchi attuali (che restano comunque salvati qui finché non li elimini).': 'Load "{name}"? It will replace the current blocks (which stay saved here until you delete them).',
    'Elimina {name}': 'Delete {name}',
    'Esporta {name}': 'Export {name}',
    'Eliminare "{name}"? Non si può annullare.': 'Delete "{name}"? This cannot be undone.',
    'Non sono riuscito a caricare questo programma 😕': "I couldn't load this program 😕",
    'Dai un nome al programma prima di salvarlo! ✍️': 'Give the program a name before saving it! ✍️',
    'Esiste già un programma chiamato "{name}". Sovrascriverlo?': 'A program called "{name}" already exists. Overwrite it?',
    'Non ci sono blocchi da esportare 🧩': 'There are no blocks to export 🧩',
    'Questo file non è un programma di BreakBuddy 😕': "This file isn't a BreakBuddy program 😕",
    'Programma importato: "{name}" ✅': 'Program imported: "{name}" ✅',
    '{name} (importato)': '{name} (imported)',
    'programma': 'program',

    // --- statistiche ---
    '🔥 {n} giorno di fila con almeno una pausa': '🔥 {n} day in a row with at least one break',
    '🔥 {n} giorni di fila con almeno una pausa': '🔥 {n} days in a row with at least one break',
    'Fai una pausa oggi per iniziare una serie! 🌱': 'Take a break today to start a streak! 🌱',
    'Oggi': 'Today',
    'Dom': 'Sun', 'Lun': 'Mon', 'Mar': 'Tue', 'Mer': 'Wed', 'Gio': 'Thu', 'Ven': 'Fri', 'Sab': 'Sat',

    // --- categorie della toolbox ---
    'Eventi': 'Events',
    'Buddy': 'Buddy',
    'Salute': 'Health',
    'Tempo': 'Time',
    'Controllo': 'Control',
    'Variabili': 'Variables',

    // --- blocchi: etichette ---
    'dopo': 'after',
    'minuti senza pausa, avvisa': 'minutes without a break, notify',
    'quando premo “Ho fatto la pausa”': 'when I press “I took a break”',
    '•': '•',
    "quando premo “Ho bevuto un bicchiere d'acqua”": 'when I press “I drank a glass of water”',
    'cambia faccia del buddy in': "change the buddy's face to",
    'aspetta': 'wait',
    'secondi': 'seconds',
    'è tra le': 'is between',
    'e le': 'and',
    'è': 'is',
    'questa è la pausa lunga (ogni': 'this is the long break (every',
    'pause)': 'breaks)',
    'ripeti': 'repeat',
    'volte': 'times',

    // --- blocchi: opzioni a tendina ---
    '🙂 felice': '🙂 happy',
    '😴 stanco': '😴 tired',
    '💤 che dorme': '💤 sleeping',
    '😲 sorpreso': '😲 surprised',
    '😐 neutro': '😐 neutral',
    '🤩 energico': '🤩 energetic',
    '🧐 concentrato': '🧐 focused',
    '🔔 campanella': '🔔 bell',
    '🛎️ ding': '🛎️ ding',
    '⏰ sveglia': '⏰ alarm clock',
    '💧 goccia': '💧 drop',
    '🎉 tada': '🎉 tada',
    '🌅 mattina (6-12)': '🌅 morning (6-12)',
    '☀️ pomeriggio (12-18)': '☀️ afternoon (12-18)',
    '🌇 sera (18-22)': '🌇 evening (18-22)',
    '🌙 notte (22-6)': '🌙 night (22-6)',
    '☀️ giorno': '☀️ day',
    '🌇 tramonto': '🌇 sunset',
    '🌙 notte': '🌙 night',
    "💧 bere un bicchiere d'acqua": '💧 drink a glass of water',
    '🤸 fare un po\' di stretching': '🤸 do a bit of stretching',
    "🚶 alzarti e camminare un po'": '🚶 stand up and walk around a bit',
    "👀 riposare un po' gli occhi": '👀 rest your eyes for a bit',
    '🧍 controllare la postura': '🧍 check your posture',

    // --- blocchi: testi di default ---
    'È ora di una pausa! 🙌': 'Time for a break! 🙌',
    "Bevi un po' d'acqua! 💧": 'Drink some water! 💧',
    'Alzati e stiracchiati! 🤸': 'Get up and stretch! 🤸',
    "Riposa un po' gli occhi 👀": 'Rest your eyes for a bit 👀',
    'Bravo, a dopo! 🌿': 'Well done, see you later! 🌿',

    // --- blocchi: tooltip ---
    'Il codice qui dentro parte una sola volta, quando premi Avvia.': 'The code in here runs only once, when you press Start.',
    "Conta i minuti dall'ultima pausa (o dall'avvio). Al termine avvisa una volta sola e resta in attesa: riparte da zero solo quando premi \"Ho fatto la pausa\".": 'Counts the minutes since the last break (or since start-up). When time is up it notifies once and waits: it restarts from zero only when you press "I took a break".',
    "Parte quando l'utente clicca il pulsante 'Ho fatto la pausa'.": "Runs when the user clicks the 'I took a break' button.",
    'Mostra un messaggio nel fumetto sopra al buddy.': 'Shows a message in the speech bubble above the buddy.',
    "Cambia l'espressione del buddy.": "Changes the buddy's expression.",
    'Fa sentire un piccolo avviso sonoro.': 'Plays a small alert sound.',
    'Mette in pausa la sequenza per qualche secondo (tempo reale).': 'Pauses the sequence for a few seconds (real time).',
    'Rimette a zero il conteggio di tutti i blocchi "dopo N minuti senza pausa": il conto alla rovescia riparte da qui. Mettilo dentro "quando premo \'Ho fatto la pausa\'" per far ripartire il promemoria dopo la pausa.': 'Sets the count of all "after N minutes without a break" blocks back to zero: the countdown restarts from here. Put it inside "when I press \'I took a break\'" to restart the reminder after the break.',
    "L'ora del momento in cui viene letta (0-23), per confrontarla con un numero nel blocco \"confronta\".": 'The hour at the moment it is read (0-23), to compare with a number in the "compare" block.',
    "Vero se l'ora attuale è tra le due ore indicate. Funziona anche di notte: es. tra le 22 e le 6.": 'True if the current hour is between the two given hours. Works overnight too: e.g. between 22 and 6.',
    "Vero se l'ora attuale rientra in questa fascia della giornata.": 'True if the current hour falls within this part of the day.',
    'Quante volte hai premuto "Ho fatto la pausa" in totale: da confrontare col blocco "confronta" o da usare nel blocco "pausa lunga".': 'How many times you pressed "I took a break" in total: to compare with the "compare" block or to use in the "long break" block.',
    'Vero quando il numero di pause fatte finora è multiplo di N: mettilo in un "se... allora..." dentro "quando premo \'Ho fatto la pausa\'" per far durare di più una pausa ogni tanto, come nella tecnica del pomodoro.': 'True when the number of breaks taken so far is a multiple of N: put it in an "if... then..." inside "when I press \'I took a break\'" to make a break last longer every so often, as in the pomodoro technique.',
    "Parte quando l'utente clicca il pulsante dell'acqua.": 'Runs when the user clicks the water button.',
    'Ogni volta sceglie a caso una delle tre frasi.': 'Each time it picks one of the three phrases at random.',
    'Mostra nel fumetto il valore di una variabile o di un calcolo.': 'Shows the value of a variable or a calculation in the speech bubble.',
    'Cambia lo sfondo dietro al buddy.': 'Changes the background behind the buddy.',
    "Un consiglio di salute pronto all'uso.": 'A ready-to-use health tip.',
    'Ripete i blocchi al suo interno tante volte di fila.': 'Repeats the blocks inside it several times in a row.'
  };

  function t(it, params) {
    var s = it;
    if (lang === 'en') {
      var tr = EN[it];
      if (tr === undefined) missing.push(it);
      else s = tr;
    }
    if (params) {
      s = s.replace(/\{(\w+)\}/g, function (m, k) { return params[k] !== undefined ? params[k] : m; });
    }
    return s;
  }

  function translateText(raw) {
    var trimmed = raw.trim();
    if (!trimmed) return raw;
    var tr = EN[trimmed];
    if (tr === undefined) {
      if (/[A-Za-zÀ-ÿ]{3,}/.test(trimmed)) missing.push(trimmed);
      return raw;
    }
    return raw.replace(trimmed, function () { return tr; });
  }

  // Traduce il DOM già presente (testi, title, placeholder, aria-label).
  // In italiano non fa nulla: il markup è già in italiano.
  function applyDom(root) {
    document.documentElement.lang = lang;
    if (lang === 'it') return;
    root = root || document.body;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var tag = n.parentNode && n.parentNode.nodeName;
        return (tag === 'SCRIPT' || tag === 'STYLE') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) { n.nodeValue = translateText(n.nodeValue); });
    Array.prototype.forEach.call(root.querySelectorAll('[title],[placeholder],[aria-label]'), function (el) {
      ['title', 'placeholder', 'aria-label'].forEach(function (a) {
        if (el.hasAttribute(a)) el.setAttribute(a, translateText(el.getAttribute(a)));
      });
    });
  }

  function setLang(next) {
    if (LANGS.indexOf(next) < 0 || next === lang) return;
    try { localStorage.setItem(STORAGE_LANG, next); } catch (e) {}
    location.reload();
  }

  function wireLangSelect() {
    var sel = document.getElementById('langSelect');
    if (!sel) return;
    sel.value = lang;
    sel.addEventListener('change', function () { setLang(sel.value); });
  }

  // Blockly carica i propri testi (msg/it.js, msg/en.js) tutti nello stesso
  // oggetto Blockly.Msg: ne teniamo una copia per lingua e applichiamo quella scelta.
  var blocklyMsgs = {};
  function stashBlocklyMsg(l) { blocklyMsgs[l] = Object.assign({}, Blockly.Msg); }
  function applyBlocklyMsg() { Object.assign(Blockly.Msg, blocklyMsgs[lang] || {}); }

  window.I18N = {
    stashBlocklyMsg: stashBlocklyMsg,
    applyBlocklyMsg: applyBlocklyMsg,
    lang: lang,
    locale: lang === 'en' ? 'en-GB' : 'it-IT',
    t: t,
    applyDom: applyDom,
    setLang: setLang,
    missing: missing
  };

  if (document.body) { wireLangSelect(); applyDom(); }
})();
