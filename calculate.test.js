const Calculator = require('./calculate');

const case1 = new Calculator(4, 2);
const case2 = new Calculator(7, 3);
const case3 = new Calculator(2, 4);

describe('Addition', () => {
  test('case1', () => {
    expect(case1.add()).toBe(6);
  });
  test('case2', () => {
    expect(case2.add()).toBe(10);
  });
  test('case3', () => {
    expect(case3.add()).toBe(6);
  });
});

describe('Subtraction', () => {
  test('case1', () => {
    expect(case1.subtract()).toBe(2);
  });
  test('case2', () => {
    expect(case2.subtract()).toBe(4);
  });
  test('case3', () => {
    expect(case3.subtract()).toBe(-2);
  });
});

describe('Multiplication', () => {
  test('case1', () => {
    expect(case1.multiply()).toBe(8);
  });
  test('case2', () => {
    expect(case2.multiply()).toBe(21);
  });
  test('case3', () => {
    expect(case3.multiply()).toBe(8);
  });
});

describe('Division', () => {
  test('case1', () => {
    expect(case1.divide()).toBe(2);
  });
  test('case2', () => {
    expect(case2.divide()).toBeCloseTo(2.3333);
  });
  test('case3', () => {
    expect(case3.divide()).toBe(0.5);
  });
});