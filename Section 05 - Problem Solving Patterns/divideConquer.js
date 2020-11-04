function dC(arr, target) {
  if (arr.length < 1) {
    return false;
  }

  let middle = Math.floor(arr.length / 2);

  if (arr[middle] === target) {
    return true;
  }

  if (arr.length === 1) {
    return false;
  }

  if (arr[middle] < target) {
    return dC(arr.slice(middle + 1), target);
  }

  if (arr[middle] > target) {
    return dC(arr.slice(0, middle), target);
  }
}

