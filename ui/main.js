console.log('Loaded!');

//Change the text of the main-txt div
var element = document.getElementById('main-txt');

element.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('img');
img.onclick = function () {
    img.style.marginleft = '100px';
};