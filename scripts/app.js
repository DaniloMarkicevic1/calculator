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
console.log(parseFloat('2') + 2);

function validate(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}
let a = '';
let b = '';
let c = '';
function calc(value) {
    switch (value) {
        case 'reset':
            a = '';
            b = '';
            c = '';
            input.value = '0';
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            if (!c) {
                a += value;
                console.log(a, 'a');
            } else {
                b += value;
            }
            input.value = `${a}${c}${b}`;
            break;
        case '+':
            c = '+';
            console.log(c);
            break;
        case '-':
            c = '-';
            break;
        case 'x':
            c = '*';
            break;
        case '/':
            c = '/';
            break;
        case '=':
            if (c === '+') {
                input.value = parseFloat(a) + parseFloat(b);
                a = '';
                b = '';
                c = '';
            }
            if (c === '-') {
                input.value = parseFloat(a) - parseFloat(b);
                a = '';
                b = '';
                c = '';
            }
            if (c === '/') {
                input.value = parseFloat(a) / parseFloat(b);
                a = '';
                b = '';
                c = '';
            }
            if (c === '*') {
                input.value = parseFloat(a) * parseFloat(b);
                a = '';
                b = '';
                c = '';
            }
            break;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        calc(button.value);
    });
});
input.addEventListener('keyup', (e) => {
    calc(e.key);
});
