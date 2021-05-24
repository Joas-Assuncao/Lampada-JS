const lamp = document.querySelector('#lamp');
const image = document.querySelector('#image');
const on = document.querySelector('#on');
const off = document.querySelector('#off');
const lampOn = 'http://127.0.0.1:5500/images/lamp_on.png';
const lampOff = 'http://127.0.0.1:5500/images/lamp_off.png';
const lampBroken = 'http://127.0.0.1:5500/images/lamp_broken.png';

on.addEventListener('click', () => {
    if(image.src !== lampOn) {
        image.src = lampOn;
    }
})

off.addEventListener('click', () => {
    if(image.src !== lampOff) {
        image.src = lampOff;
    }
})

image.addEventListener('mouseenter', () => {
    if(image.src !== lampOn) {
        image.src = lampOn;
    }
})

image.addEventListener('mouseout', () => {
    if(image.src !== lampOff) {
        image.src = lampOff;
    }
})

image.addEventListener('click', () => {
    image.src = lampBroken;
})