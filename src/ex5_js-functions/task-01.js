function Calculator() {

    this.getResult = () => {
        this.getResult = 0;
    };

    this.add = (n) => {
        this.getResult += n;
        return this.add;
    };

    this.subtract = (n) => {
        this.getResult -= n;
        return this.subtract;
    };

    this.divide = (n) => {
        this.getResult /= n;
        return this.divide;
    };

    this.multiply = (n) => {
        this.getResult *= n;
        return this.multiply;
    };

    this.reset = () => {
         // eslint-disable-next-line no-return-assign
        return this.getResult = 0;
    }
}
    let calculator = new Calculator();
    module.exports = new Calculator();
    