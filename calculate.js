class Calculator {
  constructor(a, b) {
    this.num1 = a;
    this.num2 = b;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  divide() {
    return this.num1/this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }
}

module.exports = Calculator;