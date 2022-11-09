import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

class Stopwatch {
  initTime = 0;
  isActive = false;
  intervalId = null;
  time = 0;
  onTick;

  constructor(onTick) {
    this.initTime = Date.now();
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) return;
    this.initTime = Date.now();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const time = currentTime - this.initTime + this.time;

      this.onTick(this.getTimeComponents(time));
    }, 1000);
  }

  stop() {
    this.time = Date.now() - this.initTime + this.time;
    clearInterval(this.intervalId);
    this.isActive = false;
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const stopwatch = new Stopwatch(onTick);

function onTick({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

refs.startBtn.addEventListener('click', () => {
  stopwatch.start();
});

refs.stopBtn.addEventListener('click', () => {
  stopwatch.stop();
});

/* 


*/
