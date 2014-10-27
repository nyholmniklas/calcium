var display = "";
var pendingOperation = "";
var leftVariable = "";

function buttonPressed(number) {
    var displayElement = document.getElementById('display');
if (displayElement.textContent=="0"){display=""}
    addToDisplay(number);

    displayElement.textContent = display;
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

function buttonEqualsPressed() {}

function storeAndClear(){
    var displayElement = document.getElementById('display');
    leftVariable = displayElement.textContent;
    displayElement.textContent = "0";
    display = "0";
}

function addToDisplay(number){
   display += number;
}