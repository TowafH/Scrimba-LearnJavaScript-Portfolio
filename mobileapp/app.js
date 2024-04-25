import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
 databaseURL: "https://player-tracker-123233-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const playerListInDB = ref(database, "playerList")

const addBtnEl = document.getElementById("add-button")
const inputEl = document.getElementById("input-field")

addBtnEl.addEventListener("click", function() {
  let inputValue = inputEl.value;

push(playerListInDB, inputValue)
  
  console.log(inputValue);
});