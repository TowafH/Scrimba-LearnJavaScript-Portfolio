// Use .innerHTML to render a Buy! button inside the div container

const container = document.getElementById("container-el")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy(){
  container.innerHTML += "<p>Thanks for Buying!</p>"
}

//const li = document.createElement("li")
//li.textContent = myLeads[i]
//li.append(li)