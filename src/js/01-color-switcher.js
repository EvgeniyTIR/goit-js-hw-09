const refs = {
    startBtn : document.querySelector('button[data-start]'),
    stopBtn : document.querySelector('button[data-stop]'),
    bodyColor : document.querySelector('body'),
}

refs.startBtn.addEventListener('click', HandlerStart);
refs.stopBtn.addEventListener('click', HandlerStop);

let timerId = null;

function HandlerStart() {    
    timerId = setInterval(() => { getRandomHexColor() }, 1000);
    refs.startBtn.disabled = true ;   
};
function HandlerStop() {
    clearInterval(timerId);
    refs.bodyColor.style.backgroundColor = '#fafafa';
    refs.startBtn.disabled = false ; 
};
 

function getRandomHexColor() {
    return refs.bodyColor.style.backgroundColor =
          `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
