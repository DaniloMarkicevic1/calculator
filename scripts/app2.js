const keys = document.querySelector('.keys');
const input = document.querySelector('.inputScreen');

let array = [];
let a = '';
let c = '';
const addReducer = (previousValue, currentValue, funk) =>
    previousValue + currentValue;
const subtractReducer = (previousValue, currentValue) =>
    previousValue - currentValue;
const divideReducer = (previousValue, currentValue) =>
    previousValue / currentValue;
const multiplyReducer = (previousValue, currentValue) =>
    previousValue * currentValue;

function calc(value) {
    if (!isNaN(parseFloat(value))) {
        a += value;
    }
    if (input.value === '0') {
        input.value = value;
    } else {
        input.value += value;
        input.value.replace(/\d(?=(?:\d{3})+$)/g, '$&,');
    }
    if (value === '+') {
        array.push(parseFloat(a));
        a = '';
        c = '+';
    }
    if (value === '-') {
        array.push(parseFloat(a));
        a = '';
        c = '-';
    }
    if (value === '/') {
        array.push(parseFloat(a));
        a = '';
        c = '/';
    }
    if (value === '*' || value === 'x') {
        array.push(parseFloat(a));
        a = '';
        c = 'x';
    }
    if (value === '=' && c === '/') {
        array.push(parseFloat(a));
        input.value = array.reduce(divideReducer);
        a = input.value;
        array = [];
    }
    if (value === '=' && c === '+') {
        array.push(parseFloat(a));
        input.value = array.reduce(addReducer);
        a = input.value;
        array = [];
    }
    if (value === '=' && c === '-') {
        array.push(parseFloat(a));
        input.value = array.reduce(subtractReducer);
        a = input.value;
        array = [];
    }
    if (value === '=' && c === 'x') {
        array.push(parseFloat(a));
        input.value = array.reduce(multiplyReducer);
        a = input.value;
        array = [];
    }
    if (value === 'reset') {
        c = '';
        array = [];
        a = '';
        input.value = '0';
    }
    if (value === 'del') {
        const del = input.value.length;
        input.value = input.value.toString().substring(0, del - 4);
        a = input.value;
        if (c) {
            c = '';
            array = [];
        }
    }

}
keys.addEventListener('click', function (e) {
    if (!e.target.closest('button')) {
        return;
    }
    calc(e.target.value);
});
input.addEventListener('keypress', (e) => {
    calc(e.key);

});
