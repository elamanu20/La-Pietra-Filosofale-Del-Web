let storico = [
`Gli Horcrux sono oggetti oscuri e potenti creati tramite la magia nera per ottenere l’immortalità. <br>
Essi giocano un ruolo cruciale nella saga di Harry Potter, poiché rappresentano il mezzo con cui Voldemort divide la sua anima per evitare la morte. <br>
Comprendere gli Horcrux è fondamentale per analizzare il personaggio di Voldemort e la sua sconfitta.`,

`<h3>Che cos’è un Horcrux?<br><br></h3>
<p>	•	<strong>Definizione:</strong> Un Horcrux è un oggetto nel quale un mago oscuro nasconde una parte della propria anima, rendendosi virtualmente immortale finché l’Horcrux rimane intatto.<br>
	•	<strong>Creazione:</strong> Per creare un Horcrux, è necessario commettere un omicidio, atto che lacera l’anima. Attraverso un incantesimo oscuro, il frammento d’anima viene intrappolato in un oggetto o in un essere vivente.<br>
	•	<strong>Conseguenze:</strong> Ogni divisione dell’anima riduce l’umanità del mago e lo lega a un’esistenza sempre più corrotta.`,
	
`<h3>Gli Horcrux di Voldemort<br></h3>
<p>	Voldemort crea sette Horcrux per ottenere l’immortalità, un numero che considera magico e potente. <br>
	Tuttavia, inavvertitamente, crea un ottavo frammento d’anima.<br><br>
<strong>1.Diario di Tom Riddle</strong><br>
	•	Descrizione: Un diario capace di controllare e manipolare chi lo usa.<br>
	•	Distrutto da: Harry Potter con un dente di Basilisco.<br><br>
<strong>2.Anello di Orvoloson Gaunt</strong><br>
	•	Descrizione: Appartenente alla famiglia Gaunt, conteneva la Pietra della Resurrezione.<br>
	•	Distrutto da: Albus Silente con la Spada di Grifondoro.`,
`<strong>3.Medaglione di Serpeverde</strong><br>
	•	Descrizione: Un ciondolo con il simbolo della casata di Salazar Serpeverde.<br>
	•	Distrutto da: Ron Weasley con la Spada di Grifondoro.<br><br>
<strong>4.Coppa di Tosca Tassorosso</strong><br>
	•	Descrizione: Un calice d’oro appartenuto alla fondatrice di Tassorosso.<br>
	•	Distrutto da: Hermione Granger con un dente di Basilisco.`,
`<strong>5.Diadema di Corvonero</strong><br>
	•	Descrizione: Un antico diadema magico che aumentava la saggezza di chi lo indossava.<br>
	•	Distrutto da: Vincent Tiger con una Fiammata Infernale e poi da Harry.<br><br>
<strong>6.Nagini (il serpente)</strong><br>
	•	Descrizione: Il serpente fedele a Voldemort e un Horcrux vivente.<br>
	•	Distrutto da: Neville Paciock con la Spada di Grifondoro.<br><br>
<strong>7.Harry Potter (involontariamente)</strong><br>
	•	Descrizione: Un frammento dell’anima di Voldemort si lega a Harry quando è ancora un neonato.<br>
	•	Distrutto da: Voldemort stesso con l’Incantesimo Mortale nella Foresta Proibita.`,
	
`<h3>Come distruggere un Horcrux<br></h3>
<p>	Un Horcrux può essere distrutto solo se il contenitore viene irreparabilmente danneggiato, rompendo il legame con l’anima frammentata. Metodi noti includono:<br>
	<strong>•	La Spada di Grifondoro:</strong> Poiché assorbe il veleno del Basilisco, è uno strumento ideale.<br>
	<strong>•	Il Veleno del Basilisco:</strong> Estremamente letale per gli oggetti magici.<br>
	<strong>•	La Fiammata Infernale:</strong> Fuoco magico distruttivo, usato per eliminare il Diadema di Corvonero.`,
	
`<h3>Conseguenze dell’uso di Horcrux<br></h3>
<p>	<strong>•	Corruzione:</strong> La divisione dell’anima provoca instabilità mentale ed emotiva.<br>
	<strong>•	Vulnerabilità:</strong> Più Horcrux un mago crea, più diventa vulnerabile, poiché la propria anima si indebolisce.<br>
	<strong>•	Perdita di umanità:</strong> Voldemort diventa una figura mostruosa, incapace di comprendere l’amore e l’empatia.`
	
];	

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let terzoesame2Button = document.getElementById("terzoesame2Button");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 terzoesame2Button.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 terzoesame2Button.style.display = "none";
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
