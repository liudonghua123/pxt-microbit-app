# Multi Dice

## Introduction @unplugged

![Multiple @boardname@ throwing a dice](/static/mb/projects/multi-dice.png)

Build a multi-player dice game using the **radio**. The **radio** blocks let you send wireless messages between a @boardname@ and another @boardname@.

In this game, you shake to "throw the dice" and send the result to the other @boardname@. If you receive a result of a dice throw equal or greater than yours, you lose.

## Dice game

Let's start by rebuilding the **dice** game. If you are unsure about the details, try the **dice** tutorial again.

```blocks
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
```

## Dice variable

We need to store the result of the dice cast in a variable. A **variable** is like a place in the memory of the @boardname@ where you save information, like numbers.

* Go to the **Variables** toolbox and click ``Make a Variable`` to create a new variable. We will call it **dice**.
* Add a ``||variables:set dice to||`` block and drag the ``||math:pick random||`` into it.
* Drag a ``||variables:dice||`` variable from the **Variables** toolbox into the ``||basic:show number||`` block.

```blocks
let dice = 0
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
})
```

## Send the dice

Put in a ``||radio:send number||`` and a ``||variables:dice||`` to send the value stored in the ``||variables:dice||`` variable via radio. Make sure to add a ``||radio:set group||`` to ``||basic:on start||`` with the group number set to the group you want to use.

```blocks
radio.setGroup(1)
let dice = 0
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
```

## Receive the dice

Go get an ``||radio:on received number||`` event block. This event runs when a radio message from another @boardname@ arrives. The ``||variables:receivedNumber||`` value is the value of the dice in this game.

```blocks
radio.onReceivedNumber(function (receivedNumber) {
})
```

## Check your cast

Add a ``||logic:if||`` block to test if ``||variables:receivedNumber||`` is greater or equal to ``||variables:dice||``.
If is, you lost so display a sad face on the screen.

```blocks
let dice = 0;
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= dice) {
        basic.showIcon(IconNames.Sad)
    }
})
```

## Test it!

Try pressing **SHAKE** in the simulator and see that a second @boardname@ appears. You can play the game on both virtual boards.

If you have more than one @boardname@, download your code onto each one and try playing the game with your friends!

```blocks
let dice = 0
radio.setGroup(1)
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= dice) {
        basic.showIcon(IconNames.Sad)
    }
})
```

```package
radio
```
