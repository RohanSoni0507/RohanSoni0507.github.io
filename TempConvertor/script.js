document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperature");
    const convertCtoFButton = document.getElementById("convertCtoF");
    const convertFtoCButton = document.getElementById("convertFtoC");
    const resultText = document.getElementById("resultText");

    convertCtoFButton.addEventListener("click", function() {
        const temperature = parseFloat(temperatureInput.value);
        if (!isNaN(temperature)) {
            const fahrenheit = (temperature * 9/5) + 32;
            resultText.textContent = `Result: ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultText.textContent = "Result: Invalid Input";
        }
    });

    convertFtoCButton.addEventListener("click", function() {
        const temperature = parseFloat(temperatureInput.value);
        if (!isNaN(temperature)) {
            const celsius = (temperature - 32) * 5/9;
            resultText.textContent = `Result: ${celsius.toFixed(2)}°C`;
        } else {
            resultText.textContent = "Result: Invalid Input";
        }
    });
});
