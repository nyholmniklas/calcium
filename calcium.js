/**
 * A bunch of global variables for our calculator application
 */
var display = "0";
var pendingOperation = "";
var leftVariable = "";

/**
 * Functions triggered by button presses
 */
function buttonPressed(number) {
    addToDisplay(number);
}
function buttonSubstractPressed() {
    pendingOperation = "substract";
    storeAndClear();
}

function buttonAddPressed() {
    pendingOperation = "add";
    storeAndClear();
}

function buttonDividePressed() {
    pendingOperation = "divide";
    storeAndClear();
}

function buttonMultiplyPressed() {
    pendingOperation = "multiply";
    storeAndClear();
}

function buttonEqualsPressed() {
    performPendingOperation()
    updateDisplay();
    store();
}

function buttonDecimalPressed() {
    addDecimal();
    updateDisplay();
}

/**
 * Get the value of what is currently in display, add to it or update it based on global variable display
 */

function getDisplayValue() {
    var displayElement = document.getElementById('display');
    return displayElement.textContent;
}

var maxDisplayLength = 10;
function addToDisplay(number) {
    if (display.length > maxDisplayLength) return;
    if (display == "0" || display == "Infinity" || display == "NaN") {
        display = "";
    }
    display = display.toString();
    display += number;
    updateDisplay();
}

function updateDisplay() {
    var displayElement = document.getElementById('display');
    displayElement.textContent = display.substring(0, maxDisplayLength);
}

/**
 * Add a decimal to display
 */

function addDecimal() {
    displayString = "" + display;
    if (displayString.indexOf(".") > -1) {
        return;
    }
    else {
        display += ".";
    }
}

/**
 * Perform operations
 */
function performPendingOperation() {
    var tempLeft = +leftVariable;
    switch (pendingOperation) {
        case "add":
            display = tempLeft + +getDisplayValue();
            break;

        case "substract":
            display = tempLeft - +getDisplayValue();
            break;

        case "divide":
            display = tempLeft / +getDisplayValue();
            break;

        case "multiply":
            display = tempLeft * +getDisplayValue();
            break;
    }
    pendingOperation = "";
}

/**
 * For storing the current number on the display into the leftVariable variable and clearing the screen
 */
function storeAndClear() {
    store();
    clear();
}

function store() {
    var displayElement = document.getElementById('display');
    leftVariable = displayElement.textContent;
}

function clear() {
    var displayElement = document.getElementById('display');
    displayElement.textContent = "0";
    display = "0";
}

/**
 * Stuff for handling keydown events
 */
//We bind key press events to our keyHandler(e) function
document.onkeydown = keyHandler;
//Keycode for enter
var enterKeyCode = 13;
//Some keycodes for numpad keys on the keyboard
var numpad0KeyCode = 96;
var numpad9KeyCode = 105;
var numpadMultiplyKeyCode = 106;
var numpadAddKeyCode = 107;
var numpadSubstractKeyCode = 109;
var numpadDecimalKeyCode = 110;
var numpadDivideKeyCode = 111;

function keyHandler(e) {
    var event = window.event;
    var pressedKey = event.keyCode;

    //If enter was pressed call the appropriate function
    if (pressedKey == enterKeyCode) buttonEqualsPressed();
    //Else if it was a number or operand button on the keypad do some stuff with magic ints
    else if (isNumpadKey(pressedKey)) {
        //If its a number
        if (pressedKey <= numpad9KeyCode) handleNumberNumpadKeyPressed(pressedKey);
        //Else if its not a number and it's something like divide or enter..
        else handleNonNumericNumpadKeyPressed(pressedKey);
    }
}

function isNumpadKey(keyCode) {
    return (numpad0KeyCode <= keyCode && keyCode <= numpadDivideKeyCode);
}

function handleNumberNumpadKeyPressed(pressedKey) {
    buttonPressed(getNumberFromNumpadKey(pressedKey));
}

function handleNonNumericNumpadKeyPressed(pressedKey) {
    switch (pressedKey) {
        case numpadMultiplyKeyCode:
            buttonMultiplyPressed();
            break;
        case numpadDivideKeyCode:
            buttonDividePressed();
            break;
        case numpadAddKeyCode:
            buttonAddPressed();
            break;
        case numpadSubstractKeyCode:
            buttonSubstractPressed();
            break;
        case numpadDecimalKeyCode:
            buttonPressed(".");
            break;
    }
}

function getNumberFromNumpadKey(pressedKey) {
    var adjustementToGetNumberFromKeyCode = 96;
    var number = pressedKey - adjustementToGetNumberFromKeyCode;
    return number;
}