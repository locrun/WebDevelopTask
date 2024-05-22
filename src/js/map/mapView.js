export function renderContainer() {
  const markup = `<div id="map" class="map"></div>`;
  document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}
