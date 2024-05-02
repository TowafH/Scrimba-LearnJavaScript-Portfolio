const counterEl = document.getElementById("counter")
const clickEl = document.getElementById("click")

let counter = 0

clickEl.addEventListener("click", function() {
    counter++

    counterEl.textContent = counter
})