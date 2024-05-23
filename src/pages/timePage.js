import timer from '../js/timer/timerController';

export default function () {
  timer({ title: 'Timer' });

  // window.addEventListener('beforeunload', event => {
  //   event.preventDefault();
  // });
}
