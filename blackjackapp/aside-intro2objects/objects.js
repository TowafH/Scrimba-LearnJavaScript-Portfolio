// Objects - store data in-depth - composite / complex data type
// Think of them as key-value pairs

var course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2, //0-3 level scale, 2 represents intermediate
  isFree: true,
  tags: ["html", "css"]
}

//Dot notation
//console.log(course.length)
//console.log(course.tags)

//Bracket notation
//console.log( course["tags"] )

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

var castleListing  = {
  title: "Live like a King in my Castle",
  location: "Private room in Galway",
  rating: 4.95,
  reviews: 1268,
  isSuperHost: true,
  cost: 190,
  rate: "/ night",
  images: ["img/castle1.png", "img/caste2.png"],
  tags: ["4 guests", "1 bedroom", "2 beds", "Private half-bath"]
}

console.log(castleListing.rating)
console.log(castleListing.tags)

