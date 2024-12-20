const newYearDay = document.getElementById("day");
const newYearMinute = document.getElementById("minute");
const newYearHour = document.getElementById("hour");
const newYearSecond = document.getElementById("second");

const newYearTime = new Date("jan 1 2025 00:00:00").getTime();

let clear;
function updateCountDown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  newYearDay.innerHTML = d;
  newYearHour.innerHTML = h;
  newYearMinute.innerHTML = m;
  newYearSecond.innerHTML = s;
}

setInterval(() => {
  updateCountDown();
}, 1000);
