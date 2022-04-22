import getLikesFromAPI from './getLikesFromAPI.js';

const updateLikes = async () => {
  const likesPosition = document.querySelectorAll('.like');
  const info = await getLikesFromAPI();
  console.log(info);
  likesPosition.forEach((like) => {
    const getID = parseInt(like.id, 10);
    info.forEach((value) => {
      const compare = value.item_id;
      if (compare === getID) {
        like.parentElement.childNodes[1].innerHTML = value.likes;
      }
    });
  });
};

export default updateLikes;