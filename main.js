function takeValue(value) {
  document.getElementById("output-window").value += value;
}

function calculateResult() {
  var result = eval(document.getElementById("output-window").value);
  document.getElementById("output-window").value = result;
}

function clearValue(value) {
  document.getElementById("output-window").value = value;
}

function deleteValue() {
  var value = document.getElementById("output-window").value;
  document.getElementById("output-window").value = value.substr(
    0,
    value.length - 1
  );
}

function minPlusNum() {
  var value = document.getElementById("output-window").value;
  value = value * -1;
  document.getElementById("output-window").value = value;
}
