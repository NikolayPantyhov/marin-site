// function myFunc(str) {
//     console.log('Hello ' + str)
// }
//
// let timeOut = 3000
//
// let firstTimeOut = setInterval(myFunc, timeOut, "Nick")
// let secondTimeOut = setInterval(myFunc, timeOut, "Nick")
//
// document.querySelector('#clearTimeout').onclick = function () {
//     event.preventDefault()
//     clearInterval(firstTimeOut)
// }


// let isRunning = true
// let initialSeconds = 0
// let initialMinutes = 0
// let timerFunc = (currentSeconds, currentMinutes) => {
//     initialSeconds++
//     if (initialSeconds >= 59) {
//         initialMinutes++
//         initialSeconds = 0
//     }
//     console.log(`${initialMinutes} : ${initialSeconds}`)
// }
//
//
// let timer = setInterval(
//     timerFunc,
//     1000,
//     initialSeconds, initialMinutes
// )
//
// document.addEventListener('keydown', function () {
//     console.log('timer is paused')
//     if (event.keyCode === 32) {
//         if (isRunning) {
//             clearInterval(timer)
//             isRunning = false
//         }
//         else {
//             timer = setInterval(
//                 timerFunc,
//                 1000,
//                 initialSeconds, initialMinutes
//             )
//             isRunning = true
//         }
//     }
// })


let counterNumber = document.querySelector('#counterNumber')
let isAnimated = false
document.addEventListener('scroll', function () {
    if(counterNumber.getBoundingClientRect().top < window.innerHeight * 0.75 && !isAnimated) {
        isAnimated = true
        startCount()
    }
})

function startCount() {
    let  currentValue = 0;
    let max = +counterNumber.getAttribute('data-value')
    console.log(currentValue, max)
    let pace = 25

    let interval = setInterval(() => {
        if (pace >= max *.75) {
            pace = 10
        }
        if (currentValue >= max) {
            clearInterval(interval)
        }
        counterNumber.innerText = currentValue
        currentValue++
    }, pace)
}
