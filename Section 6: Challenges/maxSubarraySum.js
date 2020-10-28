function maxSubarraySum(arr, length) {
  if (arr.length < length) {
    return null;
  }

  let slide = arr.slice(0, length).reduce((a, b) => a + b);
  let maxSum = slide;
  let left = 0;
  let right = length;

  while (right < arr.length) {
    slide = slide - arr[left] + arr[right];
    if (slide > maxSum) {
      maxSum = slide;
    }
    right++;
    left++;
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
