import 'bootstrap';
import '../styles/main.scss';

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('pressed');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

const keyListener = () => {
  document.addEventListener('keydown', playSound);
};

const removeTransition = (e) => {
  console.error('I am working', 'removeTransition');
  e.target.classList.remove('pressed');
};

const removeListener = () => {
  const allKeys = Array.from(document.querySelectorAll('.key'));
  allKeys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
  });
};


const init = () => {
  keyListener();
  removeListener();
};

init();
