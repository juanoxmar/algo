function minSubArrayLen(arr, target) {
  let left = 0;
  let right = 0;
  let dif = Infinity;
  let sumArr = arr[0];

  while (right < arr.length) {
    if (sumArr < target) {
      right++;
      sumArr += arr[right];
    } else if (sumArr >= target) {
      if (right - left + 1 < dif) {
        dif = right - left + 1;
      }
      sumArr -= arr[left];
      left++;
    }
  }
  return dif === Infinity ? 0 : dif;
}

console.log("2: ", minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log("2: ", minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log("1: ", minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log("3: ", minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log("5: ", minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log("2: ", minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log("0: ", minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
