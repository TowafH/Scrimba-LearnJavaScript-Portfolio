// && Operator
//Example
let hasCompletedCourse = false
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}

// Practice
let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge == false && hasHintsLeft == false){
  showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}


//|| Operator

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

var likesDocumentaries = true
var likesStartups = false

if (likesDocumentaries == true || likesStartups == true){
  recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

