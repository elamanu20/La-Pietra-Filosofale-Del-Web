let storico = [
`<strong>L’Esercito di Silente Creato da Harry Potter</strong><br><br>
L’Esercito di Silente (ED) nasce nel quinto anno di Harry a Hogwarts, durante il regno tirannico della professoressa Dolores Umbridge come Inquisitore Supremo.<br><br>
Harry, insieme a Hermione e Ron, decide di organizzare un gruppo di studenti per insegnare incantesimi difensivi e prepararli ad affrontare le minacce esterne, tra cui Voldemort e i suoi seguaci.

<br><br>`,

`<p><strong>Obiettivi Principali:</strong><br>
	• Insegnare Difesa Contro le Arti Oscure, una materia trascurata sotto la Umbridge.<br>
	• Rafforzare il legame tra gli studenti contro il regime di paura.<br>
	• Creare una resistenza attiva contro il Ministero della Magia e i Mangiamorte.<br><br>
<strong>Luogo di Ritrovo:</strong><br>
La Stanza delle Necessità, un luogo magico che si adatta ai bisogni di chi la usa.</p><br><br>`,
`<p><strong>Membri Chiave:</strong><br>
	• <strong>Harry Potter</strong>: Leader e insegnante principale.<br>
	• <strong>Hermione Granger</strong>: Stratega e organizzatrice.<br>
	• <strong>Neville Paciock</strong>: Dimostra enorme crescita e coraggio.<br>
	• <strong>Ginny Weasley, Luna Lovegood e Cho Chang</strong>: Partecipanti attivi e talentuosi.<br><br>
L’ED gioca un ruolo fondamentale durante la Battaglia di Hogwarts, dove molti membri si uniscono per difendere la scuola.	
</p><br><br>`,
`<p><strong>L’Esercito di Silente Originale</strong><br><br>
Molti anni prima, durante la Prima Guerra dei Maghi, Albus Silente guidò un gruppo di maghi e streghe noto come l’Ordine della Fenice.<br><br>
<strong>Obiettivi Principali:</strong><br>
	• Combattere Voldemort e i Mangiamorte.<br>
	• Proteggere il mondo magico dal caos e dall’oppressione.<br><br></p>`,
`<p><strong>Membri Chiave:</strong><br>
	• <strong>Albus Silente</strong>: Fondatore e guida.<br>
	• <strong>James e Lily Potter</strong>: Coraggiosi combattenti e genitori di Harry.<br>
	• <strong>Sirius Black e Remus Lupin</strong>: Amici fedeli e abili duellanti.<br>
	• <strong>Molly e Arthur Weasley</strong>: Contributori fondamentali nella resistenza.<br><br>
L’Ordine della Fenice fu ricostituito durante la Seconda Guerra dei Maghi, e molti dei suoi membri combatterono al fianco dell’ED nella battaglia finale.
</p><br><br>`,
`<p><strong>La Mappa del Malandrino:</strong><br>
La Mappa del Malandrino è uno degli oggetti magici più iconici della saga. Fu creata dai quattro “Malandrini” durante i loro anni a Hogwarts:<br><br>
	• James Potter (Ramoso)<br>
	• Sirius Black (Felpato)
	• Remus Lupin (Lunastorta)<br>
	• Peter Minus (Codaliscia)<br>
</p><br><br>`,
`<p><strong>La Mappa del Malandrino:</strong><br>
Questa mappa magica mostra:<br>
	•	Una rappresentazione dettagliata di Hogwarts.<br>
	•	Le posizioni in tempo reale di tutte le persone all’interno della scuola.<br><br>
Per attivare la mappa si usa la frase:<br>
<i>“Giuro solennemente di non avere buone intenzioni.”</i><br><br>
Per disattivarla si dice:<br>
<i>“Fatto il misfatto.”</i><br><br>
La mappa gioca un ruolo cruciale per Harry e i suoi amici, permettendo loro di muoversi in segreto e monitorare i nemici.
</p><br><br>`,
];	

let indiceAttuale = 0;

function aggiornaBottoni() {
  let avantiButton = document.getElementById("avanti");
  let indietroButton = document.getElementById("indietro");
   let terzoesame3Button = document.getElementById("terzoesame3Button");

  // Disabilita il bottone "Indietro" se siamo alla prima lezione
  if (indiceAttuale === 0) {
    indietroButton.disabled = true;
  } else {
    indietroButton.disabled = false;
  }

  // Disabilita il bottone "Avanti" se siamo all'ultima lezione
  if (indiceAttuale === storico.length - 1) {
    avantiButton.disabled = true;
	 terzoesame3Button.style.display = "inline";
  } else {
    avantiButton.disabled = false;
	 terzoesame3Button.style.display = "none";
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
