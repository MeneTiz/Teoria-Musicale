# Fase, polarità, ritardo e battimenti

## Tre operazioni diverse
La **fase** indica la posizione nel ciclo di una componente periodica. La **polarità** moltiplica il segnale per −1. Il **ritardo** sposta nel tempo l’intero segnale. Per una sola sinusoide, invertire la polarità equivale a spostare la fase di 180°; per un segnale complesso non equivale a un unico ritardo che inverta tutte le frequenze.

Lo sfasamento introdotto da un ritardo τ è −360° × f × τ, modulo 360°. Con 1 ms, 500 Hz subisce mezzo ciclo e 1000 Hz un ciclo completo. Ecco perché un ritardo produce effetti diversi sulle diverse componenti.

## Sommare due sinusoidi uguali
**Disegno:** creste allineate si sommano, creste contro valli si sottraggono. **Formula:** con ampiezza individuale a e differenza φ, l’ampiezza risultante è 2a × |cos(φ/2)|. **Ascolto:** a 0° il segnale raddoppia in ampiezza, circa +6,02 dB; a 180° si annulla idealmente. Occorrono uguale frequenza, uguale ampiezza e somma nello stesso canale.

La cancellazione di due segnali elettrici identici è un modello esatto. Due diffusori in una stanza aggiungono percorsi e riflessioni: l’effetto varia nello spazio. Due suoni non correlati non si sommano normalmente di +6 dB; raddoppiare la potenza media porta a circa +3 dB.

## Battimenti e filtro a pettine
Due sinusoidi vicine, come 220 e 222 Hz, producono pulsazioni d’ampiezza a circa 2 Hz. La fase relativa continua a cambiare: non rimangono ferme a un offset. Il **comb filtering** nasce sommando una copia ritardata e una diretta: per copie uguali e stessa polarità, i primi minimi sono a (2k+1)/(2τ). Con 1 ms trovi 500, 1500, 2500 Hz.

## Prova guidata
Usa frequenze identiche e passa da 0° a 180°. Il laboratorio mantiene fisso il guadagno delle singole componenti, così senti la somma. Attiva poi un piccolo detune e ascolta i battimenti; l’offset iniziale non descrive più una relazione statica. Il grafico segnala questa evoluzione mostrando una finestra iniziale dell’onda.

<!-- LAB:phase | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Un ritardo di 1 ms produce lo stesso angolo di fase a ogni frequenza?

1. Sì
2. No
3. Solo in mono

<details><summary>Soluzione ragionata</summary>

La fase dipende da frequenza × ritardo: lo stesso tempo corrisponde a porzioni diverse di ciclo.

</details>
