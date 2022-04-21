import updateLikes from './updateLikes.js';

export default class dynamicDisplay {
generateCard = (data, cardId, cardUniqueId, showImage, showName) => {
  const container = document.getElementById('container');

  const id = cardId + 1;
  const show = document.createElement('div');
  show.classList.add('show');
  const poster = document.createElement('img');
  poster.classList.add('poster');
  poster.src = showImage;
  const top = document.createElement('div');
  top.classList.add('top');
  const title = document.createElement('h3');
  title.classList.add('title');
  title.innerText = showName;
  const likes = document.createElement('div');
  likes.classList.add('likes');
  const span = document.createElement('span');
  span.classList.add('like');
  span.classList.add('material-icons-outlined');
  span.innerText = 'favorite';
  span.setAttribute('id', id);

  const counter = document.createElement('p');
  counter.classList.add('counter');

  const options = document.createElement('div');
  options.classList.add('options');
  const commentBtn = document.createElement('button');
  commentBtn.setAttribute('id', id);
  commentBtn.innerText = 'Comment';
  const reservationBtn = document.createElement('button');
  reservationBtn.setAttribute('id', id);
  reservationBtn.innerText = 'Reservation';

  show.appendChild(poster);
  show.appendChild(top);

  top.appendChild(title);
  top.appendChild(likes);

  likes.appendChild(span);
  likes.appendChild(counter);

  show.appendChild(options);
  options.appendChild(commentBtn);
  options.appendChild(reservationBtn);

  container.appendChild(show);

  commentBtn.addEventListener('click', () => {
    this.showPopup(data, cardId);
  });
}

showPage = async (data) => {
  const noOfCards = 9;
  const count = document.getElementById('count');
  count.innerHTML = `(${noOfCards})`;

  for (let i = 0; i < noOfCards; i += 1) {
    const cardId = i;
    const cardUniqueId = data[i].id;
    const showImage = data[i].image.medium;
    const showName = data[i].name;
    this.generateCard(data, cardId, cardUniqueId, showImage, showName);
  }
  updateLikes();
}

showPopup = (data, cardId) => {
  console.log('Card ID ', cardId + 1, data[cardId].name, 'Clicked');

  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalContainer = document.getElementById('modalContainer');

  const show = document.createElement('div');
  show.classList.add('show');
  const poster = document.createElement('img');
  poster.classList.add('imgContainer');
  poster.src = `${data[cardId].image.medium}`;
  const top = document.createElement('div');
  top.classList.add('information');
  const title = document.createElement('h3');
  title.classList.add('title');
  title.innerText = `${data[cardId].name}`;

  const genres = document.createElement('h3');
  genres.classList.add('genres');
  genres.innerText = `Genres: ${data[cardId].genres}`;

  const language = document.createElement('div');
  language.classList.add('language');
  language.innerText = `Language: ${data[cardId].language}`;

  const summary = document.createElement('div');
  summary.classList.add('summary');
  summary.innerHTML = `${data[cardId].summary}`;

  const span = document.createElement('span');
  span.classList.add('like');
  span.classList.add('material-icons-outlined');
  span.innerText = 'X';
  span.setAttribute('id', cardId);

  const counter = document.createElement('p');
  counter.classList.add('counter');

  const options = document.createElement('div');
  options.classList.add('options');
  const commentBtn = document.createElement('button');
  commentBtn.setAttribute('id', cardId);
  commentBtn.innerText = 'Comment';

  modal.appendChild(span);
  modal.appendChild(poster);
  modal.appendChild(top);

  top.appendChild(title);
  top.appendChild(genres);
  top.appendChild(language);
  top.appendChild(summary);

  show.appendChild(options);
  options.appendChild(commentBtn);

  modalContainer.appendChild(modal);

  span.addEventListener('click', () => {
    modalContainer.removeChild(modal);
  });
}
}