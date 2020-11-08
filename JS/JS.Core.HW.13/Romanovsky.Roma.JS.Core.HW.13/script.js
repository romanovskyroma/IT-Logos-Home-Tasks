// task 1

let textarea = document.getElementById('textarea');

textarea.oninput = function () {
    let number = document.querySelector('.number');
    let str = textarea.value;
    let num = 0;
    for (let char of str) {
        if (char == ' ') {
            num += 1;
            number.textContent = `Кількість пробілів у введеному текті дорівнює = ${num}`
        }
    }
}

// task 2


let email = document.getElementById('email');
email.oninput = function () {
    let mail = email.value;
    let include = mail.includes('@');
    let place = mail.indexOf('@');
    let placePoint = mail.indexOf('.');
    if (include && place != 0 && place < mail.length - 1 && placePoint > place + 2 &&
        placePoint < mail.length - 2) {
        console.log('Логін введено правильно');
    }
}

// task 3


let textarea1 = document.querySelector('.textarea1');
textarea1.oninput = function () {
    let html = document.querySelector('.html');
    let str1 = textarea1.value.toLowerCase();
    let count = 0;
    let pos = -1;
    while (true) {
        pos = str1.indexOf('html', pos);
        if (pos == -1) break;
        count += 1;
        pos += 1
    }
    html.textContent = `Кількість 'html' у введеному текті дорівнює = ${count}`;
    console.log(count);
}

// task 4 

let url = document.getElementById('url');
url.oninput = function () {
    adress = this.value;
    let pos = adress.indexOf('/');
    if (adress.startsWith('https://') || adress.startsWith('http://') && adress[pos + 1] == '/') {
        url = adress.slice(pos + 2);
        console.log(url);
    }
}

// task 5


const f1 = document.forms['f1'];
f1.oninput = function () {
    let name = f1.name.value.trim();
    let sname = f1.sname.value.trim();
    let email2 = f1.email2.value.trim();
    let res = valEmail(email2);
    let pass = f1.pass.value.trim();
    if (name != '' && sname != '' && res && pass.length > 5) {
        console.log('true');
        f1.submit.removeAttribute('disabled');
    } else {
        f1.submit.setAttribute('disabled', 'true');
    }
}

f1.submit.onclick = function () {
    f1.reset();
    console.log('дані відправлено');

}

let valEmail = function (email) {
    let include1 = email.includes('@');
    let include2 = email.includes(' ');
    let place = email.indexOf('@');
    let placePoint = email.indexOf('.');
    let res = 'e-mail введено вірно';
    if (include1 && !include2 && place != 0 && place < email.length - 1 && placePoint > place + 2 &&
        placePoint < email.length - 2) {
        return res;
    }
}