<h1>Overview</h1>

This is my Scrimba Portfolio which documents all my practices and projects

<h1>Passenger App - Takeaways</h1>

<b>Script Tag</b>
- A script tag can be used internally in an HTML file. This tag allows developers to link JavaScript files to the HTML document directly.

<b>Variables</b>
- Variables can be created using ``var`` or ``let``.

<b>Numbers</b>
- Numbers can be assigned to variables. This data type can be assigned, reassigned, and incremented.

<b>Strings</b>
- Strings are another data type. Strings can be added as readable text for the user and console.

<b>console.log()</b>
- ``console.log`` is used to verify code functionality. This data type is outputted into the console.

<b>Functions</b>
- Functions allow developers to reuse code without repeating the same code.
- Creating a Function: <br>
``function name(){``
``}``

- Calling a Function: <br>
``name()``

<b>The DOM</b>
- Short for ``Document Object Model`` The DOM allows developers to change elements on the website

<b>getElementById()</b>
- ``.getElementById()`` is a JavaScript function that lets you grab an HTML element by its id.

<b>innerText</b>
- ``.innerText`` is a JavaScript property that allows developers to change the text within an HTML element.

<b>textContent</b>
- ``.textContent`` is a JavaScript property that reads every character, including spaces within an HTML element.
<hr>
<h1>Blackjack App - Takeaways</h1>

<b>Arrays</b>

- Arrays can be declared and reassigned. 

- Adding an item to an Array <br>
``.push``
- Removing an item from an Array<br>
``.pop``

<b>Objects</b>

- Objects contain key-value pairs

<b>Booleans</b>

- Booleans are used to declare True/False events <br>
``isAlive = true``

<b>If-else statements</b>

- Conditional statements that build dynamic events in applications

<b>Comparison Operators</b>

- Used in if-else statements to determine equality or difference between values <br>
``>`` - Greater than <br>
``>=`` - Greater than or equal to <br>
``<`` - Less than <br>
``<`` - Less than or equal to <br>
``===`` - Strictly Equal 

<b>Logical Operators</b>

- Logical Operators are used to compare two different values for true/false<br>
``||`` Operator - "or" <br>
``&&`` Operator - "and"

<b>For loops</b>

- For loops are useful when going through a list of values in an array <br>
``cards = [firstCard, secondCard]`` <br>
``for (let i = 0; i < cards.length; i++) {cardsEl.textContent += cards[i] + " "}`` <br> <br>
``let i = 0;`` - Starting value <br>
``i < cards.length;`` - Ending value <br>
``i += `` - Increment value <br>
``{cardsEl.textContent += cards[i] + " "}`` - Updating the text to add card values

<b>The Math Object</b>

- The Math Object generates random numbers based on the given condition <br>

``let randomNumber = Math.floor( Math.random()*13 ) + 1`` <br> <br>
``let randomNumber`` - Variables that will store the number <br>
``Math.floor`` - Turns the decimals into its respective whole number <br>
``Math.random()`` - A set of numbers from 0.000 - 0.999 <br>
``Math.random()*13`` - Outputs a random set of numbers from 0.0 - 12.999 <br>
``Math.floor( Math.random()*13 ) + 1`` - Outputs a random set of numbers from 0 - 13 

<b> Math & Arrays </b>

- The Math object and Arrays can be used to display text <br>
``let fighters = ["🐉", "🐥", "🐊"]`` <br> <br>
``let stageEl = document.getElementById("stage")`` <br>
``let fightButton = document.getElementById("fightButton")`` <br> <br>

``fightButton.addEventListener("click", function() {`` <br>
``var randomFighterSelector1 = Math.floor(Math.random() * fighters.length)`` <br>
``var randomFighterSelector2 = Math.floor(Math.random() * fighters.length)``<br>
 ``stage.textContent = (fighters[randomFighterSelector1] + " vs " + fighters[randomFighterSelector2])``

<b>Return Statements</b>

- Values can be returned in a function using ``return``
<hr>

<h1>Leads Tracker Extension - Takeaways</h1>

<b>Const</b>
- A variable type that is assigned to a value that will stay the same throughout the code; will not be reassigned.

<b>AddEventListener()</b>
- DOM object used to write event listeners directly in the JS file, rather than in the HTML file with ``onclick=``

<b>innerHTML</b>
- Used for rendering out list items in template strings.

<b>``input``.value</b>
- Used to fetch out the value inputted by the user in the input field

<b>Functon Parameters</b>
- Parameters can be defined in a function. Allows the developer to use the variable inside the body of the function; requires the argument of myLeads.

<b>Template Strings</b>
- Allows developers to write strings on multiple lines for multiple visibility; uses ``$`` & ``{}`` to avoid using ``+`` symbols ``${variable}``

<b>localStorage</b>
- Allows developers to store data across page refreshes; simple database.

<b>The JSON object</b>
- A common way of storing data in web development; is turning an Array into a JSON array using JSON.stringify; JSON.parse to turn a string into an Array.

<b>Objects in Arrays</b>
- Fetching the 0th index of an array to find the ``.url``
<hr>

<h1>Player Tracker App - Takeaways</h1>

<b>import</b>
- Imported certain functionality from Firebase to utilize a database

<b>Firebase: initializeApp</b>
- This function was used to initialize the app using the database URL; it uses an app object that can be used.

<b>Firebase: getDatabase</b>
- Created a database object, using the getDatabase function, and fed it to the app object I made.

<b>Firebase: reference</b>
- In a Firebase real-time database, everything is a reference. I created a player list reference, where the names would be saved.

<b>Firebase: push</b>
- A simple function to push a new item into the reference and feed it the value.


<b>Firebase: onValue</b>
- Sits and listens for changes in the databases, which it gets from the "Firebase: snapshot"

<b>IDs</b>
- In SD, IDs are essential because each item had a unique ID in our database. 

<b>Firebase: remove</b>
- Using the unique IDs of the values, I can remove items from the database using this function.

<b>Object to Array</b>
- Transforming objects into arrays; used within the onVaue function to write a for loop on the array.

<b>createElement</b>
- Instead of innerHTML, more powerful. This created a new element with text content, which can be appended to the parent element.

<b>Flexbox: flex-wrap</b>
- A flexbox feature used to wrap HTML elements

<b>Flexbox: gap</b>
- A flexbox feature to create gap between items

<b>user-select</b>
- UI Experience: Users cannot unintentionally select parts of the app with this CSS attribute.

