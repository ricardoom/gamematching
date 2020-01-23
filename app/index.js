//
// a matching game
//

// TODO: set up things
// TODO: Easy, set up an html page
// TODO: thinking of things as components:
//
//

//
// Draw the cards
//

const cardContainer = document.getElementsByClassName('card');
// Add event listener

function cardClick() {
  console.log("i've been clicked...");
}
// const clicker = cardContainer.addEventListener('click', cardClick);

// clicker();
//
// ? A card complete card...
const cardIcons = {};
const dataCardName = 'placeholder data attribute';
const dataAttribute = `
  data-card-name="${dataCardName}"
`;

const singleCard = `
  <div class="card" ${dataAttribute}>
    <div class="card face-down">
      <svg viewBox="0 0 100 100">
        <use xlink:href="#backOfCard" />
      </svg>
    </div>
    <div class="card hide">
    <svg viewBox="0 0 100 100">
      <use xlink:href="#frontOfCards" />
    </svg>
  </div>
  </div>
`;

// const icons = {
//   iconName: [],
//   iconURL: [],
// };

const board = document.querySelector('.board');

const svgCard = document.querySelectorAll('circle');

//
// game logic
//

// load a board (grid of cards) face down
// checks score
//
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

populateBoard(16);

function populateBoard(numberOfCards) {
  // console.log(boardContainer);

  for (let i = 0; i < numberOfCards; i++) {
    console.log('things are happening...', dataCardName);
    board.insertAdjacentHTML('beforeend', singleCard);
    // modify the data-card attribute

    //
  }
  // console.log(card, card.dataset);
}

function createSingleCard() {
  // create one card
}

function cardPair() {
  // runs the function create cards w/ singleCard()
  // returns a pair of cards
}
