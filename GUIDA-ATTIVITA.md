# Guida attività: costruisci il tuo Pause Buddy

**Durata:** circa 1 ora
**Strumento:** [Pause Buddy](https://lucanenni.github.io/pause-buddy/) — editor a blocchi nel browser, nessuna installazione richiesta
**A chi è rivolta:** chi non ha mai programmato (o lo ha fatto pochissimo) e vuole scoprire i concetti base del coding costruendo qualcosa di utile

---

## Obiettivo

Alla fine dell'ora avrai un "buddy" digitale che ricorda di fare una pausa dopo un certo numero di minuti e che smette di avvisare solo quando confermi di aver fatto la pausa — e avrai imparato le idee fondamentali della programmazione: **eventi**, **sequenze di istruzioni**, **variabili** e **condizioni**.

---

## Parte 1 — Cos'è il coding, in 10 minuti

Programmare significa dare istruzioni precise a un computer, una dopo l'altra, perché le esegua da solo. Qui lo facciamo **a blocchi**: invece di scrivere testo, incastri dei pezzi colorati come un puzzle — lo stesso approccio di strumenti come Scratch o MakeCode Arcade. I blocchi eliminano gli errori di sintassi (non puoi "scrivere male" un blocco) e ti lasciano concentrato sulla logica.

Quattro idee bastano per capire quasi tutti i programmi:

1. **Evento** — "quando succede X, fai Y". È il punto di partenza di ogni blocco arancione in Pause Buddy: *quando il buddy si accende*, *dopo N minuti senza pausa*, *quando premo un pulsante*.
2. **Sequenza** — le istruzioni dentro un evento si eseguono nell'ordine in cui le incastri, una dopo l'altra, dall'alto verso il basso.
3. **Variabile** — un contenitore con un nome che tiene un numero (o un testo) e che puoi leggere, cambiare, far aumentare.
4. **Condizione** — "se succede questo, allora fai quest'altro" — permette al programma di comportarsi in modo diverso a seconda della situazione.

Apri [lucanenni.github.io/pause-buddy](https://lucanenni.github.io/pause-buddy/): a sinistra trovi i blocchi già incastrati di un programma di esempio, a destra il buddy che li esegue. Apri la **"Legenda dei blocchi"** sotto l'area di lavoro: spiega in una riga cosa fa ciascun blocco disponibile, tienila a portata di mano durante l'attività.

---

## Parte 2 — Esplora il programma di esempio (10 minuti)

Il programma che trovi già pronto fa tre cose:

- **`quando il buddy si accende`** → il buddy mostra la faccia felice. Parte una sola volta, all'avvio.
- **`dopo 20 minuti senza pausa, avvisa`** → il buddy dice "È ora di una pausa!", cambia faccia in "stanco" e suona una campanella. Da qui il conteggio si **congela**: non avvisa una seconda volta finché non gli dici che hai fatto la pausa.
- **`quando premo "Ho fatto la pausa"`** → il blocco **`azzera il timer della pausa`** rimette il conteggio a zero, poi il buddy ringrazia e torna felice.

Prova a premere **▶ Avvia**, poi cambia la velocità di simulazione in alto (usa "Test rapido" per non aspettare 20 minuti veri) e osserva: il buddy avvisa una volta sola e resta "stanco" finché non clicchi **🙌 Ho fatto la pausa**. Apri anche **"Vedi il codice generato"**: è il codice vero che i tuoi blocchi producono — non serve saperlo scrivere, ma è utile vedere che dietro ogni blocco c'è un'istruzione reale.

---

## Parte 3 — Costruisci il tuo buddy (25 minuti)

Non limitarti a guardare: smonta e ricomponi. Alcune idee, dalla più semplice alla più impegnativa:

1. **Cambia i tempi e i messaggi.** Modifica il numero di minuti nel blocco "dopo N minuti", cambia il testo che dice il buddy, prova un'altra faccia o un altro suono.
2. **Aggiungi varietà con `il buddy dice a caso una tra`.** Sostituisce il messaggio fisso con tre frasi scelte a caso ogni volta — il tuo primo assaggio di comportamento "non prevedibile".
3. **Aggiungi un consiglio di salute.** Il blocco `il buddy suggerisce di` ha consigli pronti (bere acqua, stretching, camminare, riposare gli occhi, postura): incastralo dopo l'avviso della pausa.
4. **Conta le pause con una variabile.** Nella categoria "Variabili" crea una variabile (es. `pause_fatte`), impostala a 0 in `quando il buddy si accende`, poi usa il blocco che la fa aumentare di 1 dentro `quando premo "Ho fatto la pausa"`. Mostra il suo valore con `il buddy mostra il numero`.
5. **Aggiungi una condizione.** Con `se... allora...` e i blocchi di confronto puoi far dire al buddy qualcosa di speciale quando la variabile raggiunge un certo numero — es. "se pause_fatte = 5, allora il buddy dice 'Sei costante, bravo!'".
6. **Gioca con la scena.** `cambia la scena in` (giorno / tramonto / notte) e il blocco `ripeti N volte` per far "lampeggiare" il buddy con più cambi di faccia in sequenza veloce.

Non c'è una soluzione giusta: l'obiettivo è provare, premere Avvia, vedere cosa succede, correggere. Se un blocco produce un errore, il buddy te lo segnala e la sezione "Vedi il codice generato" ti aiuta a capire cosa è stato effettivamente eseguito.

---

## Parte 4 — Rifletti e condividi (10 minuti)

Guarda ancora una volta il codice generato accanto ai tuoi blocchi e prova a rispondere:

- Quali eventi hai usato? Cosa succede *dentro* ciascuno?
- Dove hai usato una variabile? Perché non bastava un numero fisso?
- Se dovessi spiegare il tuo programma a qualcuno che non l'ha mai visto, in che ordine gli racconteresti cosa fa?

Se siete in gruppo, mostrate a turno il proprio buddy agli altri: è il modo più veloce per scoprire soluzioni a cui non avevate pensato.

---

## Lavorare in autonomia dopo l'attività

Una volta finita l'ora, ecco come continuare da soli:

- **Riparti sempre dal pulsante "↺ Blocchi di esempio"** se vuoi tornare al programma base e ricominciare senza timori — non puoi rompere nulla in modo permanente.
- **Cambia una cosa alla volta.** Quando qualcosa non funziona come vuoi, è più facile capire perché se hai modificato un solo blocco dall'ultima prova riuscita.
- **Usa "Vedi il codice generato" come specchio.** Se il comportamento non corrisponde a quello che ti aspetti, il codice ti dice esattamente cosa è stato eseguito — spesso il problema è un blocco incastrato nel posto sbagliato, non un'idea sbagliata.
- **Leggi la Legenda dei blocchi ogni volta che ne aggiungi uno nuovo che non conosci**: è pensata apposta per essere consultata al volo, senza uscire dall'attività.
- **Fatti domande "cosa succede se..."**: cosa succede se metto due blocchi "dopo N minuti" con soglie diverse? Cosa succede se la variabile diventa negativa? Sperimentare rotture controllate è uno dei modi migliori per imparare come funziona davvero un programma.
- **Installa il buddy come app.** Dal browser trovi il pulsante **⬇ Installa l'app**: così il tuo Pause Buddy resta a portata di clic sul desktop, come un programma vero, e continua a promemoriarti le pause anche fuori da questa attività.
- **Quando ti senti pronto per andare oltre i blocchi disponibili**, guarda il codice generato come punto di partenza: è JavaScript vero, e sono le stesse idee (eventi, variabili, condizioni) che ritroverai in qualsiasi linguaggio di programmazione "testuale" il giorno in cui vorrai provarne uno.

Buon coding — e buona pausa. 🙌
