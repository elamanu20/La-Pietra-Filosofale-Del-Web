let storico = [
  `Hogwarts è una delle istituzioni magiche più iconiche al mondo, famosa per la sua antica storia, <br>
i suoi fondatori leggendari e il suo ruolo centrale nella formazione di giovani streghe e maghi.<br>
Situata in un castello nascosto tra le colline scozzesi, la scuola è accessibile solo a coloro che possiedono poteri magici.`,
  
  `<h3>La Fondazione di Hogwarts<br></h3>
<p>
Hogwarts fu fondata oltre mille anni fa da quattro grandi stregoni:

	1.	Godric Grifondoro: Valorizzava il coraggio e l’audacia.<br>
	2.	Tosca Tassorosso: Apprezzava la lealtà, la giustizia e il duro lavoro.<br>
	3.	Corinna Corvonero: Premiata chi dimostrava intelligenza e saggezza.<br>
	4.	Salazar Serpeverde: Preferiva studenti ambiziosi e di “sangue puro”.<br><br><br> 
	I fondatori non solo hanno costruito la scuola, ma hanno anche creato le quattro casate che portano il loro nome, <br>
	dando vita a una tradizione che continua ancora oggi.<br>
	</p>`,
  
  `<h3> La Struttura del Castello <br></h3>
<p>
Hogwarts è un enorme castello pieno di segreti, con:
	•	Torri e sotterranei: Come la Torre di Astronomia e il sotterraneo delle pozioni.<br>
	•	Scale mobili: Le scale cambiano posizione, rendendo il movimento imprevedibile.<br>
	•	Aule misteriose: Alcune aule appaiono solo quando necessario, come la Stanza delle Necessità.<br>
	•	Terreni vasti: Comprendono il Lago Nero, la Foresta Proibita e il campo da Quidditch.<br>
<br>
<h3> Il Sistema di Casate <br></h3>
<p> 
Ogni studente viene smistato dal Cappello Parlante in una delle quattro casate al suo arrivo. <br>
La competizione tra casate è incoraggiata attraverso il sistema dei punti e il premio della Coppa delle Case, assegnata a fine anno.
<br>
</p>`,

  `<h3> Materie di Studio <br></h3>
<p> 
Gli studenti frequentano corsi come Trasfigurazione, Pozioni e Difesa contro le Arti Oscure. <br>
(Troverai una lezione dettagliata sulle materie più avanti).
<br>
<br>
<h3> Tradizioni di Hogwarts <br></h3>
<p> 
1.	Lo Smistamento: Il Cappello Parlante assegna ciascun studente a una casa. <br>
	2.	Il Torneo Tremaghi: Una competizione internazionale tra scuole magiche.<br>
	3.	Le Festività: Hogwarts celebra festività magiche e babbane, come Halloween e Natale, con sontuosi banchetti.
</p>`,

  `<h3> Personaggi Importanti <br></h3>
<p> 
	•	Albus Silente: L’ex preside più celebre, noto per la sua saggezza. <br>
	•	Minerva McGranitt: Vicepreside e capo di Grifondoro. <br>
	•	Rubeus Hagrid: Custode delle Chiavi e dei Luoghi, e insegnante di Cura delle Creature Magiche. <br>
<br>
<br>
<h3> Curiosità su Hogwarts<br></h3>
<p> •	Solo i maghi e le streghe possono vedere il castello. Per i Babbani appare come un rudere pericolante. <br>
	•	Il motto di Hogwarts è: Draco dormiens nunquam titillandus (“Non stuzzicare il drago che dorme”). <br>
</p>`
];

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let secondoesameButton = document.getElementById("secondoesameButton");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 secondoesameButton.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 secondoesameButton.style.display = "none";
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
