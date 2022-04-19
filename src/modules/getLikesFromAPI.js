const getLikesFromAPI = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WXzERyUj1Xacp8cuF1ms/likes');
  const result = await response.json();
  return result;
};

export default getLikesFromAPI;