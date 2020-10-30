// function isPalindrome(string) {
//   const arr = [];

//   const goThruString = (letters) => {
//     if (letters.length === 0) {
//       return;
//     }
//     arr.push(letters[letters.length - 1]);
//     goThruString(letters.slice(0, -1));
//   };

//   goThruString(string);

//   return arr.join('') === string ? true : false;
// }

function isPalindrome(str) {
  const reverse = (revStr) => {
    if (revStr.length === 0) {
      return revStr;
    }
    return reverse(revStr.slice(1)) + revStr[0];
  };
  return reverse(str) === str ? true : false;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
