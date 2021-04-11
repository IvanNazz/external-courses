const trimString = (str, num) => {

  if(num >= str.length) {
    return str
  } 
    return str.slice(0, num -1) + "…";
}
module.exports = trimString;
