# Matching Game

## A Javascript learning project.

Another project designed to help me learn Javascript. This one has been fun fun.

### Issues encountered and things learned...

Matching game is not as easy as I thought it would be, to my mind there are a few areas of logic that need to be handled:

- board and card generation:
  - We need the ability set/alter the amount of cards for a given game, so functionality for dynamic / explicit generation of cards is wanted
  - creating the `html` for each card was tricky, but the `createRange` and `createContextualFragment` APIs saved the day.
  - randomizing the board was a bit tricky so I leaned on StackOverflow and found a very simple approach to randomizing items in an array. I chose not to mutate my array, mostly to avoid any issues arising in the future from a altering the original array.
  - Generating the board from the new objects created. My approach feels kludgy, but it works. I'll come back and refactor I'm sure.
- Game Play:
  - since the cards are not buttons or links (if anything they should be buttons I think...) each card needed a click handler.
    - the animation is done w/ css
  - Logic for counting the number of clicks ie: cards turned over (2)
  - Then preventing the user to click anymore cards
  - Setting a timer to turn the card _back_ over and allowing cards to be clicked again
  -
  - some css was wanted to change the cursor so it was obvious the cards could be clicked on.
  - Flipping the cards over
- Sundry other issues:
  - `npm`, BrowserSync and sundry related issues were a thing for minute, but they got sorted, not fun, but seemingly necessary. I've been eschewing using `npm` modules, the primary reason being, I want to really understand what my code is doing, so importing magic seems like wrong move at this point in my learning path.

### TODOs for Future Versions and Nice to Haves

- Do some fun shuffling of the board w/ GSAP
- Create a UI for changing game options
  - Number of cards on the board to increase difficulty
  - Timed games
  -
- Put up on glitch

## v0.0.1

### Change Log

- v0.0.1
  - got the thing going
  - using browser sync.
  - lots of other stuff...
