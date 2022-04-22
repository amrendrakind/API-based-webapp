import apiUrl from './url.js';

export default class getApiClientData {
  static getComments = async (id) => {
    const commentURI = `${apiUrl.COMMENT_URI}?item_id=${id}`;
    const response = await fetch(commentURI, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const responseData = await response.json();
    return responseData;
  }
}