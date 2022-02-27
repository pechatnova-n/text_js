const balls = document.querySelector(".balls");
const boy = document.querySelector(".boy");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");


balls.style.bottom = '100px';

const addAnimation = () => {

    const pauseAnimation = () => {
        cancelAnimationFrame(animation);
    }


    if(balls.style.bottom <= "650px") {
        let valPixels = (Number(balls.style.bottom.split('').slice(0, -2).join('')));
        balls.style.bottom = Number(valPixels + 2) + 'px';
        animation();
    }
}


let animation = () => {
    requestAnimationFrame(addAnimation)
    start.classList.remove('pause')
}



const resetAnamation = () => {
    balls.style.bottom = '100px';
    cancelAnimationFrame(animation);
}


start.addEventListener('click', animation )
reset.addEventListener('click', resetAnamation )