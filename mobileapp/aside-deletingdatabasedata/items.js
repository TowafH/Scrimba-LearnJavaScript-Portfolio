import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://playground-eaa33-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const newsStoriesInDB = ref(database, "newsStories")

const storiesEl = document.getElementById("stories")

onValue(newsStoriesInDB, function(snapshot) {
  let newsStoriesArray = Object.entries(snapshot.val())

  storiesEl.innerHTML = ""

  for (let i = 0; i < newsStoriesArray.length; i++) {
    let currentStory = newsStoriesArray[i]

    appendStoryToStoriesEl(currentStory)
  }
})

function appendStoryToStoriesEl(story) {
  let storyID = story[0]
  let storyTitle = story[1]

  let newEl = document.createElement("div")

  newEl.classList.add("story")

  newEl.textContent = storyTitle

  //Deleting from database
  newEl.addEventListener("dblclick", function() {
    let exactLocationOfStoryInDB = ref(database, `newsStories/${storyID}`)

    remove(exactLocationOfStoryInDB)
  })

  storiesEl.append(newEl)
}