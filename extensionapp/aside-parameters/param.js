const userEl = document.getElementById("user-el")
const welcomeEl = document.getElementById("welcome-el")

function greetUser(name) {
    userEl.textContent = "Welcome back, " + name + " 👋"    
}

greetUser("Towaf")

// greetUser(name) , assigns a new value when called, if the arg is changed to a string

//==============================================================================================
// Give the function a parameter, greeting, that replaces "Welcome back"
function greetingUser(greeting) {
    welcomeEl.textContent = greeting + ", Per Harald Borgen 👋"    
}

greetingUser("Welcome back")

//======================================================

const nameGreet = document.getElementById("combo-el")

function nameWithGreet(greeting, name) {
    nameGreet.textContent = greeting + ", " + name + " 🔵🔴👉🟣"    
}

nameWithGreet("Howdy", "Gojo Satoru")
//=============================================================

const literals = document.getElementById("literal-el")

function literalGreet(greeting, name, emoji) {
    // Rewrite the expression using template literals
    literals.textContent = `${greeting}, ${name} ${emoji}`  
}

literalGreet("How are you", "Geto Suguru", "🙁")

//==================================================================================
// Create a function, add(), that adds two numbers together and returns the sum

function add(num1, num2){
  return num1 + num2pa
}

console.log( add(3,4)    ) // should log 7
console.log( add(9, 102) ) // should log 111