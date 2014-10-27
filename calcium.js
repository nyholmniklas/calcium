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
    alert(pendingOperation);
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
    if (display == "0") {
        display = "";
    }
    display = display.toString();
    display += number;
}