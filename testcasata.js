function calculateResult() {
    const answers = {
        Grifondoro: 0,
        Serpeverde: 0,
        Corvonero: 0,
        Tassorosso: 0
    };

    // Seleziona tutte le domande
    const questions = document.querySelectorAll('.question');

    // Conta le risposte per ogni casa
    questions.forEach((question, index) => {
        const selectedAnswer = question.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selectedAnswer) {
            answers[selectedAnswer.value]++;
        }
    });

    // Trova la casa con il punteggio più alto
    let highestScore = 0;
    let house = '';
    for (const key in answers) {
        if (answers[key] > highestScore) {
            highestScore = answers[key];
            house = key;
        }
    }

    
    if (house) {
        window.location.href = `${house.toLowerCase()}.html`;
    } else {
        alert("Per favore, rispondi a tutte le domande!");
    }
}
