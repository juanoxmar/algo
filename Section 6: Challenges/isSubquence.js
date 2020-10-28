function isSubsequence(string1, string2) {
  let index = 0;

  for (const char of string2) {
    if (char === string1.charAt(index)) {
      index += 1;
    }
    if (index === string1.length) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'string'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
