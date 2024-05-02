const num1 = 0
const num2 = 0
const operator = 0

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// console.log(add(37, 29));
// console.log(subtract(88, 41));
// console.log(multiply(6, 8));
// console.log(divide(56, 7));

function Operate(operator, num1, num2) {
    operator = add || subtract || multiply || divide;
    return num1.operator + num2.operator;
}