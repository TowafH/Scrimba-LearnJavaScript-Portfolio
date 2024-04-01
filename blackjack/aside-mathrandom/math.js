var randomNumber1 = Math.random()

//console.log(randomNumber)


/* 

What does Math.random() do?

Your answer: It generates a random number between 0.0 - 1.0; not including 1

*/

var randomNumber2 = Math.random() * 6

//console.log(randomNumber)


/* 

In which range will our randomNumber be now?

From: 0.000
To: 5.999

*/


let flooredNumber = Math.floor(3.45632)

//console.log(flooredNumber)


/* 

What does Math.floor() do to positive numbers?

Your answer: It removes the decimal

*/



let randomNumber3 = Math.floor( Math.random() * 6 )

//console.log(randomNumber3)

/* 

Write down all the possible values randomNumber can hold now!

0, 1, 2, 3, 4, 5


*/

// Try to modify the expression so that we get a range from 1 to 6
//let randomNumber4 = Math.floor( Math.random() * 6 ) + 1

//console.log(randomNumber4)

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
  let randomNumber = Math.floor( Math.random() * 6 ) + 1
  return randomNumber
}

console.log( rollDice() )

