import down from '../../img/down.svg';
import update from '../../img/update.svg';
import close from '../../img/close.svg';

export function renderControls({ title }) {
  const controls = document.querySelector('#contentWrapper');
  if (title) {
    const markup = `
    <div class="controls">
      <span class="text">${title.replace(/"/g, '')}</span>
        <div class="icons">
          <span>
            <img src='${down}' alt="down">
          </span>
          <span>
            <img src='${update}' alt="down">
          </span>
          <span>
            <img src='${close}' alt="down">
          </span>
        </div>
     </div>
    `;
    controls.insertAdjacentHTML('afterbegin', markup);
  } else {
    const markup = `
    <div class="controls">
     </div>
    `;
    controls.insertAdjacentHTML('afterbegin', markup);
  }
}
