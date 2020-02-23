// random util
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//
// basic array of card names
//
const theCardArray = [
  'lightbulb',
  'quaker',
  'horace',
  'meteor',
  'kite',
  'fulcrum',
  'slash',
  'coldiron',
  'milagros',
  'pufferfish',
  'sambal',
  'molten',
  'catdinner',
  'queso',
  'takoyaki',
  'univers',
];

const shuffleArray = function(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// run the shuffle / array stuff...
//
const theCardArrayLength = theCardArray.length;
const theShuffledArray = shuffleArray(theCardArray);

//
// stub out the cards
//

//
// stub out the cards
//
const cardContainer = document.getElementsByClassName('card');
const dataCardName = '';
const dataAttribute = 'data-card-name';
const singleCardHTML = `<div id="" class="card"></div>`;
const singleCardInner = `
<div class="id id-down" data-card-name="">
  <svg viewBox="0 0 100 100">
    <use xlink:href="#backOfCard" />
  </svg>
</div>
<div class="id hide">
  <svg viewBox="0 0 100 100">
    <use xlink:href="#frontOfCards" />
  </svg>
</div>`;

// We use the range and fragments methods so we can manipulate the HTML before it goes into the DOM
const singleCardInnerHTMLFragment = document.createRange().createContextualFragment(singleCardInner);

//
// Create the cards
//

const cardMap = Object.fromEntries(
  theShuffledArray.map(newCard => [
    newCard,
    {
      data: {
        attribute: `${dataAttribute}`,
        name: `${dataCardName}`,
      },
      html: singleCardHTML,
      innerHTML: singleCardInnerHTMLFragment,
      id: newCard,
      uid: `${newCard}-${getRandomInt(theCardArrayLength)}`,
      checkMatch: function(input) {
        if (input !== this.id) {
          console.log(`${input} does not match ${this.id}`);
        } else {
          console.log(`its a match: ${input} == ${this.id}`);
        }
      },
    },
  ]),
);

// console.table(cardMap);

//
// populate the DOM w/ cards
//

const numberOfCards = theCardArray.length;
const board = document.querySelector('.board');

function populateBoard(amountOfCards) {
  const generatedCard = document.getElementsByClassName('card');

  // for (let i = 0; i < amountOfCards; i++) {
  //   board.insertAdjacentHTML('beforeend', cardMap.queso.html);
  //   //   //   generatedCard[i].appendChild(cardMap[i].innerHTML);
  //   //   //   generatedCard[i].setAttribute(`${dataAttribute}`, cardMap[i].id);
  //   //   //   generatedCard[i].setAttribute(`id`, cardMap[i].id);
  //   console.log(generatedCard);
  // }
}

populateBoard(theCardArrayLength);
