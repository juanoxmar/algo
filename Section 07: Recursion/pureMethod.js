function collectOddValues(arr) {
  let result = [];

  if (arr.length === 0) {
    return arr;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  result = [...result, ...collectOddValues(arr.slice(1))];

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
