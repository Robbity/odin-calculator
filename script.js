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

// General Functions

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

function updateScreen(screen, val) {
  screen.textContent = val;
}

function clearScreen() {
  num1 = 0;

  num2 = 0;

  operator = "";

  updateScreen(currScreen, num1);
  updateScreen(lastScreen, "");
}

function delScreen(num) {
  if (num === "0") {
    return;
  }

  num1 = num.slice(0, -1);
  updateScreen(currScreen, num1);
}

function isOperator(button) {
  if (button === "÷" || button === "×" || button === "−" || button === "+") {
    operator = button;
    return true;
  } else {
    return false;
  }
}

function isEquals(button) {
  return button === "=";
}

function delZeros(num) {
  num = String(Number(num));
}

// Button Inputs

const operations = document.querySelector(".operations");
const clear = document.querySelector("#clear");
const dlt = document.querySelector("#delete");

const currScreen = document.querySelector("#screen-current");
const lastScreen = document.querySelector("#screen-last");

function calculating() {
  // Remove any leading values

  updateScreen(currScreen, num1);
  secondNum = false;

  // Registering Buttons
  operations.addEventListener("click", function (event) {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }

    curr = event.target.textContent;
    if (isEquals(curr) && num1 > 0 && num2 > 0) {
      console.log("equals");
      updateScreen(lastScreen, num1 + operator + num2 + "=");
      console.log(num1);
      console.log(num2);
      console.log(operator);
      num1 = operate(operator, Number(num1), Number(num2));
      updateScreen(currScreen, num1);
      console.log(num1);
      secondNum = false;
    } else if (isOperator(curr)) {
      console.log("operator");
      updateScreen(lastScreen, num1 + curr);
      secondNum = true;
    } else if (secondNum) {
      console.log("second");
      num2 = num2 + curr;
      num2 = String(Number(num2));
      updateScreen(currScreen, num2);
    } else {
      console.log("first");
      num1 = num1 + curr;
      num1 = String(Number(num1));
      updateScreen(currScreen, num1);
    }
  });

  // Clear and Delete Buttons

  clear.addEventListener("click", function (event) {
    clearScreen();
  });

  dlt.addEventListener("click", function (event) {
    delScreen(num1);
  });
}

calculating();
