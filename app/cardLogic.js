//
// A Matching Game
//

// random util

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//
// basic array of card names
//

const theCardArray = [
  'light-bulb',
  'quaker',
  'horace',
  'meteor',
  'kite',
  'fulcrum',
  'slash',
  'cold-iron',
  'milagros',
  'puffer-fish',
  'sambal',
  'molten',
  'cat-dinner',
  'queso',
  'tako-yaki',
  'univers',
];

// this shuffle array function came from stack overflow.
// this version does not mutate the original array

const shuffleArray = function(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// run the shuffle / array stuff...

const theShuffledArray = shuffleArray(theCardArray);

const theCardArrayLength = theCardArray.length;

//
// stub out the cards
//

const cardContainer = document.getElementsByClassName('card');

const dataCardName = '';

const dataAttribute = 'data-card-name';

const singleCardHTML = `<div id="" class="card"></div>`;

const singleCardInner = `
  <div class="card-body">
    <div class="face-down">
      <svg viewBox="0 0 100 100">
        <use xlink:href="#backOfCard" />
      </svg>
    </div>
    <div class="face-up">
      <svg viewBox="0 0 100 100">
      face is up now
        <use xlink:href="#frontOfCards" />
      </svg>
    </div>
  </div>
  
`;

//
// create the cards
// TODO: move to module
//

const cardMap = theShuffledArray.map(newCard => {
  const singleCardInnerHTMLFragment = document.createRange().createContextualFragment(singleCardInner);

  const freshCard = {
    face: newCard,
    id: `${newCard}-${getRandomInt(theCardArrayLength)}`,
    html: singleCardHTML,
    innerHTML: singleCardInnerHTMLFragment,
  };

  const oneCard = Object.create(freshCard);
  return oneCard;
});

//
// populate boards logic
// TODO: move to module
// TODO: Artwork for each card
// TODO: create pairs to be matched
//

const board = document.querySelector('.board');

function populateBoard(amountOfCards) {
  const generatedCard = document.getElementsByClassName('card');

  for (let i = 0; i < amountOfCards; i++) {
    const { html, innerHTML, id } = cardMap[i];
    board.insertAdjacentHTML('beforeend', html);
    generatedCard[i].appendChild(innerHTML);
    generatedCard[i].setAttribute(`${dataAttribute}`, id);
    generatedCard[i].setAttribute(`id`, id);
  }
}

populateBoard(theCardArray.length);

//
// game play
// TODO: move to module
//

const cards = document.querySelectorAll('.card');

const cardBody = document.querySelector('.card-body');

// a function to keep user from clicking any more cards:
function stopTheClicks(cb) {
  console.log('you cannot click anymore');
  // keep the user from clicking again:
  cards.forEach(card => card.removeEventListener('click', handleCardClick));
  setTimeout(cb, 5000);
}

// a function to cause clicked cards to flip back over:
// put this behind a setTimeout() on the click handler?
// so, check to see if two cards have been clicked, then kick off this function
function flipTheCardsBackOver() {
  for (const parent of cards) {
    if (parent.firstElementChild.classList.contains('clicked')) {
      parent.firstElementChild.classList.toggle('clicked');
    } else {
      listenForClicks();
      // reset incrementCount
      incrementCount = 0;
    }
  }
}

// count the number of clicks on the game board
let incrementCount = 0;
function clickCount() {
  incrementCount++;
  if (incrementCount < 2) {
  } else {
    stopTheClicks(flipTheCardsBackOver);
  }
}

function handleCardClick() {
  this.firstElementChild.classList.toggle('clicked');
  clickCount();
}

// Add event listener
function listenForClicks() {
  cards.forEach(function(card) {
    card.addEventListener('click', handleCardClick);
  });
}

// check for matches
// TODO: probalby not what is below this...
// TODO: Scoring, When match is made leaving the cards facing up, End of Game,
function checkForMatch(input) {
  if (input !== this.face) {
    console.log(`${input} does not match ${this.face}`);
  } else {
    console.log(`its a match: ${input} == ${this.face}`);
  }
}

//

// make sure the click handler is run immediately:
(() => {
  listenForClicks();
})();
