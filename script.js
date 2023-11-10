'use strict';
// document.querySelector('.message').textContent='Correct number'
// document.querySelector('.number').textContent=13
// document.querySelector('.score').textContent=15
// document.querySelector('.guess').value=22
// console.log(document.querySelector('.guess').value);

let score = 5;

let highscore = 0;

let secretNumberFunc = () => {
  return Math.trunc(Math.random() * 20 + 1);
};
let secretNumber = secretNumberFunc();

let message = message => {
  document.querySelector('.message').textContent = message;
};
let winOrAgain = (body, number) => {
  document.querySelector('body').style.backgroundColor = body;
  document.querySelector('.number').style.width = number;
};
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  //when no input
  if (!guess) {
    message('No Number ❌');
  }

  //user win
  else if (guess === secretNumber) {
    message('Congratulations Correct Number🎉');
    winOrAgain('#60b347', '30rem');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } 
  //guess too high or low
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High📈' : 'Too Low📉';
      document.querySelector('.score').textContent = score;
    } else {
      message('You Run Out of Chance 😔');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 5;
  document.querySelector('.score').textContent = score;
  secretNumber = secretNumberFunc();
  winOrAgain('#222', '15rem');

  document.querySelector('.guess').value = '';
  message('Start guessing...');
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').textContent = '?';
});
