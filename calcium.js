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
}

function buttonDividePressed() {
    pendingOperation = "divide";
}

function buttonMultiplyPressed() {
    pendingOperation = "multiply";
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