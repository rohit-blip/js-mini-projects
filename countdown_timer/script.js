const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const secondsEl = document.getElementById('seconds');
const minsEl = document.getElementById('mins');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const newYears = `1 Jan ${currentYear + 1}`;

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24 );
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, mins, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//initial call
countDown();

setInterval(countDown, 1000);

