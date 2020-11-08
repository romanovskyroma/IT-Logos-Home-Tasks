const getID = id => document.getElementById(id);
const getSel = sel => document.querySelector(sel);
const getSelAll = selAll => document.querySelectorAll(selAll);

const f1 = document.forms['f1'];

function User(login, password, email) {
    this.login = login;
    this.password = password;
    this.email = email;
}

const usersList = getID('usersList');
const users = [];
f1.oninput = function () {
    if (f1.login.value.trim() != '' && f1.password.value.trim() != '' && f1.email.value.trim() != '') {
        f1.add.removeAttribute('disabled');

        f1.add.onclick = function () {
            let login = f1.login.value;
            let password = f1.password.value;
            let email = f1.email.value;
            const newUser = new User(login, password, email);
            f1.reset();
            f1.add.setAttribute('disabled', 'true');
            users.push(newUser);
            render();
        }
    } else {
        f1.add.setAttribute('disabled', 'true');
    }
}

usersList.addEventListener('mouseover', event);

function event() {
    let delAll = getSelAll('.delete');
    let editAll = getSelAll('.edit');
    delAll.forEach(function (btnDel, index) {
        btnDel.onclick = function () {
            f1.reset();
            users.splice(index, 1);
            render();
            f1.add.removeAttribute('hidden');
            f1.add.setAttribute('disabled', 'true');
            f1.edit.setAttribute('hidden', 'true');
        }
    });

    editAll.forEach(function (btnEdit, index) {
        btnEdit.onclick = function () {
            f1.login.value = users[index].login;
            f1.password.value = users[index].password;
            f1.email.value = users[index].email;
            f1.edit.removeAttribute('hidden');
            f1.add.setAttribute('hidden', 'true');
            f1.edit.onclick = function () {
                users[index].login = f1.login.value;
                users[index].password = f1.password.value;
                users[index].email = f1.email.value;
                f1.reset();
                render();
                f1.add.removeAttribute('hidden');
                f1.add.setAttribute('disabled', 'true');
                f1.edit.setAttribute('hidden', 'true');
            }
        }
    });
}

function render() {
    usersList.innerHTML = '';
    for (const user of users) {
        let count = users.indexOf(user) + 1;
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${count}</td>`;
        usersList.appendChild(tr);
        count++;
        for (const key in user) {
            let td = document.createElement('td');
            td.textContent = user[key];
            tr.appendChild(td);
        }
        let edit = document.createElement('td');
        edit.innerHTML = `<button class="edit">Edit</button>`;
        tr.appendChild(edit);
        let del = document.createElement('td');
        del.innerHTML = `<button class="delete">Delete</button>`;
        tr.appendChild(del);
    }
}