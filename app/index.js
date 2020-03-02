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

// push off half the array

function halfTheArray(inputArray) {
  // const halvedArray = inputArray.slice(0, inputArray.length / 2);
  return inputArray.slice(0, inputArray.length / 2);
  // return halvedArray;
}

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
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="150" width="150">
        <use href="#backOfCard" />
      </svg>
    </div>
    <div class="face-up">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="150" width="150">
      face is up now
        <use href="#frontOfCards" />
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
    checkMatch: function(input) {
      if (input !== this.id) {
        console.log(`${input} does not match ${this.id}`);
      } else {
        console.log(`its a match: ${input} == ${this.id}`);
      }
    },
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
    const { html, innerHTML, id, face, checkMatch } = cardMap[i];
    board.insertAdjacentHTML('beforeend', html);
    generatedCard[i].appendChild(innerHTML);
    generatedCard[i].setAttribute(`${dataAttribute}`, face);
    generatedCard[i].setAttribute(`id`, id);

    // generatedCard[i].setAttribute(`data-card-face`, face);
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
function stopTheClicks(cb = null) {
  console.log('you cannot click anymore');
  // keep the user from clicking again:
  cards.forEach(card => card.removeEventListener('click', handleCardClick));
  setTimeout(cb, 5000);
}

// Logic to prevent clicking on a card that is _already_ turned over, most likely the first card..

// function preventSameCardClick() {
//   console.log('you alreday selected this card');
// }

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

// Count the number of clicks on the game board
let incrementCount = 0;
function clickCount(firstClick) {
  incrementCount++;
  if (incrementCount === 1 && firstClick === firstClick) {
    console.log(firstClick, incrementCount);
    this.removeEventListener('click', handleCardClick);
  } else if (incrementCount < 2) {
    stopTheClicks(flipTheCardsBackOver);
  } else {
    return;
  }
}

function handleCardClick() {
  this.firstElementChild.classList.toggle('clicked');
  // console.log(this.dataset.cardName);
  clickCount(this.dataset.cardName);
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

// these are the same_ish
// Check the value of each click & compare the second w/ the first
function compareCardValues(firstClick, secondClick) {
  if (firstClick !== secondClick) {
    console.log('no match');
  } else {
    console.log('you matched!');
  }
}

//

// make sure the click handler is run immediately:
(() => {
  listenForClicks();
})();
