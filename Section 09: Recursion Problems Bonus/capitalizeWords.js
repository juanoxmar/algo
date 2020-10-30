function capitalizeWords(words) {
  const capWords = [];

  if (words.length === 0) {
    return words;
  }

  capWords.push(words[0].toUpperCase());
  capWords.push(...capitalizeWords(words.slice(1)));

  return capWords;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
