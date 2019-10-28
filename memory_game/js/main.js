var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png',
    }, {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png',
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png',
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png',
    },

];
var cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert('You found a match');
        } else {
            alert('Sorry, try again.');
        }
        reset();
    }
}

function flipCard(event) {
    const card = event.target;
    if (card.tagName.toLowerCase() !== 'img') {
        return;
    }

    const cardId = parseInt(card.getAttribute('data-id'));
    card.setAttribute('src', cards[cardId].cardImage);

    console.log(`User flipped ${cards[cardId].rank} of ${cards[cardId].suit} at ${cards[cardId].cardImage}`);

    cardsInPlay.push(cards[cardId].rank);

    checkForMatch();
}

function createBoard() {
    const gameBoard = document.getElementById('game-board');

    cards.forEach((card, i) => {
        const cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i.toString());

        gameBoard.appendChild(cardElement);
    });

    gameBoard.addEventListener('click', flipCard);

    document.querySelector('.reset').addEventListener('click', reset);
}

function reset() {
    cardsInPlay = [];
    const cardElements = document.querySelectorAll('img');
    cardElements.forEach(cardElement => {
        cardElement.setAttribute('src', 'images/back.png');
    });
}

createBoard();