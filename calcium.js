var display = "";

function buttonPressed(number) {
    addToDisplay(number);
    var displayElement = document.getElementById('display');
    displayElement.innerHTML = display;
}

function buttonSubstractPressed() {}

function buttonAddPressed() {}

function buttonDividePressed() {}

function buttonMultiplyPressed() {}

function buttonEqualsPressed() {}

function addToDisplay(number){
   display += number;
}