// function same which takes two arrays the function should return true if every value in the array
// has its corresponding value squared in the second array.
// the frequency of values must be the same

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const obj1 = {};
  const obj2 = {};

  // Array values into objects
  for (const elem of arr1) {
    obj1[elem] = ++obj1[elem] || 1;
  }
  for (const elem of arr2) {
    obj2[elem] = ++obj2[elem] || 1;
  }

  console.log(obj1);
  console.log(obj2);

  // compare sqaured value of obj1 appears the same amount of times in obj2
  for (const key in obj1) {
    if (obj2[key * key] !== obj1[key]) return false;
  }
  return true;
}

const arr1 = [2, 3, 4, 4, 5];
const arr2 = [4, 9, 16, 16, 25];

console.log(same(arr1, arr2));
