function Calculator() {
    this.result = 0;
    this.getResult = () => {
        return this.result;
    };

    this.add = (n) => {
        this.result += n;
        return this.add;
    };

    this.subtract = (n) => {
        this.result -= n;
        return this.subtract;
    };

    this.divide = (n) => {
        this.result /= n;
        return this.divide;
    };

    this.multiply = (n) => {
        this.result *= n;
        return this.multiply;
    };

    this.reset = () => {
        // eslint-disable-next-line no-return-assign
        return this.result = 0;
    }
}
    let calculator = new Calculator();
    module.exports = new Calculator();
    