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


const showModal = document.querySelector('#showModal')
const closeModal = document.querySelector('#closeModal')
const animationDuration = .3

showModal.addEventListener('click', function () {
    const openTl = gsap.timeline({duration: animationDuration})
    openTl.to('.modal', {scale: 1, duration: 0})
    openTl.to('.modal', {opacity: 1})
    openTl.fromTo('.modal__content', {scale: 0}, {scale: 1, duration: .5, ease: "elastic.inOut(1,0.3)"})
    openTl.fromTo('.modal__icon svg', {x: -50, rotation: '360deg', opacity: 0}, {x: 0, rotation: '0deg', opacity: 1})
    openTl.fromTo('.modal__text', {x: 50, opacity: 0}, {x: 0, opacity: 1}, '<50%')

    openTl.fromTo('.cls-2', {y: .5}, {y: -1, yoyo: true, repeat: -1})
})

closeModal.addEventListener('click', function () {
    const closeTl = gsap.timeline({duration: animationDuration})
    closeTl.to('.modal', {'opacity': .5})
    closeTl.to('.modal', {scale: 0, duration: 0})
})