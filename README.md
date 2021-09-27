# Tic Tac Toe: Nocturne

Mod 2108 FEE - Final Project

A dynamic game of nocturnal animal themed, browser tic tac toe. Built out by applying my knowledge of the data model, event delegation, DOM manipulation via Javascript, and localStorage. 

## Table of Contents
* [Languages/Technology](#technology)
* [Install + Setup](#set-up)
* [Contributors](#contributors)
* [Wins](#wins)
* [Challenges + Improvements](#challenges-+-Improvements)
* [Project Specs](#project-specs)
* [Contributors](#contributors)

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
( add gif (option< show mouse clicks in screen record tool) )
3. In a winning scenario, the dynamic message at the top will update to dictate who has won. Their corresponding scoreboard will increase by 1. After 1.5 seconds the gameboard will reset entirely for a new game.
`(add gif)`
4. Upon page refresh, the scoreboard data & display will persist so that users can leave and come back and not lose track of the competition.
`(add gif)`

Under the hood, a Game class declaration with a number of built-in methods is responsible for all data- it is instantiated as a global variable in main.js. The DOM is dependent on and constructor from the data model. These distinct entities of the app are kept separate and interact with each other very intentionally- Game methods take care of the data model and functions in main.js only manipulate the DOM. It was built this way to allow for continued increase in complexity and the seamless adding of future features.

## Install & Setup
* Clone this repo
* Use `open index.html` within the command line

## Contributors
Kyra Bergsund

## Wins

## Challenges & Improvements

## Project Specs
