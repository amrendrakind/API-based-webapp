/**
 * @jest-environment jsdom
 */

import showCounter from '../showCounter.js';
import { count } from '../variables.js';

jest.mock('../variables.js');

describe('update the counter based on number of cards', () => {
  it('display the correct number of cards', () => {
    const array = [1, 2, 3, 4, 5];
    expect(showCounter(array)).toEqual(array.length);
  });

  it('returns null if no array is added', () => {
    const array = '';
    expect(showCounter(array)).toEqual(null);
  });

  it('updates the innerHTML of count', () => {
    const array = [1, 2, 3, 4, 5];
    expect(showCounter(array)).toEqual(count.innerHTML = 5);
  });
});