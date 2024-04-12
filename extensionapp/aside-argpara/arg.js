//.                parameters -inside of the function
function greetUser(greeting, name) { 
    //textContent = `${greeting}, ${name} 👋`
}

//.        arguments -outer scope of the function
let hi = "Howdy"
greetUser("Howdy", "James")


function add(num1, num2) { //num1 and num2 are parameters
    return num1 + num2
}

add(3, 4) //3, 4 are arguments

// What are greeting and name? -Paramaters, inside the function
// What are "Howdy" and "James"? -Arguments, outer scope of the function, indicated by a variable
// What are num1 and num2? -Parameters, inside the function
// What are 3 and 4? -Arguments, outside the function, not within the scope



// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr) {
  return arr[0]
}

let firstCard = getFirst([10, 2, 5])

console.log(firstCard)


// Call it with an array as an argument to verify that it works
