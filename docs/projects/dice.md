# Dice

## Introduction @unplugged

Let's turn the @boardname@ into a dice!
(Want to learn how the accelerometer works? [Watch this video](https://youtu.be/byngcwjO51U)).

![A microbit dice](/static/mb/projects/dice.png)

## Step 1

We need 3 pieces of code: one to detect a throw (shake), another to pick a random number, and then one to show the number.

Use the ``||input:on shake||`` block you see in the editor workspace. It runs code when you shake the @boardname@.

```blocks
input.onGesture(Gesture.Shake, function() {

})
```

## Step 2

Get a ``||basic:show number||`` block and place it inside the ``||input:on shake||`` block to display a number.

```blocks
input.onGesture(Gesture.Shake, function() {
    basic.showNumber(0)
})
```

## Step 3

Put a ``||Math:pick random||`` block in the ``||basic:show number||`` block to pick a random number.

```blocks
input.onGesture(Gesture.Shake, function() {
    basic.showNumber(randint(0, 10))
})
```

## Step 4

A typical dice shows values from `1` to `6`. So, in ``||Math:pick random||``, don't forget to choose the right minimum and maximum values!

```blocks
input.onGesture(Gesture.Shake, function() {
    basic.showNumber(randint(1, 6))
})
```

## Step 5

Use the simulator to try out your code. Does it show the number you expected?

## Step 6

If you have a @boardname@ connected, click ``|Download|`` and transfer your code to the @boardname@!

```template
input.onGesture(Gesture.Shake, function() {})
```
