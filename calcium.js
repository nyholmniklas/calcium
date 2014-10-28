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

document.onkeydown = keyHandler;
function keyHandler(e) {
    var pressedKey;
    if (document.all) {
        e = window.event;
        pressedKey = e.keyCode;
    }
    if (e.which) {
        pressedKey = e.which;
    }

    //Keycode for enter
    var enter = 13;
    //Some keycodes for numpad keys on the keyboard
    var numpad0KeyCode = 96;
    var numpad9KeyCode = 105;
    var numpadMultiply = 106;
    var numpadAdd = 107;
    var numpadSubstract = 109;
    var numpadDecimal = 110;
    var numpadDivide = 111;


    //If enter was pressed call the appropriate function
    if (pressedKey == enter) buttonEqualsPressed();
    //Else if it was a number or operand button on the keypad do some stuff with magic ints
    else if (numpad0KeyCode <= pressedKey && pressedKey <= numpadDivide) {
        //If its a number
        if (pressedKey < numpad9KeyCode) {
            var adjustementToGetNumberFromKeyCode = 96;
            var number = pressedKey - adjustementToGetNumberFromKeyCode;
            buttonPressed(number);
        }
        //Else if its not a number and it's something like divide or enter..
        else {
            switch (pressedKey) {
                case numpadMultiply:
                    buttonMultiplyPressed();
                    break;
                case numpadDivide:
                    buttonDividePressed();
                    break;
                case numpadAdd:
                    buttonAddPressed();
                    break;
                case numpadSubstract:
                    buttonSubstractPressed();
                    break;
                case numpadDecimal:
                    buttonPressed(".");
                    break;
            }
        }
    }
}