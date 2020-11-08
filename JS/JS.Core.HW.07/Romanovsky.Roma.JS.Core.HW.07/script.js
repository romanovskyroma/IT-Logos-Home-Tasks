// 'use strict';
// alert('Hello JS');

// task 1 

function maxNum() {
    let maxNum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (maxNum < arguments[i]) {
            maxNum = arguments[i];
        }
    }
    console.log(maxNum);
}

maxNum(33, 5, 9, 45, 2, 19, -10, 22, 55);
maxNum(-8);
maxNum(0, 15);
maxNum(0, -3, 5);
maxNum(0, -3, 5, 10);


// task 2

// function sumGeoProg(n, q) {
//     function pow(a, b) {
//         let res = 1;
//         for (let i = 1; i <= b; i++) {
//             res *= a;
//         }
//         return res;
//     }
//     let b1 = 1;
//     let sum = b1 * ((1 - pow(q, n)) / (1 - q));
//     return sum;
// }

// function sumGeoProg1(n, q) {
//     let b1 = 1;
//     let sum = 1;
//     for (let i = 1; i < n; i++) {
//         b1 *= q;
//         sum += b1;
//     }
//     return sum;
// }

// let num = prompt('Введіть кількість членів геометричної прогресії')
// let q1 = prompt('Введіть знаменник геометричної прогресії')

// let result = sumGeoProg(num, q1)
// let res = sumGeoProg1(num, q1)
// document.write(`Сума геометричної прогресії з - ${num} чисел і знаменником - ${q1} = ${result}<br>`);
// document.write(`Сума геометричної прогресії з - ${num} чисел і знаменником - ${q1} = ${res}`);

// task 3

// function simpleNum(a, b) {
//     if (a > b) {
//         let n = a;
//         a = b;
//         b = n;
//     } 
//     if (a <= 1) {
//         a = 2;
//     }
//     exit: for (let i = a; i <= b; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 continue exit;
//             }
//         }
//         document.write(`${i}, `);
//         console.log(i);

//     }
// }


// let num1 = +prompt('Введіть число від якого ви хочете вивести прості числа');
// let num2 = +prompt('Введіть число до якого ви хочете вивести прості числа');
// simpleNum(num1, num2);