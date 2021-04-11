const slice = (arr, begin, end) => {
  const newArr = [];
  if (begin === 0 || end === 0) {
      newArr = arr;
}
  if (begin > 0 || end > 0) {
    for (let i = 0; i < arr.length; i++) {
      if(i >= begin && i < end) {
        newArr.push(arr[i]);
    }
  }
}
  if (begin < 0 || end < 0) {
    // eslint-disable-next-line no-unused-expressions
    arr.length -begin || arr.length -end;
    for (let i = 0; i < arr.length; i++) {
      if(i >= begin && i < end) {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}
module.exports = slice;
