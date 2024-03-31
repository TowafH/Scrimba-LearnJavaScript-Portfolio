//Declared Variables
var firstCard = 7
var secondCard = 11
let cards = [firstCard, secondCard] //array - ordered list of items. Arrays start at ZERO[0]
var sum = firstCard + secondCard
var hasBlackJack = false
var isAlive = true
var message = ""
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")
//let sumEl = document.querySelector("#sum-el or .sum-el") -querySelectors can be used to modify classes (.btn2)

// Created Conditonals with Function

function startGame() {
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
  var card = 3
  sum += card
  renderGame()
}