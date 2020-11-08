'use strict';
// alert('Hello JS');


// task 1 факторіал

/* let num = prompt('Напишіть число факторіал якого хочете обрахувати');
let n = 1;
for(let i=1; i<=num; i++) {
    n = n*i;  
}
document.write(`Факторіал числа ${num} дорівнює - ${n}`)  */

// task 2

// for(let i=1000; i<=9999; i+=3){
//     document.write(`${i}<br>`)  
// }


// task 3

// let n = 1;
// for(let i=1; i<=55; i++) {
//     document.write(`${n}<br>`);
//     n = n+2;
// }

// task 4


// for(let i=90; i>=0; i-=5) {
//     document.write(`${i}<br>`)
// }


// task 5 

// let n = 2;
// for(let i=1; i<=20; i++) {
//     document.write(`${n}<br>`);
//     n = n*2;
// }


// task 6

// let a = 2;
// for(let i=1; a<10000; i++) {
//     document.write(`${a}<br>`);
//     a=2*a-1;
// }

// task 7

// let a = -166;
// for (let i = 1; a < 100; i++) {
//     if (a > -99) {
//         document.write(`${a}<br>`)
//     }
//     a = 2 * a + 200;
// }


// task 8

// let num = prompt('Введіть число, яке потрібно підняти до степеня');
// let q = prompt('Введіть степінь');
// let res = 1;
// for (let i = 1; i <= q; i++) {
//     res = res * num;
// }
// for (let i = -1; i >= q; i--) {
//     res = res * num;
// }
// if (q < 0) {
//     res = 1 / res;
// }
// document.write(`Число ${num} в степені ${q} дорівнює - ${res}<br>`);


// task 8 (варіант з одним циклом)

// let num = prompt('Введіть число, яке потрібно підняти до степеня');
// let q = prompt('Введіть степінь');
// let res = 1;
// let q1 = q;
// if (q < 0) {
//     q = q * -1;
// }
// for (let i = 1; i <= q; i++) {
//     res = res * num;
// }
// if (q1 < 0) {
//     res = 1 / res
// }
// document.write(`Число ${num} в степені ${q} дорівнює - ${res}<br>`);


let n1 = +prompt('введіть число');
let n2 = +prompt('введіть число');
let chg;
if (n2 < n1) {
    chg = n1;
    n1 = n2;
    n2 = chg;
}
for (let i = n1; i < n2; i++) {
    if (i % 3 == 0) {
        document.write(`${i}, `);
    }
}