# Tic Tac Toe: Nocturne

Mod 2108 FEE - Final Project

A game of browser tic tac toe, fully dynamic in response to user interaction. Nocturnal animal themed. Built out throught applying my knowledge of the data model, event delegation, DOM manipulation via Javascript, localStorage, and all programming fundamentals. 

## Languages/Technology
Javascript, HTML, CSS, Github, Atom, Chrome Dev Tools

## Learning Goals
* Solidify & demnstrate understanding of all Mod 1 concepts & lessons (DRY Javascript/CSS, semantic HTML, event delegation, localStorage, etc.)
* Understand the different between the data model & DOM display. Build out complex web app with the latter dependent on the former for a single source of truth
* Break down complex final spec into smaller, actionable iterations that build on each other cleanly and effectively.

## Install & Setup
- Clone this repo
- Use `open index.html` within the command line

## Web App Attributes 
1. On page load, users are greeted by the game board, framed by two scoreboards and the corresponding animal tokens (in place of X's and O's). A message at the top relays who's turn it is.
`(add static image)`
2. Users alternate clicking on the tile where they wish to place their token. DOM updates on each click. Users cannot click on a square that is already occupied. The DOM will not display- it will remain their turn until they choose an unoccupied square.
1(add gif (option< show mouse clicks in screen record tool))1
3. In a winning scenario, the dynamic message at the top will update to dictate who has won. Their corresponding scoreboard will increase by 1. After 1.5 seconds the gameboard will reset entirely for a new game.
`(add gif)`
4. Upon page refresh, the scoreboard data & display will persist so that users can leave and come back and not lose track of the competition.
`(add gif)`

Under the hood, a Game class with a number of methods is responsible for all gameplay data- it is instantiated as a global variable in `main.js`. The DOM is dependent on and constructed from the data model. These distinct entities of the app are kept separate and interact with each other very intentionally- Game methods take care of the data model and functions in main.js only manipulate the DOM. It was built this way as an early iteration to allow for the seamless continued increase in complexity and new features.

## Install & Setup
* Clone this repo
* Use `open index.html` within the command line

## Contributors
Kyra Bergsund

## Wins
* Prior to touching the DOM, I completed start-to-finish functional gameplay using just the console and data model
* Every part of the DOM display stems directly from the data model, which is a stark difference from all previous projects. Working through it this way, although more challenging at times, gave me a clearer understanding than ever about how and why data and DOM should be distinct entities.
* It was rewarding to figure out the puzzle of game win condition logic using math. Although the function is a bit gnarly- despite many efforts to refactor -it makes sense and enabled me to see tic-tac-toe in a whole new light. 

## Challenges & Improvements


## Project Specs
See [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html) for spec and rubric

