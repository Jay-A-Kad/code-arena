const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    if (randomNumber == 1) {
        computerChoice = 'rock'
    }
    if (randomNumber == 2) {
        computerChoice = 'paper'
    }
    if (randomNumber == 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}