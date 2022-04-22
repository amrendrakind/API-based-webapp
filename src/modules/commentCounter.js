const commentCounter = (comment) => {
  if (!comment.length) {
    return null;
  }
  const number = comment.length + 1;
  return number;
};
export default commentCounter;
