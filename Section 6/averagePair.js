function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === target) {
      return true;
    }
    if ((arr[left] + arr[right]) / 2 > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
