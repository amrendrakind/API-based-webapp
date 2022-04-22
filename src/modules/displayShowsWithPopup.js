import loadShows from './showsFromAPI.js';
import DisplayShow from './dynamicDisplay.js';
import '../style.css';
import logo from './logo.js';
import likes from './likeEvent.js';

const myShow = new DisplayShow();

window.addEventListener('load', async () => {
  myShow.showPage(await loadShows());
  logo();
  likes();
});

export default myShow;