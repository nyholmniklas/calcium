var display = "";
var pendingOperation = "";
var leftVariable = "";

function buttonPressed(number) {
    addToDisplay(number);
    var displayElement = document.getElementById('display');
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
    displayElement.textContent = "";
}

function addToDisplay(number){
   display += number;
}