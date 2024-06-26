let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let timerEl = document.getElementById("timer");
let laps = document.getElementById("laps");
let laps2 = document.getElementById("laps2");
const myDiv = document.getElementById('myDiv');   
let container = document.getElementById("container");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCounter=0;
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
  laps2.innerHTML="";
  startBtn.disabled = false;
}
let i = 0;
function lapsRecord() {
  
  lapCounter++;
  const lapNumberCell = document.createElement('p');
  lapNumberCell.textContent = lapCounter;
  
  
  lapNumberCell.style.color = "#ffffff";
  lapNumberCell.style.fontSize="large";
  lapNumberCell.style.textAlign = "centre";
  lapNumberCell.style.borderBottom = "1px solid  #807d7d";
  
  i++;
   
   
  let newLITag = document.createElement("p");

  newLITag.innerHTML = formatTime(elapsedTime);
  newLITag.style.color = "#FFFFFF";
  newLITag.style.fontSize="large";
  newLITag.style.textAlign = "end";
  newLITag.style.borderBottom = "1px solid  #807d7d";
  
  var seaTea= myDiv.appendChild(newLITag);
  var seaTea2= myDiv.appendChild(lapNumberCell);

  laps.append(seaTea);
  laps2.append(lapNumberCell);
}



startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lapsRecord);
