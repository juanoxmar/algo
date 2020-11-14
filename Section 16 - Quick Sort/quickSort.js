/**
 * @param {number[]} arr
 * @returns {number[]}
 */

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const index = pivot(arr, start, end);

    // left side
    quickSort(arr, start, index - 1);

    // right side
    quickSort(arr, index + 1, end);
  }
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

  return swapIdx;
}

const arr = [7, 2, 4, 9, 5, 8, 1000, 22, 99, 23, 45, 67, 85, 1];
quickSort(arr);
console.log(arr);
