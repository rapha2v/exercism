function rotate(word, key) {
  let arrWord = [...word];
  let arrAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  let lettersOfWord = Array.from(
    new Set(word.match(/[a-z]+/gi).reduce((acc, curr) => (acc += curr)))
  );

  let newLetters = lettersOfWord.map((value) => {
    let realLetter = arrAlphabet.indexOf(value.toLowerCase()) + key;
    if (realLetter >= arrAlphabet.length) {
      realLetter %= arrAlphabet.length;
    }
    return value === value.toUpperCase()
      ? arrAlphabet[realLetter].toUpperCase()
      : arrAlphabet[realLetter];
  });

  return arrWord
    .map((value) => {
      if (lettersOfWord.indexOf(value) !== -1) {
        return newLetters[lettersOfWord.indexOf(value)];
      }
      return value;
    })
    .join('');
}

console.log(rotate('a', 26));
