"using strict";

let daysField = document.getElementById("days");
let hoursField = document.getElementById("hours");
let minutesField = document.getElementById("minutes");
let secondsField = document.getElementById("seconds");

const newYears = "Jan 1 2022";

function countDownTime() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const tillNewYears = newYearsDate - currentDate;

  let totalSeconds = tillNewYears / 1000;

  let secs = Math.floor(totalSeconds % 60);
  let mins = Math.floor(totalSeconds / 60) % 60;
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let days = Math.floor(totalSeconds / 3600 / 24);

  daysField.innerHTML = days;
  hoursField.innerHTML = hours;
  minutesField.innerHTML = mins;
  secondsField.innerHTML = secs;
}

setInterval(countDownTime, 1000);
