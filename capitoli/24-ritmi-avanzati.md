# Ritmi euclidei, poliritmia e modulazione metrica

## Distribuire eventi in modo uniforme
Un ritmo euclideo E(k,n) distribuisce k colpi in n posizioni cercando intervalli il più possibile uniformi. E(3,8) produce distanze cicliche 3–3–2, a rotazione vicino: una possibile sequenza è X··X··X·. La rotazione cambia dove senti l’inizio senza cambiare le distanze cicliche. Il nome dell’algoritmo non descrive da solo accenti, timbro o tradizione musicale.

Il laboratorio usa un accumulatore equivalente per la distribuzione uniforme, con una convenzione di rotazione esplicita. Alcuni generatori iniziano da un’altra posizione o mostrano una sequenza invertita: confronta i gap ciclici, non solo la stringa.

## Poliritmia e polimetria
**Poliritmia:** suddivisioni diverse nello stesso intervallo, per esempio tre eventi equidistanti contro due. Per costruire 3:2, dividi l’intervallo comune in sei parti: una voce suona ogni due caselle, l’altra ogni tre. Si riallineano al ciclo successivo.

**Polimetria:** raggruppamenti metrici differenti sopra una pulsazione comune, per esempio cicli di tre e quattro ottavi. Si riallineano dopo dodici ottavi. Le etichette dipendono anche da come gli accenti rendono percepibili i cicli, non soltanto dalla griglia matematica.

## Modulazione metrica in tre passaggi
Scegli un valore ritmico del tempo vecchio, dichiaralo uguale a un valore del nuovo, ricava il rapporto. Se la vecchia semiminima puntata diventa la nuova semiminima, la nuova pulsazione dura 1,5 volte la vecchia: nuovo BPM = vecchio BPM × 2/3. Da 120 passi a 80 BPM.

Viceversa, se una vecchia semiminima di terzina, durata 2/3 di un quarto, diventa il nuovo quarto, il nuovo BPM è 120 × 3/2 = 180. **Formula generale:** se a quarti vecchi equivalgono a b quarti nuovi, BPM nuovo = BPM vecchio × b/a. Conservi una durata comune come ponte. Raddoppiare la densità ritmica senza cambiare la pulsazione percepita non è automaticamente modulazione metrica.

## Prova guidata
Distribuisci cinque colpi in sedici posizioni, poi ruota il pattern. Un clic basso marca l’inizio del ciclo. Prova anche il confronto 3:2 e il passaggio 120→80: il primo sovrappone divisioni, il secondo ridefinisce la pulsazione. Non confondere questi due ascolti.

<!-- LAB:euclid | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Se il vecchio quarto puntato diventa il nuovo quarto, da 120 BPM passi a…

1. 180 BPM
2. 80 BPM
3. 120 BPM

<details><summary>Soluzione ragionata</summary>

Il nuovo quarto dura 1,5 vecchi quarti: il tempo diventa 120 ÷ 1,5 = 80 BPM.

</details>
