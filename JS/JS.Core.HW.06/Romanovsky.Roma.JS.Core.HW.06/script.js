'use strict';

let bgPage = prompt('Ведіть фон для сторінки');
document.body.style.background = bgPage;

let fontFamily = prompt('Ведіть тип шрифта для сторінки (serif, cursive ...)');
document.body.style.fontFamily = fontFamily;

let alignTitle = prompt('Задайте вирівнювання для заголовка h1');
let h1 = document.getElementsByTagName('h1');
for (let i=0; i<h1.length;i++){
h1[i].style.textAlign = alignTitle;
}

let bgP = prompt('Задайте фон для параграфа зі зсилками');
let colorP = prompt('Задайте колір тексту для параграфа зі зсилками');
let p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = bgP;
    p[i].style.color = colorP;
}

let linkColor = prompt('Задайте колір для ссилок');
let a = document.querySelectorAll('a');
for (let i = 0; i < a.length; i++) {
    a[i].style.color = linkColor;
}

let textColor = prompt('Задайте колір тексту в елементі div ');
let fontSize = prompt('Задайте розмір тексту в елементі div (15px)');
let fontWeight = prompt('Задайте товщину тексту в елементі div (200-900)');
let div = document.getElementsByTagName('div');
for (let i = 0; i < div.length; i++) {
    div[i].style.fontSize = fontSize;
    div[i].style.color = textColor;
    div[i].style.fontWeight = fontWeight;
}

let typeList = prompt('Задайте маркер списку (square, circle, disc)');
let ul = document.getElementsByTagName('ul');
ul[0].style.listStyleType = typeList;


let site1 = prompt('Вкажіть перший улюблений сайт');
let site2 = prompt('Вкажіть другий улюблений сайт');
let site3 = prompt('Вкажіть третій улюблений сайт');
let arr = Array(site1, site2, site3);
// let a = document.querySelectorAll('a');
for (let i = 0; i < a.length; i++) {
    a[i].href = `https://${arr[i]}`;
    a[i].textContent = `${arr[i]}`;
    a[i].target = "_blank";
}

