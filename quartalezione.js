let storico = [
  `Hogwarts non è solo una scuola di magia, ma un luogo dove giovani maghi e streghe imparano le competenze essenziali per vivere nel mondo magico. <br>
Ogni anno, gli studenti seguono corsi obbligatori e, dal terzo anno, possono scegliere materie facoltative per ampliare le loro conoscenze.
<br> </p>`,
`<h3>Materie di Base (Obbligatorie dal 1° al 5° anno)<br></h3>
<p>

1. <strong>	Trasfigurazione</strong><br>
	<strong>•	Professore:</strong> Minerva McGonagall.<br>
	<strong>•	Obiettivo:</strong> Imparare a trasformare un oggetto o un essere in qualcos’altro.<br>
	<strong>•	Esempi di lezioni:</strong> Trasformare fiammiferi in aghi o animali in calici.<br>
	<strong>•	Curiosità:</strong> La trasfigurazione è una delle materie più complesse e richiede molta concentrazione.<br><br><br>
2.	<strong>Incantesimi</strong><br>
	<strong>•	Professore:</strong> Filius Vitious.<br>
	<strong>•	Obiettivo:</strong> Apprendere incantesimi pratici, come “Wingardium Leviosa” (far levitare oggetti).<br>
	<strong>•	Esempi di lezioni:</strong> Incantesimi di difesa e utilità quotidiana.<br>`,
`3.	<strong>Difesa contro le Arti Oscure</strong><br>
	<strong>•	Professori variabili:</strong> Ogni anno cambia insegnante.<br>
	<strong>•	Obiettivo:</strong> Proteggersi da creature oscure, maledizioni e incantesimi pericolosi.<br>
	<strong>•	Esempi di lezioni:</strong> Incantesimi di protezione come il “Patronus” e strategie di difesa.<br><br><br>
4.	<strong>Pozioni</strong><br>
	<strong>•	Professore:</strong> Severus Piton (poi Horace Lumacorno).<br>
	<strong>•	Obiettivo:</strong> Creare pozioni magiche con effetti specifici, come il filtro d’amore o la pozione Polisucco.<br>
	<strong>•	Esempi di lezioni:</strong> Miscelare ingredienti come ali di pipistrello e radici di valeriana.<br>
	<strong>•	Curiosità:</strong> È considerata una delle materie più difficili, con requisiti rigorosi per l’accesso ai livelli avanzati.<br>`,
`5.	<strong>Erbologia</strong><br>
	<strong>•	Professore:</strong> Pomona Sprite.<br>
	<strong>•	Obiettivo:</strong> Studiare le proprietà delle piante magiche e il loro utilizzo in pozioni e incantesimi.<br>
	<strong>•	Esempi di lezioni:</strong> Cura di Mandragole e piante carnivore magiche.<br><br><br>
6.	<strong>Astronomia</strong><br>
	<strong>•	Professore:</strong> Aurora Sinistra.<br>
	<strong>•	Esempi di lezioni:</strong> Identificare costellazioni e pianeti usando telescopi.<br>`,
`7.	<strong>Storia della Magia</strong><br>
	<strong>•	Professore:</strong> Cuthbert Binns (un fantasma).<br>
	<strong>•	Obiettivo:</strong> Imparare la storia del mondo magico, dagli eventi chiave ai personaggi leggendari.<br>
	<strong>•	Esempi di lezioni:</strong> Le guerre dei giganti e la fondazione di Hogwarts.<br>`,
`<h3> Materie Facoltative (Dal 3° anno in poi) <br></h3>
<p>
1.	<strong>Aritmanzia</strong><br>
	<strong>•	Professore:</strong> Septima Vector.<br>
	<strong>•	Obiettivo:</strong> Calcolare e interpretare numeri magici per prevedere eventi.<br>
2.	<strong>Cura delle Creature Magiche</strong><br><br><br>
	<strong>•	Professore:</strong> Rubeus Hagrid (e in precedenza Silvanus Kettleburn).<br>
	<strong>•	Obiettivo:</strong> Conoscere le creature magiche, come gli Ippogrifi e i Thestral, e imparare a prendersene cura.<br>`,
`3.	<strong>Divinazione</strong><br>
	<strong>•	Professori:</strong> Sibilla Cooman e, successivamente, Firenze.<br>
	<strong>•	Obiettivo:</strong> Prevedere il futuro attraverso tecniche come la lettura delle foglie di tè o delle sfere di cristallo.<br>
4.	<strong>Babbanologia</strong><br><br><br>
	<strong>•	Professore:</strong> Charity Burbage.<br>
	<strong>•	Obiettivo:</strong> Studiare il mondo dei Babbani e il loro stile di vita<br>.
5.	<strong>Antiche Rune</strong><br>
	<strong>•	Professore:</strong> Bathsheda Babbling.<br>
	<strong>•	Obiettivo:</strong> Decifrare simboli e scritture antiche usate nella magia.<br></p>`,

`<h3> Esami e Valutazioni <br></h3>
<p> 
1.	<strong>G.U.F.O. (Guida Universale per Fattucchieri Ordinari)</strong><br>
	•	Esami obbligatori al termine del 5° anno.<br>
	•	Determinano l’accesso alle materie avanzate nei due anni successivi.<br><br><br>
2.	<strong>M.A.G.O. (Magia Avanzata Garantita Ordinaria)</strong><br>
	•	Esami finali del 7° anno, richiesti per entrare in professioni specifiche, come Auror o Guaritore.<br>

</p>`
];

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let quartoesameButton = document.getElementById("quartoesameButton");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 quartoesameButton.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 quartoesameButton.style.display = "none";
  }
}


function avanti() {
  let elemento = document.getElementById("primotesto");
  if (indiceAttuale < storico.length - 1) {
    indiceAttuale++;
    elemento.innerHTML = storico[indiceAttuale];
	aggiornaBottoni();
  }
}

function indietro() {
  let elemento = document.getElementById("primotesto");
  if (indiceAttuale > 0) {
    indiceAttuale--;
    elemento.innerHTML = storico[indiceAttuale];
	aggiornaBottoni();
  }
}
