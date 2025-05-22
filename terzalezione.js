let storico = [
  `Le relazioni tra i personaggi di Harry Potter sono fondamentali per lo sviluppo della storia. <br>
Amicizia, rivalità, amore e lealtà giocano un ruolo cruciale nella crescita dei protagonisti e nell’evoluzione della trama. <br>
Questa lezione esplorerà le dinamiche principali, approfondendo i legami più significativi.
<br><br> </p>`,
`<h3>L'Amicizia tra Harry, Ron e Hermione<br></h3>
<p>

Harry, Ron e Hermione rappresentano il cuore della saga.<br>
	•	Harry Potter: Coraggioso, leale e pronto a sacrificarsi per gli altri. È il punto di riferimento del trio.<br>
	•	Ron Weasley: Rappresenta il supporto emotivo e l’umanità del gruppo. Nonostante le sue insicurezze, si dimostra un amico fedele e coraggioso.<br>
	•	Hermione Granger: Intelligente e determinata, è la mente del gruppo. La sua logica e conoscenza spesso salvano i suoi amici da situazioni pericolose.<br>
Questa amicizia è basata sulla fiducia e sull’accettazione delle differenze, e supera prove difficili come i conflitti interni e le battaglie contro le forze oscure.<br>
</p>`,
  
  `<h3> Il Legame tra Harry e Voldemort <br></h3>
<p>
Harry e Voldemort sono legati in modo unico:<br>
	•	La profezia: Annuncia che uno dei due deve uccidere l’altro per sopravvivere.<br>
	•	La connessione magica: Harry è un Horcrux involontario, e questo legame permette loro di condividere pensieri ed emozioni.<br>
	•	Somiglianze e differenze: Entrambi orfani, ma Harry sceglie l’amore e l’amicizia, mentre Voldemort abbraccia l’odio e il potere.<br>
Questo legame è il fulcro della storia, culminando nella battaglia finale, dove Harry riesce a sconfiggere Voldemort con il supporto dei suoi amici.<br>

</p>`,

  `<h3> Amicizie e Rivalità <br></h3>
<p> 
	•	Harry e Draco Malfoy: Draco è la nemesi di Harry a Hogwarts. <br>
		La loro rivalità è alimentata dalle differenze di valori e dalla pressione delle rispettive famiglie. <br>
		Tuttavia, negli ultimi libri, Draco mostra segni di redenzione. <br>
	•	Severus Piton e Harry: Una relazione complessa. <br>
		Piton è inizialmente visto come un nemico, ma alla fine si rivela un alleato cruciale e una figura tragica, profondamente legata a Lily, la madre di Harry. <br>
<br>
</p>`,

  `<h3> Relazioni Familiari <br></h3>
<p> 
	•	I Weasley: Rappresentano la famiglia ideale per Harry, che non ha mai conosciuto l’amore familiare con i Dursley. <br>
		Molly e Arthur lo accolgono come un figlio, e i fratelli Weasley lo trattano come un pari.<br>
	•	Sirius Black: Il padrino di Harry è la figura paterna che Harry ha sempre desiderato. <br>
		La sua morte segna uno dei momenti più dolorosi della vita di Harry.<br>
	•	I Malfoy: Una famiglia che rappresenta la purezza del sangue e l’ambizione, <br>
		ma che durante la saga affronta conflitti interni e mostra debolezze umane.<br>
<br>
</p>`,

  `<h3>Personaggi Secondari e il Loro Impatto <br></h3>
<p>
	•	Neville Paciock: Da un ragazzo timido e insicuro, si trasforma in un leader coraggioso, dimostrando che anche i più improbabili possono diventare eroi.<br>
	•	Luna Lovegood: La sua unicità e il suo coraggio la rendono un’amica preziosa per Harry e gli altri, insegnando l’importanza di accettare le differenze.<br>
	•	Dobby: L’elfo domestico che sacrifica la sua vita per Harry, dimostrando che anche i più piccoli possono compiere grandi gesti.

<br>
</p>`
];

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let terzoesameButton = document.getElementById("terzoesameButton");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 terzoesameButton.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 terzoesameButton.style.display = "none";
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
