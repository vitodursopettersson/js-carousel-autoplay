'use strict'

// Array Img
const slideGroupImage = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']

// Selettore Container Slider e Thumbnails
const sliderContainer = document.querySelector('.group-slider');
const thumbnailsContainer = document.querySelector('.group-thumbnails');

// Variabile items
let slideElement = '';
let thumbnailsElement = '';
let currentElement = 0

// Ciclo generazione slider
for (let i = 0; i < slideGroupImage.length; i++) {

    if (i == currentElement) {
        slideElement += `<div class="item active element-${i}"><img src="./img/${slideGroupImage[i]}" alt="photo ${i}"></img></div>`
    } else {
        slideElement += `<div class="item element-${i}"><img src="./img/${slideGroupImage[i]}" alt="photo ${i}"></img></div>`
    }
}

// Ciclo Generazione Thumbnails
for (let i = 0; i < slideGroupImage.length; i++) {

    if (i == currentElement) {
        thumbnailsElement += `<div class="thumbnails thumb-active"><div class="overlay" value="${i}"></div><img src="./img/${slideGroupImage[i]}" alt="thumbnail photo ${i}"></img></div>`
    } else {
        thumbnailsElement += `<div class="thumbnails"><div class="overlay" value="${i}"></div><img src="./img/${slideGroupImage[i]}" alt="thumbnail photo ${i}"></img></div>`
    }
}

// Generazione html
sliderContainer.innerHTML = slideElement;
thumbnailsContainer.innerHTML += thumbnailsElement;

// Variabili prev next
const functionPrev = document.querySelector('.prev');
const functionNext = document.querySelector('.next');

// Selettore Node Slide
const slideNode = document.querySelectorAll('.item');
const thumbNode = document.querySelectorAll('.thumbnails')

// Event Listener Next
functionNext.addEventListener('click', function () {

    if (currentElement < slideGroupImage.length - 1) {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement++;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');

    } else {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement = 0;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');

    }
})

// Event Listener Prev
functionPrev.addEventListener('click', function () {

    if (currentElement != 0) {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement--;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');
    } else {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement = slideGroupImage.length - 1;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');
    }
})

// Event Listener
thumbNode.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function () {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement = index;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');
    });
});

// Variabili Button
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');

// Play Stop Button
stopButton.addEventListener('click', function () {
    clearInterval(autoplayFunction);
})

playButton.addEventListener('click', function () {
    clearInterval(autoplayFunction);
    setInterval(autoplaySlider, 3000);
})

// Autoplay
const autoplayFunction = setInterval(autoplaySlider, 3000);
function autoplaySlider() {
    if (currentElement < slideGroupImage.length - 1) {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement++;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');

    } else {
        slideNode[currentElement].classList.remove('active');
        thumbNode[currentElement].classList.remove('thumb-active');
        currentElement = 0;
        slideNode[currentElement].classList.add('active');
        thumbNode[currentElement].classList.add('thumb-active');

    }
}