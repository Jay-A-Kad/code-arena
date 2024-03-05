const cardArray = [
    {
        name: 'fries',
        img: 'media/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'media/cheeseburger.png'
    },
    {
        name: 'Hotdog',
        img: 'media/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'media/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'media/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'media/pizza.png'
    },
    {
        name: 'fries',
        img: 'media/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'media/cheeseburger.png'
    },
    {
        name: 'Hotdog',
        img: 'media/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'media/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'media/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'media/pizza.png'
    }

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'media/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.append(card)
        card.addEventListener('click', flipCard)
        console.log(card, i)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img')

    console.log('check for match')
    if (cardChosen[0] == cardChosen[1]) {
        alert('you found match')
        cards[cardsChosenIds[0]].setAttribute('src', 'media/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'media/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    } else {

    }
    resultDisplay.textContent = cardArray.length
    cardChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congrats your find them all'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log('licks', cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length == 2) {
        setTimeout(checkMatch, 500)
    }
}

createBoard()
flipCard()