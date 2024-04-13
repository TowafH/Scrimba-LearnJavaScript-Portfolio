var myLeads = []
var oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
var deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")
const homeBtn = document.getElementById("home-btn")

if (leadsFromLocalStorage) { //If statement that stores the leads, after refreshing
    myLeads = leadsFromLocalStorage
    render(myLeads) //Allows us to refer to myLeads in the renderLeads function with another name
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads) )
      render(myLeads)
    })
})

function render(leads) {
  var listItems = "" 
  for (i = 0; i < leads.length; i += 1) { //For loop that adds strings to the Array
      listItems += `
      <li>
         <a target="_blank" href="${leads[i]}">
                ${leads[i]}
        </a>
      </li>`
  }
  ulEl.innerHTML = listItems //Renders the array into HTML
}

deleteBtn.addEventListener("click", function(){ //Function to clear the saved links
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value) 
  inputEl.value = "" 
  localStorage.setItem("myLeads", JSON.stringify(myLeads)) //Saves the myLeads array to localStorage 
  render(myLeads)
})

homeBtn.addEventListener("click", function(){
  window.location.href = "../index.html";
})