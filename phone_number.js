function clean(phone) {
  if (phone.trim().match(/[a-z]+/)) throw new Error('Letters not permitted');
  if (phone.trim().match(/[_!:?\/\\@#$%¨&*={}\[\]<>]+/))
    throw new Error('Punctuations not permitted');
  let arrNumber = phone.trim().match(/[0-9]/g);
  let lengthArrNumber = arrNumber.length;
  if (lengthArrNumber < 10) throw new Error('Incorrect number of digits');
  if (lengthArrNumber > 11) throw new Error('More than 11 digits');
  if (lengthArrNumber === 11) {
    if (arrNumber[0] !== '1') throw new Error('11 digits must start with 1');
    arrNumber = arrNumber.slice(1, arrNumber.length);
  }
  if (arrNumber[0] === '0') throw new Error('Area code cannot start with zero');
  if (arrNumber[0] === '1') throw new Error('Area code cannot start with one');
  if (arrNumber[3] === '0')
    throw new Error('Exchange code cannot start with zero');
  if (arrNumber[3] === '1')
    throw new Error('Exchange code cannot start with one');
  return arrNumber.join('');
}

console.log(clean('+1 (613)-995-0253'));
