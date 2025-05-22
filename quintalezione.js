let storico = [
  `Il Quidditch è lo sport più famoso e popolare del mondo magico. <br>
Si gioca su manici di scopa e coinvolge una combinazione di abilità, strategia e magia. <br>
È anche una parte fondamentale della vita a Hogwarts, dove le quattro casate competono ogni anno per la Coppa di Quidditch.`,

`<h3>Regole e Obiettivo del Gioco<br></h3>
<p>

Il Quidditch si gioca tra due squadre di sette giocatori ciascuna. <br>
Lo scopo principale è accumulare punti e, infine, catturare il Boccino d’Oro per vincere la partita. <br>
Il ampo di Gioco è un campo ovale con tre cerchi a diverse altezze a ciascuna estremità, utilizzati come porte.
<br>
</p>`,

`<h3> Le Palline del Gioco <br></h3>
<p>
1.	<strong>Pluffa</strong><br>
	•	Una grande palla rossa.<br>
	•	Serve per segnare punti, lanciandola nei cerchi avversari.<br>
	•	Vale 10 punti per ogni goal.<br><br>
2.	<strong>Bolidi</strong><br>
	•	Due sfere nere incantate che volano per colpire i giocatori.<br>
	•	I Battitori le usano per difendere la propria squadra.<br><br>
3.	<strong>Boccino d’Oro</strong><br>
	•	Una piccola sfera dorata con ali.<br>
	•	È estremamente veloce e difficile da catturare.<br>
	•	Vale 150 punti e la cattura termina la partita.
<br>
</p>`,

`<h3> Ruoli dei Giocatori <br></h3>
<p> 
1.	<strong>Portiere (1 per squadra):</strong><br>
	•	Difende i tre cerchi della propria squadra e impedisce agli avversari di segnare.<br><br>
2.	<strong>Cacciatori (3 per squadra):</strong><br>
	•	Manovrano la Pluffa per segnare nei cerchi avversari.<br>
	•	Collaborano per creare opportunità di goal.<br>`,
`3.	<strong>Battitori (2 per squadra):</strong><br>
	•	Difendono la squadra dai Bolidi.
	•	Usano mazze per deviare i Bolidi verso gli avversari.<br><br>
4.	<strong>Cercatore (1 per squadra):</strong><br>
	•	Ha il compito di trovare e catturare il Boccino d’Oro.<br>
	•	La partita termina solo quando uno dei Cercatori cattura il Boccino.
<br>
</p>`,

`<h3> Quidditch a Hogwarts <br></h3>
<p> 
Hogwarts organizza un campionato annuale di Quidditch tra le quattro casate:<br>
	•	<strong>Grifondoro</strong>: Ha vinto la Coppa molte volte durante il periodo di Harry Potter, grazie anche alla sua bravura come Cercatore.<br>
	•	<strong>Serpeverde</strong>: Conosciuta per la sua strategia aggressiva e giocatori fisicamente robusti.<br>
	•	<strong>Corvonero</strong>: Famosa per la sua astuzia e tattiche intelligenti.<br>
	•	<strong>Tassorosso</strong>: Squadra tenace e sempre pronta a lottare fino alla fine.
<br>
<br>
</p>

<h3> Storia del Quidditch <br></h3>
<p> 
	•	Originato nel XII secolo nella palude di Queerditch.<br>
	•	È regolamentato dal Dipartimento per i Giochi e gli Sport Magici.<br>
	•	Esistono campionati internazionali, tra cui la famosa Coppa del Mondo di Quidditch.
<br>
</p>`
];

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let quintoesameButton = document.getElementById("quintoesameButton");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 quintoesameButton.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 quintoesameButton.style.display = "none";
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
