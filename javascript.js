const result = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
let expression = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            expression += button.textContent;
            result.value = expression;
        } else if (button.classList.contains('operator')) {
            expression += button.textContent;
            result.value = expression;
        } else if (button.classList.contains('clear')) {
            expression = '';
            result.value = '0';
        } else if (button.classList.contains('equals')) {
            try {
                const answer = eval(expression);
                result.value = answer;
                expression = answer.toString();
            } catch (error) {
                result.value = 'Error';
                expression = '';
            }
        }
    });
});
