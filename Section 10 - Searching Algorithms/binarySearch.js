function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.round((right + left) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else if (arr[middle] < target) {
      left = middle + 1;
    }
  }

  return -1;
}

console.log(
  binarySearch([1, 3, 4, 5, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 15)
);
