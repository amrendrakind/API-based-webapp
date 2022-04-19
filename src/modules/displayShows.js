import { intro } from './variables.js';
import loadShows from './showsFromAPI.js';
import updateLikes from './updateLikes.js';
import showCounter from './showCounter.js';

const displayShows = async (shows) => {
  shows = await loadShows();
  const section = shows.slice(0, 9);
  let info = '';
  section.forEach((show) => {
    info += `
      <div class="show">
        <img class="poster" src="${show.image.medium}">
        <div class="top">
          <h3 class="title">${show.name}</h3>
          <div class="likes">
            <span id="${show.id}" class="like material-icons-outlined">favorite</span>
            <p class="counter"></p>
          </div>
        </div>
        <div class="options">
          <button class="comment">Comment</button>
          <button class="reservation">Reservation</button>
        </div>
      </div>
    `;
  });
  intro.innerHTML = info;
  updateLikes();
  const show = document.querySelectorAll('.show');
  showCounter(show);
};

export default displayShows;