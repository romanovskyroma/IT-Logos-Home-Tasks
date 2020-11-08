'use strict';
// alert('Hello JS');


// task 

let zero = prompt('Введіть число');  
console.log(zero, typeof zero)
if (zero > 0 || zero == '+' & zero > 0) {
    console.log('Ви ввели додатнє число')
} else if (zero < 0 || zero == '-' & zero < 0) {
    console.log("Ви ввели від'ємне число")
} else if (zero === '0' || zero == 'нуль' || zero == 'zero') {
    console.log('Ви ввели число нуль')
} else if (zero == null) {
    console.log('Ви скасували вхід')
} else if (zero.trim() == '') {
    console.log('Ви нічого не ввели')
} else {
    console.log('Ви ввели текст, а не число')
}

// task 1

/* let count = 0;
let q1 = prompt('Рік заснування ФК Арсенал?');
if (q1 == 1886) {
    count++
}
let q2 = prompt('Прізвище тренера ФК Арсенал з 1996 по 2017рр (українською)?');
if (q2.toLowerCase() == 'венгер') {
    count++
}
let q3 = prompt('З якого міста походить ФК Арсенал?');
if (q3.toLowerCase() == 'лондон') {
    count++
}
let q4 = prompt('Скільки разів Арсенал вигравав Кубок Англії?');
if (q4 == 13) {
    count++
}
let q5 = prompt('Скільки разів Арсенал ставав чемпіоном Англії?');
if (q5 == 13) {
    count++
}
let q6 = prompt('Позиція в рейтингу УЕФА станом на жовтень 2019р?');
if (q6 == 9) {
    count++
}
let q7 = prompt('Домашній стадіон ФК Арсенал?(українською)');
if (q7.toLowerCase() == 'емірейтс' ) {
    count++
}
let q8 = prompt('В якому році побудований домашній стадіон ФК Арсенал?');
if (q8 == 2006) {
    count++
}
let q9 = prompt('Вартість будівництва стадіону млн.фунт?');
if (q9 == 390) {
    count++
}
let q10 = prompt('Скільки місць на головній арені ФК Арсенал(5-тизначне число без заокруглення)');
if (q10 == 60432) {
    count++
}
if (count >= 0 & count < 3) {
    document.write(`<h4>Кількість правильних відповідей - ${count} <br>Ви повинні мати кращі знання про
    вашу улюблену команду<br><a href="google.com">Відвідати сайт ФК Арсенал</a></h4>`)
}
if (count >= 3 & count < 6) {
    document.write(`<h4>Кількість правильних відповідей - ${count} <br>
    Ви маєте непогані знання про ФК Арсенал</h4>`)
}
if (count >= 6 & count <= 9) {
    document.write(`<h4>Кількість правильних відповідей - ${count} <br>
    Ви маєте хороші знання про ФК Арсенал</h4>`)
}
if (count == 10) {
    document.write(`<h4>Кількість правильних відповідей - ${count} <br>
    У Вас чудові знання про ФК Арсенал/h4>`)
} */

// task 2

/* let name = prompt('write your name');
if (name < 0 || name > 0 || name == 0 || name == '') {
    alert('я вас не знаю')
} else if (name == null) {
    alert('вхід скасований')
} else {
    let pass = prompt('введіть пароль')
    if (pass == null) {
        alert('вхід скасований')
    } else if (pass.toLowerCase() !== 'логос') {
        alert('Пароль невірний')
    } else  {
        alert('Ласкаво просимо!!!')
    }
} */

// task 3

// let number = prompt('write number');
// if(number == 1 || number == 2 || number == 12) {
//     alert('winter');
// } else if(number == 3 || number == 4 || number == 5) {
//     alert('spring')
// } else if(number == 6 || number == 7 || number == 8) {
//     alert('summer')
// } else if(number == 9 || number == 10 || number == 11) {
//     alert('autumn')
// } else {
//     alert('write number 1 - 12')
// }