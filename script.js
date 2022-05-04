'use strict';

// clear console
let operator, num1, num2, output;
let operatorClicked = false;
let equalToClicked = false;

let screen = document.querySelector('.output');
let screenOperator = document.querySelector('.operator');

document.querySelectorAll('.operator').forEach((operatorEl) => {
  operatorEl.addEventListener('click', function () {
    if (operatorClicked) {
      calculate(num1, operator, num2);
      num1 = screen.textContent;
      num2 = '';
    }

    screenOperator.textContent = operator = operatorEl.textContent;
    operatorClicked = true;
  });
});

document.querySelectorAll('.num').forEach((numberEl) => {
  numberEl.addEventListener('click', function () {
    if (!operatorClicked) {
      // An operator click signifies the end of the first number
      if (equalToClicked) num1 = '';

      !num1 ? (num1 = numberEl.textContent) : (num1 += numberEl.textContent);
      screen.textContent = num1;
    } else {
      !num2 ? (num2 = numberEl.textContent) : (num2 += numberEl.textContent);
      screen.textContent = num2;
    }
  });
});

function calculate(num1, operator, num2) {
  if (operator === '+') {
    screen.textContent = +num1 + +num2;
  } else if (operator === '-') {
    screen.textContent = +num1 - +num2;
  } else if (operator === '/') {
    num2 === '0'
      ? (screen.textContent = `Can't divide by ${num2}`)
      : (screen.textContent = +num1 / +num2);
  } else if (operator === 'x') {
    screen.textContent = +num1 * +num2;
  }
}

document.querySelector('.equal').addEventListener('click', function () {
  calculate(num1, operator, num2);
  num1 = screen.textContent;
  num2 = '';
  screenOperator.textContent = '';
  operatorClicked = false;
  equalToClicked = true;
});

document.querySelector('.reset').addEventListener('click', function () {
  num1 = num2 = 0;
  screen.textContent = '';
  screenOperator.textContent = '';
});

document.querySelector('.del').addEventListener('click', function () {
  num1 === screen.textContent
    ? (screen.textContent = num1 = num1.slice(0, -1))
    : (screen.textContent = num2 = num2.slice(0, -1));
});
