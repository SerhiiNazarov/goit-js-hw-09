const refs = {
  bodyRef: document.querySelector('body'),
  btnstartRef: document.querySelector('button[data-start]'),
  btnstopRef: document.querySelector('button[data-stop]'),
};
const PROMT_DELAY = 1000;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnStartClick() {
  refs.bodyRef.style.backgroundColor = getRandomHexColor();
}

refs.btnstartRef.addEventListener('click', () => {
  timerId = setInterval(onBtnStartClick, PROMT_DELAY);
  refs.btnstartRef.disabled = true;
});

refs.btnstopRef.addEventListener('click', () => {
  clearInterval(timerId);
  refs.btnstartRef.disabled = false;
});
