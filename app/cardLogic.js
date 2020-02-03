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
  const a = array.slice();
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
//
const cardContainer = document.getElementsByClassName('card');

const dataCardName = 'card-name-';

const dataAttribute = 'data-card-name';

const singleCardHTML = `<div id="" class="card"></div>`;

const singleCardInner = `
<div class="face face-down" data-card-name="">
  <svg viewBox="0 0 100 100">
    <use xlink:href="#backOfCard" />
  </svg>
</div>
<div class="face hide">
  <svg viewBox="0 0 100 100">
    <use xlink:href="#frontOfCards" />
  </svg>
</div>`;

//
// create the cards
//
const cardMap = theShuffledArray.map(newCard => {
  const singleCardParentHTMLFragment = document.createRange().createContextualFragment(singleCardHTML);

  const singleCardInnerHTMLFragment = document.createRange().createContextualFragment(singleCardInner);

  const card = {};
  (card.face = newCard),
    (card.id = `${newCard}-${getRandomInt(theCardArrayLength)}`),
    (card.data = `${dataAttribute}`),
    (card.html = singleCardHTML),
    (card.innerHTML = singleCardInnerHTMLFragment),
    (card.check = function(input) {
      if (input !== this.face) {
        console.log(`${input} does not match ${this.face}`);
      } else {
        console.log(`its a match: ${input} == ${this.face}`);
      }
    });
  return card;
});

//
// Need input from a clicked on card
//

// console.log(cardMap[3].id);
// console.log(cardMap[3].face);
// console.log(cardMap[3].check('meteor'));

//
// populate boards logic
//
const numberOfCards = theCardArray.length;

const board = document.querySelector('.board');

populateBoard(numberOfCards);

function populateBoard(amountOfCards) {
  const generatedCard = document.getElementsByClassName('card');
  for (let i = 0; i < amountOfCards; i++) {
    // console.log('things are happening...', dataCardName);
    // singleCard can be the output of a function
    // console.log(cardMap);
    board.insertAdjacentHTML('beforeend', cardMap[i].html);
    generatedCard[i].appendChild(cardMap[i].innerHTML);
    generatedCard[i].setAttribute(`${dataAttribute}`, cardMap[i].id);
    generatedCard[i].setAttribute(`id`, cardMap[i].id);
    // generatedCard[i].setAttribute('data-card-yo', 'yo-yo');
  }
}

//
// matching logic...still quite unfinished
//

const time = 2000;
// console.log(firstItem);
// console.log(theRest);
// console.log(secondItem)
// const gravity = true;
const isMatch = false;

const player = {
  name: theCardArray[3],
};

function resolvedPromise() {
  console.log(`the promise resolved and ${player.name} has made a match`);
}

function rejectedPromise() {
  console.log('the promise was rejected! REJECTED! try again!');
}

const gravityAlways = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isMatch !== false) {
      console.log('rejected');
      reject(rejectedPromise());
    } else {
      resolve(resolvedPromise());
    }
  }, time);
});

// gravityAlways.then(messagesFromPromise());
// console.log(gravityAlways)
gravityAlways.then(console.log(`some time: ${time / 100} seconds is passing... Before the promise is set to resolve...`));
