const fs=require('node:fs'),path=require('node:path');
const out=path.join(__dirname,'capitoli');fs.mkdirSync(out,{recursive:true});
const chapters=[];
function chapter(id,title,group,lab,body,question,options,answer,explanation){chapters.push({id,title,group,lab,question,options,answer,explanation});fs.writeFileSync(path.join(out,id+'.md'),`# ${title}\n\n${body.trim()}\n\n<!-- LAB:${lab} | Implementato nell’HTML; vedi laboratori.js. -->\n\n## Verifica\n\n${question}\n\n${options.map((o,i)=>`${i+1}. ${o}`).join('\n')}\n\n<details><summary>Soluzione ragionata</summary>\n\n${explanation}\n\n</details>\n`);}
chapter('00-percorso','Dalla nota al suono: il percorso',0,'overview',`
## Come usare questa guida
Questa guida collega tre competenze: **capire la musica**, **progettare i suoni**, **organizzarli in un brano**. Sono collegate, ma non equivalenti: conoscere la serie armonica non basta a scegliere una progressione; conoscere gli accordi non basta a controllare un filtro.

Segui prima i capitoli 1–12. Passa poi ad arrangiamento e forma, quindi alla fisica del suono. Ogni laboratorio propone una variabile da cambiare, qualcosa da ascoltare e una conclusione da verificare. Non serve leggere tutto in una volta: una lezione, dieci minuti di prove e un breve esempio nel tuo progetto sono un buon ritmo.

## Convenzioni sempre visibili
Le note usano **C (Do), D (Re), E (Mi), F (Fa), G (Sol), A (La), B (Si)**. ♯ significa diesis, ♭ bemolle. La numerazione scientifica assegna 440 Hz ad A4 (La4), con C4 (Do4) come Do centrale. Alcune DAW chiamano le stesse note con un’ottava diversa: confronta numero MIDI e frequenza, non solo l’etichetta. MIDI 60 è qui C4 (Do4).

Una sigla come **Cm7 (Do minore settima)** indica un accordo, non una nota. I numeri arabi indicano gradi di scala; i numeri romani indicano accordi rispetto alla tonalità. Le formule 1–♭3–5 descrivono distanze dalla fondamentale; le lettere dei controlli dell’inviluppo sono parametri, non nomi di note.

## Tre letture dello stesso concetto
**Musicale:** che relazione sento? **Visiva:** che distanza o movimento vedo? **Fisica:** che frequenza, durata o spettro cambia? Quando il tema è difficile troverai queste prospettive affiancate. Un disegno è un modello: non è una misura del tuo impianto o della tua stanza.

## Metodo di ascolto
Avvia l’audio con un clic e parti da un volume comodo. Tutti gli esempi sono sintetizzati localmente, senza registrazioni esterne. Il tasto «Ferma audio» e Esc interrompono le prove. Le modifiche si ascoltano rilanciando l’esempio, così ogni confronto parte dall’inizio. I laboratori timbrici non sono normalizzati alla stessa loudness: evita di scambiare “più forte” con “migliore”.

## Traguardo finale
Costruire un’idea di 16 battute, riconoscerne centro tonale e intervalli, scegliere rivolti leggibili, riservare spazio al basso e spiegare il ruolo di inviluppo, filtro e dinamica. Salva negli appunti una previsione prima di ascoltare e il risultato dopo.
`, 'Qual è il metodo più utile per un confronto?', ['Cambiare tutto insieme','Cambiare una variabile e prevedere il risultato','Scegliere sempre il suono più forte'],1,'Cambiare una variabile permette di collegare il gesto al risultato; una previsione rende l’ascolto attivo.');

chapter('01-ritmo','Ritmo, tempo e griglia',1,'rhythm',`
## Quattro parole, quattro funzioni
Il **tempo** indica la velocità della pulsazione; il **metro** organizza gli accenti ricorrenti; il **ritmo** dispone eventi e pause; la **griglia** è il riferimento visivo per posizionarli. In 4/4 trovi quattro movimenti da un quarto. A 120 BPM, assumendo il quarto come pulsazione, ogni quarto dura 60/120 = 0,5 secondi; una battuta dura 2 secondi.

| Valore | Durata in quarti | A 120 BPM |
|---|---|---|
| Intero | 4 | 2 s |
| Metà | 2 | 1 s |
| Quarto | 1 | 500 ms |
| Ottavo | 1/2 | 250 ms |
| Sedicesimo | 1/4 | 125 ms |

Un punto aggiunge metà del valore: un quarto puntato vale 1,5 quarti. La legatura somma durate della stessa altezza; una pausa occupa tempo senza suonare. Una terzina divide in tre parti lo spazio normalmente occupato da due valori dello stesso tipo.

## Accento e groove
In 6/8 si sentono spesso **due pulsazioni da un quarto puntato**, ciascuna divisa in tre ottavi. Non basta contare sei caselle per descrivere il metro. Una sincope mette in rilievo una posizione debole o prolunga un evento attraverso una posizione forte. Lo swing rende diseguali due suddivisioni: 50% significa coppia pari, circa 67% una proporzione 2:1. Non tutti gli swing sono terzinati.

La quantizzazione sposta gli eventi verso la griglia; intensità, durata e piccoli scarti possono restare espressivi. “Umano” non significa spostare tutto a caso.

## Prova guidata
Nel sequencer disegna quattro colpi sui movimenti, poi aggiungi i sedicesimi intermedi. Porta lo swing da 50% a 67%. Ascolta lo spostamento degli eventi dispari, mentre la durata della battuta resta uguale. Infine togli un colpo: una pausa può creare più slancio di una nota in più.
`, 'In 4/4 a 120 BPM, quanto dura una battuta?', ['500 ms','2 secondi','4 secondi'],1,'Quattro quarti da 0,5 secondi producono una battuta di 2 secondi.');

chapter('02-note','Note, altezze e frequenze',1,'pitch',`
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
`, 'Che cosa resta uguale in tutte le ottave?', ['La differenza in hertz','Il rapporto di frequenza 2:1','Il numero di armoniche'],1,'L’ottava raddoppia la frequenza. La differenza assoluta cambia con il registro.');

chapter('03-lettura','Leggere musica e piano roll',1,'notation',`
## Due rappresentazioni compatibili
Il pentagramma mette il tempo da sinistra a destra e l’altezza dal basso verso l’alto. Le linee e gli spazi si alternano; la chiave assegna i nomi alle posizioni. In chiave di violino le linee, dal basso, sono E (Mi), G (Sol), B (Si), D (Re), F (Fa); gli spazi F (Fa), A (La), C (Do), E (Mi). I tagli addizionali proseguono il sistema: C4 (Do4) si trova sul primo taglio sotto il pentagramma in chiave di violino.

In chiave di basso le linee sono G (Sol), B (Si), D (Re), F (Fa), A (La). C4 (Do4) si trova sul primo taglio sopra. Il piano roll usa invece una riga per ogni semitono: una distanza verticale identica rappresenta sempre lo stesso numero di semitoni, mentre sul pentagramma la distanza grafica conta lettere, non semitoni.

## Che cosa descrive una nota MIDI
La posizione orizzontale è l’inizio; la lunghezza è la durata del gate; la riga è il numero di nota; la velocity è un dato espressivo. Velocity non è necessariamente volume: lo strumento può usarla per filtro, attacco o scelta del campione. Il gate non coincide con la durata udibile se il suono ha una coda di release.

## Armatura e alterazioni locali
L’armatura all’inizio del rigo definisce le alterazioni di base. Nella notazione moderna un’alterazione occasionale vale normalmente per la stessa nota e ottava fino alla stanghetta della battuta, con convenzioni per legature e richiami di cortesia. Nel piano roll non vedi automaticamente questo significato grammaticale: due note enarmoniche possono apparire identiche.

## Leggere una sigla senza indovinare
**Cmaj7 (Do maggiore settima maggiore)** contiene fondamentale, terza maggiore, quinta giusta e settima maggiore. **C7 (Do settima di dominante)** usa invece una settima minore. **C/E (Do maggiore con Mi al basso)** specifica il basso. La barra non indica una divisione matematica.

## Prova guidata
Suona C4 (Do4), E4 (Mi4), G4 (Sol4) prima in sequenza, poi insieme nel laboratorio degli accordi. Nel piano roll sono tre righe; nel pentagramma una pila di terze. Il contenuto è lo stesso, cambia il modo di leggerlo. Usa il confronto fra pentagramma e piano roll qui sotto per fissare posizioni e nomi.
`, 'La lunghezza di una nota MIDI determina sempre tutta la coda sonora?', ['Sì','No, il release può proseguire dopo il gate','Solo se la velocity è alta'],1,'Il note-off avvia la fase di rilascio. La durata del suono dipende anche dall’inviluppo.');

chapter('04-intervalli','Intervalli: il vocabolario delle distanze',1,'interval',`
## Numero e qualità
Un intervallo descrive la relazione fra due altezze. **Melodico** significa note successive, **armonico** note simultanee. Il numero si ottiene contando i nomi inclusi gli estremi: C (Do)–E (Mi) attraversa tre lettere, quindi è una terza. La qualità precisa i semitoni: C (Do)–E♭ (Mi♭) è una terza minore, C (Do)–E (Mi) una terza maggiore.

| Semitoni | Intervallo semplice | Esempio da C (Do) |
|---|---|---|
| 0 | Unisono giusto | C (Do) |
| 1 / 2 | Seconda minore / maggiore | D♭ (Re♭) / D (Re) |
| 3 / 4 | Terza minore / maggiore | E♭ (Mi♭) / E (Mi) |
| 5 | Quarta giusta | F (Fa) |
| 6 | Quarta aumentata / quinta diminuita | F♯ (Fa♯) / G♭ (Sol♭) |
| 7 | Quinta giusta | G (Sol) |
| 8 / 9 | Sesta minore / maggiore | A♭ (La♭) / A (La) |
| 10 / 11 | Settima minore / maggiore | B♭ (Si♭) / B (Si) |
| 12 | Ottava giusta | C (Do), ottava sopra |

## Perché contare i tasti non basta
C (Do)–F♯ (Fa♯) e C (Do)–G♭ (Sol♭) suonano uguali al pianoforte equabile, ma il primo è una quarta aumentata e il secondo una quinta diminuita. La scrittura racconta la direzione musicale. Gli intervalli giusti sono unisono, quarta, quinta e ottava; seconde, terze, seste e settime possono essere maggiori o minori. Aumentato aggiunge un semitono alla qualità maggiore o giusta; diminuito sottrae un semitono alla minore o giusta.

## Rivolto e intervalli composti
Portare la nota inferiore un’ottava sopra inverte l’intervallo: una terza maggiore diventa sesta minore. Nei casi semplici i numeri sommano a nove; maggiore e minore si scambiano, giusto resta giusto. Una nona è una seconda più un’ottava; un’undicesima una quarta più un’ottava. Nel voicing il registro può cambiare molto la chiarezza, pur conservando la classe dell’intervallo.

## Tre prospettive sulla quinta
**Geometria:** sette semitoni. **Frequenza:** 2^(7/12), circa 1,4983; il rapporto puro 3:2 è vicino ma non identico. **Ascolto:** spesso stabile, ma il contesto decide la funzione. Consonanza non significa “bello” e dissonanza non significa “sbagliato”. Timbro, registro e stile modificano il risultato.

## Prova guidata
Confronta 3 e 4 semitoni in sequenza e simultaneamente, poi ripeti un’ottava sotto. Canta la seconda nota prima di premere ascolta. Se sbagli, torna alla fondamentale: stai allenando una relazione, non memorizzando il timbro.
`, 'Per distinguere quarta aumentata e quinta diminuita servono…', ['Solo gli hertz','Nomi delle note e semitoni','Il volume'],1,'La distanza in semitoni può coincidere; il numero dipende dalle lettere impiegate.');

chapter('05-scale','Scale, tonalità e circolo delle quinte',2,'scale',`
## Una scala non è ancora una tonalità
Una scala ordina un insieme di altezze. Una tonalità organizza quelle altezze intorno a una **tonica**, un centro percepito come riferimento. Usare solo i tasti bianchi non garantisce C (Do) maggiore: A (La) minore condivide quelle note. Durate, bassi, accenti e cadenze fanno sentire il centro.

La scala maggiore usa T–T–S–T–T–T–S, dove T è un tono, S un semitono. Da C (Do): C (Do), D (Re), E (Mi), F (Fa), G (Sol), A (La), B (Si). In semitoni dalla tonica: 0, 2, 4, 5, 7, 9, 11. Per trasporre sposti tutte le note della stessa distanza, mantenendo la struttura.

## Tre forme della scala minore
La minore naturale usa 0, 2, 3, 5, 7, 8, 10. Da A (La): A (La), B (Si), C (Do), D (Re), E (Mi), F (Fa), G (Sol). La minore armonica alza il settimo grado: G♯ (Sol♯) richiama A (La) a distanza di semitono. La minore melodica ascendente alza sesto e settimo: F♯ (Fa♯), G♯ (Sol♯). Nella prassi classica discendente spesso torna naturale; nel jazz la forma melodica viene normalmente impiegata identica in entrambe le direzioni.

**Relativa:** stessa armatura, tonica diversa, come C (Do) maggiore e A (La) minore. **Parallela:** stessa tonica, note diverse, come C (Do) maggiore e C (Do) minore. Questa differenza serve per capire il prestito modale.

## Circolo delle quinte: una mappa, non una progressione obbligatoria
Salendo di quinte, le tonalità maggiori aggiungono diesis: C (Do), G (Sol), D (Re), A (La), E (Mi), B (Si), F♯ (Fa♯), C♯ (Do♯). Scendendo aggiungono bemolli: F (Fa), B♭ (Si♭), E♭ (Mi♭), A♭ (La♭), D♭ (Re♭), G♭ (Sol♭), C♭ (Do♭). Alcune posizioni coincidono enarmonicamente, ma la scrittura mantiene una lettera per ciascun grado.

G (Sol) maggiore ha F♯ (Fa♯); F (Fa) maggiore ha B♭ (Si♭). Le tonalità vicine condividono molte note: questo facilita collegamenti, senza imporre cosa comporre.

## Prova guidata
Nel laboratorio confronta maggiore e minore naturale con **la stessa tonica**. Poi confronta minore naturale e armonica: individua il grado che cambia. Il drone ribadisce il centro, così ascolti le distanze dal riferimento e non soltanto una sequenza di tasti.
`, 'C (Do) maggiore e C (Do) minore sono…', ['Relative','Parallele','La stessa scala'],1,'Hanno la stessa tonica ma una diversa struttura intervallare: sono tonalità parallele.');

chapter('06-modi','Modi e colore: ascoltare il centro',2,'modes',`
## Il modo è una gerarchia
Dire “suona i tasti bianchi da D (Re)” descrive le note di D (Re) dorico, ma non garantisce una musica dorica. Se la frase risolve continuamente su C (Do), potresti sentire ancora C (Do) maggiore. Servono un centro stabile e intervalli caratteristici rispetto a quel centro.

| Modo | Formula rispetto alla maggiore | Grado da mettere a fuoco |
|---|---|---|
| Ionico | 1 2 3 4 5 6 7 | Terza e settima maggiori |
| Dorico | 1 2 ♭3 4 5 6 ♭7 | Sesta maggiore in ambiente minore |
| Frigio | 1 ♭2 ♭3 4 5 ♭6 ♭7 | Seconda minore |
| Lidio | 1 2 3 ♯4 5 6 7 | Quarta aumentata |
| Misolidio | 1 2 3 4 5 6 ♭7 | Settima minore in ambiente maggiore |
| Eolio | 1 2 ♭3 4 5 ♭6 ♭7 | Sesta e settima minori |
| Locrio | 1 ♭2 ♭3 4 ♭5 ♭6 ♭7 | Quinta diminuita |

## Tre modi di capire il dorico
**Ricetta:** una minore naturale con il sesto grado alzato. **Confronto parallelo:** in D (Re) eolio trovi B♭ (Si♭); in D (Re) dorico trovi B (Si). **Ascolto:** tieni D (Re) al basso e alterna una frase che tocca il sesto grado nelle due versioni. La differenza emerge senza cambiare tonica.

Lavorare sui modi paralleli, cioè con tonica uguale, rende evidenti i colori. Studiare i modi relativi, cioè ricavati dalle stesse note, spiega invece la parentela. Sono due strumenti diversi.

## Emozione: una possibilità, non un dizionario
“Maggiore felice, minore triste” può essere una prima associazione culturale, ma non una legge. Registro, andamento, ritmo, timbro, densità, testi e memoria personale possono ribaltare l’effetto. Una scala lidia può apparire aperta con un pad lento oppure tesa con accenti rapidi e distorsione. La quinta diminuita del locrio rende meno stabile la triade sulla tonica; non vieta di costruire un centro modale.

## Pentatonica e blues
La pentatonica maggiore usa 1–2–3–5–6; la minore 1–♭3–4–5–♭7. Ridurre le note aiuta a costruire frasi riconoscibili. La scala blues minore aggiunge ♭5; nella pratica blues altezza e intonazione possono essere mobili, non limitate ai dodici tasti.

## Prova guidata
Confronta dorico ed eolio sopra lo stesso drone. Canta il sesto grado, quindi inventa una frase di quattro note che vi arrivi e torni alla tonica. Scrivi che cosa senti prima di leggere etichette emotive. Il laboratorio mostra anche il grado caratteristico, non soltanto le note disponibili.
`, 'Che cosa distingue meglio un modo nel contesto?', ['La prima nota suonata una sola volta','Centro percepito e intervalli rispetto ad esso','Il nome del preset'],1,'Il centro e le relazioni gerarchiche rendono udibile il modo; cominciare da una nota non è sufficiente.');

chapter('07-accordi','Costruire e leggere gli accordi',2,'chord',`
## La triade come pila di terze
Una triade contiene fondamentale, terza e quinta. La fondamentale dà il nome all’accordo; non deve essere la nota più grave. Da C (Do), una terza maggiore e una quinta giusta producono C (Do), E (Mi), G (Sol): C (Do maggiore). Abbassando la terza ottieni Cm (Do minore): C (Do), E♭ (Mi♭), G (Sol).

| Qualità | Formula | Semitoni dalla fondamentale |
|---|---|---|
| Maggiore | 1 3 5 | 0 4 7 |
| Minore | 1 ♭3 5 | 0 3 7 |
| Diminuita | 1 ♭3 ♭5 | 0 3 6 |
| Aumentata | 1 3 ♯5 | 0 4 8 |
| Sus2 / sus4 | 1 2 5 / 1 4 5 | 0 2 7 / 0 5 7 |

Sus sostituisce la terza: l’accordo non dichiara direttamente maggiore o minore. Add aggiunge invece una nota conservando normalmente la terza. **Cadd9 (Do maggiore con nona aggiunta)** contiene C (Do), E (Mi), G (Sol), D (Re), senza richiedere la settima.

## Settime ed estensioni
**Cmaj7 (Do maggiore settima maggiore):** 0–4–7–11. **C7 (Do settima di dominante):** 0–4–7–10. **Cm7 (Do minore settima):** 0–3–7–10. **Cm7♭5 (Do semidiminuito):** 0–3–6–10. **Cdim7 (Do diminuito settima):** C (Do), E♭ (Mi♭), G♭ (Sol♭), B𝄫 (Si doppio bemolle), semitoni 0–3–6–9. La settima diminuita si scrive con la settima lettera anche se suona come A (La) nel temperamento equabile.

Nona, undicesima e tredicesima sono gradi composti. C9 (Do nona di dominante) implica la settima minore; non è sinonimo di Cadd9 (Do maggiore con nona aggiunta). Nei voicing reali puoi omettere la quinta, o delegare la fondamentale al basso; terza e settima spesso chiariscono meglio la qualità.

## Armonizzare una scala
Prendi una nota sì e una no della scala maggiore, ripetendo da ciascun grado: ottieni I, ii, iii, IV, V, vi, vii°. Maiuscolo indica triade maggiore, minuscolo minore, ° diminuita. In C (Do) maggiore: C (Do maggiore), Dm (Re minore), Em (Mi minore), F (Fa maggiore), G (Sol maggiore), Am (La minore), Bdim (Si diminuito). Non stai imponendo sette accordi casuali: conservi le note della scala.

## Prova guidata
Mantieni la stessa fondamentale e alterna maggiore, minore, sus4 e dominante settima. Ascolta prima l’arpeggio, poi il blocco. Identifica la singola nota responsabile della differenza; guarda i semitoni visualizzati se l’orecchio non la separa ancora.
`, 'Cadd9 (Do maggiore con nona aggiunta) richiede la settima?', ['Sì, sempre','No','Solo in registro grave'],1,'Add9 aggiunge la nona alla triade. La sigla 9 senza add implica invece normalmente una settima.');

chapter('08-voci','Rivolti, voicing e collegamento delle voci',2,'voicing',`
## Identità e disposizione
L’accordo è l’insieme di relazioni; il **voicing** è il modo concreto di distribuirle per altezza, raddoppi e strumenti. Un **rivolto** riguarda la nota al basso. In C (Do maggiore), C (Do) al basso dà lo stato fondamentale, E (Mi) il primo rivolto, G (Sol) il secondo. Una triade allargata con C (Do) ancora al basso resta in stato fondamentale.

**Posizione stretta:** le voci superiori occupano poco spazio. **Posizione lata:** sono distribuite più ampiamente. Aprire un accordo non significa necessariamente rivoltarlo. Uno slash chord può indicare anche un basso estraneo alla triade: non tutte le sigle con barra sono rivolti.

## Il voice leading in tre immagini
**Linee:** ogni voce è una piccola melodia; segui dove va ciascuna nota. **Distanze:** cerca note comuni e movimenti brevi. **Conversazione:** lascia ferma una voce mentre un’altra risponde. Il principio utile è rendere intenzionale ogni movimento, non ridurre sempre tutto al minimo.

Da C (Do maggiore), C4 (Do4)–E4 (Mi4)–G4 (Sol4), a F (Fa maggiore), puoi saltare a F4 (Fa4)–A4 (La4)–C5 (Do5), oppure conservare C4 (Do4) e muovere E4 (Mi4)→F4 (Fa4), G4 (Sol4)→A4 (La4). La seconda versione usa F (Fa maggiore) in secondo rivolto. L’armonia nominale resta la stessa, ma il percorso è più vicino.

## Basso, soprano e voci interne
Il basso suggerisce peso e direzione; la voce più alta emerge facilmente come melodia; quelle interne collegano. Ascolta ciascuna separatamente. In una produzione puoi far suonare la fondamentale a un basso distinto e usare solo terza, settima e nona nel pad. Questo è un voicing senza fondamentale nel pad, non un accordo senza riferimento nell’intero arrangiamento.

## Regole contestuali
Evitare quinte e ottave parallele è importante in alcuni esercizi di scrittura contrappuntistica, dove si cerca indipendenza delle voci. Non è un divieto generale per musica elettronica o rock. Evita di applicare una regola senza conoscere l’obiettivo stilistico.

## Prova guidata
Alterna «Blocchi» e «Voci vicine» nella stessa progressione. Il piano roll mostra le traiettorie. Ascolta se la nota più alta crea una linea autonoma; poi abbassa il registro e nota come intervalli stretti possano rendere il basso meno leggibile.
`, 'Che cosa determina il rivolto?', ['La nota più acuta','La nota dell’accordo al basso','Il numero di strumenti'],1,'Il rivolto dipende dal basso. La spaziatura delle altre voci riguarda il voicing.');

chapter('09-progressioni','Progressioni, funzioni e tensione',2,'progression',`
## Gli accordi acquistano significato nel tempo
Una progressione è una successione di accordi; la funzione descrive il ruolo percepito nel contesto tonale. **Tonica:** stabilità e riferimento. **Predominante:** prepara il movimento. **Dominante:** crea attesa verso la tonica. Nella maggiore, I è il riferimento principale, ii e IV sono frequenti predominanti, V e vii° frequenti dominanti. vi può prolungare o sostituire parte della funzione di tonica, secondo il contesto.

Non tutti i brani seguono questo linguaggio. Loop modali, pedali e armonie statiche possono costruire direzione tramite ritmo, timbro e registro. La funzione non è una proprietà immutabile della sigla isolata.

## Perché V7 tende a I: tre spiegazioni
In C (Do) maggiore, G7 (Sol settima di dominante) contiene G (Sol), B (Si), D (Re), F (Fa). **Movimento melodico:** B (Si) tende a C (Do), F (Fa) tende a E (Mi). **Geometria:** il tritono fra B (Si) e F (Fa) si risolve in un intervallo più stabile. **Aspettativa:** l’abitudine al linguaggio tonale rende riconoscibile quel ritorno. Fisica e apprendimento contribuiscono, ma non producono un obbligo universale.

## Quattro modi di terminare
| Cadenza | Movimento tipico | Effetto nel linguaggio tonale |
|---|---|---|
| Autentica | V–I | Arrivo; forza variabile con basso e melodia |
| Plagale | IV–I | Rientro senza dominante |
| Sospesa | Fine su V | Frase aperta |
| D’inganno | V–vi in maggiore | Risoluzione attesa deviata |

Una cadenza autentica perfetta richiede condizioni più precise, fra cui V e I in stato fondamentale e tonica al soprano sull’arrivo. Non ogni V–I è “perfetta”.

## Minore e ritmo armonico
In minore naturale il quinto accordo è minore. Alzando il settimo grado della scala compare una dominante maggiore: in A (La) minore, E7 (Mi settima di dominante) usa G♯ (Sol♯) e conduce ad Am (La minore). Il **ritmo armonico** è la frequenza dei cambi d’accordo: un accordo per battuta o due per battuta cambia l’urgenza anche a BPM identico.

## Prova guidata
Ascolta I–V–vi–IV e ii–V–I con gli stessi suoni. Ferma mentalmente la sequenza prima dell’ultimo accordo e canta l’arrivo. Poi allunga ogni accordo: cambia l’attesa senza cambiare né tonalità né intervalli.
`, 'Il ritmo armonico misura…', ['La velocità dei cambi di accordo','La frequenza della fondamentale','Il numero di armoniche'],0,'Il ritmo armonico descrive quanto spesso cambia l’armonia, indipendentemente dal BPM.');

chapter('10-cromatismo','Prestiti, dominanti secondarie e modulazione',2,'chromatic',`
## Uscire dalla scala con una ragione
Cromatico significa introdurre note esterne alla collezione di riferimento. Questo non implica automaticamente cambiare tonalità. Una nota di passaggio, una dominante secondaria e una nuova tonica sono fenomeni diversi.

Una **dominante secondaria** tratta momentaneamente un accordo come destinazione. In C (Do) maggiore, D7 (Re settima di dominante) contiene F♯ (Fa♯), estraneo alla scala, e porta a G (Sol maggiore). Si scrive V7/V: dominante della dominante. Se subito dopo G (Sol maggiore) torna a C (Do maggiore), il centro globale può restare C (Do).

## Tonicizzazione e modulazione in tre modi
**Durata:** una tonicizzazione è una focalizzazione locale; una modulazione stabilisce un altro centro per un tratto significativo. **Conferma:** cadenze, melodia e basso sostengono la nuova tonalità. **Analogia:** illuminare per un momento un’altra stanza non equivale a trasferirsi lì. Non esiste un numero fisso di battute che decida da solo.

Per passare da C (Do) maggiore a G (Sol) maggiore, Am (La minore) può funzionare come accordo comune: vi nella prima tonalità, ii nella seconda. Proseguire con D7 (Re settima di dominante) e G (Sol maggiore), ribadendo il nuovo centro, rende il passaggio riconoscibile. Un accordo comune è un possibile ponte, non un requisito.

## Prestito modale
Prendere un accordo dalla tonalità parallela conserva il riferimento alla tonica ma cambia il colore. In C (Do) maggiore puoi usare Fm (Fa minore), iv preso da C (Do) minore, prima di C (Do maggiore). La nota A♭ (La♭) scende a G (Sol): un movimento concreto spiega il risultato meglio dell’etichetta “malinconico”. Anche ♭VI e ♭VII sono prestiti frequenti in vari stili.

## Cosa evitare
Non chiamare modulazione qualsiasi nota fuori scala. Non cercare una scala nuova per ogni accordo prima di ascoltare le linee comuni. Un cromatismo può essere compreso come semplice movimento di una voce; troppe etichette possono nascondere questa continuità.

## Prova guidata
Confronta I–IV–I con I–iv–I; poi ascolta I–V/V–V–I. Nel primo caso cambia il colore della predominante, nel secondo aumenta la direzione verso la dominante. Scrivi la nota estranea e la sua risoluzione prima di cambiare tonalità nel tuo progetto.
`, 'D7 (Re settima di dominante) in C (Do) maggiore può essere…', ['V/V, senza modulazione obbligatoria','Sempre la nuova tonica','Un accordo diatonico della scala maggiore iniziale'],0,'È una dominante secondaria diretta verso G (Sol maggiore); il contesto decide se il nuovo centro si stabilisce.');

chapter('11-melodia','Melodia, motivi e note estranee',2,'melody',`
## Una frase è più di una scala
Una melodia organizza altezze, durate, accenti, ripetizioni e pause. Un **motivo** è una piccola idea riconoscibile; una **frase** dà un senso di percorso e articolazione. La stessa sequenza di tre note può assumere caratteri molto diversi cambiando le durate.

Parti da C (Do), D (Re), E (Mi) sopra C (Do maggiore). C (Do) ed E (Mi) appartengono alla triade, D (Re) collega. Se D (Re) è breve fra le altre due, è una nota di passaggio; se è lunga e accentata, il suo peso cambia. La distinzione non è soltanto “nella scala” o “fuori scala”: conta la relazione con l’accordo in quel momento.

## Quattro gesti melodici
**Passaggio:** collega due note per grado congiunto. **Volta:** si allontana da una nota e vi ritorna, come E (Mi)–F (Fa)–E (Mi). **Anticipazione:** introduce in anticipo una nota dell’accordo seguente. **Ritardo:** una nota preparata resta mentre l’armonia cambia, poi risolve, spesso scendendo per grado. “Ritardo” qui non è un effetto delay.

Un’appoggiatura mette in rilievo una nota non appartenente all’accordo che poi risolve; la preparazione e l’accento la distinguono da altre figure. Queste categorie descrivono comportamenti tipici, non vietano di tenere una tensione senza risolverla.

## Sviluppare senza perdere identità
Ripeti un motivo e cambia un solo aspetto: trasponi, modifica l’ultima nota, raddoppia le durate, sposta l’accento, inserisci una pausa. Una sequenza ripete un disegno a diverse altezze. Il contorno descrive salita, discesa e punti culminanti; una buona frase non deve riempire tutti gli spazi.

## Melodia e basso come telaio
Ascolta solo queste due parti: comunicano già direzione? Se sì, inserisci accordi senza soffocare il tema. Se tutte le parti si muovono molto, stabilizza almeno una voce. In una frase con un salto ampio puoi sperimentare un ritorno per gradi: è una strategia di equilibrio, non un obbligo.

## Prova guidata
Nel laboratorio confronta la frase solo con note dell’accordo e la versione con passaggi. Mantieni basso e durata uguali. Poi cambia il ritmo del motivo. Individua la nota più lunga e chiediti se è anche quella che vuoi mettere al centro.
`, 'Una nota della scala è sempre una nota dell’accordo corrente?', ['Sì','No','Solo a tempo lento'],1,'La scala contiene più note della triade: una nota può essere diatonica e tuttavia estranea all’accordo corrente.');

chapter('12-orecchio','Ear training: riconoscere e prevedere',2,'ear',`
## L’orecchio si allena per relazioni
L’orecchio relativo riconosce distanze e funzioni rispetto a un riferimento. Non richiede orecchio assoluto. Cantare una nota prima di sentirla è più utile che indovinare etichette a caso: mette alla prova una previsione interna.

## Una sessione di dieci minuti
Ascolta la tonica e cantala. Confronta due intervalli vicini, per esempio terza minore e maggiore, evitando inizialmente dodici possibilità. Ascolta prima in successione, poi simultaneamente. Cambia la fondamentale per non associare una risposta a una sola nota. Ripeti l’errore lentamente e descrivi in che cosa differiva dalla previsione.

Passa poi alle triadi maggiore, minore, diminuita e aumentata. Canta fondamentale, terza e quinta separatamente; infine ascolta l’accordo senza scomporlo. Le associazioni con canzoni possono aiutare all’inizio, ma dipendono da direzione, registro e contesto. Non sostituiscono la relazione intervallare.

## Tre livelli di riconoscimento
**Isolato:** riconosco sette semitoni. **Tonale:** sento il quinto grado rispetto alla tonica. **Musicale:** riconosco il ruolo di quella nota in una frase. Sono abilità complementari. Un test su due sinusoidi non misura tutto il tuo orecchio musicale.

## Trascrivere piccole unità
Scegli un frammento di due secondi. Batti il ritmo senza altezze, cerca la nota di arrivo, quindi ricostruisci gli intervalli. Controlla su uno strumento solo dopo il tentativo. Se il timbro confonde, prova a cantare la linea; se la velocità confonde, rallenta senza alterare l’intonazione.

## Prova guidata
Il laboratorio genera intervalli ascendenti casuali e nasconde la soluzione finché rispondi. Ripeti lo stesso esempio senza cambiarlo, poi scegline uno nuovo. Il feedback indica anche il numero di semitoni. Annota quali coppie confondi: il prossimo esercizio deve concentrarsi su quelle, non sui risultati già facili.

## Trasferimento alla produzione
Quando un accordo “non funziona”, canta prima il basso e la melodia. Individua se il problema è una nota, il registro, il ritmo o il timbro. Un filtro non corregge una relazione armonica che non volevi; allo stesso modo una nota teoricamente corretta può essere poco leggibile con un suono troppo denso.
`, 'Quale esercizio allena una previsione sonora?', ['Leggere subito la risposta','Cantare l’arrivo prima di ascoltarlo','Usare sempre la stessa fondamentale'],1,'Prevedere e poi verificare costruisce una relazione interna fra intervallo e suono.');

chapter('13-arrangiamento','Arrangiamento: registro, densità e spazio',3,'arrangement',`
## Prima i ruoli, poi le frequenze
Arrangiare significa scegliere chi suona che cosa, quando e in quale registro. Melodia, basso, armonia, impulso ritmico e texture sono ruoli; uno strumento può coprirne più di uno. La chiarezza nasce anche dall’alternanza nel tempo, non solo dall’equalizzazione.

Una nota non occupa una singola frequenza. C2 (Do2) ha fondamentale circa 65,4 Hz, ma una sega sulla stessa nota estende armoniche nei medi e negli acuti. Due strumenti con fondamentali lontane possono comunque mascherarsi. Per questo una mappa di registri è una guida compositiva, non uno spettrogramma del mix.

## Perché aprire gli accordi nel grave
**Musicalmente:** lasciare una fondamentale e una quinta al basso rende più distinguibili le funzioni. **Spettralmente:** le armoniche di note ravvicinate si sovrappongono in regioni sensibili e possono produrre battimenti e ruvidità. **Praticamente:** sposta terza e settima un’ottava sopra prima di tagliare con un EQ. La soglia dipende dal timbro, dal livello e dall’obiettivo estetico; non esiste un confine universale.

## Quattro dimensioni utili
| Dimensione | Domanda | Intervento musicale |
|---|---|---|
| Registro | Chi occupa il grave? | Sposta o ometti un raddoppio |
| Tempo | Chi parla insieme al tema? | Introduci risposte e pause |
| Articolazione | Le code si accumulano? | Accorcia gate o release |
| Timbro | Tutti hanno transitori e armoniche simili? | Scegli materiali complementari |

Panorama e profondità completano il quadro, ma il controllo mono rivela se la separazione dipende soltanto dallo stereo. Il sidechain può liberare spazio temporaneo; non rende automaticamente ben scritto un arrangiamento troppo fitto.

## Un caso concreto
Basso: C2 (Do2). Pad: C3 (Do3)–E3 (Mi3)–G3 (Sol3). Melodia: E4 (Mi4). Prima prova a togliere C3 (Do3) dal pad: il basso comunica già la fondamentale. Poi porta E3 (Mi3) a E4 (Mi4), verificando se entra in conflitto con il tema. Non c’è una soluzione unica: scegli quale parte deve emergere.

## Prova guidata
Confronta l’accordo compatto nel grave con quello aperto nel laboratorio. Il grafico indica le altezze delle voci, non bande di frequenza esclusive. Cambia il registro e ascolta come la stessa qualità armonica possa diventare impastata oppure trasparente.
`, 'Due strumenti con fondamentali diverse possono mascherarsi?', ['No','Sì, le loro componenti spettrali possono sovrapporsi','Solo se sono identici'],1,'La fondamentale è solo una parte del suono: armoniche, rumore e transitori possono sovrapporsi.');

chapter('14-forma','Struttura del brano e dinamica armonica',3,'form',`
## La forma organizza memoria e novità
Una sezione si riconosce da ciò che resta stabile e da ciò che cambia. Intro, strofa, ritornello, bridge, breakdown e drop sono funzioni frequenti, non caselle obbligatorie. Forme come AB, ABA e strofa–ritornello descrivono relazioni di ripetizione e contrasto, senza fissare genere o durata.

Una frase di quattro battute può essere ripetuta con una variazione; due frasi possono produrre domanda e risposta. Le unità di 4, 8 o 16 battute sono comuni in molte produzioni, ma un’aggiunta o una sottrazione intenzionale crea sorpresa. Prima fai sentire la regolarità, poi valuta quanto romperla.

## Tre tipi di energia indipendenti
**Ritmica:** densità e velocità degli eventi. **Armonica:** frequenza dei cambi, distanza dal centro, grado di risoluzione. **Spettrale e dinamica:** registro, brillantezza e livello. Puoi avere un punto molto teso e molto silenzioso. Un ritornello può crescere aprendo le voci e allargando il registro senza alzare il fader.

## Il ritmo armonico come acceleratore
Prendi I–V–vi–IV. Nella prima sezione tieni ogni accordo due battute, nella seconda una battuta, nella transizione mezzo giro di battuta. Il BPM non cambia; cambia la frequenza delle decisioni armoniche. Aumentare tutto contemporaneamente produce spesso un crescendo indistinto: scegli un parametro principale.

## Progettare 16 battute
| Battute | Funzione | Scelta |
|---|---|---|
| 1–4 | Presentazione | Motivo breve, registro medio |
| 5–8 | Conferma | Stesso motivo, finale variato |
| 9–12 | Contrasto | Meno percussioni, accordi più lunghi |
| 13–16 | Ritorno | Motivo completo, cadenza riconoscibile |

Il ritorno funziona se la prima idea era memorizzabile. Un fill può annunciare il confine; una pausa prima dell’arrivo può renderlo più forte. Non occorre introdurre sempre un nuovo strumento.

## Prova guidata
Nel laboratorio cambia il profilo di densità delle quattro sezioni e ascolta l’anteprima ridotta. Il disegno mostra un indice didattico di attività, non LUFS o una previsione emotiva. Ricrea poi lo schema in 16 battute vere: ogni blocco dell’anteprima rappresenta una sezione, non la sua durata completa.
`, 'Un aumento della tensione richiede più volume?', ['Sì','No, può derivare da armonia, ritmo o attesa','Solo nel ritornello'],1,'La dinamica formale comprende più variabili: tensione e livello sonoro non coincidono.');

chapter('15-armoniche','Forme d’onda e serie armonica',4,'harmonics',`
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
`, 'Il primo sovratono di una serie armonica è…', ['La fondamentale','La seconda armonica','Sempre una componente disarmonica'],1,'La fondamentale è la prima armonica; il primo sovratono è la componente successiva, cioè la seconda armonica.');

chapter('16-fase','Fase, polarità, ritardo e battimenti',4,'phase',`
## Tre operazioni diverse
La **fase** indica la posizione nel ciclo di una componente periodica. La **polarità** moltiplica il segnale per −1. Il **ritardo** sposta nel tempo l’intero segnale. Per una sola sinusoide, invertire la polarità equivale a spostare la fase di 180°; per un segnale complesso non equivale a un unico ritardo che inverta tutte le frequenze.

Lo sfasamento introdotto da un ritardo τ è −360° × f × τ, modulo 360°. Con 1 ms, 500 Hz subisce mezzo ciclo e 1000 Hz un ciclo completo. Ecco perché un ritardo produce effetti diversi sulle diverse componenti.

## Sommare due sinusoidi uguali
**Disegno:** creste allineate si sommano, creste contro valli si sottraggono. **Formula:** con ampiezza individuale a e differenza φ, l’ampiezza risultante è 2a × |cos(φ/2)|. **Ascolto:** a 0° il segnale raddoppia in ampiezza, circa +6,02 dB; a 180° si annulla idealmente. Occorrono uguale frequenza, uguale ampiezza e somma nello stesso canale.

La cancellazione di due segnali elettrici identici è un modello esatto. Due diffusori in una stanza aggiungono percorsi e riflessioni: l’effetto varia nello spazio. Due suoni non correlati non si sommano normalmente di +6 dB; raddoppiare la potenza media porta a circa +3 dB.

## Battimenti e filtro a pettine
Due sinusoidi vicine, come 220 e 222 Hz, producono pulsazioni d’ampiezza a circa 2 Hz. La fase relativa continua a cambiare: non rimangono ferme a un offset. Il **comb filtering** nasce sommando una copia ritardata e una diretta: per copie uguali e stessa polarità, i primi minimi sono a (2k+1)/(2τ). Con 1 ms trovi 500, 1500, 2500 Hz.

## Prova guidata
Usa frequenze identiche e passa da 0° a 180°. Il laboratorio mantiene fisso il guadagno delle singole componenti, così senti la somma. Attiva poi un piccolo detune e ascolta i battimenti; l’offset iniziale non descrive più una relazione statica. Il grafico segnala questa evoluzione mostrando una finestra iniziale dell’onda.
`, 'Un ritardo di 1 ms produce lo stesso angolo di fase a ogni frequenza?', ['Sì','No','Solo in mono'],1,'La fase dipende da frequenza × ritardo: lo stesso tempo corrisponde a porzioni diverse di ciclo.');

chapter('17-modulazione','AM, FM e modulazione del suono',4,'modulation',`
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
`, 'Quale modulazione lenta produce normalmente tremolo?', ['Ampiezza','Frequenza','Panorama soltanto'],0,'Il tremolo è una variazione periodica di ampiezza; il vibrato riguarda l’altezza.');

chapter('18-inviluppi','ADSR: dare forma al tempo',4,'adsr',`
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
`, 'Quale parametro ADSR è un livello?', ['Decay','Sustain','Release'],1,'Sustain è il livello mantenuto finché il gate resta aperto; gli altri parametri indicano tempi.');

chapter('19-filtri','Filtri, risonanza e spettro',4,'filter',`
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
`, 'Un filtro lineare statico genera armoniche nuove da una sinusoide?', ['Sì, sempre','No, cambia ampiezza e fase','Solo se è passa-alto'],1,'Le nuove componenti richiedono non linearità o variazione nel tempo; il modello lineare statico non le genera.');

chapter('20-digitale','Audio digitale, campionamento e aliasing',4,'alias',`
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
`, 'Perché l’EQ dopo il campionamento non elimina selettivamente tutto l’aliasing?', ['Perché le componenti false sono già ripiegate su frequenze valide','Perché i bit sono sempre insufficienti','Perché Nyquist dipende dal volume'],0,'Dopo il ripiegamento una frequenza alias può essere indistinguibile da una componente reale nella stessa banda.');

chapter('21-sintesi','Architetture di sintesi: scegliere un modello',4,'synthesis',`
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
`, 'Quale scelta rende più diretto controllare singole parziali?', ['Sintesi additiva','Un EQ sul master necessariamente','Qualsiasi preset senza modifiche'],0,'L’additiva espone direttamente le componenti da sommare; altre architetture possono ottenere risultati simili con gesti diversi.');

chapter('22-acustica','Acustica, spazio e mixaggio',5,'space',`
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
`, 'Una copia ritardata in stereo è sempre innocua in mono?', ['Sì','No, può produrre interferenze e filtro a pettine','Solo se il delay è sincronizzato'],1,'La somma mono combina copie correlate con ritardo; alcune frequenze possono attenuarsi e altre rinforzarsi.');

chapter('23-percezione','Psicoacustica: ascoltare con criterio',5,'psycho',`
## Misura e sensazione non coincidono
La frequenza è fisica, l’altezza è percettiva; l’ampiezza è fisica, la loudness è percettiva. Il sistema uditivo integra informazione spettrale e temporale. Il contesto e l’attenzione influiscono su ciò che emerge: non ascoltiamo ogni componente come un misuratore indipendente.

## Mascheramento in tre modi
**Ascolto:** un elemento diventa meno distinguibile in presenza di un altro. **Spettro:** energia vicina può competere entro regioni di analisi uditiva; le bande uditive non hanno larghezza costante in hertz. **Arrangiamento:** due parti molto simili, simultanee e nello stesso registro chiedono attenzione allo stesso spazio. Spostare una frase nel tempo può essere più efficace di alzare il volume.

Il mascheramento può essere simultaneo o temporale: un evento intenso può influire sulla percezione di un evento vicino nel tempo. Non c’è una singola frequenza da tagliare valida per ogni coppia di strumenti. Livello, spettro, durata e ascoltatore contano.

## Fondamentale mancante
Se ascolti componenti a 220, 330 e 440 Hz, il cervello può ricostruire un’altezza corrispondente a 110 Hz pur senza energia fisica a 110 Hz. La periodicità comune e la struttura delle armoniche contribuiscono. L’effetto dipende da quali componenti sono presenti, dal livello e dalle condizioni di ascolto. Il basso può risultare riconoscibile su piccoli diffusori tramite le armoniche, senza che il sistema riproduca davvero la fondamentale.

## Livello, brillantezza e aspettativa
L’orecchio non ha la stessa sensibilità a tutte le frequenze e questa relazione cambia con il livello. Le curve di uguale sensazione sonora non sono una curva EQ da applicare automaticamente. Confronti più forti possono sembrare più dettagliati: per giudicare un trattamento cerca livelli percepiti simili e alterna rapidamente, poi verifica nel brano.

## Localizzazione e precedenza
Differenze di tempo e livello fra le orecchie, insieme ai filtraggi di testa e padiglioni, aiutano a localizzare. Una riflessione ravvicinata può fondersi con il diretto e influire sulla spazialità senza essere sentita come eco separata. Non ridurre tutto a una soglia temporale universale.

## Prova guidata
Togli e rimetti la fondamentale lasciando le altre armoniche invariate. Ascolta se l’altezza resta riconoscibile mentre cambia il peso timbrico. Il livello totale cambia: questo è un esperimento di altezza residua, non un test di preferenza né una misura clinica dell’udito.
`, 'Sentire una fondamentale significa che quella frequenza è sempre presente?', ['Sì','No, può essere ricostruita percettivamente','Solo nelle cuffie'],1,'La struttura delle armoniche può evocare una fondamentale assente nello spettro fisico.');

chapter('24-ritmi-avanzati','Ritmi euclidei, poliritmia e modulazione metrica',5,'euclid',`
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
`, 'Se il vecchio quarto puntato diventa il nuovo quarto, da 120 BPM passi a…', ['180 BPM','80 BPM','120 BPM'],1,'Il nuovo quarto dura 1,5 vecchi quarti: il tempo diventa 120 ÷ 1,5 = 80 BPM.');

chapter('25-loudness','Dinamica, decibel e loudness',5,'dynamics',`
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
`, 'Con soglia −18 dB e ratio 4:1, un ingresso a −10 dB diventa staticamente…', ['−16 dB prima del makeup','−40 dB','−2 dB'],0,'Gli 8 dB sopra soglia diventano 2: −18 + 2 = −16 dB.');

chapter('26-progetto','Progetto finale, diagnosi e glossario',6,'progression',`
## Un brano breve che dimostra ciò che sai
Costruisci 16 battute in C (Do) maggiore oppure A (La) minore. Scegli prima il centro, poi una progressione di quattro accordi. Per esempio in maggiore I–V–vi–IV: C (Do maggiore), G (Sol maggiore), Am (La minore), F (Fa maggiore). Non è una formula per un brano finito: è un materiale stabile su cui valutare le tue decisioni.

## Procedura
1. Disegna un ritmo semplice e lascia almeno una pausa significativa.
2. Scrivi il basso. Canta gli arrivi senza gli accordi.
3. Aggiungi triadi e cerca un collegamento di voci leggibile.
4. Crea un motivo di tre o quattro note; ripetilo con una variazione.
5. Separa i registri. Togli i raddoppi che non aggiungono una funzione.
6. Scegli due suoni con articolazioni diverse: uno breve e uno sostenuto.
7. Organizza presentazione, variazione, contrasto e ritorno.
8. Verifica in mono, poi a un livello di ascolto più basso. Conserva margine sui picchi.

## Diagnosi prima dei plugin
| Sintomo | Prima ipotesi da controllare | Prova reversibile |
|---|---|---|
| Armonia confusa | Troppe note nel grave o code sovrapposte | Apri le voci, accorcia release |
| Melodia senza direzione | Nessun punto d’arrivo | Allunga una nota strutturale |
| Drop debole | Nessun contrasto precedente | Riduci densità prima dell’arrivo |
| Stereo bello, mono vuoto | Copie correlate con ritardo | Disattiva il widening |
| Suono più brillante ma peggiore | Livello falsato nel confronto | Compensa il guadagno |
| Nota “sbagliata” | Funzione o spelling poco chiari | Isola basso e melodia |

## Glossario essenziale
**Tonica:** centro della tonalità o del modo. **Fondamentale dell’accordo:** riferimento che ne determina il nome. **Fondamentale acustica:** frequenza di riferimento di una serie armonica; non sempre presente fisicamente. **Basso:** voce più grave. Questi quattro concetti possono coincidere, ma non devono.

**Grado:** posizione nella scala. **Intervallo:** distanza fra due altezze. **Voicing:** disposizione concreta delle note di un accordo. **Ritmo armonico:** frequenza dei cambi di armonia. **Timbro:** insieme di caratteristiche, spettrali e temporali, che distinguono i suoni oltre ad altezza e livello.

**Parziale:** componente spettrale. **Armonica:** parziale a multiplo intero della fondamentale. **Gate:** intervallo fra note-on e note-off. **Headroom:** margine rispetto a un limite. **Mascheramento:** riduzione della distinguibilità di un suono in presenza di un altro.

## Autovalutazione
Sai spiegare ogni nota estranea alla scala? Sai cantare la nota più alta degli accordi come una melodia? Il basso rimane leggibile? La struttura funziona prima di aumentare il volume? Sai descrivere quale variabile hai cambiato in ogni confronto? Se una risposta è no, torna al relativo laboratorio e rifai una prova piccola.

Il criterio finale non è rispettare tutte le ricette: è poter scegliere, ascoltare l’effetto e correggere con intenzione. Le fonti della guida servono ad approfondire e verificare termini; gli esempi e gli esercizi sono originali.
`, 'Quale intervento viene prima quando il pad copre il basso?', ['Aumentare subito il master','Controllare note, registro e durata delle voci','Cambiare casualmente tutti i preset'],1,'Una modifica all’arrangiamento può eliminare il conflitto alla fonte, prima di intervenire con il processing.');

fs.writeFileSync(path.join(__dirname,'indice.json'),JSON.stringify(chapters,null,2));
const index=`# Indice e validazione del percorso\n\n## Criterio editoriale\n\nTutti i 17 argomenti proposti sono mantenuti. Ritmo di base resta breve; teoria musicale precede sintesi e mix. Aggiunti lettura/piano roll, intervalli, tonalità, rivolti e voice leading, cromatismo, melodia, ear training, audio digitale e progetto conclusivo. “Impronta emotiva” diventa colore contestuale; “sovra-armoniche” è sostituito da armoniche, parziali e sovratoni. Arrangement Theory è ampliata oltre la sola distribuzione in frequenza.\n\n## Capitoli\n\n${chapters.map(c=>`- [${c.id.slice(0,2)} · ${c.title}](capitoli/${c.id}.md) — laboratorio: ${c.lab}`).join('\n')}\n\n## Corrispondenza con la richiesta\n\n| Argomento originale | Capitoli |\n|---|---|\n| Ritmo, tempo e griglia | 01 |\n| Note, altezze, frequenze | 02–04 |\n| Scale, modi, emozione | 05–06 |\n| Armonia e accordi | 07–08 |\n| Progressioni e tensione | 09–10 |\n| Frequenze nell’arrangiamento | 13 |\n| Struttura e dinamica armonica | 14 |\n| Onde e serie armonica | 15 |\n| Fase e interferenza | 16 |\n| Modulazione | 17 |\n| ADSR | 18 |\n| Acustica e mix | 22 |\n| Psicoacustica | 23 |\n| Filtri | 19 |\n| Sintesi avanzata | 21 |\n| Ritmo matematico | 24 |\n| Dinamica e loudness | 25 |\n\n## Segnaposto editoriali\n\nOgni Markdown conserva un commento LAB identificabile. Il builder lo sostituisce con un modulo reale nell’HTML; non compaiono segnaposto vuoti nella guida. I grafici sono SVG/canvas generati da dati e parametri, non immagini decorative. Le note delle interfacce seguono notazione inglese e italiana; i nomi enarmonici sono scelti in base al contesto quando si costruiscono scale e accordi.\n`;
fs.writeFileSync(path.join(__dirname,'00-INDICE.md'),index);console.log('Creati '+chapters.length+' capitoli Markdown e indice.');
