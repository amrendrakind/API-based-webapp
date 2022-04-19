class LikeCounter {
  newLike(item_id) {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WXzERyUj1Xacp8cuF1ms/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.text())
      .then((text) => console.log(text));
  }
}

const likeCounter = new LikeCounter();

export default likeCounter;