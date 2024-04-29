//Database Initalization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://player-tracker-123233-default-rtdb.firebaseio.com/"
}

//Variables
const app = initializeApp(appSettings)
const database = getDatabase(app)
const playerListInDB = ref(database, "playerList")
const addBtnEl = document.getElementById("add-button")
const inputFieldEl = document.getElementById("input-field")
const playerListEl = document.getElementById("player-list")


//Events
addBtnEl.addEventListener("click", function() {
  let inputValue = inputFieldEl.value;
  push(playerListInDB, inputValue)
  clearInputField()
  
  appendItemToPlayerListEl(inputValue) //Paramater to give the function appendItemToPlayerListEl value of inputValu
});

function clearInputField(){
  inputFieldEl.value = ""
}

function appendItemToPlayerListEl(itemValue){
  playerListEl.innerHTML += `<li>${itemValue}</li>`
}