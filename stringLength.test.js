const stringLength = require('./stringLength');

test('Length of string', () => {
  expect(stringLength('check')).toBe(true);
});

test('Length of string greater than 10', () => {
  // expect(() => stringLength('checkabcdefg')).toThrow();
  expect(stringLength('abcdefghijklmno')).toBe(false);
});

test('Length of string less than 1', () => {
  // expect(() => stringLength('checkabcdefg')).toThrow();
  expect(stringLength('')).toBe(false);
});