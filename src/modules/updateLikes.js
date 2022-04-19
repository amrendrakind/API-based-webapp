import getLikesFromAPI from './getLikesFromAPI.js';

const updateLikes = async () => {
  const likesPosition = document.querySelectorAll('.like');
  const info = await getLikesFromAPI();
  likesPosition.forEach((like) => {
    const getID = parseInt(like.id);
    info.forEach((value) => {
      const compare = value.item_id;
      if (compare === getID) {
        like.parentElement.childNodes[3].innerHTML = value.likes;
      }
    });
  });
};

export default updateLikes;