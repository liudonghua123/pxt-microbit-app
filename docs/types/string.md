# String

A *String* is a sequence of characters. 

### #intro

A string type is more complex than a number or a boolean. Strings have a length and you can
change the characters inside the string. You can also break strings apart and make new strings, or
put strings together and make longer strings.

### Create a string variable

```block
let greeting = "Hello";
```

To create a variable that holds a string:

1. Click `Variables` (in the Block drawer).

2. Type a name for your new string variable by clicking the down arrow, then click New Variable. Then type the variable name "salutation"

3. Drag a string block on the right side of the operator.

4. Click `"Hello"` and then type a string like `hello`.

Your code should look something like this:

```block
let greeting = "Hello";
```

## #examples

### See also #seealso
 
[Number](/types/number)

## Couldn't apply replacement logic to:
## #create

In the ``||variables:Variables||`` category of the **Toolbox** you can create new variable:

![Create a new string variable](/static/blocks/variables/string.gif)

Here's how to create a string variable using the Toolbox:

1. Click ``||variables:Variables||`` in the Toolbox.
2. Click on **Make a Variable...**.
3. Choose a name for your variable, type it in, and click **Ok**.
4. Drag the new ``||variables:set||`` block into your code.
5. Click on the ``||text:Text||`` drawer in the Toolbox and find the ``||text:" "||`` block.
6. Drag the ``||text:" "||`` block into the value slot in of your variable ``||variables:set||`` block.

## Characters you use in strings #custom

### ~ hint

#### Character sets

The available characters to use for a language is called the _character set_. Each character in the set has a number code to match it with.
To display characters on the [LED screen](/device/screen), the @boardname@, uses the "ASCII" character codes of `32` to `126`; letters, digits, punctuation marks, and a few symbols. All other character codes appear as a `?` on the LED screen.

### ~
