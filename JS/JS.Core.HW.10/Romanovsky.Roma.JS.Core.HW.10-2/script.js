// 'use strict';
// alert('Hello JS');

// task 1 

const f1 = document.forms['f1'];
f1.firstName.onchange = function () {
    if (f1.firstName.value.trim() == '') {
        f1.firstName.classList.add('txtPh');
        f1.firstName.placeholder = "Не залишайте це поле пустим";
    } else {
        f1.firstName.placeholder = "first name";
        f1.firstName.classList.remove('txtPh');
    } 
}
f1.secondName.onchange = function () {
    if (f1.secondName.value.trim() == '') {
        f1.secondName.classList.add('txtPh');
        f1.secondName.placeholder = "Не залишайте це поле пустим";
    } else {
        f1.secondName.placeholder = "second name";
        f1.secondName.classList.remove('txtPh');
    }
}
f1.email.onchange = function () {
    if (f1.email.value.trim() == '') {
        f1.email.classList.add('txtPh');
        f1.email.placeholder = "Не залишайте це поле пустим";
    } else {
        f1.email.placeholder = "email";
        f1.email.classList.remove('txtPh');
    }
}

f1.oninput = function () {
    if (f1.firstName.value.trim() != '' && f1.secondName.value.trim() != '' &&
        f1.email.value.trim() != '' && f1.position.value.trim() != 'choose') {
        f1.agreement.disabled = false;

    } else {
        f1.agreement.disabled = true;
    }
}

f1.agreement.onclick = function () {
    if (f1.agreement.checked) {
        f1.btnSbm.disabled = false;
        f1.btnSbm.style.backgroundColor = 'rgba(11, 185, 37, 0.938)';
        f1.firstName.disabled = true;
        f1.secondName.disabled = true;
        f1.email.disabled = true;
        f1.position.disabled = true;
    } else {
        f1.firstName.disabled = false;
        f1.secondName.disabled = false;
        f1.email.disabled = false;
        f1.position.disabled = false;
        f1.btnSbm.disabled = true;
        f1.btnSbm.style.backgroundColor = 'rgba(126, 216, 139, 0.938)';
    }

}

let userName = document.querySelector('.name');
let userEmail = document.querySelector('.email');
let userPosition = document.querySelector('.position');
let userOnline = document.querySelector('.userOnline');

f1.btnSbm.onclick = function () {
    {
        let sel = f1.position.selectedIndex;
        f1.style.display = 'none';
        userOnline.style.display = 'block'
        userName.textContent = f1.firstName.value + ' ' + f1.secondName.value;
        userEmail.textContent = f1.email.value;
        userPosition.textContent = f1.position.options[sel].text + ' ';
        f1.reset();
    }
}

let signOut = document.querySelector('.signOut');
signOut.onclick = function () {
    f1.reset();
    f1.style.display = 'block';
    userOnline.style.display = 'none';
    f1.agreement.disabled = true;
    f1.firstName.disabled = false;
    f1.secondName.disabled = false;
    f1.email.disabled = false;
    f1.position.disabled = false;
    f1.btnSbm.disabled = true;
}