var display = "0";
var pendingOperation = "";
var leftVariable = "";

function buttonPressed(number) {
    addToDisplay(number);
    updateDisplay();
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
    updateDisplay();
    store();
}

function buttonDecimalPressed() {
    addDecimal();
    updateDisplay();
}

function getDisplayValue() {
    var displayElement = document.getElementById('display');
    return displayElement.textContent;
}

function updateDisplay() {
    var displayElement = document.getElementById('display');
    displayElement.textContent = display;
}

function storeAndClear() {
    store();
    clear();
}

function clear() {
    var displayElement = document.getElementById('display');
    displayElement.textContent = "0";
    display = "0";
}

function store() {
    var displayElement = document.getElementById('display');
    leftVariable = displayElement.textContent;
}

function addToDisplay(number) {
    if (display == "0" || display == "Infinity" || display == "NaN") {
        display = "";
    }
    display = display.toString();
    display += number;
}

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