const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let interval;

const onClickStart = event => {
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
};

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  startBtn.disabled = false;
});
