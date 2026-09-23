# AM, FM e modulazione del suono

## Sorgente, destinazione, profondità
Modulare significa far variare un parametro nel tempo. Una sorgente di controllo, per esempio un LFO o un inviluppo, muove una destinazione come ampiezza, frequenza o cutoff. La velocità e la profondità hanno ruoli distinti: quanto spesso cambia e quanto cambia.

**AM:** varia l’ampiezza. A bassa frequenza senti tremolo; a frequenza audio compaiono bande laterali. **FM:** varia la frequenza istantanea. Lenta e poco profonda può produrre vibrato; veloce modifica il timbro. Modulare l’ampiezza non è vibrato; modulare l’altezza non è tremolo.

## AM e ring modulation
Con due sinusoidi, l’AM convenzionale può essere scritta [1 + m sin(2πfₘt)] sin(2πf꜀t). Per m fra 0 e 1 restano portante e bande a f꜀−fₘ e f꜀+fₘ. La ring modulation moltiplica invece due segnali bipolari senza il termine costante: idealmente sopprime la portante e conserva somma e differenza. Frequenze negative nel calcolo si ripiegano come componenti a frequenza positiva con la fase appropriata.

## FM in tre letture
**Gesto:** un oscillatore spinge avanti e indietro la frequenza di un altro. **Formula:** sin(2πf꜀t + β sin(2πfₘt)), dove β = Δf/fₘ per questa modulazione sinusoidale. **Spettro:** bande laterali a f꜀ ± n fₘ, con ampiezze che dipendono dall’indice β; non aumentano tutte in modo monotono.

Con f꜀ = 220 Hz e fₘ = 110 Hz, le componenti appartengono a una griglia di 110 Hz. Rapporti semplici possono produrre spettri armonici; rapporti non interi rispetto alla portante non sono automaticamente tutti disarmonici, perché un rapporto razionale può avere una fondamentale comune più bassa. Rapporti complessi o irrazionali tendono a risultati metallici o inarmonici.

## FM e PM nei sintetizzatori
La modulazione di fase e quella di frequenza sono correlate, ma non identiche per ogni segnale di controllo. Molti strumenti commercialmente chiamati FM usano architetture di modulazione di fase. Interpreta i parametri del singolo dispositivo; un valore di “Amount” non è necessariamente una deviazione in hertz.

## Prova guidata
Seleziona AM a 4 Hz e senti il tremolo; passa a FM e senti il vibrato. Aumenta la frequenza del modulatore e la profondità per entrare nel timbro. Nel modello FM la profondità è espressa come indice; in AM va da 0 a 1. Il disegno è una finestra temporale, non uno spettro misurato.

<!-- LAB:modulation | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Quale modulazione lenta produce normalmente tremolo?

1. Ampiezza
2. Frequenza
3. Panorama soltanto

<details><summary>Soluzione ragionata</summary>

Il tremolo è una variazione periodica di ampiezza; il vibrato riguarda l’altezza.

</details>
