function collectStrings(obj) {
  const stringArr = [];

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      stringArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringArr.push(...collectStrings(obj[key]));
    }
  }

  return stringArr;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
