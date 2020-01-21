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
const icons = {
  iconName: [],
  iconURL: [],
};

const board = document.querySelector('.board');
const svgCard = document.querySelector('circle');
const gameBoard = {
  numberCells: [],
};

const card = {
  color: 'blue',
  icon: function cardIcon() {
    console.log('this chooses an icon from another object call:');
  },
};

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

function populateBoard() {
  // populates the HTML grid with cards
  // gets the number of cells available, then fills them up w/ the card pairs
  //
}

function singleCard() {
  // create one card
}

function cardPair() {
  // runs the function create cards w/ singleCard()
  // returns a pair of cards
}
