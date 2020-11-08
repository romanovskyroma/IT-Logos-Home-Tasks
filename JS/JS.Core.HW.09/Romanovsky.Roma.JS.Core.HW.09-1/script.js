'use strict';
// alert('Hello JS');

// task 1 

let color = document.querySelector('.color');
let image = document.querySelector('.image');
let bigBox = document.querySelector('.bigBox');
let smallBox = document.querySelectorAll('.smallBox');
let classColor = ['red', 'yellow', 'green', 'blueviolet', 'grey', 'blue', 'chartreuse', 'brown', 'darkcyan'];
let classImg = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9'];
console.log(smallBox);

color.onclick = function () {
    bigBox.style.display = 'flex';
    document.body.className = '';
    for (let i = 0; i < smallBox.length; i++) {
        smallBox[i].classList.remove(classImg[i]);
        smallBox[i].classList.add(classColor[i]);
        console.log(smallBox[i]);
        smallBox[i].onclick = function () {
            console.log(smallBox[i]);            
            console.log('ви вибрали колір');            
            document.body.className = classColor[i];
        }
    }
} 

image.onclick = function () {
    bigBox.style.display = 'flex';
    document.body.className = '';
    for (let i = 0; i < smallBox.length; i++) {
        smallBox[i].classList.remove(classColor[i]);
        smallBox[i].classList.add(classImg[i]);
        smallBox[i].onclick = function () {
            document.body.className = classImg[i];
        }
    }
}