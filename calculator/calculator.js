let displayValue = '';

function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(displayValue);
        if (Number.isNaN(result) || !Number.isFinite(result)) {
            throw new Error('Invalid calculation');
        }
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
