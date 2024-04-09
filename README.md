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
