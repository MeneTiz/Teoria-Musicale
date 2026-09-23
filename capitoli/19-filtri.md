# Filtri, risonanza e spettro

## Selezionare invece di riscrivere
Un filtro lineare modifica ampiezza e fase delle componenti già presenti. Un passa-basso attenua le alte frequenze, un passa-alto le basse, un passa-banda seleziona una regione, un notch ne attenua una. Un filtro ideale con taglio verticale è un modello, non il comportamento ordinario di un dispositivo reale.

Il cutoff è una frequenza di riferimento definita dal progetto. In alcuni filtri coincide con −3 dB, ma non è una legge universale, soprattutto con risonanza. La pendenza asintotica si esprime in dB per ottava: ogni polo contribuisce tipicamente circa 6 dB/ottava lontano dalla transizione. Due poli danno circa 12, quattro circa 24. Vicino al cutoff la curva non è una retta.

## Risonanza in tre modi
**Grafico:** un rilievo vicino alla frequenza caratteristica. **Tempo:** una tendenza a risuonare o prolungare una risposta oscillatoria. **Ascolto:** una regione spettrale diventa prominente. Il parametro Q è legato alla selettività, ma la mappatura di “Resonance” dipende dal sintetizzatore. Valori elevati possono aumentare il livello; alcuni circuiti possono auto-oscillare.

## Armoniche e cutoff
Una sega a 110 Hz ha componenti a 110, 220, 330 Hz e oltre. Abbassare un passa-basso riduce progressivamente quelle alte; non sposta automaticamente la fondamentale. Quando il contenuto alto diminuisce, il suono può sembrare più scuro anche mantenendo la stessa altezza. Il key tracking fa salire il cutoff con le note per conservare una relazione timbrica più coerente lungo la tastiera.

## Lineare e non lineare
Un filtro lineare tempo-invariante non crea nuove frequenze da una sinusoide stazionaria. Saturazione, drive e altri comportamenti non lineari possono invece generare armoniche o intermodulazione. Un filtro modulato nel tempo può produrre bande laterali. Dire “il filtro toglie e basta” è dunque corretto soltanto per un modello specifico.

## Prova guidata
Confronta passa-basso, passa-alto, passa-banda e notch sulla stessa sega. Cambia cutoff e Q separatamente. La curva visualizzata viene calcolata con la risposta del biquad Web Audio usato nell’ascolto; non è il modello analogico di Wavetable. La scala orizzontale è logaritmica: ogni ottava occupa lo stesso spazio. La verticale è in dB, con riferimento a guadagno unitario.

<!-- LAB:filter | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Un filtro lineare statico genera armoniche nuove da una sinusoide?

1. Sì, sempre
2. No, cambia ampiezza e fase
3. Solo se è passa-alto

<details><summary>Soluzione ragionata</summary>

Le nuove componenti richiedono non linearità o variazione nel tempo; il modello lineare statico non le genera.

</details>
