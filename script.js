'use strict';
let secretNumber = Math.trunc(Math.random() * 99 + 1)
console.log(secretNumber)
let score = 20;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message
}
const displayNumber = (num) => {
  document.querySelector('.secretNumber').textContent = num
}
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guessedNumber').value)
  console.log(guess)
  if (!guess) {
    displayMessage('🛑 No number selected')
  }
  else if (guess === secretNumber) {
    let highscore = 0;
    displayMessage('🎉 Congrats, you have won!')
    displayNumber(guess)
    document.querySelector('body').style.backgroundColor = "green"
    document.querySelector('.message').style.color = "#B5FE83"
    document.querySelector('.secretNumber').style.width = "8rem"
    document.querySelector('.secretNumber').style.backgroundColor = "tomato"
    document.querySelector('.secretNumber').style.color = "white"
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  }
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').style.color = "red"
      displayMessage( guess > secretNumber
      ? '📈 Too HIGH!'
      : '📉 Too LOW!')
      document.querySelector('.message').style.color = "red"
      document.querySelector('body').style.backgroundColor = "red"
      score --
      document.querySelector('.score').textContent = score
    }
    else {
      displayMessage('😭 You LOST!')
      document.querySelector('.score').textContent = 0
    }
  }
})

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20
  displayMessage("Let's play!")
  document.querySelector('.score').textContent = score
  displayNumber('?')
  document.querySelector('body').style.backgroundColor = "#FFD365"
  document.querySelector('.guessedNumber').value = ''
  document.querySelector('.message').style.color = "yellow"
  document.querySelector('.secretNumber').style.width = "80px"
  document.querySelector('.secretNumber').style.backgroundColor = "#eee"
  document.querySelector('.secretNumber').style.color = "#222"
})