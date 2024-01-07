function convertTemperature() {
  const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
  const unitSelector = document.getElementById('unitSelector');
  const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;
  let result;

  if (selectedUnit === 'celsius') {
      result = (inputTemperature * 9/5) + 32;
  } else {
      result = (inputTemperature - 32) * 5/9;
  }

  document.getElementById('result').innerText = `Result: ${result.toFixed(2)} °${selectedUnit.toUpperCase()}`;
}
