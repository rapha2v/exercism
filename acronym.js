function acronym(phrase) {
  let acr = '';
  phrase
    .toUpperCase()
    .match(/[\w]+['][\w]+|[a-z0-9]+/gi)
    .forEach((word) => {
      acr += word.substring(0, 1);
    });
  return acr;
}

console.log(acronym('lei geral protecao dados'));
