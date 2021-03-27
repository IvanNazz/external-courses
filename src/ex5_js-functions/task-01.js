function Calculator() {

    this.getResult = 0;

    this.add = function(n) {
        getResult += n;
        return this.getResult;
    };

    this.subtract = function(n) {
        getResult -= n;
        return this.getResult;
    };

    this.divide = function(n) {
        getResult /= n;
        return this.getResult;
    };

    this.multiply = function(n) {
        getResult *= n;
        return this.getResult;
    };

    this.reset = function () {
        this.getResult = 0;
    }
}
    let calculator = new Calculator();
    module.exports = new Calculator();
    