document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.querySelector('.display_place');
    let currentInput = '';
    let operator = '';
    let operand1 = '';
    let operand2 = '';

    const updateDisplay = (value) => {
        display.innerText = value;
    }

    const clearAll = () => {
        currentInput = '';
        operator = '';
        operand1 = '';
        operand2 = '';
        updateDisplay('0');
    }

    const deleteLast = () => {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput || '0');
    }

    const setOperand = (value) => {
        if (operator) {
            operand2 += value;
            currentInput += value;
        } else {
            operand1 += value;
            currentInput += value;
        }
        updateDisplay(currentInput);
    }

    const setOperator = (op) => {
        if (operand1 && !operand2) {
            operator = op;
            currentInput += ` ${op} `;
            updateDisplay(currentInput);
        }
    }

    const calculateResult = () => {
        let result = 0;
        let num1 = parseFloat(operand1);
        let num2 = parseFloat(operand2);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case 'x':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '^':
                result = Math.pow(num1, num2);
                break;
            case '√':
                result = Math.sqrt(num1);
                break;
        }

        updateDisplay(result);
        operand1 = result.toString();
        operand2 = '';
        operator = '';
        currentInput = result.toString();
    }

    document.getElementById('btn_clear').addEventListener('click', clearAll);
    document.getElementById('Del_btn').addEventListener('click', deleteLast);

    document.getElementById('btn0').addEventListener('click', () => setOperand('0'));
    document.getElementById('btn1').addEventListener('click', () => setOperand('1'));
    document.getElementById('btn2').addEventListener('click', () => setOperand('2'));
    document.getElementById('btn3').addEventListener('click', () => setOperand('3'));
    document.getElementById('btn4').addEventListener('click', () => setOperand('4'));
    document.getElementById('btn5').addEventListener('click', () => setOperand('5'));
    document.getElementById('btn6').addEventListener('click', () => setOperand('6'));
    document.getElementById('btn7').addEventListener('click', () => setOperand('7'));
    document.getElementById('btn8').addEventListener('click', () => setOperand('8'));
    document.getElementById('btn9').addEventListener('click', () => setOperand('9'));

    document.getElementById('btn_point').addEventListener('click', () => setOperand('.'));
    document.getElementById('btn_negative').addEventListener('click', () => setOperand('-'));

    document.getElementById('add_btn').addEventListener('click', () => setOperator('+'));
    document.getElementById('substract_btn').addEventListener('click', () => setOperator('-'));
    document.getElementById('mutiple_btn').addEventListener('click', () => setOperator('x'));
    document.getElementById('divide_btn').addEventListener('click', () => setOperator('/'));
    document.getElementById('power_btn').addEventListener('click', () => setOperator('^'));
    document.getElementById('square_btn').addEventListener('click', () => {
        operator = '√';
        operand2 = '2';
        calculateResult();
    });

    document.getElementById('equal_btn').addEventListener('click', calculateResult);
    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (!isNaN(key)) {
            setOperand(key);
        } else if (key === '.') {
            setOperand('.');
        } else if (key === 'Backspace') {
            deleteLast();
        } else if (key === 'Escape') {
            clearAll();
        } else if (key === 'Enter' || key === '=') {
            calculateResult();
            
        } else if (key === '+') {
            setOperator('+');
        } else if (key === '-') {
            setOperator('-');
        } else if (key === '*') {
            setOperator('x');
        } else if (key === '/') {
            setOperator('/');
        } else if (key === '^') {
            setOperator('^');
        }
    });
});
