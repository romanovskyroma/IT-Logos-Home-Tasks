const getID = id => document.getElementById(id);
const getSel = sel => document.querySelector(sel);
const f1 = document.forms['f1'];

let redBox = getID('redBox');
let greenBox = getID('greenBox');
let blueBox = getID('blueBox');
let createElemBtn = getID('createElem');
let coordinates = getID('coordinates');
let container = getSel('.container');

createElemBtn.onclick = function () {
    getSel('.bigBox').style.display = 'block';
}
bigBox = getSel('.bigBox');

f1.width.onchange = function () {
    getSel('.bigBox').style.width = f1.width.value + 'px';
}
f1.height.onchange = function () {
    getSel('.bigBox').style.height = f1.height.value + 'px';
}

getID('redBox').onclick = function () {
    getSel('.bigBox').style.background = 'red';
    getSel('.bigBox').style.border = 'double';
}
getID('greenBox').onclick = function () {
    getSel('.bigBox').style.background = 'green';
    getSel('.bigBox').style.border = 'double';
    console.log(getSel('.bigBox'));
}
getID('blueBox').onclick = function () {
    getSel('.bigBox').style.background = 'blue';
    getSel('.bigBox').style.border = 'double';
}

let arrX = [];
let arrY = [];

getID('coordinates').onclick = function () {

    let count = prompt('Введіть кількість пар кординат');
    for (let i = 0; i < count; i++) {
        arrX[i] = prompt(`Введіть кординати Х (${i}/${count}) у %`);
    }
    for (let j = 0; j < count; j++) {
        arrY[j] = prompt(`Введіть кординати Y (${j}/${count}) у %`);
    }
    getSel('.blockBtn').style.display = 'none';
}

let index = 0;

function moveBox() {
    bigBox.style.left = arrX[index] + '%';
    bigBox.style.top = arrY[index] + '%';
    index++;
    if (index > 2) {
        index = 0;
    }
}

bigBox.addEventListener("mouseover", moveBox);