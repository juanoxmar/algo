// function reverse(str) {
//   const arr = [];

//   const goThruString = (letters) => {
//     if (letters.length === 0) {
//       return;
//     }
//     arr.push(letters[letters.length - 1]);
//     goThruString(letters.slice(0, -1));
//   };

//   goThruString(str);
//   return arr.join('');
// }

function reverse(str) {
  if (str.length === 0) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
