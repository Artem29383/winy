export const sortByData = (array, col, type = 'asc') => {
  let sortArray = [];

  if (typeof array === 'object') {
    Object.keys(array).forEach(item => {
      sortArray.push(array[item]);
    });
  } else {
    sortArray = array;
  }
  sortArray =
    type === 'asc'
      ? sortArray.sort((a, b) => (a[col] < b[col] ? -1 : 0))
      : sortArray.sort((a, b) => (a[col] > b[col] ? -1 : 0));
  return [...sortArray];
};
