import { count } from './variables.js';

const showCounter = async (value) => {
  if (!value.length) {
    return null;
  }
  const number = count;
  number.innerHTML = `(${value.length})`;

  return number;
};

export default showCounter;
