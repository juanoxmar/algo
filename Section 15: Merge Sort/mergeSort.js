import merge from './merge.js';

/**
 * @param {number[]} arr
 * @return {number[]}
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

console.log(mergeSort([1000, 7, 2, 4, 9, 5, 8, 22, 99, 23, 45, 67, 85, 1]));
