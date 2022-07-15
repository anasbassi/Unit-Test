const capitalize = require('./capitalize');

test('Check if capitalized', () => {
  expect(capitalize('word')).toBe('Word');
});