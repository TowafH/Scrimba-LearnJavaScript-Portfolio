var firstCard = 7
var secondCard = 14

// Create a variable, sum, and set it to the sum of the two cards
var sum = firstCard + secondCard

// If-else-if conditonals

if (sum < 21){
  console.log("Would you like to draw? 🤔")
} else if (sum === 21) {
  console.log("You've got Blackjack! 🥳")
} else {
  console.log("You lost the game! 😕")
}

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

var clubAge = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
if (clubAge <= 21) {
  console.log("No entry!")
} else {
  console.log("Welcome to the Club!")
}

// Check if the person is elegible for a birthday card from the King! (100)

let cardAge = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
if (cardAge < 100){
  console.log("You are not eligble for a Birthday Card 🙁")
} else if (cardAge === 100) {
  console.log("You will recieve a Birthay Card! 🎉")
} else {
  console.log("You have already recieved a Birthday Card! 🙄")
}

console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false