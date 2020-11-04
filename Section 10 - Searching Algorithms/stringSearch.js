function stringSearch(long, short) {
  let length = short.length;
  let count = 0;

  for (let i = 0; i <= long.length - length; i++) {
    if (short === long.slice(i, length + i)) {
      count++;
    }
  }

  return count;
}

console.log(stringSearch('hola hola ho laa', 'hol'));
