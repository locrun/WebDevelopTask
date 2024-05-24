import { renderControls } from '../controls/controlsView';

function renderContainer() {
  const markup = `
    <div id="contentWrapper">
        <div id="map" class="map"></div>
     </div>`;

  document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}

export function renderPage(title) {
  renderContainer();
  renderControls(title);
}
