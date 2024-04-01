//Declared Variables
var cards = [] //Array
var sum = 0
var hasBlackJack = false
var isAlive = false
var message = ""
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")


// Created Functions

function getRandomCard(){
  var randomNumber = Math.floor( Math.random() * 13) + 1// 0 - 12
  if(randomNumber > 10){
    return 10
  } else if(randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}


function startGame() {
  var isAlive = true
  var firstCard = getRandomCard()
  var secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (var i = 0; i < cards.length; i += 1){
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum
  if(sum <= 20){
    message = "Draw new card?"
  } else if(sum === 21){
    message = "You've got Backjack!"
    hasBlackJack = true
  } else {
    message = "You're out!"
    isAlive = false
  }
  messageEl.textContent = message
}


function newCard() {
  var card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
}