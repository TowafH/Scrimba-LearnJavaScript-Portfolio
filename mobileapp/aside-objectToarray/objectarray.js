let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}

console.log(Object.values(scrimbaUsers)) 
//Logs out an array of the VALUES (after the colon) of the object

console.log(Object.keys(scrimbaUsers))
//Logs out an array of the KEYS (before the colon) of the object

console.log(Object.entries(scrimbaUsers))
//Logs out an array of the ENTRIES (both the key and value) of the object



// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values
let scrimbaUsersEmails = Object.values(scrimbaUsers)

// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys
let scrimbaUsersIDs = Object.keys(scrimbaUsers)

// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values
let scrimbaUsersEntries = Object.entries(scrimbaUsers)