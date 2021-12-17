class HighScores {
  constructor(scores) {
    this.arrScores = [...scores];
  }

  get scores() {
    return this.arrScores;
  }

  get latest() {
    return this.arrScores.slice(this.arrScores.length - 1)[0];
  }

  get personalBest() {
    return Math.max(...this.arrScores);
  }

  get personalTopThree() {
    return this.arrScores.sort((a, b) => b - a).slice(0, 3);
  }
}

const hscore = new HighScores([20]);
console.log(hscore.scores);
console.log(hscore.latest);
console.log(hscore.personalBest);
console.log(hscore.personalTopThree);
