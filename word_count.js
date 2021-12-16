function count(phrase) {
  let arrPhrase = phrase.toLowerCase().match(/[\w]+['][\w]+|[a-z0-9]+/gi);
  let wordCount = {};
  for (let word of arrPhrase) {
    if (!wordCount.hasOwnProperty(word)) {
      let filteredWords = arrPhrase.filter((curr) => curr === word);
      wordCount[filteredWords[0]] = filteredWords.length;
    }
  }
  return wordCount;
}

console.log(count('one,two,three'));
