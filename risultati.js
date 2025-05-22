// risultati.js

// Recupera i punteggi dei vari test dal localStorage
const score1 = localStorage.getItem('quizScoreTest1');
const score2 = localStorage.getItem('quizScoreTest2');
const score3 = localStorage.getItem('quizScoreTest3');
const score4 = localStorage.getItem('quizScoreTest4');
const score5 = localStorage.getItem('quizScoreTest5');


const resultElement = document.getElementById('results');

let resultsText = '';

// Verifica se i punteggi esistono e aggiungi al testo dei risultati
if (score1 !== null) {
    resultsText += `Test 1: Hai ottenuto ${score1} su 5<br>`;
}
if (score2 !== null) {
    resultsText += `Test 2: Hai ottenuto ${score2} su 5<br>`;
}
if (score3 !== null) {
    resultsText += `Test 3: Hai ottenuto ${score3} su 5<br>`;
}
if (score4 !== null) {
    resultsText += `Test 4: Hai ottenuto ${score4} su 5<br>`;
}
if (score5 !== null) {
    resultsText += `Test 5: Hai ottenuto ${score5} su 5<br>`;
}
// Aggiungi risultati per gli altri test

// Se non ci sono punteggi, mostra un messaggio
if (resultsText === '') {
    resultsText = "Nessun punteggio trovato. Completa i test per vedere i risultati.";
}

resultElement.innerHTML = resultsText;
