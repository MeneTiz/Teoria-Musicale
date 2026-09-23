# Forme d’onda e serie armonica

## Dal tempo allo spettro
La forma d’onda mostra come varia l’ampiezza nel tempo; lo spettro descrive le componenti in frequenza. Una sinusoide ideale contiene una sola frequenza. Sommare sinusoidi a diverse frequenze, ampiezze e fasi permette di costruire segnali più complessi. Per una forma periodica, le frequenze della serie di Fourier sono multipli interi della fondamentale.

**Armonica n:** frequenza n × f₀. **Parziale:** qualsiasi componente identificabile, anche non multipla intera. **Sovratono:** componente sopra la fondamentale; nel caso armonico il primo sovratono è la seconda armonica. “Sovra-armonica” è meno preciso: qui distinguiamo armoniche, parziali e sovratoni.

## Forme ideali, confrontate
| Onda | Componenti | Andamento delle ampiezze |
|---|---|---|
| Sinusoide | Solo fondamentale | Una componente |
| Sega | Tutte le armoniche | Circa 1/n |
| Quadra simmetrica | Solo armoniche dispari | Circa 1/n |
| Triangolare simmetrica | Solo dispari | Circa 1/n², fasi alternate |

La fase relativa conta per la forma ricostruita. Due spettri di ampiezza uguali possono produrre forme temporali differenti. Le onde digitali reali sono limitate in banda: non contengono infinite armoniche come i modelli ideali.

## Tre modi di leggere una sega
**Tempo:** rampa e ritorno rapido. **Spettro:** componenti a f₀, 2f₀, 3f₀ e così via, progressivamente più deboli. **Ascolto:** maggiore presenza nelle alte frequenze rispetto a una sinusoide alla stessa fondamentale, senza che questo equivalga automaticamente a più loudness.

A f₀ = 110 Hz trovi 110, 220, 330, 440, 550 Hz. La terza armonica è una quinta sopra la seconda; la quinta armonica corrisponde a una terza maggiore pura sopra una fondamentale trasposta di due ottave. Il sistema armonico naturale e il temperamento equabile sono vicini in alcuni rapporti, ma non identici.

## Prova guidata
Scegli una forma, poi aumenta il numero di armoniche da 1 a 16. Il grafico della forma è una somma matematica e le barre sono le ampiezze impostate: non è una FFT del tuo dispositivo. L’ascolto usa la stessa serie troncata, con normalizzazione conservativa basata sulla somma delle ampiezze. Confronta il cambiamento timbrico a volume moderato.

<!-- LAB:harmonics | Implementato nell’HTML; vedi laboratori.js. -->

## Verifica

Il primo sovratono di una serie armonica è…

1. La fondamentale
2. La seconda armonica
3. Sempre una componente disarmonica

<details><summary>Soluzione ragionata</summary>

La fondamentale è la prima armonica; il primo sovratono è la componente successiva, cioè la seconda armonica.

</details>
