import { refresh } from './variables.js';

const logoRefresh = refresh.addEventListener('click', () => {
  window.location.reload();
});

export default logoRefresh;