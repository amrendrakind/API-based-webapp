/* eslint-disable camelcase */
export default class Comment {
  constructor({ item_id, username, comment }) {
    this.item_id = item_id;
    this.username = username;
    this.comment = comment;
  }

  toJSON() {
    return JSON.stringify({
      item_id: this.item_id,
      username: this.username,
      comment: this.comment,
    });
  }
}