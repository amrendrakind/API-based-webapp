import updateLikes from './updateLikes.js';
import addComment from './addComment.js';
import showCounter from './showCounter.js';
import getComments from './getComments.js';

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

  show.appendChild(poster);
  show.appendChild(top);

  top.appendChild(title);
  top.appendChild(likes);

  likes.appendChild(span);
  likes.appendChild(counter);

  show.appendChild(options);
  options.appendChild(commentBtn);

  container.appendChild(show);

  commentBtn.addEventListener('click', () => {
    this.showCommentPopup(data, cardId);
    const overlay = document.getElementById('overlay');
    overlay.classList.add('active');
    const scrollStop = document.querySelector('body');
    scrollStop.style.overflow = 'hidden';
  });
}

showPage = async (data) => {
  const noOfCards = 12;

  for (let i = 0; i < noOfCards; i += 1) {
    const cardId = i;
    const cardUniqueId = data[i].id;
    const showImage = data[i].image.medium;
    const showName = data[i].name;
    this.generateCard(data, cardId, cardUniqueId, showImage, showName);
  }
  updateLikes();
  const show = Promise.resolve(document.querySelectorAll('.show'));
  showCounter(await show);
}

showCommentPopup = async (data, cardId) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalContainer = document.getElementById('modalContainer');

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';

  const dataDiv = document.createElement('div');
  dataDiv.classList.add('data');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('imgContainer');

  const modalImage = document.createElement('img');
  modalImage.classList.add('modal-image');
  modalImage.src = `${data[cardId].image.medium}`;

  const Information = document.createElement('div');
  Information.classList.add('information');

  const title = document.createElement('h3');
  title.classList.add('title');
  title.innerText = `${data[cardId].name}`;

  const details = document.createElement('div');
  details.classList.add('details');

  const genres = document.createElement('div');
  genres.innerText = `Genres: ${data[cardId].genres}`;

  const language = document.createElement('div');
  language.innerText = `Language: ${data[cardId].language}`;

  const summary = document.createElement('p');
  summary.innerHTML = `${data[cardId].summary}`;

  const commentContainer = document.createElement('div');
  commentContainer.classList.add('commentContainer');

  const theCounter = document.createElement('div');
  theCounter.id = 'theCounter';
  theCounter.classList.add('theCounter');

  const comments = document.createElement('div');

  const commentCount = document.createElement('div');
  commentCount.id = 'commentCount';

  const postComment = document.createElement('ul');
  postComment.id = 'postComment';
  postComment.classList.add('postComment');

  commentContainer.appendChild(theCounter);
  theCounter.appendChild(comments);
  theCounter.appendChild(commentCount);
  commentContainer.appendChild(postComment);

  dataDiv.appendChild(imgContainer);
  dataDiv.appendChild(Information);

  imgContainer.appendChild(modalImage);

  Information.appendChild(title);
  Information.appendChild(details);
  details.appendChild(genres);
  details.appendChild(language);
  details.appendChild(summary);

  modal.appendChild(closeButton);
  modal.appendChild(dataDiv);
  modal.appendChild(commentContainer);
  modal.appendChild(addComment(cardId));

  modalContainer.appendChild(modal);
  const allComments = await getComments.getComments(cardId + 1);
  theCounter.innerText = `Comments(${allComments.length})`;
  allComments.forEach((comment) => {
    const liComment = document.createElement('li');
    liComment.classList.add('liComment');
    liComment.innerText = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    postComment.appendChild(liComment);
  });
  closeButton.addEventListener('click', () => {
    modalContainer.removeChild(modal);
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    const scrollStop = document.querySelector('body');
    scrollStop.style.overflow = 'scroll';
  });
}
}