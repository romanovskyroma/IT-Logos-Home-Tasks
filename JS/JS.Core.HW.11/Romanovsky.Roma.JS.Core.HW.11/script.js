// 'use strict';
// alert('Hello JS');

// task 1
let message = document.querySelector('.message');
let close = document.querySelector('.close');
let warning = document.getElementById('warning');

const f1 = document.forms['f1'];
const f2 = document.forms['f2'];
let taskList = document.querySelector('.taskList');

f1.btnTask.onclick = function () {
    if (f1.newTask.value.trim() != '') {
        let inpTask = document.createElement('input');
        inpTask.setAttribute('type', 'checkbox');
        inpTask.setAttribute('name', 'task');
        taskList.appendChild(inpTask);
        let span = document.createElement('span');
        span.setAttribute('class', 'taskLi');
        taskList.appendChild(span); 
        span.innerHTML = ' ' + f1.newTask.value + ' ' + '</br>';
        f1.newTask.value = '';
    } else {
        message.textContent = 'Пусте поле не можна добавити';
        warning.style.display = 'block';
        close.onclick = function () {
            warning.style.display = 'none';
        }
    }
}

f2.oninput = function () {
    taskName = document.querySelectorAll('.taskLi')
    if (f2.task.length > 1) {
        for (let i = 0; i < f2.task.length; i++) {
            if (f2.task[i].checked) {
                taskList.removeChild(taskName[i]);
                taskList.removeChild(f2.task[i]);
            }
        }
    } else {
        f2.task.checked = false;
        message.textContent = 'Останній таск із списку Ви не можете видалити';
        warning.style.display = 'block';
        close.onclick = function () {
            warning.style.display = 'none';
        }
    }
}