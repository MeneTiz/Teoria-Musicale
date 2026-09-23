# Leggere musica e piano roll

## Due rappresentazioni compatibili
Il pentagramma mette il tempo da sinistra a destra e l’altezza dal basso verso l’alto. Le linee e gli spazi si alternano; la chiave assegna i nomi alle posizioni. In chiave di violino le linee, dal basso, sono E (Mi), G (Sol), B (Si), D (Re), F (Fa); gli spazi F (Fa), A (La), C (Do), E (Mi). I tagli addizionali proseguono il sistema: C4 (Do4) si trova sul primo taglio sotto il pentagramma in chiave di violino.

In chiave di basso le linee sono G (Sol), B (Si), D (Re), F (Fa), A (La). C4 (Do4) si trova sul primo taglio sopra. Il piano roll usa invece una riga per ogni semitono: una distanza verticale identica rappresenta sempre lo stesso numero di semitoni, mentre sul pentagramma la distanza grafica conta lettere, non semitoni.

## Che cosa descrive una nota MIDI
La posizione orizzontale è l’inizio; la lunghezza è la durata del gate; la riga è il numero di nota; la velocity è un dato espressivo. Velocity non è necessariamente volume: lo strumento può usarla per filtro, attacco o scelta del campione. Il gate non coincide con la durata udibile se il suono ha una coda di release.

## Armatura e alterazioni locali
L’armatura all’inizio del rigo definisce le alterazioni di base. Nella notazione moderna un’alterazione occasionale vale normalmente per la stessa nota e ottava fino alla stanghetta della battuta, con convenzioni per legature e richiami di cortesia. Nel piano roll non vedi automaticamente questo significato grammaticale: due note enarmoniche possono apparire identiche.

## Leggere una sigla senza indovinare
**Cmaj7 (Do maggiore settima maggiore)** contiene fondamentale, terza maggiore, quinta giusta e settima maggiore. **C7 (Do settima di dominante)** usa invece una settima minore. **C/E (Do maggiore con Mi al basso)** specifica il basso. La barra non indica una divisione matematica.

## Prova guidata
Suona C4 (Do4), E4 (Mi4), G4 (Sol4) prima in sequenza, poi insieme nel laboratorio degli accordi. Nel piano roll sono tre righe; nel pentagramma una pila di terze. Il contenuto è lo stesso, cambia il modo di leggerlo. Usa il confronto fra pentagramma e piano roll qui sotto per fissare posizioni e nomi.

<!-- LAB:notation | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

La lunghezza di una nota MIDI determina sempre tutta la coda sonora?

1. Sì
2. No, il release può proseguire dopo il gate
3. Solo se la velocity è alta

<details><summary>Soluzione ragionata</summary>

Il note-off avvia la fase di rilascio. La durata del suono dipende anche dall’inviluppo.

</details>
