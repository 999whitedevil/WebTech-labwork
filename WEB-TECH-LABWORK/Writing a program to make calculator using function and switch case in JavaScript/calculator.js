function calculator(num1, num2, operator) {
    let result;

    // Switch case to perform the calculation based on the operator
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        case '%':
            result = modulus(num1, num2);
            break;
        default:
            result = "Invalid operator";
    }

    return result;
}

// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

// Function to find modulus
function modulus(num1, num2) {
    return num1 % num2;
}



console.log("the addition of the 122 + 1233 is : ",calculator(122, 1233, '+'));
console.log("the subtraction of the 400 - 200 is : ",calculator(400, 200,'-'));
console.log("the multiplication of the 23 * 32 is : ",calculator(23, 32,'*'));
console.log("the division of the 10 / 400 is : ",calculator(400,10,'/'));
console.log(calculator);

