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

// [1, 2, 10, 14, 50, 99, 100]
// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

export default merge;
