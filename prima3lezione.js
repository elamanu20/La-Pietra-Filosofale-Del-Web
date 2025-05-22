let storico = [
`La Seconda Battaglia di Hogwarts rappresenta l’epico culmine della saga di Harry Potter, un evento che mette in scena il confronto finale tra il bene e il male. <br>
La battaglia si svolge nelle sale, nei corridoi e nei terreni di Hogwarts, trasformando la scuola in un campo di guerra. <br>
Questo scontro segna la fine del regno di terrore di Voldemort e la vittoria della resistenza magica.
<br><br>`,

`<h3>Contesto della Battaglia<br></h3>
<p>	•<strong>Il ritorno di Voldemort</strong>: Dopo anni di preparazione e conflitti, Voldemort cerca di dominare il mondo magico e uccidere Harry Potter, l’unico ostacolo al suo potere assoluto.<br><br>
	•<strong>Hogwarts come ultimo rifugio</strong>: La scuola diventa l’ultima roccaforte della resistenza contro Voldemort, guidata da Harry, Ron e Hermione insieme all’Ordine della Fenice e agli studenti.<br><br>
	•<strong>L’Horcrux mancante</strong>: La battaglia inizia con l’arrivo di Harry a Hogwarts, dove cerca di trovare e distruggere l’ultimo Horcrux: la diadema di Corvonero.</p><br><br>`,
`<h3>I Momenti Chiave della Battaglia<br></h3>
<p>
1.<strong>L’inizio dello scontro</strong>:<br>
Voldemort e i suoi seguaci, i Mangiamorte, attaccano Hogwarts, assistiti da giganti, ragni della Foresta Proibita e Dissennatori. Gli studenti, i professori e l’Ordine della Fenice si uniscono per difendere la scuola.<br><br>
2.<strong>La distruzione degli Horcrux</strong>:<br>
	•<strong>Hermione e Ron distruggono la coppa di Tassorosso</strong> nella Camera dei Segreti con una zanna di Basilisco.<br>
	•<strong>Harry trova la diadema di Corvonero</strong> nella Stanza delle Necessità, e questa viene distrutta accidentalmente da Vincent Tiger con il fuoco maledetto.<br><br></p>`,
`3.<strong>Il sacrificio di Harry</strong>:<br>
Scoperto di essere lui stesso un Horcrux, Harry si consegna a Voldemort nella Foresta Proibita, permettendo a Voldemort di “ucciderlo”. <br>
Tuttavia, Harry sopravvive grazie alla protezione magica lasciata da sua madre e ritorna per il confronto finale.<br><br>
4.<strong>La sconfitta di Voldemort</strong>:<br>
	•<strong>Neville Paciock</strong> dimostra un immenso coraggio decapitando Nagini, l’ultimo Horcrux.<br>
	•<strong>Harry e Voldemort</strong> si affrontano nella Sala Grande, dove l’incantesimo di Voldemort rimbalza contro di lui, distruggendolo definitivamente.<br><br></p>`,
`<h3>I Protagonisti della Battaglia<br></h3>
<p> •<strong>Harry Potter</strong>: Il prescelto, il leader della resistenza e l’eroe che si sacrifica per salvare il mondo magico.<br><br>
	•<strong>Neville Paciock</strong>: Diventa un vero eroe decapitando Nagini, mostrando il suo valore come Grifondoro.<br><br>
	•<strong>Minerva McGranitt</strong>: Guida con maestria la difesa di Hogwarts, incitando gli studenti e i professori.<br><br>
	•<strong>Molly Weasley</strong>: Sconfigge Bellatrix Lestrange in un duello epico, dimostrando la forza dell’amore materno.<br><br>
	•<strong>Lord Voldemort</strong>: L’antagonista principale, spietato e ossessionato dal potere. La sua caduta segna la fine del suo regno di terrore.<br><br></p>`,
`<h3>Le Conseguenze della Battaglia<br></h3>
	•<strong>La fine dell’era di Voldemort</strong>: Con la morte di Voldemort, il mondo magico si libera dal suo controllo.<br><br>
	•<strong>Perdite significative</strong>: Molti eroi cadono durante lo scontro, tra cui Fred Weasley, Remus Lupin, Nymphadora Tonks e Severus Piton.<br><br>
	•<strong>Un nuovo inizio</strong>: Hogwarts viene ricostruita, e il mondo magico inizia una nuova era di pace e unità.<br><br></p>
`,
];	

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let primoesame3Button = document.getElementById("primoesame3Button");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 primoesame3Button.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 primoesame3Button.style.display = "none";
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
