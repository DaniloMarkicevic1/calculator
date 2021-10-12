const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');
// Theme Slider
const themeSlider = document.querySelector('.themeSlider');
const circle = document.querySelectorAll('.circle');
const firstCircle = document.querySelector('.first');
const secondCircle = document.querySelector('.second');
const thirdCircle = document.querySelector('.third');
const input = document.querySelector('.inputScreen');
const body = document.querySelector('body');
const keys = document.querySelector('.keys');
let a = '';
let b = '';
let c = '';
if (body.classList.contains('light')) {
    circle[0].classList.add('hidden');
    circle[2].classList.add('hidden');
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

firstCircle.addEventListener('click', (e) => {
    body.classList.remove('light', 'dark');
    body.classList.add('neutral');
    circle[0].classList.remove('hidden');
    circle[1].classList.add('hidden');
    circle[2].classList.add('hidden');
});
secondCircle.addEventListener('click', (e) => {
    body.classList.remove('neutral', 'dark');
    body.classList.add('light');
    circle[0].classList.add('hidden');
    circle[1].classList.remove('hidden');
    circle[2].classList.add('hidden');
});
thirdCircle.addEventListener('click', (e) => {
    body.classList.remove('light', 'neutral');
    body.classList.add('dark');
    circle[0].classList.add('hidden');
    circle[1].classList.add('hidden');
    circle[2].classList.remove('hidden');
});
themeSlider.addEventListener('click', function (e) {
    if (e.target.classList.contains('first')) {
        body.classList.remove('light', 'dark');
        body.classList.add('neutral');
    }
    if (e.target.classList.contains('second')) {
        body.classList.add('light');
        body.classList.remove('dark');
        body.classList.remove('neutral');
    }
    if (e.target.classList.contains('third')) {
        body.classList.add('dark');
        body.classList.remove('light');
        body.classList.remove('neutral');
    }
});
theme1.addEventListener('click', () => {
    body.classList.remove('light', 'dark');
    body.classList.add('neutral');
    circle[0].classList.remove('hidden');
    circle[1].classList.add('hidden');
    circle[2].classList.add('hidden');
});
theme2.addEventListener('click', () => {
    body.classList.add('light');
    body.classList.remove('dark', 'neutral');
    circle[0].classList.add('hidden');
    circle[1].classList.remove('hidden');
    circle[2].classList.add('hidden');
});
theme3.addEventListener('click', () => {
    body.classList.add('dark');
    body.classList.remove('light', 'neutral');
    circle[0].classList.add('hidden');
    circle[1].classList.add('hidden');
    circle[2].classList.remove('hidden');
});
function calc(value) {
    switch (value) {
        case 'reset':
            a = '';
            b = '';
            c = '';
            input.value = '0';
            break;
        case 'del':
            del = input.value.length;
            input.value = input.value.toString().substring(0, del - 1);
            if (!c) {
                a = input.value;
                b = '';
            } else {
                b = b.substring(0, b.length - 1);
                console.log(b);
            }
            break;
        case 'Backspace':
            if (!c) {
                a = input.value;
                b = '';
            } else {
                b = b.substring(0, b.length - 1);
                console.log(b);
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
                input.value = `${Number(a).toLocaleString()}`;
            }
            if (c) {
                b += value;
                input.value = `${Number(a).toLocaleString()}${c}${Number(
                    b
                ).toLocaleString()}`;
            }
            break;
        case '+':
            c = '+';
            input.value = `${Number(a).toLocaleString()}${c}`;
            break;
        case '-':
            c = '-';
            input.value = `${Number(a).toLocaleString()}${c}`;
            break;
        case 'x':
        case '*':
            c = '*';
            input.value = `${Number(a).toLocaleString()}${c}`;
            break;
        case '/':
            c = '/';
            input.value = `${Number(a).toLocaleString()}${c}`;
            break;
        case '=':
            if (c === '+') {
                input.value = Number(+a + +b).toLocaleString();
                a = +a + +b;
            }
            if (c === '-') {
                input.value = Number(+a - +b).toLocaleString();
                a = +a - +b;
            }
            if (c === '/') {
                input.value = Number(+a / +b).toLocaleString();
                a = +a / +b;
            }
            if (c === '*') {
                input.value = Number(+a * +b).toLocaleString();
                a = +a * +b;
            }
            b = '';
            c = '';
            break;
    }
}
