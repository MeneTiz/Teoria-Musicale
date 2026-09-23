# Architetture di sintesi: scegliere un modello

## Il modello guida il gesto
Un’architettura descrive come viene generato e trasformato il segnale. Conoscere il percorso ti evita di cercare lo stesso controllo in strumenti concettualmente diversi. La qualità non cresce automaticamente con il numero di oscillatori o con la complessità del metodo.

| Architettura | Idea centrale | Controllo espressivo |
|---|---|---|
| Sottrattiva | Sorgente ricca, poi filtrata | Cutoff, risonanza, inviluppo |
| Additiva | Somma di parziali | Ampiezza e andamento di ciascuna |
| FM / PM | Oscillatori che modulano altri oscillatori | Rapporti, indice, algoritmo |
| Wavetable | Lettura e scansione di forme memorizzate | Posizione e interpolazione |
| Granulare | Frammenti brevi sovrapposti | Durata, densità, posizione, pitch |
| Modeling fisico | Eccitazione di un modello risonante | Materiale, geometria, smorzamento |
| Campionamento | Riproduzione di audio registrato | Start, loop, trasposizione |

## Tre confronti concreti
Per un basso semplice, una sorgente armonicamente ricca con filtro e inviluppo può bastare. Per un suono di campana, parziali inarmoniche e decadimenti diversi sono utili: additiva, FM o modelli risonanti sono percorsi plausibili. Per una texture di voce che si scompone, la granulare permette di separare in parte durata, posizione e intonazione.

Queste sono scelte operative, non esclusive. Puoi creare una campana con un campione o una texture con sottrattiva. La domanda è quale architettura espone i parametri che vuoi controllare.

## Wavetable, unison e granularità
Scansionare una wavetable cambia il profilo del ciclo e lo spettro. Non equivale necessariamente a riprodurre una registrazione dall’inizio alla fine. Unison somma più voci, spesso con detune e stereo: aumenta densità ma può cambiare fase, livello e leggibilità. Nella granulare, grani troppo distanziati diventano eventi riconoscibili; più sovrapposizione può creare una trama continua. Le finestre dei grani riducono discontinuità ai bordi.

## Feedback e stabilità
Il feedback rimanda parte del segnale a uno stadio precedente; può arricchire il timbro o produrre instabilità secondo guadagno, fase e struttura. Non è semplicemente “più armoniche”. Molte architetture avanzate combinano più metodi; conviene ricostruire il percorso a blocchi prima di usare tutti i controlli.

## Prova guidata
Il laboratorio confronta tre modelli realmente implementati: sottrattiva, additiva e FM, alla stessa frequenza di base. Una manopola cambia un parametro diverso, esplicitato sotto il controllo. Granulare e modeling fisico sono spiegati qui, ma non simulati da questo modulo. Per l’esplorazione specifica di Wavetable usa la guida precedente.

<!-- LAB:synthesis | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Quale scelta rende più diretto controllare singole parziali?

1. Sintesi additiva
2. Un EQ sul master necessariamente
3. Qualsiasi preset senza modifiche

<details><summary>Soluzione ragionata</summary>

L’additiva espone direttamente le componenti da sommare; altre architetture possono ottenere risultati simili con gesti diversi.

</details>
