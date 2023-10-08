let currentInput = '0';
let operator = '';
let firstOperand = '';

function clearResult() {
    currentInput = '0';
    operator = '';
    firstOperand = '';
    document.getElementById('result').value = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || currentInput === '-0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    document.getElementById('result').value = currentInput;
}

function appendOperator(op) {
    if (currentInput !== '' && !operator) {
        operator = op;
        firstOperand = currentInput;
        currentInput = '';
    }
}

function calculate() {
    if (currentInput !== '' && operator && firstOperand !== '') {
        currentInput = eval(`${firstOperand} ${operator} ${currentInput}`);
        operator = '';
        firstOperand = '';
        document.getElementById('result').value = currentInput;
    }
}

// Attach event listeners to the number buttons
const numberButtons = document.querySelectorAll('.btn');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (!isNaN(buttonText) || buttonText === '.') {
            appendNumber(buttonText);
        } else if (buttonText === 'C') {
            clearResult();
        } else if (['+', '-', '*', '/'].includes(buttonText)) {
            appendOperator(buttonText);
        } else if (buttonText === '=') {
            calculate();
        }
    });
});
