# Verifica della guida

Data: 23 settembre 2026. Browser di test: Microsoft Edge, avvio headless locale del file HTML, senza server. Dimensioni esaminate: desktop 1440×1100 e 1280×1000; mobile 390×844.

## Contenuti e coerenza

- 27 capitoli Markdown presenti e incorporati nella guida; ogni capitolo ha esercizio e verifica con spiegazione.
- Tutti i 17 temi iniziali sono mappati in `00-INDICE.md`.
- Convenzione MIDI/frequenza/ottava, intervalli, scale, accordi e formule ricontrollati.
- Distinti tonica, fondamentale dell’accordo, fondamentale acustica e basso; tonalità relative/parallele; fase/polarità/ritardo; armoniche/parziali/sovratoni; RMS/peak/LUFS.
- Limiti dei laboratori riportati accanto agli esempi. Nessuna pretesa di simulare l’intero comportamento di Ableton, di una stanza o di un misuratore di loudness.
- Corretto l’adattamento del Q lineare al parametro in dB usato da Web Audio per passa-basso e passa-alto.

## Verifica automatica

- Caricamento e grafici verificati su tutti i 27 capitoli, senza eccezioni JavaScript.
- Campioni audio generati e controllati nei 26 capitoli con ascolto: valori finiti, durata valida e picco contenuto.
- 204 varianti dei controlli, incluse opzioni e valori estremi: grafici e campioni senza NaN, Infinity o errori rilevati.
- 12 controlli matematici superati: riferimento a 440 Hz, ottava, formule di scale e accordi, spelling, distribuzioni euclidee, aliasing, compressione, ADSR e cancellazione di fase.
- Tutte le distribuzioni euclidee con n da 3 a 24 e k da 0 a n controllate per numero di colpi e uniformità dei gap.
- Risposta del passa-basso a cutoff con Q = 1/√2: −3,0103 dB, come atteso.
- Slider, selezioni, preset ADSR, avvio e stop audio con Esc, quiz, ricerca e persistenza degli appunti verificati.
- Esportazione WAV verificata: contenitore RIFF/WAVE PCM stereo, 44.100 Hz, lunghezza del blocco dati coerente.
- Menu mobile e chiusura dopo navigazione verificati; nessun overflow orizzontale dell’intera pagina. I grafici ampi scorrono nel proprio riquadro.

## Verifica visiva e limiti

Le schermate desktop, pentagramma, laboratorio ADSR e mobile sono state renderizzate e ispezionate. Le etichette dei grafici su mobile mantengono una dimensione leggibile tramite scorrimento locale.

Questi controlli verificano struttura, formule, sintesi numerica e funzionamento nel browser testato. Non sostituiscono un ascolto umano sull’impianto dell’utente e non garantiscono compatibilità identica su ogni browser o dispositivo. Il file viene consegnato come guida locale, non come sito pubblicato.

Dettagli riproducibili: `verifica.cjs`, `verifica-varianti.cjs`, `verifica-risultati.json`, `verifica-varianti.json`. Le schermate e il WAV con prefisso `verifica-` sono artefatti di controllo, non necessari per aprire la guida.
