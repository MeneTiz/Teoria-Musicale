# Fonti e criteri editoriali

Verifica editoriale: 23 settembre 2026. Testi, esempi musicali, grafici e moduli sonori della guida sono originali; non sono riproduzioni dei testi elencati. Le fonti sono riferimenti per nomenclatura, modelli e approfondimenti. La guida è un percorso introduttivo e intermedio per chi produce musica, con introduzioni ai temi avanzati; non sostituisce un corso completo di armonia, acustica o DSP.

## Teoria musicale

- [Music Theory for the 21st-Century Classroom — University of Puget Sound](https://musictheory.pugetsound.edu/mt21c/MusicTheory.html): manuale accademico con esercizi, notazione, accordi, forma e condotta delle voci.
- [Introduction to Intervals](https://musictheory.pugetsound.edu/mt21c/IntervalsIntroduction.html): riferimento per la distinzione fra numero e qualità dell’intervallo.
- [Open Music Theory — Scales and scale degrees](https://openmusictheory.github.io/docs/fundamentals/scales/): scala maggiore, minore e gradi.
- [Secondary Dominant Chords](https://musictheory.pugetsound.edu/mt21c/SecondaryDominants.html): dominanti applicate e tonicizzazione.
- [Voice Leading Secondary Chords](https://musictheory.pugetsound.edu/mt21c/VoiceLeadingSecondaryChords.html): risoluzione delle alterazioni nel contesto tonale.

## Suono, sintesi e percezione

- [The Scientist and Engineer’s Guide to Digital Signal Processing — Steven W. Smith](https://www.dspguide.com/pdfbook.htm): testo dell’autore, disponibile per capitoli.
- [The Sampling Theorem](https://www.dspguide.com/ch3/2.htm): condizioni del campionamento e aliasing.
- [Harmonics](https://www.dspguide.com/ch11/5.htm): componenti armoniche e ripiegamento spettrale.
- [Single Pole Recursive Filters](https://www.dspguide.com/ch19/2.htm): introduzione ai filtri ricorsivi; non è la specifica del biquad impiegato nei laboratori.
- [Human Hearing](https://www.dspguide.com/ch22/1.htm): introduzione alla percezione uditiva.
- [Ableton Live 12 — Live Instrument Reference](https://www.ableton.com/en/live-manual/12/live-instrument-reference/): contesto degli strumenti e dei parametri di sintesi. I laboratori non emulano gli strumenti Ableton.
- [Web Audio API — W3C](https://www.w3.org/TR/webaudio/): riferimento tecnico dell’API browser. Il filtro usa BiquadFilterNode e getFrequencyResponse; le altre sorgenti sono buffer sintetizzati localmente.

## Ritmo e misurazione

- [The Euclidean Algorithm Generates Traditional Musical Rhythms — Godfried Toussaint](https://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf): distribuzione uniforme degli eventi e confronti fra pattern, tenendo conto delle rotazioni.
- [ITU-R BS.1770](https://www.itu.int/rec/R-REC-BS.1770): specifica degli algoritmi di loudness e true peak. Il laboratorio di dinamica **non è un misuratore LUFS né true-peak**.

## Scelte che evitano equivoci

- Le note seguono il sistema scientifico: MIDI 60 = C4 (Do4), MIDI 69 = A4 (La4) = 440 Hz. Le etichette d’ottava nelle DAW possono differire.
- Le scale e le qualità degli accordi usano spelling diatonico nei relativi moduli. I grafici MIDI delle progressioni usano nomi cromatici con diesis; dove è rilevante la spiegazione distingue il nome armonico corretto.
- Emozione e consonanza non sono trattate come proprietà universali di una scala o di un intervallo.
- I grafici temporali sono modelli calcolati, non oscilloscopi dell’uscita fisica. Il grafico del filtro è la risposta del filtro digitale usato.
- Sintesi additiva: normalizzazione conservativa rispetto alla somma delle ampiezze, non pareggiamento percettivo. Il modulo di fondamentale mancante mantiene invariate le armoniche superiori.
- Il livello generale è applicato all’uscita e al WAV esportato. Gli esempi che superano il margine previsto sono contenuti automaticamente: confronti con makeup elevato non costituiscono misure di loudness.
- I ritmi non girano all’infinito; gli esempi hanno durata finita. Esc, cambio capitolo e pagina nascosta fermano l’audio.
- Gli inviluppi usano rampe lineari; il compressore è un modello statico per evento; lo spazio usa una copia ritardata. Questi limiti sono indicati anche nei capitoli.

## Riproducibilità

`capitoli/*.md` è la sorgente editoriale usata dal builder. `indice.json` contiene ordine, metadati e domande. `laboratori.js`, `app.js` e `stile.css` costruiscono la guida. `crea-capitoli.cjs` conserva la stesura iniziale: rieseguirlo sovrascrive i capitoli, quindi non usarlo per ricompilare dopo modifiche editoriali. Per ricompilare usare `node build.cjs`; il percorso di marked nel builder corrisponde al runtime locale installato. Il file HTML finale è autonomo e non richiede Node.
