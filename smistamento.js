// Funzione per ottenere il parametro dalla query string
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Mostra il risultato
window.onload = function() {
    const house = getQueryParam('house'); // Assicurati di ottenere il parametro
    const resultDiv = document.getElementById('result');
    
    if (house) {
        switch (house.toLowerCase()) {
            case 'tassorosso':
                window.location.href = 'tassorosso.html';
                break;
            case 'serpeverde':
                window.location.href = 'serpeverde.html';
                break;
            case 'corvonero':
                window.location.href = 'corvonero.html';
                break;
            case 'grifondoro':
                window.location.href = 'grifondoro.html';
                break;
            default:
                resultDiv.textContent = "Nessun risultato trovato.";
        }
    } else {
        resultDiv.textContent = "Nessun risultato trovato.";
    }
};
