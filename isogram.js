function isogram(word) {
  let newWord = word.toLowerCase().replace(/-| /g, '');
  let arrWord = new Set([...newWord]);
  if (Array.from(arrWord).join('') === newWord) {
    return true;
  }
  return false;
}

console.log(isogram('Emily Jung Schwartzkopf'));
