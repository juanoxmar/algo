/**
 * @param {number[]} arr
 * @returns {number[]}
 */

function pivot(arr, start, end) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let swapCount = 0;
  for (let i = start + 1; i < end; i++) {
    if (arr[start] > arr[i]) {
      swapCount += 1;
      swap(arr, swapCount, i);
    }
  }
  swap(arr, start, swapCount);
  console.log(arr);

  return swapCount;
}
const arr = [7, 2, 4, 9, 5, 8, 1000, 22, 99, 23, 45, 67, 85, 1];
console.log(pivot(arr, 0, arr.length));
