const reverseString = require('./reverseString');

test('string reverse', () => {
  expect(reverseString('abc')).toBe('cba');
});

test('string reverse', () => {
  expect(reverseString('123')).toBe('321');
});