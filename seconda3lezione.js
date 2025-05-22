let storico = [
`Uno degli aspetti centrali della saga di Harry Potter è il legame unico e complesso tra il protagonista, Harry Potter, e il suo principale antagonista, Lord Voldemort. <br>
Questo collegamento è sia magico che personale, influenzando profondamente il corso degli eventi.
<br><br>`,

`<h3>Le Origini del Collegamento<br></h3>
<p><strong>1.	La Profezia</strong><br>
La profezia fatta da Sibilla Cooman recita:<br><br>
<i>“Colui che ha il potere di sconfiggere il Signore Oscuro si avvicina… nato da coloro che lo hanno sfidato tre volte, nato al calar del settimo mese… e il Signore Oscuro lo considererà suo eguale, ma uno dei due dovrà morire per mano dell’altro, poiché nessuno dei due può vivere se l’altro sopravvive.”</i><br><br>
Voldemort interpreta questa profezia riferendosi a Harry e lo sceglie come sua nemesi, stabilendo il loro legame.
</p><br><br>`,
`<p><strong>2.	Il Tentativo di Omicidio</strong>
Quando Voldemort cerca di uccidere il neonato Harry, il sacrificio di Lily Potter crea una protezione magica <br> così potente da far rimbalzare l’incantesimo mortale su Voldemort stesso.<br> <br>Questo evento:<br><br>
	•	<strong>Distrugge il corpo di Voldemort.</strong><br>
	•	<strong>Trasforma Harry in un Horcrux involontario.</strong><br><br></p>`,
`<h3>Le Manifestazioni del Collegamento<br></h3>
<p> 1.<strong>La Cicatrice</strong><br>
La cicatrice a forma di saetta di Harry non è solo un segno fisico, ma un simbolo del legame tra lui e Voldemort. <br>È un canale attraverso cui Harry può percepire i pensieri, le emozioni e la presenza del Signore Oscuro.<br>
	2.	<strong>Il Legame Mentale</strong><br>
	•	Harry è in grado di vedere episodi attraverso gli occhi di Voldemort, come quando assiste ai suoi attacchi o percepisce le sue emozioni più forti.<br>
	•	Voldemort, a sua volta, cerca di manipolare il legame per ingannare Harry, come nel caso della visione falsa della tortura di Sirius Black.<br>
	3.	<strong>La Connessione degli Horcrux</strong><br>
Essendo un Horcrux involontario, Harry ospita un frammento dell’anima di Voldemort. Questo lo rende capace di parlare il serpentese e lo lega profondamente alla mente del Signore Oscuro.<br><br></p>`,
`<h3>Lo Scontro Finale<br></h3>
	<strong>1.	La Scoperta della Verità</strong><br>
Nel settimo libro, Harry Potter e i Doni della Morte, Harry scopre di essere un Horcrux. Per sconfiggere Voldemort, deve sacrificarsi, permettendo al frammento dell’anima di Voldemort dentro di lui di essere distrutto.<br><br>
	<strong>2.	Il Sacrificio di Harry</strong><br>
Harry si consegna a Voldemort nella Foresta Proibita. Quando Voldemort lo colpisce con l’Avada Kedavra, solo il frammento della sua anima viene distrutto, mentre Harry sopravvive grazie alla protezione di sua madre e al legame con la Bacchetta di Sambuco.<br><br></p>
`,
`<h3>Lo Scontro Finale<br></h3>
<strong>3.	La Conclusione del Legame</strong><br>
Dopo la morte di Voldemort, il frammento dell’anima che collegava Harry a lui scompare. Harry è finalmente libero da questa connessione.<br><br>
<strong>Il Significato del Collegamento</strong><br>
	•	<strong>Tema del Destino</strong>: Harry e Voldemort sono legati dalla profezia e dal fato, ma anche dalle loro scelte personali.<br>
	•	<strong>Contrapposizione di Personalità</strong>: Harry rappresenta l’amore, il sacrificio e la compassione, mentre Voldemort incarna l’odio, l’egoismo e la paura della morte.<br>
	•	<strong>Il Trionfo dell’Amore</strong>: Il sacrificio di Lily e di Harry stesso dimostra che l’amore è l’arma più potente contro il male.<br><br></p>
`,
];	

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let secondoesame3Button = document.getElementById("secondoesame3Button");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 secondoesame3Button.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 secondoesame3Button.style.display = "none";
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
