function classify(number) {
  let numTest = sumOfDivisors(number);
  if (numTest === number) {
    return 'perfect';
  } else if (numTest > number) {
    return 'abundant';
  } else {
    return 'deficient';
  }
}

function sumOfDivisors(number) {
  isNaturalNumber(number);
  let count = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      count += i;
    }
  }
  return count;
}

function isNaturalNumber(number) {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }
}

console.log(classify(6));
