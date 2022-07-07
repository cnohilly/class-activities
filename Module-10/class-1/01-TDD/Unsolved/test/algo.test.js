const Algo = require('../algo');

describe('Algo', () => {
  const algo = new Algo();
  describe('reverse', () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it('should reverse a given string', () => {
      const str = 'Hello World!';
      const reversed = '!dlroW olleH';
      expect(algo.reverse(str).toEqual(reversed));
    })
  });

  describe('isPalindrome', () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it('should return true if a string is a palindrome',() =>{
      const str = 'racecar';
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(true);
    })
    it('should return true if a string is not a palindrome',() =>{
      const str = 'neon';
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(true);
    })
  });

  describe('capitalize', () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    const str = "capitalize the first letter of each word in a string.";
    const capitalizedStr = "Capitalize The First Letter Of Each Word In A String.";

    expect(Algo.capitalize(str).toBe(capitalizedStr));
  });
});
