const timerDisplay = document.querySelector('.time-display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapTimesContainer = document.querySelector('.lap-times');

let startTime;
let interval;
let laps = [];

function startTimer() {
    if (!startTime) {
        startTime = Date.now() - (laps.length > 0 ? laps[laps.length - 1].time : 0);
    }
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
    stopButton.disabled = false;
    lapButton.disabled = false;
}

function stopTimer() {
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
    lapButton.disabled = true;
}

function resetTimer() {
    clearInterval(interval);
    startTime = null;
    timerDisplay.textContent = '00:00.00';
    startButton.disabled = false;
    stopButton.disabled = true;
    lapButton.disabled = true;
    laps = [];
    lapTimesContainer.innerHTML = '';
}

function updateTimer() {
    const currentTime = Date.now() - startTime;
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = (currentTime % 1000);
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}

function recordLap() {
    const lapTime = timerDisplay.textContent;
    laps.push({ time: Date.now() - startTime, lap: lapTime });
    const lapTimeItem = document.createElement('div');
    lapTimeItem.textContent = `Lap ${laps.length}: ${lapTime}`;
    lapTimesContainer.appendChild(lapTimeItem);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);
