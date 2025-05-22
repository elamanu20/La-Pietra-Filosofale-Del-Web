let storico = [
`I <strong>Doni della Morte</strong> sono tre oggetti magici leggendari descritti nel racconto La Storia dei <strong>Tre Fratelli</strong>, contenuto nel libro <strong>Le Fiabe di Beda il Bardo</strong>. <br><br>
Secondo la leggenda, questi doni furono creati dalla Morte stessa e donati ai <strong>fratelli Peverell</strong>. <br><br>
 Essi rappresentano il potere, l’amore e il confronto con la mortalità, ed esercitano un’influenza significativa nella saga di Harry Potter.`,

`<h3>La Legenda dei Tre Fratelli<br></h3>
<p><strong>La Storia</strong> <br>
Secondo il racconto, tre fratelli incontrarono la Morte su un ponte pericoloso che avevano attraversato con successo grazie alla loro magia. La Morte, impressionata, offrì loro un dono ciascuno.<br><br>
Il Primo Fratello chiese una bacchetta imbattibile:<strong><u>la Bacchetta di Sambuco</u>.</strong> <br><br>
Il Secondo Fratello chiese il potere di richiamare i morti:<strong><u>la Pietra della Resurrezione</u>. </strong><br><br>
Il Terzo Fratello, il più saggio, chiese qualcosa per sfuggire alla Morte:<strong><u>il Mantello dell’Invisibilità</u>. </strong></p><br><br>`,
`<h3>Il Destino dei Fratelli<br></h3>
		 <p>•Il <strong>primo</strong> fu <strong>ucciso</strong> per <strong>ottenere la bacchetta</strong>.<br><br>
			•Il <strong>secondo morì di disperazione</strong> richiamando la sua amata defunta.<br><br>
			•Il <strong>terzo visse</strong> a lungo nascosto e <strong>affrontò la Morte</strong> solo quando fu pronto.</p><br>`,
`<h3>I Tre Doni della Morte<br></h3>
<p><strong>La Bacchetta di Sambuco</strong><br><br>
•<strong>Descrizione</strong>: la bacchetta più potente mai esistita, realizzata da un ramo di sambuco.<br><br>
•<strong>Caratteristiche</strong>: è imbattibile in duello, ma porta violenza e morte al suo possessore.<br><br>
•<strong>Storia nella saga</strong>: Voldemort la cerca ossessivamente per sconfiggere Harry, ma essa riconosce Harry come suo padrone.<br><br>
•<strong>Destino finale</strong>: Harry sceglie di non usarla e la restituisce alla tomba di Silente.<br>`,
`<h3>I Tre Doni della Morte<br></h3>
<p><strong>La Pietra della Resurrezione</strong><br><br>
•<strong>Descrizione</strong>: una pietra magica che permette di richiamare le anime dei defunti.<br><br>
•<strong>Caratteristiche</strong>: i morti richiamati non tornano davvero, ma rimangono come ombre malinconiche.<br><br>
•<strong>Storia nella saga</strong>: trovata nell’anello di Orvoloson Gaunt, usata da Harry per vedere i suoi cari prima della battaglia finale.<br><br>
•<strong>Destino finale</strong>: Harry abbandona la pietra nella Foresta Proibita.<br>`,
`<h3>Il Mantello dell’Invisibilità<br></h3>
<p><strong>La Pietra della Resurrezione</strong><br><br>
•<strong>Descrizione</strong>: un mantello che rende chi lo indossa completamente invisibile.<br><br>
•<strong>Caratteristiche</strong>: diverso dai normali mantelli d’invisibilità, non si deteriora con il tempo ed è unico nel suo genere.<br><br>
•<strong>Storia nella saga</strong>: appartiene a Harry, tramandato di generazione in generazione dalla famiglia Peverell.<br><br>
•<strong>Destino finale</strong>: rimane in possesso di Harry.<br>`,
`<h3>Il Significato dei Doni nella Saga<br></h3>
<p>•<strong>La Bacchetta di Sambuco</strong> simboleggia la brama di potere e la sua distruttività.<br><br>
•<strong>La Pietra della Resurrezione</strong> rappresenta l’incapacità di lasciar andare il passato e accettare la perdita.<br><br>
•<strong>Il Mantello dell’Invisibilità</strong> simboleggia la saggezza e l’accettazione della mortalità.<br><br>`,
`<h3>Il Maestro della Morte<br></h3>
<p>Secondo la leggenda, chi possiede tutti e tre i Doni diventa il <strong>Maestro della Morte</strong>, qualcuno che non teme la morte ma la accetta<br>
<strong>Harry</strong>, pur avendo tutti e tre i Doni, sceglie di non usarli per il potere.<br>
Questo lo rende il <strong>vero Maestro della Morte</strong>, in quanto ha affrontato la morte con coraggio e ha rinunciato all’immortalità.</p><br><br>`,
];	

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let quartoesame2Button = document.getElementById("quartoesame2Button");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 quartoesame2Button.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 quartoesame2Button.style.display = "none";
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
