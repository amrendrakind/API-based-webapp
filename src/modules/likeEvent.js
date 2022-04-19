import displayShows from './displayShows.js';
import likeCounter from './PostToAPI.js';

const likes = async () => {
  await displayShows();
  const likes = document.querySelectorAll('.like');
  likes.forEach((like) => {
    like.addEventListener('click', (e) => {
      let counter = parseInt(e.path[1].childNodes[3].innerHTML);
      if (!counter) {
        counter = 1;
      } else {
        counter += 1;
      }
      e.path[1].childNodes[3].innerHTML = counter;
      const position = parseInt(e.path[0].id);
      likeCounter.newLike(position);
    });
  });
};

export default likes;