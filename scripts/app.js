const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');
const input = document.querySelector('.inputScreen');
const body = document.querySelector('body');
const keys = document.querySelector('.keys');
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
function validate(s) {
    var rgx = /[0-9,x+*\.\/-]/gm;
    return rgx.test(s);
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
        case 'del':
            const del = input.value.length;
            input.value = input.value.toString().substring(0, del - 1);
            console.log(input.value);
            if (!c || c) {
                a = input.value;
                b = '';
            }
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
            } else {
                b += value;
            }
            input.value = `${a}${c}${b}`;
            break;
        case '+':
            c = '+';
            input.value = `${a}${c}${b}`;
            break;
        case '-':
            c = '-';
            input.value = `${a}${c}${b}`;
            break;
        case 'x':
        case '*':
            c = '*';
            input.value = `${a}${c}${b}`;
            break;
        case '/':
            c = '/';
            input.value = `${a}${c}${b}`;
            break;
        case '=':
            if (c === '+') {
                input.value = parseFloat(a) + parseFloat(b);
                a = input.value;
                b = '';
                c = '';
            }
            if (c === '-') {
                input.value = parseFloat(a) - parseFloat(b);
                a = input.value;
                b = '';
                c = '';
            }
            if (c === '/') {
                input.value = parseFloat(a) / parseFloat(b);
                a = input.value;
                b = '';
                c = '';
            }
            if (c === '*') {
                input.value = parseFloat(a) * parseFloat(b);
                a = input.value;
                b = '';
                c = '';
            }
            break;
    }
}
keys.addEventListener('click', function (e) {
    if (!e.target.closest('button')) {
        return;
    }
    calc(e.target.value);
});
input.addEventListener('keyup', (e) => {
    calc(e.key);
});
