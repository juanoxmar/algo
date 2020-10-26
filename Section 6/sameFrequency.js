function sameFrequency(num1, num2){
  const arr1 = num1.toString().split('');
  const arr2 = num2.toString().split('');
  const obj1 = {};
  const obj2 = {};

  for (const elem of arr1) {
    obj1[elem] ? obj1[elem] += 1 : obj1[elem] = 1;
  }

  for (const elem of arr2) {
    obj2[elem] ? obj2[elem] += 1 : obj2[elem] = 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 5879385);
sameFrequency(22, 222);