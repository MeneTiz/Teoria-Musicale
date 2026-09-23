# ADSR: dare forma al tempo

## Il suono è anche un evento
L’inviluppo descrive l’evoluzione di un parametro. Nell’inviluppo d’ampiezza ADSR, **Attack** è il tempo di salita al picco; **Decay** il tempo verso il livello di **Sustain**; Sustain è un livello mantenuto durante il gate; **Release** è il tempo di discesa dopo il note-off. Tre parametri descrivono durate, uno descrive un livello.

Il gate è l’intervallo fra note-on e note-off. Se rilasci il tasto durante l’attacco o il decadimento, molti strumenti passano al release dal livello raggiunto. Non è necessario completare tutte le fasi. Le curve possono essere lineari, esponenziali o regolabili; a uguale durata numerica possono suonare diverse.

## Tre spiegazioni dell’attacco
**Grafico:** la pendenza iniziale dell’ampiezza. **Gesto:** quanto rapidamente l’energia entra in scena. **Ascolto:** un attacco breve evidenzia l’inizio, uno lungo può rendere ambiguo il punto ritmico. Un attacco di ampiezza lento non elimina necessariamente tutti i transitori presenti in altre componenti o effetti.

## Ricette motivate
| Funzione | Attack | Decay | Sustain | Release |
|---|---|---|---|---|
| Pluck sintetico | 5 ms | 180 ms | 0,1 | 120 ms |
| Pad morbido | 800 ms | 500 ms | 0,65 | 1,5 s |
| Suono corto da sequenza | 5 ms | 90 ms | 0 | 60 ms |

Sono punti di partenza, non standard. Sustain a zero lascia spegnere il suono anche se il tasto resta premuto. Un release lungo può sovrapporre accordi consecutivi: ascolta il passaggio armonico, non soltanto la nota singola.

## Un inviluppo, molte destinazioni
Sul filtro l’inviluppo cambia brillantezza; sul pitch produce una traiettoria di altezza; sull’ampiezza controlla il livello. La forma di controllo può essere identica ma il significato cambia. La profondità e il valore iniziale della destinazione determinano il risultato: un inviluppo filtro non ha effetto udibile se il cutoff è già oltre lo spettro presente.

## Click e articolazione
Un salto brusco nel segnale può generare un click. Pochi millisecondi di rampa spesso lo attenuano, ma anche punto di partenza del campione, fase e retrigger influiscono. Non allungare automaticamente l’attacco fino a perdere il groove.

## Prova guidata
Confronta pluck e pad, poi riduci il gate sotto l’Attack: il grafico deve entrare in release dal punto raggiunto. Il laboratorio usa rampe lineari didattiche e mostra il note-off; non riproduce ogni dettaglio degli inviluppi di Wavetable.

<!-- LAB:adsr | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Quale parametro ADSR è un livello?

1. Decay
2. Sustain
3. Release

<details><summary>Soluzione ragionata</summary>

Sustain è il livello mantenuto finché il gate resta aperto; gli altri parametri indicano tempi.

</details>
