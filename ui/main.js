console.log('Loaded!');

//Change the text of the main-txt div
var element = document.getElementById('main-txt');

element.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft = 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};