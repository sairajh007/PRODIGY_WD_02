let hours = 0, minutes = 0, seconds = 0;
let timer;
let isRunning = false;


const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');

startStopBtn.addEventListener('click', function() {
    if (isRunning) {

        clearInterval(timer);
        startStopBtn.textContent = 'Start'; 
    } else {

        timer = setInterval(updateTime, 1000); 
        startStopBtn.textContent = 'Stop'; 
    }
    isRunning = !isRunning; 
});

resetBtn.addEventListener('click', function() {
    clearInterval(timer); 
    isRunning = false; 
    hours = minutes = seconds = 0; 
    display.textContent = '00:00:00'; 
    startStopBtn.textContent = 'Start'; 
});



function updateTime() {
    seconds++; 
    if (seconds === 60) {
        minutes++; 
        seconds = 0; 
    }
    if (minutes === 60) {
        hours++; 
        minutes = 0; 
    }

    display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}


function formatTime(time) {
    return time < 10 ? `0${time}` : time; 
}
