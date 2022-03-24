'use strict';
let secretNumber = Math.trunc(Math.random() * 99 + 1)
console.log(secretNumber)
let score = 100;

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
    document.querySelector('.score').style.color = "#B5FE83"
    document.querySelector('.score').style.fontSize = "20px"
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
      score = score - 10
      document.querySelector('.score').textContent = score
      document.querySelector('.score').style.color = "red"
    }
    else {
      displayMessage('😭 You LOST!')
      document.querySelector('.score').textContent = 0
    }
  }
})

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 99) + 1;
  score = 100
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