'use strict';
// alert('Hello JS');

// task 1 

let pass = prompt('Ведіть пароль');
if (pass == 'logos') {
    alert('Запрошуємо на сайт')
} else if (pass == null) {
    alert('Ви скасували вхід')
} else {
    let i = 4;
    while (pass !== 'logos' && i != 0 && pass !== null) {
        alert(`Ви маєте ${i} спроби ввести пароль правильно`);
        pass = prompt(`Введіть пароль. Залишилось спроб - ${i}`);
        if (pass == 'logos') {
            alert('Запрошуємо на сайт')
        } else if (pass == null) {
            alert('Ви скасували вхід')
        } else {
            i--;
            if (i == 0) {
                alert('Будь ласка спробуйте пізніше')
            }
        }
    }
}