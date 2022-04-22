/**
 * @jest-environment jsdom
 */

import commentCounter from '../commentCounter.js';

describe('update the counter based on number of cards', () => {
  it('display the correct number of cards', () => {
    const commentArray = [4, 6, 8, 9];
    expect(commentCounter(commentArray)).toEqual(commentArray.length + 1);
  });

  it('returns null if no array is added', () => {
    const array = '';
    expect(commentCounter(array)).toEqual(null);
  });
});