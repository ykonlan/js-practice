# Rock Paper Scissors

A browser-based Rock Paper Scissors game built with **HTML, CSS, and JavaScript** as part of The Odin Project Foundations curriculum.

## Overview

This project implements a playable Rock Paper Scissors game where the user selects a choice and plays against a computer-controlled opponent.

The game keeps track of both players' scores and ends after five rounds, displaying the final result.

## Features

* Player selection through interactive buttons
* Computer-generated random choices
* Rock, Paper, and Scissors game logic
* Automatic score tracking
* Five-round game limit
* Displays the player's score
* Displays the computer's score
* Displays the final winner
* Handles ties
* Dynamically updates the page using JavaScript
* Prevents the game from continuing after five rounds

## What I Practiced

### JavaScript

* DOM manipulation
* Event listeners
* Event objects
* `querySelector()`
* `querySelectorAll()`
* `classList`
* `textContent`
* Functions and parameters
* Conditional logic
* Loops
* Arrays and objects
* Array methods such as `some()`
* Random number generation
* Maintaining application state
* Dynamically updating the DOM

## Game Logic

The computer randomly selects one of three choices:

```text
Rock
Paper
Scissors
```

The winning combinations are:

```text
Rock     beats Scissors
Paper    beats Rock
Scissors beats Paper
```

If both players select the same choice, the round is a tie.

The game maintains separate state for:

```text
Player score
Computer score
Number of rounds played
```

After five rounds, the game displays the final result.

## Key JavaScript Concepts

One of the main challenges in this project was understanding that game state needs to exist outside the individual round function.

For example:

```js
let human = 0;
let pc = 0;
let played = 0;
```

These values persist between button clicks, allowing the game to remember previous rounds.

The project also uses DOM manipulation to update the displayed scores after every round.

## What I Learned

This project helped me understand the relationship between JavaScript state and the DOM.

In particular, I learned how to:

* Respond to user interactions with event listeners
* Read values from selected elements
* Keep state between separate function calls
* Update HTML content dynamically
* Separate game logic from UI logic
* Use JavaScript to control what the user sees on the page

## Future Improvements

Possible improvements include:

* Add animations for each round
* Display the computer's choice
* Add a restart button
* Add sound effects
* Improve the visual design
* Add additional game modes

## Credits

Built as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.
