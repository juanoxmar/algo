function findLongestSubstring(string) {
  let left = 0;
  let subLength = 0;
  const letterObj = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in letterObj) {
      if (letterObj[char] < left) {
        subLength = Math.max(subLength, i - left + 1);
      } else {
        left = letterObj[char] + 1;
      }
      letterObj[char] = i;
    } else {
      letterObj[char] = i;
      subLength = Math.max(subLength, i - left + 1);
    }
  }
  return subLength;
}

console.log('0: ', findLongestSubstring(''));
console.log('7: ', findLongestSubstring('rithmschool'));
console.log('6: ', findLongestSubstring('thisisawesome'));
console.log('7: ', findLongestSubstring('thecatinthehat'));
console.log('1: ', findLongestSubstring('bbbbbb'));
console.log('8: ', findLongestSubstring('longestsubstring'));
console.log('6: ', findLongestSubstring('thisishowwedoit'));
