# While

Repeat code while a [Boolean](/blocks/logic/boolean) `condition` is true.

```block
while(true) {
}
```

The while loop has a *condition* that evaluates to a [Boolean](/blocks/logic/boolean) value. 

The condition is tested before any code runs. Which means that if the condition is false,
the code inside the loop doesn't execute.

##  #examples

## Example: diagonal line

The following example uses a while loop to make a diagonal line on the LED screen (points `0, 0`, `1, 1`, `2, 2`, `3, 3`, `4, 4`).

```blocks
input.onButtonPressed(Button.A, () => {
    let index = 4;
    while(index >= 0) {
        led.plot(index, index);
        index--;
    }
})
```

