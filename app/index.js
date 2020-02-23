//
// a matching game
//

// TODO: set up things
// TODO: Easy, set up an html page
// TODO: thinking of things as components:
//
//

//
// utls
//

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function returnNumberPairs(numberOfCards) {
  const theRando = getRandomInt(numberOfCards);
  return theRando % (numberOfCards / 2);
}

//
// Draw the cards
//

// const cardContainer = document.getElementsByClassName('card');

// const dataCardName = 'card-name-';

// const dataAttribute = `
//   data-card-name="${dataCardName}"
// `;

// const singleCardHTML = `
//   <div class="card" ${dataAttribute}>
//     <div class="face face-down">
//       <svg viewBox="0 0 100 100">
//         <use xlink:href="#backOfCard" />
//       </svg>
//     </div>
//     <div class="face hide">
//     <svg viewBox="0 0 100 100">
//       <use xlink:href="#frontOfCards" />
//     </svg>
//   </div>
//   </div>
// `;

//
// game logic
//

// load a board (grid of cards) face down
// checks score

// listens for click event on a card
// user click on a card
// card flips over displays icon & title
// click on another card
// that card flips over
// logic checks if they are same (some identifier)
// if same allow for another turn, and increment score

//
// generate the grid
//
const numberOfCards = 16;

const board = document.querySelector('.board');

populateBoard(numberOfCards);

function populateBoard(amountOfCards) {
  for (let i = 0; i < amountOfCards; i++) {
    // console.log('things are happening...', dataCardName);
    // singleCard can be the output of a function
    board.insertAdjacentHTML('beforeend', singleCardHTML);
  }
}

// const cards = document.querySelectorAll('.card');
// const card = document.querySelector('.card');

// function handleCardClick(event) {
//   console.log('the card is being clicked');
//   console.log(event.currentTarget.dataset);
//   //
// }

// // Add event listener
// cards.forEach(function(card) {
//   card.addEventListener('click', handleCardClick);
//   card.dataset.cardName = `${returnNumberPairs(numberOfCards)}`;
// });

// function assignCardFaces() {
//   // do forEach on this instead of for()...
//   for (let i = 0; i < numberOfCards; i++) {
//     // modify the data-card attribute
//     //

//     cards[i].dataset.cardName = 'cabron' + (i % 8);
//     // cards[i].addEventListener('click', function() {
//     // console.log('done clicked');
//     // });
//   }
// }

function createSingleCard() {
  const num = returnNumberPairs(16);
  // create one card
  // returns a fully fleshed card, complete w/
}

function cardPair(numberOfCards) {
  // runs the function create cards w/ singleCard()
  // returns a pair of cards
}
