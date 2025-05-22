function checkAnswers(event) {
	event.preventDefault();
    const answers = {
        q1: 'c',
        q2: 'c',
        q3: 'b',  
        q4: 'b',
		q5: 'b'
    };
    
    let score = 0;
    const form = document.getElementById('quiz-form');
    
    for (let question in answers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
		const correctInput = form.querySelector(`input[name="${question}"][value="${answers[question]}"]`);
    if (selected && selected.value === answers[question]) {
        score++;
        }
		
	if (correctInput) {
            const label = correctInput.parentElement;
            label.classList.add('correct-answer');
        }
		
		if (selected && selected.value !== answers[question]) {
        const wrongLabel = selected.parentElement;
        wrongLabel.classList.add('wrong-answer');
		}
    }
	
    
    const result = document.getElementById('result');
    result.textContent = `Hai ottenuto ${score} su 5`;
	   localStorage.setItem('quizScoreTest5', score);

	  const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.disabled = true; // Disabilita ogni radio button
    });
	 const continueButton = document.getElementById('continue-button');
    continueButton.style.display = 'block'; // Mostra il pulsante
}

function continueToNext() {
    // Puoi reindirizzare a un'altra pagina
    // window.location.href = 'prossima_pagina.html';
    
    // Oppure puoi ripristinare il quiz
    const form = document.getElementById('quiz-form');
	form.addEventListener('submit', checkAnswers);
    form.reset(); // Ripristina le risposte

    const result = document.getElementById('result');
    result.textContent = ''; // Nasconde il risultato

    const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.disabled = false; // Riabilita i radio button
    });

    // Nascondi il pulsante "Continua"
    const continueButton = document.getElementById('continue-button');
    continueButton.style.display = 'none';
}
