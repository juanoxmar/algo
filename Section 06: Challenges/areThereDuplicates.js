function areThereDuplicates() {
  if (arguments === undefined) {
    return;
  }
  if (arguments.length === 1) {
    return false;
  }

  let obj = {};

  for (let i = 0; i < arguments.length; i++) {
    if (obj[arguments[i]]) {
      return true;
    }
    obj[arguments[i]] = 1;
  }

  return false;
}
