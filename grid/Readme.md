# Etch-a-Sketch

A browser-based Etch-a-Sketch project built with **HTML, CSS, and JavaScript** as part of The Odin Project Foundations curriculum.

## Overview

This project creates a dynamic drawing grid that allows the user to move their mouse over individual squares and leave a colored trail.

The grid can also be resized dynamically. The user can choose a new number of squares per side, and the existing grid is cleared and replaced with a new grid while keeping the overall drawing area at the same size.

## Features

* Dynamically generates the grid using JavaScript
* Supports different grid sizes
* Keeps the drawing area at a fixed size
* Allows the user to resize the grid through a prompt
* Clears and regenerates the grid when resizing
* Changes square colors when the user interacts with them
* Generates random RGB colors
* Progressively increases the opacity of a square with repeated interactions
* Limits the grid size to prevent excessively large grids

## What I Practiced

### JavaScript

* DOM manipulation
* `document.createElement()`
* `appendChild()`
* `querySelector()`
* Event listeners
* Mouse events
* `classList`
* HTML attributes with `setAttribute()` and `getAttribute()`
* `prompt()`
* Input validation
* Random number generation with `Math.random()`
* Working with functions and parameters
* Nested loops
* Dynamic CSS manipulation through JavaScript

### CSS

* Flexbox
* Fixed-size containers
* Dynamic element sizing
* Borders and hover states
* CSS properties controlled through JavaScript

## How It Works

The grid is generated programmatically rather than being written manually in HTML.

For a grid size of `16`, JavaScript creates:

```text
16 rows
×
16 squares
=
256 squares
```

When the user chooses a different size, the existing grid is removed and a new one is generated.

The dimensions of each square are calculated from the fixed drawing area:

```text
square size = 960 / number of squares
```

This allows a `16 × 16` grid and a `64 × 64` grid to occupy the same overall space.

## Future Improvements

Possible improvements include:

* Add a reset/clear button
* Allow users to choose their own drawing color
* Add an eraser mode
* Add different drawing modes
* Improve the user interface
* Add more advanced shading effects

## Credits

Built as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.
