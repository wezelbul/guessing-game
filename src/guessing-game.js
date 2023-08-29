class GuessingGame {

    min;
    max;
    guessVal;
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.guessVal = Math.round((max + min) / 2);
    }

    guess() {
        return this.guessVal;
    }

    lower() {
        this.max = this.guessVal;
        this.guessVal = Math.round((this.min + this.guessVal) / 2);
    }

    greater() {
        this.min = this.guessVal;
        this.guessVal = Math.round((this.max + this.guessVal) / 2);
    }
}

module.exports = GuessingGame;
