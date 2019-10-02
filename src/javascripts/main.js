import 'bootstrap';
import '../styles/main.scss';

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.keyboard-key[data-key="${e.keyCode}"]`);
  console.error(key);
  key.classList.add('pressed');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

const keyListener = () => {
  window.addEventListener('keydown', playSound);
};

const removeTransition = () => {
  console.error('I am working');
  this.classList.remove('pressed');
};

const removeListener = () => {
  const allKeys = document.querySelectorAll('.keyboard-key');
  allKeys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
  });
};


const init = () => {
  keyListener();
  removeListener();
};

init();
