function square(sqr) {
  const arrSqr = arrSquare(sqr);
  if (sqr > 0 && sqr < 65) {
    if (arrSqr.length != 1) {
      return calcValueOfSquare(arrSqr);
    } else {
      return '1';
    }
  } else {
    throw new Error('square must be between 1 and 64');
  }
}

function total() {
  let acc = BigInt(1);
  let finalValue;
  for (let x of arrSquare(64)) {
    acc *= BigInt(2);
    if (x == 64) {
      finalValue = acc;
    }
  }
  return String(finalValue - BigInt(1));
}

function calcValueOfSquare(arrSquare) {
  return String(arrSquare.reduce((acc) => BigInt(acc) * BigInt(2)));
}

function arrSquare(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

//console.log(square(64));
console.log(total());
