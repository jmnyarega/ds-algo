/*
 * The simple guessing number game.
 *
 */
const number = Math.floor(Math.random() * 100);

function guessingGame(guess) {
  if (guess > number) {
    return "Too high";
  } else if(guess < number) {
    return "Too Low";
  } else {
    return "You got it";
  }
}

guessingGame(9);
