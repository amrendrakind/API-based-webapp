import { count } from './variables.js';

const showCounter = (value) => {
  if (!value.length) {
    return null;
  }
  const number = count;
  number.innerHTML = `(${value.length})`;

  return value.length;
};

export default showCounter;
