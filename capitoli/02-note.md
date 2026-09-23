# Note, altezze e frequenze

## Nome, registro, frequenza
Una **classe di altezza** raggruppa le note separate da ottave: C3 (Do3) e C4 (Do4) condividono il nome, ma non la frequenza. Il registro distingue in quale zona ci troviamo. La frequenza misura cicli al secondo, in hertz; l’altezza è la qualità percettiva con cui ordiniamo i suoni da gravi ad acuti.

Nel temperamento equabile a 12 suoni ogni semitono moltiplica la frequenza per 2^(1/12), circa 1,05946. Dodici moltiplicazioni producono un raddoppio: l’ottava. La distanza musicale è quindi **proporzionale**, non una differenza fissa in hertz.

## La stessa idea in tre modi
**Tastiera:** salire di dodici tasti, contando anche quelli neri, significa salire di un’ottava. **Onda:** nello stesso intervallo di tempo compaiono il doppio dei cicli. **Formula:** f = 440 × 2^((m−69)/12), dove m è il numero MIDI. MIDI 69 è A4 (La4), MIDI 60 è C4 (Do4), circa 261,63 Hz.

Da A3 (La3), 220 Hz, ad A4 (La4), 440 Hz, la differenza è 220 Hz; da A4 (La4) ad A5 (La5), 880 Hz, è 440 Hz. Entrambe sono ottave. Il periodo T = 1/f: 100 Hz significa un ciclo ogni 10 ms.

## Alterazioni ed enarmonia
♯ alza di un semitono, ♭ abbassa di un semitono, ♮ annulla un’alterazione. Fra E (Mi) e F (Fa), e fra B (Si) e C (Do), c’è già un semitono. Nel sistema equabile C♯ (Do♯) e D♭ (Re♭) condividono il tasto ma hanno funzioni scritte diverse. I nomi dipendono dalla scala e dall’accordo, non solo dal tasto.

## Cent e accordatura
Un semitono equabile contiene 100 cent; un’ottava 1200. Per due frequenze: cent = 1200 × log₂(f₂/f₁). Il riferimento a 440 Hz è una convenzione, non una proprietà naturale della nota. Un rumore può avere energia in molte frequenze senza un’altezza univoca; un suono complesso può invece evocare una fondamentale anche se quella componente manca.

## Prova guidata
Ascolta una nota e la sua ottava nel laboratorio. Poi spostati di un solo semitono: non stai aggiungendo sempre lo stesso numero di hertz. In Ableton confronta il nome mostrato dal piano roll con il numero MIDI quando trasferisci gli esempi.

<!-- LAB:pitch | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Che cosa resta uguale in tutte le ottave?

1. La differenza in hertz
2. Il rapporto di frequenza 2:1
3. Il numero di armoniche

<details><summary>Soluzione ragionata</summary>

L’ottava raddoppia la frequenza. La differenza assoluta cambia con il registro.

</details>
