/* eslint-disable no-unused-vars */
import Comment from './comment.js';
import postComment from './postComment.js';
import date from './date.js';
import commentCounter from './commentCounter.js';

export default (cardId) => {
  const formInformation = document.createElement('form');
  formInformation.classList.add('addComment');

  const addComment = document.createElement('div');
  addComment.innerText = 'Add a comment';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'text';
  nameInput.required = true;
  nameInput.minLength = 1;
  nameInput.maxLength = 30;
  nameInput.classList.add('yourName');
  nameInput.placeholder = 'Your name';

  const commentInput = document.createElement('textarea');
  commentInput.classList.add('yourComment');
  commentInput.id = 'textarea';
  commentInput.required = true;
  commentInput.minLength = 2;
  commentInput.maxLength = 300;
  commentInput.placeholder = 'Your insights';

  const CommentBtn = document.createElement('button');
  CommentBtn.classList.add('submit');
  CommentBtn.type = 'submit';
  CommentBtn.innerText = 'Comment';

  formInformation.appendChild(addComment);
  formInformation.appendChild(nameInput);
  formInformation.appendChild(commentInput);
  formInformation.appendChild(CommentBtn);

  formInformation.onsubmit = async (event) => {
    event.preventDefault();
    const newComment = new Comment({
      item_id: (cardId + 1).toString(),
      username: nameInput.value,
      comment: commentInput.value,
    });
    postComment.addComment(newComment.toJSON()).then(
      (response) => {
        const liComment = document.querySelectorAll('.liComment');
        const theCounter = document.getElementById('theCounter');
        theCounter.innerHTML = `Comments(${commentCounter(liComment)})`;
        const ulComments = document.getElementById('postComment');
        const newLiComment = document.createElement('li');
        newLiComment.innerText = `${date()} ${nameInput.value}: ${commentInput.value}`;
        ulComments.appendChild(newLiComment);
        formInformation.reset();
      },
      (error) => {
        // console.log(error);
      },
    );
  };
  return formInformation;
};
