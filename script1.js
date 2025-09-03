let display = document.getElementById("display");

function insert(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function scientific(func) {
  let value = parseFloat(display.value);

  if (isNaN(value)) {
    display.value = "Error";
    return;
  }

  switch (func) {
    case "sqrt":
      display.value = Math.sqrt(value);
      break;
    case "pow":
      let exp = prompt("Enter exponent:");
      display.value = Math.pow(value, exp);
      break;
    case "sin":
      display.value = Math.sin(value * Math.PI / 180); // degrees
      break;
    case "cos":
      display.value = Math.cos(value * Math.PI / 180);
      break;
    case "tan":
      display.value = Math.tan(value * Math.PI / 180);
      break;
    case "log":
      display.value = Math.log(value);
      break;
    case "log10":
      display.value = Math.log10(value);
      break;
  }
}
