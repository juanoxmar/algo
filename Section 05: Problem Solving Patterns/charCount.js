// function charCount(str) {
//   // object to return
//   const obj = {};
//   // put string into an array
//   const strArr = str.toLowerCase().replace(/\s+/g, '').replace(/\W+/g, '');
//   console.log(strArr);
//   // loop to put unique obj into object
//   // for (let i = 0; i < strArr.length; i++) {
//   for (const char of strArr) {
//     // check object if char exists
//     char in obj ? (obj[char] += 1) : (obj[char] = 1);
//     // if (char in obj) {
//     //   obj[char] += 1;
//     // } else {
//     //   obj[char] = 1;
//     // }
//   }
//   console.log(obj);
//   //return final object
//   return obj;
// }

function charCount(str) {
  const obj = {};
  const strArr = str.toLowerCase().replace(/\s+/g, '').replace(/\W+/g, '');
  for (const char of strArr) {
    char in obj ? (obj[char] += 1) : (obj[char] = 1);
  }
  return obj;
}
console.log(9 ^ 14);
console.log(charCount('Hhow asklsjf !!R#@%@^@^@^@^'));
