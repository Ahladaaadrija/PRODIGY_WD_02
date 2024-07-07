let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

startStopBtn.addEventListener('click', function() {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetBtn.addEventListener('click', function() {
    resetTimer();
});

lapBtn.addEventListener('click', function() {
    if (isRunning) {
        recordLap();
    }
});

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 100);
    startStopBtn.textContent = 'Stop';
    isRunning = true;
}

function stopTimer() {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    startStopBtn.textContent = 'Start';
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    display.textContent = '00:00:00';
    laps.innerHTML = '';
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 100)).padStart(1, '0');
    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function recordLap() {
    const lapTime = display.textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    laps.appendChild(lapItem);
}
