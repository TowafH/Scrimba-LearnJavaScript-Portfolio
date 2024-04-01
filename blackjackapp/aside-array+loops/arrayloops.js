var messages = [
  "Hey, how's it going?",        
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "Great to hear",
  "Wonderful!"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])


//In this case, messages.length will log out the ENTIRE messsages, even if we add more; dynamic
for (var i = 0; i < messages.length; i += 1){
  //console.log(messages[i])
}

//Practice

let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (var a = 0; a < cards.length; a += 1) {
  //console.log(cards[a])
}


//Arrays + Loops + document.getElementByID("")

let sentence = ["Hello", "my", "name", "is", "Towaf"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (var i = 0; i < sentence.length; i += 1){
  greetingEl.textContent += sentence[i] + " "
}