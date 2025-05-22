let storico = [
  `Hogwarts è la scuola di magia più famosa del mondo magico, fondata oltre mille anni fa dai quattro grandi stregoni: Godric Grifondoro, Tosca Tassorosso, Corinna Corvonero e Salazar Serpeverde. <br>
  Ogni fondatore ha dato il proprio nome a una casa della scuola, definendo i valori e le caratteristiche principali che ciascuna rappresenta. <br>
  Quando gli studenti arrivano a Hogwarts, vengono smistati in una delle quattro casate dal Cappello Parlante, un antico oggetto magico incantato dai fondatori stessi.<br>
  Comprendere le case è fondamentale per comprendere le relazioni tra i personaggi e le loro scelte.`,
  
  `<h4>Grifondoro</h4>
  <p><strong>Fondatore</strong>: Godric Grifondoro<br>
  <strong>Valori</strong>: Coraggio, determinazione, lealtà.<br>
  <strong>Simbolo</strong>: Leone<br>
  <strong>Colori</strong>: Rosso e oro<br>
  <strong>Caratteristiche</strong>: Grifondoro è conosciuto per i suoi membri coraggiosi e audaci. È qui che sono stati smistati personaggi iconici come Harry Potter, Hermione Granger e Ron Weasley. La casa celebra l’eroismo e il coraggio, spesso affrontando le ingiustizie.</p>`,
  
  `<h4>Tassorosso</h4>
  <p><strong>Fondatore</strong>: Tosca Tassorosso<br>
  <strong>Valori</strong>: Lavoro duro, lealtà, pazienza.<br>
  <strong>Simbolo</strong>: Tasso<br>
  <strong>Colori</strong>: Giallo e nero<br>
  <strong>Caratteristiche</strong>: La casa Tassorosso è famosa per i suoi membri onesti e laboriosi. Spesso accoglie gli studenti che sono di carattere equilibrato e con una forte etica del lavoro, come Cedric Diggory. Tassorosso valorizza la lealtà e l'integrità.</p>`,

  `<h4>Corvonero</h4>
  <p><strong>Fondatore</strong>: Corinna Corvonero<br>
  <strong>Valori</strong>: Intelligenza, creatività, saggezza.<br>
  <strong>Simbolo</strong>: Aquila<br>
  <strong>Colori</strong>: Blu e argento<br>
  <strong>Caratteristiche</strong>: Corvonero è la casa dei pensatori. Gli studenti che vi appartengono sono noti per la loro intelligenza e la loro creatività, come Luna Lovegood. La casa premia il merito accademico e la ricerca della verità.</p>`,

  `<h4>Serpeverde</h4>
  <p><strong>Fondatore</strong>: Salazar Serpeverde<br>
  <strong>Valori</strong>: Ambizione, astuzia, leadership.<br>
  <strong>Simbolo</strong>: Serpente<br>
  <strong>Colori</strong>: Verde e argento<br>
  <strong>Caratteristiche</strong>: Serpeverde è la casa che valorizza l'ambizione e la determinazione. Gli studenti di Serpeverde, come Draco Malfoy e Severus Piton, sono noti per la loro astuzia e la loro capacità di leadership, spesso perseguendo i propri obiettivi con determinazione e senza scrupoli.</p>`
];

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let primoesameButton = document.getElementById("primoesameButton");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 primoesameButton.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 primoesameButton.style.display = "none";
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
