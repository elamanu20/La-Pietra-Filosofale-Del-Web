let storico = [
  `<p>Le pozioni sono un aspetto fondamentale della magia nel mondo di Harry Potter. <br>
Si tratta di preparati magici creati combinando diversi ingredienti con precisione e seguendo ricette complesse. <br>
Le pozioni possono curare, trasformare, avvelenare, o fornire poteri temporanei.`, 
`<h3>L’Arte delle Pozioni<br><br></h3>
<h3>Preparare una pozione richiede:<br></h3>
<p>	1.	Conoscenza degli Ingredienti: Ogni ingrediente ha proprietà specifiche e spesso deve essere lavorato in un modo particolare.<br>
	2.	Precisione nelle Misure: Anche un piccolo errore può rendere una pozione inefficace o addirittura pericolosa.<br>
	3.	Tempistica Perfetta: I tempi di cottura e i movimenti durante la preparazione sono cruciali.<br></p>`,
`<h3>Famosi Maestri di Pozioni<br></h3>
<p>	•	Severus Piton: Maestro di Pozioni a Hogwarts per molti anni, famoso per la sua precisione e abilità.<br>
	•	Horace Lumacorno: Ex-insegnante di Pozioni, noto per il suo club esclusivo e le sue conoscenze.<br></p>`,
`<h3>Ingredienti Comuni nelle Pozioni<br></h3>
<p>	1.	Ali di Pipistrello: Utilizzate per pozioni legate alla notte o alla furtività.<br>
	2.	Radice di Mandragola: Fondamentale per antidoti contro incantesimi di pietrificazione.<br>
	3.	Sangue di Unicorno: Molto potente ma pericoloso da utilizzare.<br>
	4.	Aculei di Porco Spino: Spesso aggiunti alle pozioni curative.<br>
	5.	Bilis di Armadillo: Usata in pozioni calmanti.<br>
	6.	Pietre Lunari: Ingrediente raro per pozioni che alterano il tempo o lo spazio.<br><br><br></p>`,
`<h3>Pozioni Famosissime<br></h3>
<p>	1.	Polisucco: Permette a chi la beve di assumere l’aspetto di un’altra persona per un periodo limitato.<br>
		•	Ingredienti Chiave: Capelli della persona da trasformare, sanguisughe, e crisopa.<br>
		•	Difficoltà: Molto complessa, può fallire facilmente.<br>
	2.	Amortentia: La pozione d’amore più potente al mondo.<br>
		•	Caratteristica: Ha un odore unico per ogni persona, legato a ciò che amano.<br>
		•	Effetto: Non crea amore vero, ma una forte ossessione.<br>
	3.	Felix Felicis: Nota anche come “Fortuna Liquida.”<br>
		•	Effetto: Porta un periodo di incredibile fortuna a chi la beve.<br>
		•	Avvertenza: Può causare dipendenza e risultati disastrosi se abusata.<br>
	4.	Draught della Morte Vivente: Una pozione estremamente potente che induce un sonno simile alla morte.<br>
		•	Ingrediente Chiave: Fagioli Sopoforici.<br>
	5.	Siero della Verità: Usato per far confessare segreti, ma illegale in molti contesti.<br></p>`,
`<h3>Il Laboratorio delle Pozioni a Hogwarts<br></h3>
<p>	•	Le lezioni di Pozioni si svolgono nei sotterranei di Hogwarts, un ambiente fresco e silenzioso, ideale per la preparazione di sostanze delicate.<br>
	•	Casate Rinforzate: Gli studenti di Serpeverde spesso eccellono in questa disciplina, grazie alla loro ambizione e precisione.<br>`
];	

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let primoesame2Button = document.getElementById("primoesame2Button");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 primoesame2Button.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 primoesame2Button.style.display = "none";
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
