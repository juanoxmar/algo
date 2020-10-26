function countUniqueValues(arr) {
  if (arr.length < 1) {
    return 0;
  }

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 5, 5, 5, 5, 6]));
