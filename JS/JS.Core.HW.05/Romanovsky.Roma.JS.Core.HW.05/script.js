'use strict';
// alert('Hello JS');

// task 1 

// let num = +prompt('Ведіть число');
// let n = 0;
// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         n++;
//     }
// }
// if (n == 0 && num != 1) {
//     document.write(`Ви ввели просте число - ${num}`)
// } else {
//     document.write(`Ви ввели складене число - ${num}`)
// }


// додатково
debugger;
let num = +prompt('Введіть число до якого ви хочете порахувати прості числа');
let n = 0;
next:
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue next;
            }

        }
        document.write(`${i} - `);
        n++;
    }
document.write(`<h1>Кількість простих чисел від 2 до ${num} = ${n}</h1>`);

//  послідовність Фібоначчі

// let num = +prompt('Ведіть кількість чисел Фібоначчі, які ви хочете вивести');
// let n1 = 1;
// let n2 = 1;
// document.write(`${n1},  `);
// document.write(`${n2},  `);
// for (let i=3;i<=num;i++){
//     let n=n1+n2;
//     n1=n2;
//     n2=n;
//     document.write(`${n},  `);
// }


// task 3  

// let num = prompt('Введіть число суму чисел якого хочете порахувати');
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     let n1 = parseInt(num[i]);
//     sum = sum + n1;
// }
// document.write(`Сума чисел числа - ${num} = ${sum}`);


// task 4

// document.write(`<table>`)
// for (let i = 2; i <= 9; i++) {
//     document.write(`<tr>`)
//     for (let j = 2; j <= 9; j++) {
//         let n = j*i;  
//         document.write(`<td>${j} * ${i} = ${n}</td>`);
//     }
//     document.write(`</tr>`)
// }
// document.write(`</table>`)