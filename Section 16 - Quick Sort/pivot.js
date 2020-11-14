/**
 * @param {number[]} arr
 * @returns {number[]}
 */

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[start] > arr[i]) {
      swapIdx += 1;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  console.log(arr);

  return swapIdx;
}
const arr = [7, 2, 4, 9, 5, 8, 1000, 22, 99, 23, 45, 67, 85, 1];
console.log(pivot(arr));
