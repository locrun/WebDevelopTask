import down from '../../img/down.svg';
import update from '../../img/update.svg';
import close from '../../img/close.svg';

export function renderContainer() {
  const markup = `
    <div class="mapWrapper">
        <div class="headerMap">
          <span class="text">Basic map</span>
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
            <div id="map" class="map">
          </div>
     </div>`;

  document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}
