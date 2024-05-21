export function renderContainer() {
  const markup = `
  <div id="map" style="width: 100%; height: 400px">
  
  </div>`;

  document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}
