let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
  var randomFighterSelector1 = Math.floor(Math.random() * fighters.length)
  var randomFighterSelector2 = Math.floor(Math.random() * fighters.length)
 stage.textContent = (fighters[randomFighterSelector1] + " vs " + fighters[randomFighterSelector2]) 
})


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function placeApples(){
  for (var i = 0; i < fruit.length; i += 1){
    if(fruit[i] === "🍎"){
      appleShelf.textContent += "🍎";
    } else if (fruit[i] === "🍊"){
      orangeShelf.textContent += "🍊";
    } else {
      // Handle other fruits if needed
    }
  }
}

placeApples()














// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

var myIdentity = {
  name: "Towaf",
  age: 15,
  country: "United States of America"
}
// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

function logData(){
//console.log(myIdentity.name + " is " + myIdentity.age + " years old" + " and " + " lives " + " in " + myIdentity.country)
}
// Call the logData() function to verify that it works
logData()


//If-else

let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6){
  //console.log("Free")
} else if (age < 18){
  //console.log("Child discount")
} else if(age < 27){
  //console.log("Student Discount")
} else if(age < 67){
  //console.log("Full Price")
} else {
  //console.log("Senior Citizen Discount")
}


//
var largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

for (var i = 0; i < largeCountries.length; i += 1){
  //console.log(largeCountries[i])
}


//
var largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop() //Pops Monaco
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
//console.log(largeCountries)


//
let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
if(dayOfMonth === 13 && weekday === "Friday"){
  //console.log("😱")
}

let hands = ["rock", "paper", "scissor"]






// Create a function that returns a random item from the array

function randomGesture(){
  var randomNumber = Math.floor(Math.random() * 3 ) + 1 //Selects between either 3
  
  return hands[randomNumber] //hands is the name for the Array, the square bracket indiciates where to find the value from
}
//console.log(randomGesture())