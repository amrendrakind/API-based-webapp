import apiUrl from './url.js';

export default class postApiClientData {
    static addComment = async (comment) => {
      const response = await fetch(apiUrl.COMMENT_URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: comment,
      });
      const responseData = await response.text();
      return responseData;
    }
}