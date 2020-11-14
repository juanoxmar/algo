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
