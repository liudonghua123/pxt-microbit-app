# On Start

An event that runs when the program starts.

```blocks
let thousand = 1000
```

The ``on start`` is a special event that runs when the program starts, before any other event. 
Use this event to initialize your program.

##  #exstart

In this example, ``on start`` sets a dimmer brightness on the screen and the button handler shows a string.

```blocks
input.onButtonPressed(Button.A, () => {
    basic.showString("Hello!")
})
led.setBrightness(50)
```

## What about JavaScript?

Where is ``on start``...?
```typescript
function onStart(){} // I don't exist
```
``on start`` **only** exists in the block editor. In JavaScript, all code executes sequentially starting
at the first line.

## Hey, my events moved! #eventsmoved

When we transform the blocks into JavaScript, we always place all the event registrations (buttons, shake, ...) 
before launching the ``on start`` code.

If a block from ``on start`` pauses, other registered events will have the opportunity to run as well.

## #eventorder

## #examples
