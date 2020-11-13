/**
 * @param {number[]} arr
 * @returns {number[]}
 */

function quickSort(arr) {
  return arr;
}

/**
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */

function pivot(arr, start, end) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2][idx1]];
  
  let swapCount = 0;
  for (let i = start + 1; i < end; i++) {
    if (arr[start] > arr[i]) {
      swapCount += 1;
      swap(arr, swapCount, i);
    }
  }
  swap(arr, start, swapCount);

  return swapCount;
}
