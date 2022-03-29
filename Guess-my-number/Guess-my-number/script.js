'use strict';

// Handling Click Events

// addEventListner(event tpye, event handler) - first argument is the name of the event we are listening for and the second argument is
// simply a function that we pass as a value which contains code that we want to execute, whenever event happens.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let setContent = function (element, content) {
  document.querySelector(element).textContent = content;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input

  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    setContent('.message', '⛔ No Number!');
    // when Player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!✅';
    setContent('.message', 'Correct Number!✅');

    //document.querySelector('.number').textContent = secretNumber;
    setContent('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // high score

    if (score > highScore) {
      highScore = score;
      //document.querySelector('.highscore').textContent = highScore;
      setContent('.highscore', highScore);
    }

    // when is guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? 'Guess is Too High!' : 'Guess is Too Low!';
      setContent(
        '.message',
        guess > secretNumber ? 'Guess is Too High!' : 'Guess is Too Low!'
      );
      score--; //score = score - 1;
      //document.querySelector('.score').textContent = score;
      setContent('.score', score);
    } else {
      //document.querySelector('.message').textContent = 'You lost the Game! ☹';
      setContent('.message', 'You lost the Game! ☹');
      //document.querySelector('.score').textContent = 0;
      setContent('.score', 0);
    }
  }
});

// Again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing....';
  setContent('.message', 'Start guessing....');
  //document.querySelector('.score').textContent = score;
  setContent('.score', score);
  //document.querySelector('.number').textContent = '?';
  setContent('.number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
