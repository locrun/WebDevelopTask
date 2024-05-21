import * as view from './mapView';
import { createMap } from './mapModel';

export default async function () {
  createMap();
  view.renderContainer();
}
