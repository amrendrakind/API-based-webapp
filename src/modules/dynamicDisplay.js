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

//   <div class="show">
//    <img class="poster" src="${show.image.medium}">
//    <div class="top">
//      <h3 class="title">${show.name}</h3>
//      <div class="likes">
//        <span id="${show.id}" class="like material-icons-outlined">favorite</span>
//        <p class="counter"></p>
//      </div>
//    </div>
//    <div class="options">
//      <button class="comment">Comment</button>
//      <button class="reservation">Reservation</button>
//    </div>
// </div>
}

showPage = async (data) => {
  const noOfCards = 9;
  const count = document.getElementById('count');
  count.innerHTML = `(${noOfCards})`;

  for (let i = 0; i < noOfCards; i += 1) {
    const cardId = i + 1;
    const cardUniqueId = data[i].id;
    const showImage = data[i].image.medium;
    const showName = data[i].name;
    // console.log(showName);
    this.generateCard(data, cardId, cardUniqueId, showImage, showName);
    // updateLikes();
  }
  updateLikes();
}
}