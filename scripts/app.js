const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');
const input = document.querySelector('.inputScreen');
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

theme1.addEventListener('click', () => {
    body.classList.remove('light', 'dark');
    body.classList.add('neutral');
});
theme2.addEventListener('click', () => {
    body.classList.add('light');
    body.classList.remove('dark');
    body.classList.remove('neutral');
});
theme3.addEventListener('click', () => {
    body.classList.add('dark');
    body.classList.remove('light');
    body.classList.remove('neutral');
});
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (button.value) {
            case 'reset':
                input.value = '0';
                break;
            case '=':
                break;
            case 'x':
                break;
            case '+':
                break;
            case '-':
                break;
            case '/':
                break;
            default:
                input.value += button.value;
        }
    });
});
