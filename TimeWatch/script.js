let timer; // Timer variable
let time = 0; // Time in milliseconds
let running = false; // Flag to check if stopwatch is running

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById("startStop").innerText = "Start";
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStop").innerText = "Stop";
  }
  running = !running;
}

function reset() {
  clearInterval(timer);
  time = 0;
  running = false;
  document.getElementById("startStop").innerText = "Start";
  document.getElementById("display").innerText = formatTime(time);
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (running) {
    const lapTime = time;
    const lapItem = document.createElement("li");
    lapItem.innerText = formatTime(lapTime);
    document.getElementById("laps").appendChild(lapItem);
  }
}

function updateDisplay() {
  time += 10; // Increment time by 10 milliseconds
  document.getElementById("display").innerText = formatTime(time);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}
