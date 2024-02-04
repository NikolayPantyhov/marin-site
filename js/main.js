let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.feedback__button_next').addEventListener('click', () => {
    offset += 600;
    if (offset > 1800) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.feedback__button_prev').addEventListener('click', () => {
    offset -= 600;
    if (offset < 0) {
        offset = 1800
    }
    sliderLine.style.left = -offset + 'px';
});