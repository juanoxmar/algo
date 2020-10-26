// Divide and Conquer

function search(arr, target) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((max - min) / 2) + min;
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      min = mid + 1;
    }

    if (arr[mid] > target) {
      max = mid - 1;
    }
  }
  return -1;
}

console.log(search([10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 101));
