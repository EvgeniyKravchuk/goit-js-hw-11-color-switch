const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  startButton: document.querySelector("#start"),
  stopButton: document.querySelector("#stop"),
};

let timerId = null;

refs.startButton.addEventListener("click", onStartButtonClick);
refs.stopButton.addEventListener("click", onStopButtonClick);

function onStartButtonClick() {
  refs.startButton.disabled = true;
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
}

function onStopButtonClick() {
  refs.startButton.disabled = false;
  clearInterval(timerId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
