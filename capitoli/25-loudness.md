# Dinamica, decibel e loudness

## Rapporti prima dei numeri
Un decibel esprime un rapporto logaritmico. Per ampiezze confrontabili: dB = 20 log₁₀(A₂/A₁). Per potenze: dB = 10 log₁₀(P₂/P₁). Raddoppiare l’ampiezza significa circa +6,02 dB; raddoppiare la potenza circa +3,01 dB. “Il doppio più forte” è una sensazione e non segue automaticamente nessuna delle due frasi.

## Quattro misure da non confondere
**Sample peak:** massimo valore dei campioni. **True peak:** stima del massimo del segnale ricostruito, che può superare i picchi campionati. **RMS:** radice della media dei quadrati, una misura di ampiezza efficace. **LUFS:** misura di loudness basata su pesatura e integrazione secondo una specifica procedura; non è un semplice RMS rinominato.

La raccomandazione ITU-R BS.1770 descrive algoritmi di loudness e true peak. I comuni misuratori distinguono momentary, short-term e integrated; il valore integrato rappresenta un tratto o programma con le regole di gating applicabili. Il target dipende dalla destinazione: un numero di normalizzazione di una piattaforma non è automaticamente un obbligo di mastering.

## Energia e fattore di cresta
Il fattore di cresta è la differenza in dB fra picco e RMS. Per una sinusoide ideale il valore RMS è il picco diviso √2, quindi circa 3,01 dB sotto il picco. Un segnale con transienti isolati può avere un picco alto e media bassa. Due brani con stesso picco possono essere percepiti molto diversamente.

## Compressione in tre letture
**Curva:** sopra la soglia l’uscita cresce meno dell’ingresso. **Esempio:** soglia −18 dB, ingresso −10 dB, ratio 4:1; 8 dB sopra soglia diventano 2, quindi uscita statica −16 dB prima del makeup. **Tempo:** Attack e Release determinano quanto rapidamente il processore raggiunge e abbandona quella riduzione. La curva statica non prevede da sola i transienti.

Knee descrive la gradualità della transizione; makeup rialza il livello; detector e sidechain decidono a che cosa reagisce il processore. Un limiter impone un controllo più rigido dei picchi, ma un vero limite true-peak richiede una progettazione e una misura adatte.

## Prova guidata
Il laboratorio mostra una curva hard-knee senza memoria e applica una compressione didattica all’ampiezza di quattro eventi di prova. Non è un emulatore completo di compressore: non ha detector con Attack/Release e non misura LUFS. Confronta prima senza makeup, poi aggiungi guadagno; separa riduzione dei contrasti e semplice aumento di livello.

<!-- LAB:dynamics | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Con soglia −18 dB e ratio 4:1, un ingresso a −10 dB diventa staticamente…

1. −16 dB prima del makeup
2. −40 dB
3. −2 dB

<details><summary>Soluzione ragionata</summary>

Gli 8 dB sopra soglia diventano 2: −18 + 2 = −16 dB.

</details>
