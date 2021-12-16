function score(word) {
  let valueLetters = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  };
  let calc = 0;
  let objKeys = Object.keys(valueLetters);
  for (let i = 1; i < 8; i++) {
    for (let letter of valueLetters[`${objKeys[i - 1]}`]) {
      let reg = new RegExp(`${letter}`, 'gi');
      let occurrences = String(word).match(reg);
      if (occurrences) {
        calc += occurrences.length * objKeys[i - 1];
      }
    }
  }
  return calc;
}

console.log(score('zoo'));
