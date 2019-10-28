var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log('You found a match');
        } else {
            console.log('Sorry, try again.');
        }
    }
}

function flipCard(id) {
    console.log(`User flipped ${cards[id]}`);

    cardsInPlay.push(cards[id]);

    checkForMatch();
}

flipCard(0);
flipCard(2);
