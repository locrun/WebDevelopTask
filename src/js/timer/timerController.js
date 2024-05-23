import * as view from './timerView';

function startTimer() {
  let startTime =
    parseInt(sessionStorage.getItem('startTime')) || new Date().getTime();
  const timer = document.querySelector('#timer');

  function updateTime() {
    let elapsed = new Date().getTime() - startTime;
    let hours = Math.floor(elapsed / 3600000);
    let minutes = Math.floor((elapsed % 3600000) / 60000);
    let seconds = Math.floor((elapsed % 60000) / 1000);
    const time = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    timer.innerHTML = time;
    requestAnimationFrame(updateTime);
    sessionStorage.setItem('startTime', startTime);
  }

  function pad(number) {
    return (number < 10 ? '0' : '') + number;
  }

  updateTime();
}

export default function (title) {
  view.renderPage(title);
  startTimer();
}
