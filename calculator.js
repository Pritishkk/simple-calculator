const operator = prompt('Enter calculation to be performed:');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
let result;
if (operator == 'add') {
    result = number1 + number2;
}
else if (operator == 'sub') {
    result = number1 - number2;
}
else if (operator == 'mul') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(`The result is = ${result}`);