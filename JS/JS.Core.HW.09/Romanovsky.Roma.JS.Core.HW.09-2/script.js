'use strict';
// alert('Hello JS');

// task 2

let btnUp = document.getElementsByName('up');
let btnDown = document.getElementsByName('down');
let btnLeft = document.getElementsByName('left');
let btnRight = document.getElementsByName('right');
let man = document.getElementById('man');

btnUp[0].onclick = function () {
    let goUp = man.offsetTop;
    if (goUp > 0) {
        man.style.transform = 'rotate(0deg)';
        man.style.top = goUp - 10 + 'px';
    }
}
btnDown[0].onclick = function () {
    let goUp = man.offsetTop;
    if (goUp < window.innerHeight - 155) {
        man.style.transform = 'rotate(180deg)';
        man.style.top = goUp + 10 + 'px';
    }
}
btnLeft[0].onclick = function () {
    let goUp = man.offsetLeft;
    if (goUp > 0) {
        man.style.transform = 'rotate(-90deg)';
        man.style.left = goUp - 10 + 'px';
    }
}
btnRight[0].onclick = function () {
    let goUp = man.offsetLeft;
    if (goUp < window.innerWidth - 155) {
        man.style.transform = 'rotate(90deg)';
        man.style.left = goUp + 10 + 'px';
    }
}