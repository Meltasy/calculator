// Pseudocode

// #1 Initialize the state of the application: current number = 0; current result = 0
// #2 Create the current number with the operand buttons pressed by user
// #3 When operator button is pressed, update current result with current number
// #4 Store the value of the operator
// #5 Repeat #2
// #6 When equals button is pressed, calculate using stored information and update current result

let currentNumber = 0;
let currentResult = 0;
let currentOperator = "";

const allOperands = document.querySelectorAll("#operand");
const allOperators = document.querySelectorAll("#operator");

let displayDiv = document.getElementById("display");

function showInDisplay(number) {
    displayDiv.textContent = number;
}

allOperands.forEach(operand => {
    operand.addEventListener("click", (e) => {
        currentNumber = 10 * currentNumber + parseInt(e.target.value);
        console.log(currentNumber);
        showInDisplay(currentNumber);
    });
});

allOperators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        console.log(e.target.value);
        currentOperator = e.target.value;
        currentResult = currentNumber;
        currentNumber = 0;
    });
});

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            this.number = num1 + num2;
            break;
        case "-":
            this.number = num1 - num2;
            break;
        case "*":
            this.number = num1 * num2;
            break;
        case "/":
            this.number = num1 / num2;
            break;
    }
    console.log(this.number);
    return this.number;
}

let equalBtn = document.getElementById("equals");

equalBtn.addEventListener("click", (e) => {
    currentResult = operate(currentResult, currentNumber, currentOperator);
    console.log(currentResult);
    showInDisplay(currentResult);
    currentNumber = currentResult;
});

let clearAllBtn = document.getElementById("clearAll");

clearAllBtn.addEventListener("click", (e) => {
    currentNumber = 0;
    currentResult = 0;
    currentOperator = "";
    console.log(currentResult);
    showInDisplay(currentResult);
});

let clearEntryBtn = document.getElementById("clearEntry");

clearEntryBtn.addEventListener("click", (e) => {
    currentNumber = 0;
    showInDisplay();
});