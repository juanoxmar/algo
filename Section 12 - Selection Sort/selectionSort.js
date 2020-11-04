function selectionSort(arr) {
  const swap = (list, idx1, idx2) => {
    [list[idx1], list[idx2]] = [list[idx2], list[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let noSwap = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
        noSwap = false;
      }
    }
    if (!noSwap) {
      swap(arr, min, i);
    }
  }

  return arr;
}

console.log(selectionSort([1000, 7, 2, 4, 9, 5, 8, 22, 99, 23, 45, 67, 85, 1]));
