const sliderLine = document.querySelector('.slider-line'),
    sliderWrapper = document.querySelector('.slider-wrapper'),
    prevBtn = document.querySelector('.coffee-option__btn--left'),
    nextBtn = document.querySelector('.coffee-option__btn--right'),
    dashes = document.querySelectorAll('.coffee-option__dash'),
    dashBar = document.querySelectorAll('.dash-bar');

let slides = document.querySelectorAll('.coffee-option__content');
let position = 0,
    dashIndex = 0,
    timer,
    seconds = 0;



dashes.forEach((dash, index) => {
    dash.addEventListener('click', () => {
        position = sliderWrapper.clientWidth * index;
        sliderLine.style.left = `-${position}px`;
        resetTimer();
        dashIndex = index;
        startTimer();
    })
});

function showNextSlide() {

    if (position < ((dashes.length - 1) * sliderWrapper.clientWidth)) {
        position += sliderWrapper.clientWidth;
        dashIndex++;
    }
    else {
        position = 0;
        dashIndex = 0;
    }

    sliderLine.style.left = `-${position}px`;
}

function showPrevSlide() {
    if (position > 0) {
        position -= sliderWrapper.clientWidth;
        dashIndex--;
    }
    else {
        position = (dashes.length - 1) * sliderWrapper.clientWidth;
        dashIndex = dashes.length - 1;
    }

    sliderLine.style.left = `-${position}px`;
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
        if (seconds < 5) {
            seconds++;
            dashBar[dashIndex].style.width = `${seconds * 20}%`;
        }
        else {
            resetTimer();
            showNextSlide();
            startTimer();
        }
    }, 1000);
}

nextBtn.addEventListener('click', function () {
    resetTimer();
    showNextSlide();
    startTimer();
});

prevBtn.addEventListener('click', function () {
    resetTimer();
    showPrevSlide();
    startTimer();
});

function pauseTimer() {
    clearInterval(timer);
}

function resumeTimer() {
    startTimer();
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    dashBar[dashIndex].style.width = '0%';
}

let startX;
sliderWrapper.addEventListener('mouseover', pauseTimer);

sliderWrapper.addEventListener('mouseout', resumeTimer);

sliderWrapper.addEventListener('touchstart', pauseTimer);

sliderWrapper.addEventListener('touchend', resumeTimer);

startTimer();




