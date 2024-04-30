//Database Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://player-tracker-123233-default-rtdb.firebaseio.com/"
}

// Variables
const app = initializeApp(appSettings)
const database = getDatabase(app)
const playerListInDB = ref(database, "playerList")
const addBtnEl = document.getElementById("add-button")
const inputFieldEl = document.getElementById("input-field")
const playerListEl = document.getElementById("player-list")

// Event listener for Add button
addBtnEl.addEventListener("click", function() {
  let inputValue = inputFieldEl.value; // Gets Value from INPUT FIELD
  push(playerListInDB, inputValue); // PUSHES input field data to database
  
  clearInputField();
});

// Event listener for database changes
onValue(playerListInDB, function(snapshot) {
  let itemsArray = Object.values(snapshot.val()); // Convert snapshot values to array
  for (let i = 0; i < itemsArray.length; i++) {
    appendItemToPlayerListEl(itemsArray[i]); // Append each item to player list
  }
  
  clearPlayerListEl()
})



// Function to clear the input field
function clearInputField() {
  inputFieldEl.value = "";
}

// Function to append an item to the player list element
function appendItemToPlayerListEl(itemValue) {
  playerListEl.innerHTML += `<li>${itemValue}</li>`;
}

function clearPlayerListEl() {
  playerListEl.innerHTML = "";
}