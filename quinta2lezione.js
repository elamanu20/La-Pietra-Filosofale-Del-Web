let storico = [
`Gli <strong>animali magici</strong> occupano un posto centrale nel mondo di Harry Potter, arricchendo il folklore e la mitologia della saga.<br><br>
Alcuni sono creature pericolose e potenti, altri sono amichevoli e leali.<br><br>
Ogni animale magico ha caratteristiche uniche che lo rendono parte integrante del mondo dei maghi.<br><br>`,

`<h3>Classificazione degli Animali Magici<br></h3>
<p><strong>1. Creature pericolose</strong> <br>
Questi animali sono spesso oggetto di studio nel corso di Cura delle Creature Magiche, ma possono rappresentare una minaccia.<br><br>
•<strong>Basilisco</strong>: un enorme serpente capace di uccidere con il suo sguardo. Vive nella Camera dei Segreti ed è controllato dai discendenti di Serpeverde.<br><br>
•<strong>Drago</strong>: creatura potente e rara. Esistono diverse specie, come il Ungaro Spinato e il Verde Gallese. <br>I draghi sono spesso usati in tornei magici come il Torneo Tremaghi.</p><br><br>`,
`<h3>Classificazione degli Animali Magici<br></h3>
<p><strong>2. Creature leali</strong><br><br>
•<strong>Hedwig (Edvige)</strong>: la civetta delle nevi di Harry, simbolo di fedeltà e comunicazione.<br><br>
•<strong>Fanny</strong>: la fenice di Silente, nota per le sue lacrime curative e la sua capacità di rinascere dalle proprie ceneri.<br><br></p>`,
`<h3>Classificazione degli Animali Magici<br></h3>
<p><strong>3. Creature intelligenti</strong><br><br>
Alcuni animali possiedono una propria intelligenza e possono comunicare con i maghi<br><br>
•<strong>Thestral</strong>: cavalli alati visibili solo da chi ha visto la morte.<br>Sono simbolo di coraggio e accettazione della mortalità.<br><br>
•<strong>Ippogrifi</strong>: mezzo cavallo e mezzo uccello, sono creature orgogliose che richiedono rispetto. <br>Fierobecco è l’esempio più noto nella saga.<br><br></p>`,
`<h3>Classificazione degli Animali Magici<br></h3>
<p><strong>4. Creature curiose e particolari</strong><br><br>
Animali che attirano l’attenzione per il loro comportamento o abilità magiche.<br><br>
•<strong>Niffler</strong>: creatura che ama gli oggetti luccicanti. <br>Piccolo e simpatico, può essere problematico per chi possiede gioielli.
.<br><br>
•<strong>Mandragola</strong>: una pianta semi-animale, il cui urlo può essere letale.<br><br></p>`,
`<h3>Ruolo degli Animali Magici nella Saga<br></h3>
<p> <strong>Supporto ai personaggi</strong><br><br>
Gli animali come Edvige, Crosta e Fanny sono preziosi alleati per i protagonisti.<br><br>
I Thestral aiutano Harry e i suoi amici a raggiungere il Ministero della Magia nella Camera dei Segreti.<br><br></p>
`,
`<h3>Ruolo degli Animali Magici nella Saga<br></h3>
<p> <strong>Simbolismo</strong><br><br>
Gli animali riflettono temi centrali della saga, come il coraggio (Thestral), <br>la rinascita (Fenice) e la mortalità (Basilisco).<br><br>
<strong>Protagonisti in eventi chiave</strong><br><br>
Il Basilisco è l’antagonista principale nel secondo libro<br><br>.
Fierobecco gioca un ruolo cruciale nel salvare Sirius Black.<br><br></p>
`,
`<h3>Regole per il Trattamento degli Animali Magici<br></h3>
<p>Il Ministero della Magia ha regolamenti rigorosi per la gestione degli animali magici:<br><br>
	1. <strong>Non tutti possono possedere creature pericolose</strong>.<br><br>
	2. <strong>Gli studenti imparano a rispettare e prendersi cura degli animali in Cura delle Creature Magiche</strong>.<br><br>
	3. <strong>È importante comprendere il loro comportamento prima di interagire con essi</strong>.<br><br></p>
`
];	

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let quintoesame2Button = document.getElementById("quintoesame2Button");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 quintoesame2Button.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 quintoesame2Button.style.display = "none";
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
