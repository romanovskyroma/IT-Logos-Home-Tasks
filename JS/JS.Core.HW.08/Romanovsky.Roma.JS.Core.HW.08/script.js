// 'use strict';
// alert('Hello JS');

// task 1 

let tag = document.createElement('div');
document.body.appendChild(tag);
let div = document.querySelector('div');
div.className = 'box';
let box = document.querySelector('.box');
box.style.border = '2px solid black';
box.style.margin = '0 auto';
box.style.backgroundColor = 'violet';
box.style.width = '300px';
box.style.height = '300px';

let color = 'red';
div.onmouseover = function () {
    box.style.backgroundColor = color;
    if (box.style.backgroundColor == 'red') {
        color = 'yellow'
    } else if (box.style.backgroundColor == 'yellow') {
        color = 'green'
    } else if (box.style.backgroundColor == 'green') {
        color = 'red'
    }
}

div.onmouseleave = function () {
    box.style.backgroundColor = 'violet';
}


// task 2

// let tag = document.createElement('div');
// document.body.appendChild(tag);
// let div = document.querySelector('div');
// div.className = 'box';
// let tagP = document.createElement('p');
// div.appendChild(tagP);
// tagP.className = 'text';
// tagP.textContent = 'У мене є секрет!';
// tagP.style.textAlign = 'center';
// tagP.style.fontSize = '30px';
// tagP.style.margin = '0';
// let box = document.querySelector('.box');
// box.style.border = '2px solid yellow';
// box.style.outline = '2px solid brown';
// box.style.margin = '0 auto';
// box.style.backgroundColor = 'violet';
// box.style.width = '300px';
// box.style.height = '300px';


// div.onmouseover = function () {
//     box.style.backgroundColor = 'yellow';
//     tagP.textContent = 'Хочеш знати який?';
//     tagP.style.color = 'blue';   
// }
// div.onmouseleave = function () {
//     box.style.backgroundColor = 'violet';
//     tagP.textContent = 'У мене є секрет!';
//     tagP.style.color = 'blue'; 
// }
// div.onmousedown = function () {
//     box.style.backgroundColor = 'black';
//     tagP.textContent = 'А я тобі не скажу!';
//     tagP.style.color = 'white'; 
// }
// div.onmouseup = function () {
//     box.style.backgroundColor = 'yellow';
//     tagP.textContent = 'Хочеш знати який?';
//     tagP.style.color = 'blue'; 
// }