let storico = [
`<strong>Chi è Gellert Grindelwald?</strong><br><br>Gellert Grindelwald è uno dei maghi più potenti e oscuri nella storia del mondo magico, noto per essere stato uno degli avversari più pericolosi di Albus Silente. <br><br>
La sua ideologia di supremazia magica e il suo desiderio di dominare il mondo muggle lo hanno reso un pericolo per l’intero mondo magico.
<br><br><br>`,

`<p><strong>Ideologia e Obiettivi</strong><br><br>
Grindelwald credeva fermamente che i maghi dovessero governare il mondo muggle per proteggere i loro segreti e preservare la magia. <br>La sua visione del mondo magico lo portò a combattere per la “grande causa” dei maghi puri, <br>ma la sua versione della supremazia magica giustificava metodi brutali e violenti.<br><br>
L’inizio dei suoi piani ebbe luogo con la creazione di un’alleanza con alcuni dei maghi più oscuri del tempo, <br>come i Mangiamorte di Voldemort, benché non fossero sempre allineati nella stessa visione.</p><br><br>`,
`<p><strong>Ascesa al Potere</strong><br><br>
Grindelwald riuscì a raccogliere un vasto seguito grazie alla sua carisma, alle sue idee e ai suoi poteri. <br>
Era in grado di manipolare le masse e i suoi sostenitori, dando vita alla sua guerra di conquista per un “Nuovo Ordine” sotto il suo dominio. <br>
Grindelwald conquistò gran parte dell’Europa e fu l’artefice della costruzione del “Castello di Nurmengard”, dove imprigionò i suoi nemici e rivali.	
</p><br><br>`,
`<p><strong>Il Legame con Albus Silente</strong><br><br>
Albus Silente e Gellert Grindelwald si conobbero da giovani, quando entrambi studiavano a Godric’s Hollow. <br>
Da ragazzi, si legarono grazie alla loro intelligenza e alle loro ambizioni. <br>
Condividevano ideali simili, in particolare l’ambizione di unire il mondo magico e migliorarlo, ma con il tempo, le loro strade presero direzioni molto diverse.
<br><br></p>`,
`<strong>L’incontro e la prima amicizia</strong><br><br>
Grindelwald e Silente si incontrarono durante la giovinezza e instaurarono una relazione profonda, non solo intellettuale ma anche emotiva. <br>
Si scambiavano idee su come migliorare il mondo magico, ma ben presto le loro convinzioni si divisero.<br><br>
Silente, pur avendo un grande rispetto per Grindelwald, non riusciva ad accettare i metodi violenti e autoritari di quest’ultimo. <br>
Questo differente approccio alla vita e al potere portò alla rottura del loro legame.
<br><br></p>`,
`<p><strong>La Separazione e la Battaglia</strong><br><br>
Dopo un tragico incidente che coinvolse il fratello di Silente, Aberforth, il loro rapporto finì bruscamente. <br>
Grindelwald, in preda al suo crescente desiderio di potere, rivelò il suo vero volto e divenne il mago oscuro che avrebbe minacciato il mondo magico per decenni. <br>
Albus, spinto dalla colpa e dal rimorso per non aver fermato Grindelwald in tempo, si dedicò a contrastarlo per il resto della sua vita.<br><br>
La loro famosa battaglia a Godric’s Hollow, nel 1945, è una delle più grandi sfide tra maghi nella storia del mondo magico. <br>
Albus Silente riuscì a sconfiggere Grindelwald, imprigionandolo a Nurmengard.
<br><br></p>`,
`<p><strong>La Caduta di Grindelwald</strong><br><br>
Dopo la sua sconfitta a mano di Silente, Grindelwald fu imprigionato a Nurmengard, dove rimase per molti anni. <br><br>
La sua caduta dal potere è un esempio di come il suo desiderio di dominare il mondo, e l’uso della magia oscura, lo portarono alla rovina.
</p><br><br>`,
`<p><strong>Il ritorno di Grindelwald</strong><br><br>
Grindelwald ritorna nell’epoca di Harry Potter attraverso il film Animali Fantastici. <br>
Il suo ritorno rappresenta una minaccia crescente per il mondo magico, e la sua alleanza con il mago oscuro Tom Riddle (Voldemort) viene svelata.<br>
Grindelwald, nonostante la sua prigionia, rimase un personaggio di spicco nella storia della magia, con un potere e una conoscenza che influenzarono il corso degli eventi futuri.
</p><br><br>`,
`<p><strong>L’Incontro Finale con Silente</strong><br><br>
In un incontro finale tra Silente e Grindelwald, il vero scopo del loro rapporto si svela. <br>
La loro separazione non fu solo una questione di ideali, ma anche di un trauma emotivo che entrambi non avevano mai superato: il desiderio di dominare il mondo, ma anche l’amore e il legame che un tempo avevano condiviso. <br>
Silente, ora consapevole del pericolo che aveva rappresentato Grindelwald, rimase comunque triste per il fallimento della loro amicizia e la perdita di ciò che avrebbero potuto essere insieme.
</p><br><br>`,
];	

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let quartosame3Button = document.getElementById("quartosame3Button");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 quartosame3Button.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 quartosame3Button.style.display = "none";
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
