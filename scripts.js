const text = document.querySelector('p')
const input = document.querySelector('input[type=text]')


function debounce (f, t) {
    return function(args) {

        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && ((this.lastCall-previousCall) <= t)) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => f(args), t);
    }
}


const changeText = () => {
    text.textContent = input.value;
}

input.addEventListener('input', debounce(changeText, 300) )



