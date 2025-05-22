const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const ingredientiContainer = document.getElementById('ingredientiContainer');
const ingredientiCards = document.querySelectorAll('.ingrediente-card');
const risultatoPozione = document.getElementById('risultatoPozione');
let ingredientiSelezionati = [];

// Aggiungi evento di clic sulle card
ingredientiCards.forEach(card => {
    card.addEventListener('click', () => {
        const nomeIngrediente = card.getAttribute('data-nome');
        const immagineIngrediente = card.getAttribute('data-immagine');

        // Aggiungi o rimuovi l'ingrediente dalla selezione
        if (ingredientiSelezionati.find(ingrediente => ingrediente.nome === nomeIngrediente)) {
            ingredientiSelezionati = ingredientiSelezionati.filter(ingrediente => ingrediente.nome !== nomeIngrediente);
            card.style.borderColor = '#ddd'; // Rimuove il bordo verde
        } else {
            ingredientiSelezionati.push({ nome: nomeIngrediente, immagine: immagineIngrediente });
            card.style.borderColor = '#4CAF50'; // Aggiunge il bordo verde
        }
    });
});
// Gestione delle frecce del carosello
const cardWidth = ingredientiCards[0].offsetWidth + 10; // Larghezza della card + margine

prevBtn.addEventListener('click', () => {
    ingredientiContainer.scrollLeft -= cardWidth;
});

nextBtn.addEventListener('click', () => {
    ingredientiContainer.scrollLeft += cardWidth;
});
// Le combinazioni delle pozioni
const pozioni = {
    "Alchemilla, Fata, Petali di Rosa, Unicorno, Zenzero": {
        nome: "Pozione di Bellezza",
        descrizione: "Trasforma l'aspetto di chi la beve, facendola diventare attraente. Tuttavia l'effetto è solo temporaneo"
    },
    "Polvere di Fenice, Ruggine di Drago": {
        nome: "Pozione della Forza Draconica",
        descrizione: "Aumenta la resistenza fisica e magica per un breve periodo"
    },
    "Acqua di Luna, Peperoncino in Polvere, Petali di Rosa, Uova di Ashwinder": {
        nome: "Pozione Amortentia",
        descrizione: "Crea una potente infatuazione o ossessione per una persona, ma non il vero amore, che non si può creare artificialmente."
    },
	"Bucaneve, Mandragola, Piume di Jobberknoll, Salvia": {
        nome: "Pozione della Memoria",
        descrizione: "Migliora la memoria e la concentrazione"
    },
	
	"Assenzio, Mandragola, Unicorno": {
        nome: "Pozione Oculus",
        descrizione: "Ripristina la vista del bevitore, contrastando gli effetti della maledizione della congiuntivite."
    },
    // Altre combinazioni...
};

// Funzione per creare il nome della pozione in base agli ingredienti selezionati
function getNomePozione(ingredienti) {
    // Ordina gli ingredienti alfabeticamente
    const nomi = ingredienti.map(ingrediente => ingrediente.nome);
    nomi.sort(); // Ordina i nomi degli ingredienti
    return nomi.join(", "); // Restituisce la stringa combinata ordinata
}

// Evento per creare la pozione
document.getElementById('creaPozioneBtn').addEventListener('click', function() {
    risultatoPozione.innerHTML = '';

    if (ingredientiSelezionati.length > 0) {
        const nomePozione = getNomePozione(ingredientiSelezionati);

        if (pozioni[nomePozione]) {
            const pozione = pozioni[nomePozione];

            const nomeElement = document.createElement('h3');
            nomeElement.textContent = pozione.nome;

            risultatoPozione.appendChild(nomeElement);

            if (pozione.descrizione) { // Verifica se la pozione ha una descrizione
                const descrizioneElement = document.createElement('p');
                descrizioneElement.textContent = pozione.descrizione;
                risultatoPozione.appendChild(descrizioneElement);
            } else if (pozione.immagine) { // Verifica se la pozione ha un'immagine
                const imgElement = document.createElement('img');
                imgElement.src = 'Immagini/' + pozione.immagine;
                imgElement.alt = pozione.nome;
                risultatoPozione.appendChild(imgElement);
            }
        } else {
            risultatoPozione.textContent = "Combinazione di ingredienti non valida per creare una pozione.";
            risultatoPozione.style.fontFamily = "New Rocker";
            risultatoPozione.style.color = "moccasin";
            risultatoPozione.style.fontSize = "20px";
        }
    } else {
        risultatoPozione.textContent = "Non hai selezionato ingredienti per creare una pozione.";
        risultatoPozione.style.fontFamily = "New Rocker";
        risultatoPozione.style.color = "moccasin";
        risultatoPozione.style.fontSize = "20px";
    }
});

const toggleRicettarioBtn = document.getElementById('toggleRicettario');
const ricettario = document.getElementById('ricettario');

toggleRicettarioBtn.addEventListener('click', () => {
    if (ricettario.style.display === 'none') {
        ricettario.style.display = 'block';
    } else {
        ricettario.style.display = 'none';
    }
});