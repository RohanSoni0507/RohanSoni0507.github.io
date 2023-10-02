let displayValue = '';
let toggleParenthesesFlag = false;

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function toggleParentheses() {
    if (toggleParenthesesFlag) {
        appendToDisplay(')');
        toggleParenthesesFlag = false;
    } else {
        appendToDisplay('(');
        toggleParenthesesFlag = true;
    }
}

function toggleSign() {
    if (displayValue.startsWith('-')) {
        displayValue = displayValue.substring(1);
    } else {
        displayValue = '-' + displayValue;
    }
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}
