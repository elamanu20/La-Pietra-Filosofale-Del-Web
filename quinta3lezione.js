let storico = [
`<p><strong>Introduzione alla Magia Nera</strong><br><br>
La <strong>magia nera</strong> è un tipo di <strong>magia malvagia</strong>, proibita e pericolosa, utilizzata per scopi egoistici, malvagi o per <strong>infliggere sofferenza</strong>.<br> 
Essa è considerata la forma più oscura di magia, perché sfrutta il potere in modo da causare danni irreparabili agli altri, e anche a chi la pratica.<br>
Un mago o una strega che si dedica alla magia nera, spesso <strong>perde la propria umanità e compie atti disumani per raggiungere il potere</strong>. <br>
Gli <strong>incantesimi di magia nera</strong> sono tra i <strong>più potenti e temuti</strong>, ed includono <strong>maledizioni mortali</strong>, <strong>incantesimi di tortura</strong> e <strong>manipolazione mentale</strong>.<br>
Il concetto di magia nera appare fin dai primi libri della saga, dove il protagonista Harry Potter deve confrontarsi con una serie di incantesimi pericolosi e malvagi, <br>
ma è nella figura di <strong>Tom Riddle</strong> (che diventerà Lord Voldemort) che la magia nera trova la sua incarnazione più perversa e potente.
<br><br><br></p>`,

`<p><strong>I Mangiamorte </strong><br><br>
<strong>Mangiamorte</strong> (Death Eaters in inglese) sono i <strong>seguaci di Lord Voldemort</strong>, devoti all’uso della magia nera e pronti a compiere qualsiasi crimine per ottenere il potere e la supremazia sulla comunità magica.<br>
 La loro organizzazione nasce sotto la guida di Voldemort, che cerca di <strong>instaurare un regime di terrore</strong>, in cui i maghi di “sangue puro” domineranno sul mondo magico e sugli altri esseri, come i maghi “mezzosangue” e i “babbani” (i non-maghi).<br>
I Mangiamorte sono facilmente riconoscibili per il marchio che portano, un marchio oscuro, noto come il <strong>Marchio Nero</strong>. <br>
Questo simbolo, un teschio con un serpente che esce dalla bocca, è tatuato sulla pelle di ciascun Mangiamorte e viene usato da Voldemort per invocare i suoi seguaci in caso di emergenza. <br>
La sua <strong>apparizione nel cielo<strong> è </strong>un segno del ritorno di Voldemort e del pericolo imminente</strong>.	
</p><br><br>`,
`<p><strong>Gli Incantesimi di Magia Nera</strong><br><br>
La magia nera si distingue per l’uso di incantesimi che hanno lo scopo di torturare, uccidere o controllare le persone. Ecco alcuni degli incantesimi più famosi legati alla magia nera:<br><br>
	1.	<strong>Avada Kedavra</strong> – L’Incantesimo della Morte, che causa la morte istantanea della vittima. Questo incantesimo è il più temuto di tutti, perché non lascia tracce fisiche e non può essere difeso.<br>
	2.	<strong>Cruciatus</strong> – L’Incantesimo della Tortura, che infligge un dolore insopportabile alla vittima senza ucciderla. È utilizzato per piegare la volontà degli altri e per punire chi non si sottomette.<br>
	3.	<strong>Imperius</strong> – L’Incantesimo di Controllo Mentale, che permette al mago che lo lancia di prendere il controllo totale del corpo e della mente di una persona, costringendola a fare qualsiasi cosa desideri.<br>
Questi incantesimi sono proibiti dal Ministero della Magia, e chi li usa è considerato colpevole di crimini gravi.
<br><br></p>`,
`<p><strong>Il Ruolo dei Mangiamorte</strong><br>
I Mangiamorte giocano un ruolo fondamentale nella trama di Harry Potter. Sono coloro che compiono il lavoro sporco di Voldemort, dal massacro di innocenti alla distruzione di intere famiglie, come quella dei Potter. <br><br>
Il loro compito principale è servire Voldemort, eliminare gli oppositori e stabilire il dominio dei “sangue puro”.
</p><br><br>`,
`<p>Alcuni dei Mangiamorte più famosi includono:<br><br>
	• <strong>Bellatrix Lestrange</strong>: una delle più fanatiche seguaci di Voldemort, che ha una fedeltà cieca verso il suo padrone. È responsabile di numerosi crimini, inclusi gli omicidi di Sirius Black e della sua famiglia.<br><br>
	• <strong>Lucius Malfoy</strong>: padre di Draco Malfoy, è un Mangiamorte di alto rango che spesso agisce come uno dei principali consiglieri di Voldemort.<br><br>
	• <strong>Severus Piton</strong>: pur essendo stato un Mangiamorte, Piton è anche un agente doppiogiochista che gioca un ruolo cruciale nell’infiltrarsi tra le fila dei Mangiamorte per conto dell’Ordine della Fenice.
</p><br><br>`,
`<p><strong>La Lotta contro la Magia Nera</strong><br><br>
Con il ritorno di Voldemort al potere, l’intero mondo magico si trova di fronte a una nuova minaccia. <br>
Tuttavia, ci sono molti che si <strong>oppongono alla magia nera</strong> e cercano di <strong>fermare i Mangiamorte</strong>. <br>
Tra questi c’è l’Ordine della Fenice, un gruppo di maghi e streghe che combattono contro Voldemort e i suoi seguaci. <br>
Personaggi come <strong>Harry Potter, Hermione Granger, Ron Weasley e Albus Silente </strong>sono tra i principali protagonisti della lotta contro la magia nera.
</p><br><br>`,
`<p><strong>Il Ministro della Magia e la Magia Nera</strong><br><br>
Anche il Ministero della Magia gioca un ruolo nella lotta contro i Mangiamorte. <br>
Tuttavia, durante gran parte della saga, il Ministero è riluttante a credere nel ritorno di Voldemort, ignorando la minaccia fino a quando non è troppo tardi. <br>
La minaccia della magia nera è visibile, ma il Ministero non interviene prontamente, consentendo ai Mangiamorte di crescere in potere e numeri.
</p><br><br>`,
];	

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let quintoesame3Button = document.getElementById("quintoesame3Button");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 quintoesame3Button.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 quintoesame3Button.style.display = "none";
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
