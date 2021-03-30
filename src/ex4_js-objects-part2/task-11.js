const showCharsCount = (str) => {
  arr = str.split('');

  let newObj = {};

  arr.forEach(item => {
    if (item in newObj){
    newObj[item] = newObj[item] = 1;
    } else {
      newObj[item] = 1;
    }
  });
  // eslint-disable-next-line guard-for-in
  for (let key in newObj) {
  console.log("key:" + key + "value:" + newObj[key]);
  }
}
module.exports = showCharsCount;
