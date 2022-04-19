const apiAddress = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WXzERyUj1Xacp8cuF1ms/likes';
const uniqueKey = 'WXzERyUj1Xacp8cuF1ms';

const getLikesFromApi = async () => {
  const getLikeData = await fetch(likesUrl);
  const likeList = await getLikeData.json();
  console.log(likeList);
  return likeList;
};