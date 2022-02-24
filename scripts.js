const balls = document.querySelector(".balls");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

let active = false
let count = 50
let idInterval



const animation = () => {
    count++
    idInterval = requestAnimationFrame(animation)
    active = true

    if(count < 320) {
        balls.style.bottom = count * 2 +'px'
    } else {
        cancelAnimationFrame(idInterval)
    }
}

const resetAnamation = () => {
    cancelAnimationFrame(idInterval)
    balls.style.bottom = '100px'
    active = false
    count = 50

}


start.addEventListener('click', () => {
    if(active) {
        cancelAnimationFrame(idInterval)
        active = false
        start.innerText = 'Старт'
    } else {
        idInterval = requestAnimationFrame(animation)
        active = true
        start.innerText = 'Пауза'
    }
} )
reset.addEventListener('click', resetAnamation )