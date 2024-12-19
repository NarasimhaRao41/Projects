let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;
let hours = 0;

let timerId = null;

// Start Timer
startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10); // Update every 10ms
});

// Stop Timer
stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; // Set timerId to null to avoid multiple intervals
});

// Reset Timer
resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; // Set timerId to null
    msec = secs = mins = hours = 0; // Reset all values to 0
    timerDisplay.innerHTML = `00 : 00 : 00 : 00`; // Update display
});

// Timer Logic
function startTimer() {
    msec++;
    if (msec === 100) { // 100ms = 1 second
        msec = 0;
        secs++;
        if (secs === 60) { // 60 seconds = 1 minute
            secs = 0;
            mins++;
            if (mins === 60) { // 60 minutes = 1 hour
                mins = 0;
                hours++;
            }
        }
    }

    // Format the timer with leading zeros
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hoursString = hours < 10 ? `0${hours}` : hours;

    // Update the timer display
    timerDisplay.innerHTML = `${hoursString} : ${minsString} : ${secsString} : ${msecString}`;
}
