function power(num, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp < 0) {
    return 1 / power(num, -exp);
  }

  return num * power(num, exp - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, -4)); // 16
