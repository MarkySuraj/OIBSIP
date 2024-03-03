const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert-button");
const resultDisplay = document.getElementById("result");

convertButton.addEventListener("click", function() {
const temperature = parseFloat(temperatureInput.value);
const unit = unitSelect.value;

if (isNaN(temperature)) {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
}

let convertedTemperature;

if (unit === "celsius") {
    convertedTemperature = (temperature * 9 / 5) + 32;
    convertedTemperature = convertedTemperature.toFixed(2); // Round to 2 decimal places
    resultDisplay.textContent = `${temperature}°C is equal to ${convertedTemperature}°F`;
} 
else if (unit === "fahrenheit") {
    convertedTemperature = (temperature - 32) * 5 / 9;
    convertedTemperature = convertedTemperature.toFixed(2);
    resultDisplay.textContent = `${temperature}°F is equal to ${convertedTemperature}°C`;
} 
else if (unit === "kelvin") {
// Add conversion logic for Kelvin
    convertedTemperature = temperature + 273.15;
    convertedTemperature = convertedTemperature.toFixed(2);
    resultDisplay.textContent = `${temperature}K is equal to ${convertedTemperature}°C`;
}
});

