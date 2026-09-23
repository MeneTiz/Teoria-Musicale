# Acustica, spazio e mixaggio

## Il suono attraversa un ambiente
Nell’aria il suono è una variazione di pressione che si propaga. A temperatura ambiente la velocità è circa 343 m/s, variabile con le condizioni. La lunghezza d’onda λ = c/f: a 100 Hz è circa 3,43 metri; a 1000 Hz circa 34,3 centimetri. Le basse frequenze interagiscono quindi con dimensioni importanti della stanza.

Il suono diretto arriva per primo; riflessioni precoci e coda riverberante aggiungono percorsi. Le riflessioni non sono soltanto “più volume”: possono alterare localizzazione, chiarezza e risposta in frequenza. Il tempo di riverberazione RT60 descrive una discesa di 60 dB nel decadimento dell’ambiente; la sua misura richiede procedure e condizioni, non basta leggere il tempo di un preset.

## Modi della stanza e posizione
In una stanza rettangolare rigida semplificata, i modi assiali hanno frequenze fₙ = n c/(2L). Con L = 4 metri il primo è circa 42,9 Hz. Anche le altre dimensioni e i modi tangenziali e obliqui contribuiscono. In nodi e ventri la pressione varia: spostare ascoltatore o diffusore può cambiare molto il basso. Una forte cancellazione geometrica non si risolve bene aggiungendo guadagno con un EQ.

## Spazio in produzione
**Panorama:** distribuzione fra canali. **Profondità:** relazione fra diretto, riflessioni, spettro e dinamica. **Larghezza:** differenze e correlazione fra canali. Un suono lontano non è soltanto più riverberato; meno transiente e meno dettaglio possono contribuire alla distanza percepita.

Il predelay separa l’attacco dalla risposta riverberante. Il rapporto dry/wet regola il rapporto fra diretto ed effetto. Una copia ritardata di pochi millisecondi può allargare in stereo ma generare un filtro a pettine quando sommata in mono. Controlla sempre la compatibilità nel contesto.

## Prova guidata
Il laboratorio usa una copia ritardata, non un riverbero di stanza. Cambia il ritardo da pochi a molti millisecondi: da interferenza e fusione passi a un’eco distinta. Alterna stereo e somma mono; la somma è mediata per evitare un semplice raddoppio del livello. La risposta dipende dalla correlazione del segnale, non dal solo numero scritto sul controllo.

<!-- LAB:space | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Una copia ritardata in stereo è sempre innocua in mono?

1. Sì
2. No, può produrre interferenze e filtro a pettine
3. Solo se il delay è sincronizzato

<details><summary>Soluzione ragionata</summary>

La somma mono combina copie correlate con ritardo; alcune frequenze possono attenuarsi e altre rinforzarsi.

</details>
