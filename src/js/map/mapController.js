import * as view from './mapView';
import { createMap } from './mapModel';

export default async function () {
  createMap();
  view.renderPage({ title: 'Basic map' });
}
