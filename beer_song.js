function beer_song(initialBottlesCount, takeDownCount) {
  let arrMusician = [];
  let count = 1;
  let takeDownZero = [
    'No more bottles of beer on the wall, no more bottles of beer.',
    'Go to the store and buy some more, 99 bottles of beer on the wall.',
  ];
  let takeDownOne = [
    '1 bottle of beer on the wall, 1 bottle of beer.',
    'Take it down and pass it around, no more bottles of beer on the wall.',
  ];
  let takeDownBottles = () => {
    return [
      `${initialBottlesCount} bottle of beer on the wall, ${initialBottlesCount} bottle of beer.`,
      `Take one down and pass it around, ${
        initialBottlesCount - 1
      } bottle of beer on the wall.`,
    ];
  };
  do {
    if (initialBottlesCount === 0 && count === 1) return takeDownZero;
    if (takeDownCount - 1 > 1) {
      arrMusician.push(takeDownBottles());
      arrMusician.push('');
    }
    if (initialBottlesCount === 1) {
      arrMusician.push(takeDownOne);
      arrMusician.push('');
    }
    if (initialBottlesCount - 1 === 0) {
      arrMusician.push(takeDownZero);
    }

    initialBottlesCount--;
    takeDownCount--;
    count++;
  } while (takeDownCount > 1);
  return arrMusician.flat();
}

const sing = beer_song(30, 31);
console.log(sing);
