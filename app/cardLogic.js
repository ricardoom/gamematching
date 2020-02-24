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
  // const a = array.slice();
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

//
// card elements
//

// run the shuffle / array stuff...
//
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
  <div class="face-down">
    <svg viewBox="0 0 100 100">
      <use xlink:href="#backOfCard" />
    </svg>
  </div>
  <div class="face-up">
    <svg viewBox="0 0 100 100">
      <use xlink:href="#frontOfCards" />
    </svg>
  </div>
`;

const singleCardInnerTwo = `
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
//
const cardMap = theShuffledArray.map(newCard => {
  const singleCardInnerHTMLFragment = document.createRange().createContextualFragment(singleCardInnerTwo);

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
// check for matches
// TODO: move to module
function checkForMatch(input) {
  if (input !== this.face) {
    console.log(`${input} does not match ${this.face}`);
  } else {
    console.log(`its a match: ${input} == ${this.face}`);
  }
}

//
// populate boards logic
// TODO: move to module
const board = document.querySelector('.board');

function populateBoard(amountOfCards) {
  const generatedCard = document.getElementsByClassName('card');

  for (let i = 0; i < amountOfCards; i++) {
    board.insertAdjacentHTML('beforeend', cardMap[i].html);
    generatedCard[i].appendChild(cardMap[i].innerHTML);
    generatedCard[i].setAttribute(`${dataAttribute}`, cardMap[i].id);
    generatedCard[i].setAttribute(`id`, cardMap[i].id);
  }
}

populateBoard(theCardArray.length);

//
// matching logic...
// TODO: move to module

//
// game play
// TODO: move to module

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
    if (parent.firstElementChild.classList.contains('clicked') == true) {
      parent.firstElementChild.classList.toggle('clicked');
    } else {
      console.log('some shit');
      listenForClicks();
      inc = 0;
    }
  }
}

// count the number of clicks on the game board
let inc = 0;
function clickCount() {
  inc++;
  if (inc < 2) {
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

(() => {
  listenForClicks();
})();
