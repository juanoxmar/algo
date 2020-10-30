function bubbleSort(list) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let j = list.length; j > 0; j--) {
    let noSwap = true;
    for (let i = 0; i < j - 1; i++) {
      if (list[i] > list[i + 1]) {
        swap(list, i, i + 1);
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }

  return list;
}

console.log(bubbleSort([1000, 7, 2, 4, 9, 5, 8, 22, 99, 23, 45, 67, 85, 1]));
