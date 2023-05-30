var calculateButton = document.getElementById("calculateButton");
var number1Input = document.getElementById("number1");
var number2Input = document.getElementById("number2");
var operationSelect = document.getElementById("operation");
var resultParagraph = document.getElementById("result");

calculateButton.addEventListener("click", function() {
  var number1 = parseFloat(number1Input.value);
  var number2 = parseFloat(number2Input.value);
  var operation = operationSelect.value;
  var result;

  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    case "divide":
      result = number1 / number2;
      break;
    default:
      result = "Operación inválida";
  }

  resultParagraph.textContent = "Resultado: " + result;
});
