import map from '../js/map/mapController';

export default async function () {
  document.querySelector('#app').innerHTML = '';

  map({ title: 'Basic map' });
}
