// Arrays - ordered lists of items

// Arrays start at a 0 index
let featuredPosts = [
  "Check out my Netflix clone",       // 0 index
  "Here's the code for my project",   // 1 index
  "I've just relaunched my portfolio" // 2 index
]

//console.log(featuredPosts.length) What will this output? It will output index 2
//The length property is always 1 above the last index

//console.log( featuredPosts[0] ) 0 represents 1st item in the array

var myExperiences = [
  "HR Intern at Braathe Enterprises", // 0 index
  "Current Student at Thomas Edison CTE HS", // 1 index
  "Communication, Problem-solving, and Task management skills" // 2 index
]

// Make the following appear in the console in the same order:
// Communication, Problem-solving, and Task management skills
// Current Student at Thomas Edison CTE HS
// HR Intern at Braathe Enterprises

// console.log(myExperiences[2])
// console.log(myExperiences[1])
// console.log(myExperiences[0])



// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

var myIdentity = [
  "Towaf H",
   15,
   true
]

let cards = [7, 4]

// console.log("hello") //the concepts are similar .push, .log
// cards.push(6) //Method or Function on an Object

// console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage) //.push will add the datatype to the array
console.log(messages)

// How can you remove the last item in an array? Try to google it!

messages.pop()
console.log(messages)

//let sumEl = document.querySelector("#sum-el or .sum-el") -querySelectors can be used to modify classes (.btn2)