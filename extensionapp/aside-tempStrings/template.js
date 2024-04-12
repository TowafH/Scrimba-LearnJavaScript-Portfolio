const recipient = "James"
const sender = "Towaf"
// Create a new variable, sender, and set its value to your name

// Use your sender variable instead of "Per"
const email = `Hey ${recipient}!

How is it going? 


Cheers ${sender}`

console.log(email)




// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

//localStorage.setItem("myName", "TowafH")
let name = localStorage.getItem("myName")
console.log(name)
// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

var myLeads = ["www.yap.com"]


// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)