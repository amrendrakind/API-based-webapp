import './style.css';

const intro = document.getElementById('container');

class LikeCounter {
  constructor() {
    this.array = [];
    this.data = {};
  }

  newLike(item_id) {
    this.data = { item_id, likes };
    this.array.push(this.data);
  }
}

const likeCounter = new LikeCounter();

// Get data from the shows API ////
const loadShows = async () => {
  const answer = await fetch('https://api.tvmaze.com/shows');
  const data = await answer.json();
  return data;
};

// Load the shows info in the app //
const displayShows = async (shows) => {
  shows = await loadShows();
  const section = shows.slice(0, 18);
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
};

displayShows();