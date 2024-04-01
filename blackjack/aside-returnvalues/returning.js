var player1Time = 102
var player2Time = 107

function getFastestRaceTime () {
  if(player1Time < player2Time) {
    return player1Time
  } else if (player2Time < player1Time) {
    return player2Time
  } else {
    return player1Time
  }
}
// You cannot just use console.log(player1Time) because it wont add the value to the new fastestRace variable using the function call

var fastestRace = getFastestRaceTime()

//console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getRaceTime(){
  return player1Time + player2Time
}

var totalTime = getRaceTime()

console.log(totalTime)