const allOperands = document.querySelectorAll("#operand");
const allOperators = document.querySelectorAll("#operator");

let equalBtn = document.querySelector("#equals");
let decimalBtn = document.querySelector("#decimal");
let positiveNegativeBtn = document.querySelector("#positiveNegative");
let clearAllBtn = document.querySelector("#clearAll");
let clearEntryBtn = document.querySelector("#clearEntry");

let displayDiv = document.querySelector("#display");

let currentNumber = 0;
let currentResult = 0;
let currentOperator = "+";
let decimalPlace = 0;
let sum = 0;
displayDiv.textContent = 0;
let errorMsg = "";

allOperands.forEach(operand => {
    operand.addEventListener("click", getOperand);
});

allOperators.forEach(operator => {
    operator.addEventListener("click", getOperator);
});

function updateDisplay(number) {
    displayDiv.textContent = number;
}

function operate(num1, num2, operator) {
    if (operator === "/" && num2 === 0) {
        errorMsg = "You can't divide by 0!";
        return num1;
    }
    if (operator === "+") {
        sum = num1 + num2;
    } else if (operator === "-") {
        sum = num1 - num2;
    } else if (operator === "*") {
        sum = num1 * num2;
    } else if (operator === "/") {
        sum = num1 / num2;
    } else if (operator === "percentage") {
        sum = (num1 / 100) * num2;
    }
    updateDisplay(sum);
    return Number(sum.toPrecision(8));
}

function getTotal() {
    currentResult = operate(currentResult, currentNumber, currentOperator);
    if (errorMsg != "") {
        updateDisplay(errorMsg);
        errorMsg = "";
    } else {
        updateDisplay(currentResult);
        currentNumber = 0;
        decimalPlace = 0;
    }
}

function getOperand(e) {
    if (currentNumber > 10 ** (8 - decimalPlace)) {
        return;
    }
    if (decimalPlace === 0) {
        currentNumber = 10 * currentNumber + parseInt(e.target.value);
    } else {
        currentNumber = parseInt(e.target.value) / 10 ** decimalPlace + currentNumber;
        decimalPlace++;
    }
    updateDisplay(currentNumber);
}

function getOperator(e) {
    getTotal();
    currentOperator = e.target.value;
    currentNumber = 0;
    decimalPlace = 0;
}

equalBtn.addEventListener("click", (e) => {
    getTotal();
    currentOperator = "+";
});

decimalBtn.addEventListener("click", (e) => {
    if (decimalPlace === 0) {
        decimalPlace++;
    }
});

positiveNegativeBtn.addEventListener("click", (e) => {
    currentNumber = currentNumber * -1;
    updateDisplay(currentNumber);
});

clearAllBtn.addEventListener("click", (e) => {
    currentNumber = 0;
    currentResult = 0;
    currentOperator = "+";
    updateDisplay(currentResult);
});

clearEntryBtn.addEventListener("click", (e) => {
    currentNumber = 0;
    updateDisplay();
});