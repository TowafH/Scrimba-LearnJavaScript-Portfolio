//Lesson 1 - Variables Practice

// Create two variables, firstName and lastName
var firstName = "Towaf"
var lastName = "H"
// Concatenate the two variables into a third variable called fullName
var fullName = firstName + " " + lastName
// Log fullName to the console
console.log(fullName)



//Lesson 2 - Concatenate Two Strings in a Function

let name = "Linda"
let greeting = "Hi there"
// Create a function that logs out "Hi there, Linda!" when called

function welcome() {
    console.log(greeting + ", " + name)
}

welcome()



//Lesson 3 - Incrementing & Decrementing

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()


function add3Points(){
    myPoints += 3
}

function remove1Point(){
    myPoints -= 1
}

// Call the functions to that the line below logs out 10
console.log(myPoints)



//Lesson 4 - Strings & Numbers

// Try to predict what each of the lines will log out
console.log("2" + 2) // Logs "22"
console.log(11 + 7) // Logs 18
console.log(6 + "5") // Logs "65"
console.log("My points: " + 5 + 9) // Logs "My Points: 59"
console.log(2 + 2) // Logs 4
console.log("11" + "14") // Logs "1114" 



//Lesson 5 - Rendering an Error Message

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

var errorText = document.getElementById("error")

function buy() {
    console.log("button clicked")
    errorText.textContent = "Something went wrong, please try again"
}



//Lesson 6 - Calculator Challenge

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
var total = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add(){
  var result = num1 + num2
  total.textContent = "Sum: " + result
}

function subtract(){
  var result = num1 - num2
   total.textContent = "Sum: " + result
}

function divide(){
  var result = num1 / num2
  total.textContent = "Sum: " + result
}

function multiply(){
  var result = num1 + num2
  total.textContent = "Sum: " + result
}