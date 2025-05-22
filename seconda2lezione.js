let storico = [
`Gli oggetti magici leggendari sono artefatti di grande potere e importanza nel mondo magico. <br>
Ogni oggetto ha una storia unica e spesso gioca un ruolo cruciale nella saga di Harry Potter. <br>
Questi oggetti sono spesso associati a leggende e destinati a coloro che dimostrano qualità straordinarie.`,

`<h3>Gli Oggetti Magici più Famosi<br><br></h3>
<h3>1.	La Bacchetta di Sambuco<br></h3>
<p>	•	Descrizione: Considerata la bacchetta più potente mai creata, fa parte dei Doni della Morte.<br>
	•	Origine: Leggenda dei tre fratelli, come raccontato ne Le fiabe di Beda il Bardo.<br>
	•	Potere: Garantisce potere imbattibile al suo possessore, ma attira anche molti nemici.<br>
	•	Proprietari Famosi: Antioch Peverell, Albus Silente, Lord Voldemort, e Harry Potter.<br>`,
	
`<h3>2.	La Spada di Godric Grifondoro<br></h3>
<p>	•	Descrizione: Forgiata da goblin, è una spada d’argento con incastonati rubini.<br>
	•	Origine: Apparteneva al fondatore di Grifondoro, Godric.<br>
	•	Proprietà Magiche: Si presenta solo ai veri Grifondoro nel momento del bisogno; può distruggere gli Horcrux.<br>
	•	Ruolo nella Saga: Usata da Neville Paciock per uccidere Nagini.<br>`,
	
`<h3>3.	Il Mantello dell’Invisibilità<br></h3>
<p>	•	Descrizione: Un mantello che rende invisibile chi lo indossa, uno dei Doni della Morte.<br>
	•	Origine: Appartenuto a Ignotus Peverell, passato di generazione in generazione fino a Harry Potter.<br>
	•	Unicità: Non si deteriora con il tempo, a differenza di altri mantelli dell’invisibilità.<br>`,
	
`<h3>4.	Il Diadema di Corvonero<br></h3>
<p>	•	Descrizione: Un diadema magico che aumenta la saggezza di chi lo indossa.<br>
	•	Origine: Creato da Priscilla Corvonero, una dei fondatori di Hogwarts.<br>
	•	Ruolo nella Saga: Trasformato in un Horcrux da Voldemort e distrutto durante la Battaglia di Hogwarts.<br>`,
	
`<h3>5.	Il Pensatoio<br></h3>
<p>	•	Descrizione: Una ciotola magica usata per conservare e rivivere ricordi.<br>
	•	Origine: L’origine esatta è sconosciuta, ma apparteneva a Silente a Hogwarts.<br>
	•	Funzione: Permette a chi lo usa di analizzare ricordi con maggiore chiarezza.<br>`,
	
`<h3>6.	La Coppa di Tosca Tassorosso<br></h3>
<p>	•	Descrizione: Un calice dorato appartenuto alla fondatrice Tosca Tassorosso.<br>
	•	Origine: Trasformata in un Horcrux da Voldemort.<br>
	•	Ruolo nella Saga: Distrutta da Hermione con un dente di Basilisco.<br>`,
	
`<h3>7.	La Giratempo<br></h3>
<p>	•	Descrizione: Un piccolo orologio che permette di viaggiare indietro nel tempo.<br>
	•	Regole: Non si può cambiare il passato, ma si può agire all’interno di un ciclo temporale predestinato.<br>
	•	Uso nella Saga: Usata da Hermione per seguire più lezioni e da Harry e Hermione per salvare Sirius e Fierobecco.<br>`,
	
`<h3>Caratteristiche degli Oggetti Leggendari<br></h3>
<p>	1.	Poteri Speciali: Ogni oggetto ha proprietà uniche che lo distinguono.<br>
	2.	Collegamenti ai Personaggi: Spesso legati a figure importanti della storia magica, come i fondatori di Hogwarts o i Peverell.<br>
	3.	Ruolo nella Saga: Questi oggetti spesso determinano l’esito di eventi fondamentali.<br>
	4.	Pericoli e Responsabilità: Possederli richiede spesso grande saggezza, coraggio o forza d’animo.<br>`
	
];	

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let secondoesame2Button = document.getElementById("secondoesame2Button");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 secondoesame2Button.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 secondoesame2Button.style.display = "none";
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
