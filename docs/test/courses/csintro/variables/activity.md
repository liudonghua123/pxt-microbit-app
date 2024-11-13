# Activity: Scorekeeper

This micro:bit activity guides you to create a program with three variables that will keep score for a game of _Rock Paper Scissors_.

To do this, you will need to create variables for the parts of scorekeeping that change over the course of a gaming session. What are those variables? 

* The number of times the first player wins
* The number of times the second player wins
* the number of times the players tie

First, let's consider the names of our variables. In general, variable names should clearly describe what type of information they hold. They should be clear and easy for a reader to understand regardless of their familiarity with your program.
	
In MakeCode, from the Variables menu, make and name these three variables: `PlayerAWins`, `PlayerBWins`, `PlayersTie`.

![Make a new variable](/static/courses/csintro/variables/make-a-variable.png)

![Set new variable name](/static/courses/csintro/variables/new-variable.png)

## Initializing the variable value 
It is important to give your variables an initial value. The initial value is the value the variable will hold each time the program starts. For our counter program, we will give each variable the value 0 (zero) at the start of the program.

```blocks
let PlayerAWins = 0
let PlayerBWins = 0
let PlayersTie = 0
```

## Updating the variable value

In our program, we want to keep track of the number of times each player wins and the number of times they tie. We can use the buttons A and B to do this.

Pseudocode:

* Press button A to record a win for player A
* Press button B to record a win for player B
* Press both button A and button B together to record a tie
	
We already initialized these variables and now need to code to update the values at each round of the game.

* Each time the scorekeeper presses button A to record a win for Player A, we want to add 1 to the current value of the variable `PlayerAWins`.
* Each time the scorekeeper presses button B, to record a win for Player B, we want to add 1 to the current value of the variable `PlayerBWins`.
* Each time the scorekeeper presses both button A and button B at the same time to record a tie, we want to add 1 to the current value of the variable `PlayersTie`.
	
From the Input menu, drag 3 of the 'on button A pressed' event handlers to your Programming Workspace.

![onButtonPressed A](/static/courses/csintro/variables/on-button-pressed.png)

Leave one block with 'A'. Use the drop-down menu in the block to choose 'B' for the second block and 'A+B' for the third block.

From the Variables menu, drag 3 of the 'change PlayersTie by 1' blocks to your Programming Workspace.

![Change variable](/static/courses/csintro/variables/change-variable.png)

Place one change block into each of the Button Pressed blocks. 

Choose the appropriate variable from the pull down menus in the change blocks.

```blocks
let PlayerAWins = 0
let PlayerBWins = 0
let PlayersTie = 0

input.onButtonPressed(Button.A, () => {
   PlayerAWins += 1
})
input.onButtonPressed(Button.B, () => {
   PlayerBWins += 1
})
input.onButtonPressed(Button.AB, () => {
   PlayersTie += 1
})
```
## User feedback
Whenever the scorekeeper presses button A, button B, or both buttons together, we will give the user visual feedback acknowledging that the user pressed a button. We can do this by coding our program to display:

* an 'A' each time the user presses button A to record a win for Player A, 
* a 'B' for each time the user presses button 'B' to record a win for Player B,
* a 'T' for each time the user presses both button A and button B together to record a tie. 

We can display an 'A', 'B', or 'T' using either the 'show leds' block or the 'show string' block.

![Show LEDs](/static/courses/csintro/variables/show-leds.png)

In this example, we have used the 'show leds' block.

```blocks
let PlayerAWins = 0
let PlayerBWins = 0
let PlayersTie = 0

input.onButtonPressed(Button.A, () => {
   PlayerAWins += 1
   basic.showLeds(`
       . # # # .
       . # . # .
       . # # # .
       . # . # .
       . # . # .
       `)
   basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
   PlayerBWins += 1
   basic.showLeds(`
       . # # . .
       . # . # .
       . # # # .
       . # . # .
       . # # . .
       `)
   basic.clearScreen()
})
input.onButtonPressed(Button.AB, () => {
   PlayersTie += 1
   basic.showLeds(`
       . # # # .
       . . # . .
       . . # . .
       . . # . .
       . . # . .
       `)
   basic.clearScreen()
})
```
Notice that we added a 'clear screen' block after showing 'A', 'B', or 'T'. 
What do you think would happen if we did not clear the screen? Try it.

## Showing the final values of the variables

To finish our program, we can add code that tells the micro:bit to display the final values of our variables.
Since we have already used buttons A and B, we can use the 'on shake' event handler block to trigger this event. 
We can use the 'show string', 'show leds', 'pause', and 'show number' blocks to display these final values in a clear way.
Here is the complete program.

```blocks
let PlayersTie = 0
let PlayerBWins = 0
let PlayerAWins = 0
input.onButtonPressed(Button.A, () => {
   PlayerAWins += 1
   basic.showLeds(`
       . # # # .
       . # . # .
       . # # # .
       . # . # .
       . # . # .
       `)
   basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
   PlayerBWins += 1
   basic.showLeds(`
       . # # . .
       . # . # .
       . # # # .
       . # . # .
       . # # . .
       `)
   basic.clearScreen()
})
input.onButtonPressed(Button.AB, () => {
   PlayersTie += 1
   basic.showLeds(`
       . # # # .
       . . # . .
       . . # . .
       . . # . .
       . . # . .
       `)
   basic.clearScreen()
})
input.onGesture(Gesture.Shake, () => {
   basic.showString("Wins:")
   basic.showLeds(`
       . # # # .
       . # . # .
       . # # # .
       . # . # .
       . # . # .
       `)
   basic.showNumber(PlayerAWins)
   basic.pause(1000)
   basic.showLeds(`
       . # # . .
       . # . # .
       . # # # .
       . # . # .
       . # # . .
       `)
   basic.showNumber(PlayerBWins)
   basic.pause(1000)
   basic.showString("Ties:")
   basic.showNumber(PlayersTie)
   basic.pause(1000)   
   basic.clearScreen()
})
PlayerAWins = 0
PlayerBWins = 0
PlayersTie = 0
```

### ~ hint

#### Buttons for input

Buttons have been used as human input devices since computers first existed. Watch this video and see how they let the user tell the micro:bit to do something.

https://www.youtube.com/watch?v=t_Qujjd_38o

### ~

## Try it out!
Download the Scorekeeper program to the micro:bit, and find someone to play *Rock, Paper, Scissors* with you using your micro:bit to act as the Scorekeeper!

## 'Adding' on with mathematical operations
There is more we can do with the input we received using this program. We can use mathematical operations on our variables.

Example: Perhaps you'd like to keep track of, and show the player the total number of 'rounds' that were played. To do this, we can add the values stored in the variables we created to keep track of how many times each player won and how many times they tied.

In order to do this, we can add the code to our program under the 'on shake' event handler.

* First, display a string to show the player that the following sum represents the total number of rounds played. 
* Our program will add the values stored in the variables `PlayerAWins`, `PlayerBWins`, and `PlayersTie` and then display the sum of this mathematical operation.
* The blocks for the mathematical operations adding, subtracting, multiplying, and dividing are listed in the Math section of the Toolbox. 
**Note:** Even though there are four blocks shown for these four operations, you can access any of the four operations from any of the four blocks, and you can also access the exponent operation from these blocks.
	
![Adding block](/static/courses/csintro/variables/adding-block.png)

![Operator selector](/static/courses/csintro/variables/operator-selector.png)

* Replace the default values of zero with the names of the variables we want to add together.
Notice that because we are adding three variables together we need a second math block. First we add the values for `PlayerAWins` and `PlayerBWins`, then add `PlayersTie`.
	
```blocks
let PlayersTie = 0
let PlayerBWins = 0
let PlayerAWins = 0

input.onGesture(Gesture.Shake, () => {
   basic.showString("Total rounds played:")
   basic.showNumber(PlayerAWins + PlayerBWins + PlayersTie)
})
```
* Save, download, and try the program again to make sure that it runs correctly and displays the correct numbers for each variable.

Remember that the micro:bit is a device that processes input and displays it as output in some way.  By storing values in variables, you can perform mathematical operations on that data that provides you with useful information. 

What other math operations could provide valuable information from the values stored in these variables? 

Examples:

* Calculate and display a player's wins and/or losses as a percentage of all rounds played.
* Calculate a display the number of tied games as a percentage of all rounds played.

## Knowledge Check

Questions:

1. What's the difference between a constant and a variable?
2. Why is it important to name variables in a clear and meaningful way?
3. **True or false:** You can only use the default variable names provided in the Variables toolbox drawer.

Answers:

1. A constant has a value that doesn't change. A variable has a value that may change.
2. Variable names should clearly describe what type of information they hold so they are easily recognizable in the program and you can find problems or bugs easier.
3. **False.** You can make a variable with any name you want/need for a program with the Make a Variable button.