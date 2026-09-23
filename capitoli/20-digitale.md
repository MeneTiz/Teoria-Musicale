# Audio digitale, campionamento e aliasing

## Due risoluzioni diverse
La frequenza di campionamento descrive quante misure al secondo vengono prese; la profondità in bit riguarda la quantizzazione dei valori di ampiezza. Aumentare i bit non aumenta direttamente la massima frequenza rappresentabile. Aumentare il sample rate non aggiunge da solo dettaglio musicale a un file già limitato in banda.

Il teorema del campionamento richiede un segnale limitato in banda sotto metà del sample rate. A 48 kHz, la frequenza di Nyquist è 24 kHz; nei sistemi reali serve spazio per la transizione dei filtri. I campioni non significano che l’uscita analogica corretta debba essere una scala a gradini: la ricostruzione usa un filtro.

## Aliasing in tre modi
**Ruota filmata:** un movimento troppo veloce può apparire più lento o invertito. **Frequenze:** componenti non rappresentabili si ripiegano nella banda disponibile. **Formula pratica:** per una sinusoide trovi una frequenza equivalente f_alias = |((f + fₛ/2) modulo fₛ) − fₛ/2|. Con fₛ = 8000 Hz, 6000 Hz appare a 2000 Hz nei campioni.

Un filtro dopo il ripiegamento non sa più distinguere la componente falsa da una vera alla stessa frequenza. Per questo si filtra prima della conversione e si usano oscillatori limitati in banda. Distorsione e modulazione possono creare nuove componenti sopra Nyquist durante l’elaborazione: l’oversampling alza temporaneamente la frequenza interna e filtra prima di ridiscendere.

## Quantizzazione, dither e clipping
La quantizzazione arrotonda i valori. Il dither è un piccolo rumore deliberato che rende l’errore meno correlato al segnale quando si riduce la profondità in bit; non recupera dettaglio perso. La regola circa 6,02N + 1,76 dB per N bit riguarda il rapporto segnale/rumore ideale di una sinusoide a piena scala con precise ipotesi, non il range dinamico di ogni registrazione.

In PCM intero 0 dBFS è il massimo riferimento numerico. Pipeline in virgola mobile possono rappresentare valori oltre 0 dBFS internamente, ma conversioni, plugin e uscita possono comunque saturare. Conservare margine facilita il lavoro.

## Prova guidata
Il laboratorio simula un sample rate basso con punti di campionamento. Ascolta separatamente la sinusoide originale e quella equivalente: non sta cambiando il sample rate della scheda audio. Osserva che i valori campionati possono coincidere pur descrivendo oscillazioni diverse fra un campione e l’altro.

<!-- LAB:alias | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Perché l’EQ dopo il campionamento non elimina selettivamente tutto l’aliasing?

1. Perché le componenti false sono già ripiegate su frequenze valide
2. Perché i bit sono sempre insufficienti
3. Perché Nyquist dipende dal volume

<details><summary>Soluzione ragionata</summary>

Dopo il ripiegamento una frequenza alias può essere indistinguibile da una componente reale nella stessa banda.

</details>
