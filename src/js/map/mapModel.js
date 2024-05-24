import * as ymaps3 from 'ymaps3';
import mark from '../../img/map-marker.png';

export async function createMap() {
  await ymaps3.ready;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    geolocation,
    YMapMarker
  } = ymaps3;

  const data = await geolocation.getPosition();

  const { coords, accuracy } = data;

  const LOCATION = {
    center: coords,
    zoom: 7
  };

  const map = new YMap(
    document.getElementById('map'),
    { location: LOCATION, showScaleInCopyrights: true },
    [new YMapDefaultSchemeLayer({})]
  );

  map.addChild(new YMapDefaultFeaturesLayer());

  const content = document.createElement('section');

  const marker = new YMapMarker(
    {
      coordinates: coords,
      draggable: true
    },
    content
  );

  map.addChild(marker);

  content.innerHTML = `<img src='${mark}' style="width:50px;height:50px;" />`;
}
