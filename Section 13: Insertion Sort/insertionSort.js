function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        arr.splice(j + 1, 0, ...arr.splice(i, 1));
        break;
      }
      if (j === 0) {
        arr.unshift(...arr.splice(i, 1));
      }
    }
  }
  return arr;
}

console.log(insertionSort([1000, 7, 2, 4, 9, 5, 8, 22, 99, 23, 45, 67, 85, 1]));
