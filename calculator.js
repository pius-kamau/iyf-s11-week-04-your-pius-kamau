
// CALCULATOR

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return 'Invalid operator';
    }
}

console.log(' CALCULATOR TESTS ');
console.log('10 + 5 = ' + calculate(10, '+', 5));
console.log('10 - 5 = ' + calculate(10, '-', 5));
console.log('10 * 5 = ' + calculate(10, '*', 5));
console.log('10 / 5 = ' + calculate(10, '/', 5));
console.log('10 / 0 = ' + calculate(10, '/', 0));