// Basic Math Functions

let add = (num1, num2) => {
  return num1 + num2;
};

let subtract = (num1, num2) => {
  return num1 - num2;
};

let multiply = (num1, num2) => {
  return num1 * num2;
};

let divide = (num1, num2) => {
  return num1 / num2;
};

// Variable declaration

let num1 = 0;

let num2 = 0;

let operator = "";

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}
