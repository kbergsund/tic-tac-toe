# Tic Tac Toe: Nocturne 

Mod 2108 FEE - Final Solo Project

A game of browser tic tac toe, fully dynamic in response to user interaction. Nocturnal animal themed. Built out through applying my knowledge of the data model, event delegation, DOM manipulation via Javascript, localStorage, and all programming fundamentals. 

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
Code Architecture:
* `player.js` - Declaration of Player class that tracks unique player id, token (emoji), and number of wins.
* `game.js` - Where the data model lives and all changes to the data model take place. An array of 9 empty strings that correspond to the 9 tiles on the tic-tac-toe grid is the app's source of truth- it is set as a `game.board` property. Two other properties are two object instances of the Player class. Other methods include 
* `main.js` - Where all DOM manipulation takes place. The DOM is dependent on and buitlt directly from the data model.

1. On page load, users are greeted by the game board, framed by two scoreboards and the corresponding animal tokens (in place of X's and O's). A message at the top relays who's turn it is.
<img width="1440" alt="Screen Shot 2021-09-28 at 2 27 07 PM" src="https://user-images.githubusercontent.com/49960644/135168161-fddb6b9d-1bc9-40d0-96d4-1c51f6a8580d.png">

2. Users alternate clicking on the tile where they wish to place their token. The data model & then DOM update on each click. Users cannot click on a square that is already occupied- as represented by a default cursor on hover. It will remain their turn until they choose an unoccupied square.
![Take Turns - Occupied Square Disabling](https://user-images.githubusercontent.com/49960644/135172416-bc484ca7-3f82-462a-8de6-60fba408868f.gif)

3. In a winning scenario, the dynamic message at the top will update to dictate who has won. Their corresponding scoreboard will increase by 1. After 1.5 seconds the gameboard will reset entirely for a new game.
![Win Scenarios](https://user-images.githubusercontent.com/49960644/135172734-55a30868-3223-492e-a585-f223cda97c96.gif)

4. In a draw scenario, a message will display. Neither scoreboard will increase. After 1.5 seconds the gameboard will reset. 
![Draw Scenario](https://user-images.githubusercontent.com/49960644/135173812-6aede74d-428a-4eef-a751-1fd95e9bd393.gif)

5. Upon page refresh, the scoreboard data & display will persist so that users can leave and come back and not lose track of the competition.
![Scoreboard Persist](https://user-images.githubusercontent.com/49960644/135174065-835948bf-e5ce-4101-b0d9-d69599a2b7ef.gif)

6. At any time, users can click the 'Clear Scores & Restart' button at the bottom. This will zero out both scoreboards. It will also clear any game currently in progress.
![Clear Data](https://user-images.githubusercontent.com/49960644/135174479-a1c6118a-badf-44a8-bc74-847696b4e948.gif)

## Contributors
Kyra Bergsund

## Project Specs
See [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html) for spec and rubric

