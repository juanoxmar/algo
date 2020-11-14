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

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

function merge(arr1, arr2) {
  const mergedArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i += 1;
    } else {
      mergedArr.push(arr2[j]);
      j += 1;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i += 1;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j += 1;
  }

  return mergedArr;
}

console.log(mergeSort([1000, 7, 2, 4, 9, 5, 8, 22, 99, 23, 45, 67, 85, 1]));
