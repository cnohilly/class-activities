function Algo() { }

Algo.prototype.reverse = function (str) {
  // TODO: Your code here
  return (
    str
      // TODO: convert string to an array
      .split('')
      // TODO: reverse substrings in array
      .reverse()
      // TODO: convert array back into a string
      .join('')
  );
};

Algo.prototype.isPalindrome = function (str) {
  // TODO: Your code here
  return str === this.reverse(str);
};

Algo.prototype.capitalize = function (str) {
  // TODO: Your code here
  return str
  .split(' ')
  .map(word => {
    return word.substring(0,1).toUpperCase() + word.substring(1);
  });
  // const arrayString = str.split(' ');
  // const capitalizedStr = arrayString.map(word => {
  //   return word.charAt(0).toUpperCase() + word.slice(1);
  // }).join(' ');
  // return capitalizedStr;
};

module.exports = Algo;
