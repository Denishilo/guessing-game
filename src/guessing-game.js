class GuessingGame { 
    constructor() {}
    start
    end 
    centre
    setRange(min, max) {
        this.start=min
        this.end=max
    }
    guess() {
        this.centre= Math.ceil((this.end+this.start)/2)
        return this.centre
    }
    lower() {
        this.end = this.centre;
    }
    greater() {
        this.start = this.centre
    }
}

module.exports = GuessingGame;
