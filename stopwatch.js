let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let timerEl = document.getElementById("timer");
let laps = document.getElementById("laps");
let container = document.getElementById("container");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

function formatTime(elapsedTime) {
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hour ? (hour > 9 ? hour : "0" + hour) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

function pauseTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}
function resetTimer() {
  clearInterval(timerInterval);
  let elapsedTime = 0;
  timerEl.textContent = "00:00:00.00";
  laps.innerHTML = "";
  startBtn.disabled = false;
}
let i = 0;
function lapsRecord() {
  i++;

  let newLITag = document.createElement("li");
  newLITag.innerHTML = formatTime(elapsedTime);
  newLITag.style.color = "white";
  laps.append(newLITag);
}
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lapsRecord);
