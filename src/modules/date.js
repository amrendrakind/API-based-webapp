const date = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const theDate = today.getDate();
  let newMonth = '';
  if (month.length > 1) {
    newMonth = month;
  } else {
    newMonth = `0${month}`;
  }
  const display = `${year}-${newMonth}-${theDate}`;
  return display;
};

export default date;