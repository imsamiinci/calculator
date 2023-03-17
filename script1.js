let display = document.getElementById("result");
let equation = "";

function addToDisplay(value) {
  equation += value;
  display.innerHTML = equation;
}

function clearDisplay() {
  equation = "";
  display.innerHTML = "";
}

function calculate() {
  let result = eval(equation);
  display.innerHTML = result;
  equation = "";
}
