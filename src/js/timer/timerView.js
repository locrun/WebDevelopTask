import { renderControls } from '../controls/controlsView';

function renderContainer() {
  const markup = `
    <div id="contentWrapper">
      <div id="timer"></div>
    </div>`;

  document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}

export function renderPage(title) {
  document.querySelector('#app').innerHTML = '';
  renderContainer();
  renderControls(title);
}
