/**
 * @param {number[]} arr
 * @returns {number[]}
 */

function pivot(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let swapCount = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      swapCount += 1;
      swap(arr, swapCount, i);
    }
  }
  swap(arr, 0, swapCount);

  return arr;
}

console.log(pivot([1000, 7, 2, 4, 9, 5, 8, 22, 99, 23, 45, 67, 85, 1]));
