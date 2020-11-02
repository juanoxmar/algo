import merge from './merge.js';

/**
 * @param {number[]} arr
 * @return {number[]}
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  return merge(
    mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
    mergeSort(arr.slice(Math.floor(arr.length / 2)))
  );
}

console.log(mergeSort([1000, 7, 2, 4, 9, 5, 8, 22, 99, 23, 45, 67, 85, 1]));
