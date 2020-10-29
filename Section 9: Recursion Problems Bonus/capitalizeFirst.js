function capitalizeFirst(arr) {
  const capArr = [];

  if (arr.length === 0) {
    return arr;
  }

  capArr.push(arr[0].slice(0, 1).toLocaleUpperCase() + arr[0].slice(1));
  capArr.push(...capitalizeFirst(arr.slice(1)));

  return capArr;
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
