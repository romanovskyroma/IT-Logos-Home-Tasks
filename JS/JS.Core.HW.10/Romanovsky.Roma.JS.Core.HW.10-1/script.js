// 'use strict';
// alert('Hello JS');

// task 1 

const f1 = document.forms['f1'];
f1.move.onclick = function () {
    if (f1.firstInput.value.trim() !== '') {
        f1.secondInput.value = f1.firstInput.value;
        f1.firstInput.value = '';
    }
}

const f2 = document.forms['f2'];
f2.ph.onblur = function () {
    if (f2.ph.value.trim() !== '') {
        f2.ph.placeholder = f2.ph.value;
        f2.ph.value = '';
    }
}