//Database Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
})

// Event listener for database changes
onValue(playerListInDB, function(snapshot) {

  if (snapshot.exists()){
    let itemsArray = Object.entries(snapshot.val()); // Convert snapshot values to array
    clearPlayerListEl()

    for (let i = 0; i < itemsArray.length; i++) {

      let currentItem = itemsArray[i];
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1]

      appendItemToPlayerListEl(currentItem); // Append each item to player list
    }
  } else {
    playerListEl.innerHTML = "No Items Here Yet"
  }

})


function clearPlayerListEl() {
  playerListEl.innerHTML = "";
}

function clearInputField() {
  inputFieldEl.value = "";
}

// Function to append an item to the player list element
function appendItemToPlayerListEl(item) {

  let itemID = item[0]
  let itemValue = item[1]

  let newEl = document.createElement("li")

  newEl.textContent = itemValue

  newEl.addEventListener("click", function() {
  let exactLocationOfItemInDB = ref(database, `playerList/${itemID}`)

  remove(exactLocationOfItemInDB)
  })
  
  playerListEl.append(newEl)
}