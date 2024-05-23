import errorPage from './pages/errorPage';
import userPage from './pages/userProfilePage';
import timerPage from './pages/timerPage';
import mapPage from './pages/mapPage';
import startTimer from './js/timer/timerController';

import './index.scss';

const routes = [
  { path: '/', component: userPage },
  {
    path: 'map',
    component: mapPage
  },
  {
    path: 'time',
    component: timerPage
  }
];

function findComponentByPath(path, routes) {
  const links = document.querySelectorAll('.nav-item-link');

  switch (path) {
    case 'time':
      links[2].classList.add('active');
      break;
    case 'map':
      links[1].classList.add('active');
      break;
    case '/':
      links[0].classList.add('active');
      break;
    default:
      break;
  }

  return routes.find(function (route) {
    return route.path === path;
  });
}

function router() {
  startTimer();

  const pathArray = location.hash.split('/');

  let currentPath = pathArray[0] === '' ? '/' : pathArray[1];

  currentPath = currentPath === '' ? '/' : currentPath;

  const { component = errorPage } =
    findComponentByPath(currentPath, routes) || {};
  component();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
