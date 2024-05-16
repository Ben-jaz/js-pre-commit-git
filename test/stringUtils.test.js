// tests/stringUtils.test.js

const { capitalize, reverse } = require('../src/stringUtils');

test('capitalize capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverse reverses a string', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('capitalize empty string returns empty string', () => {
  expect(capitalize('')).toBe('');
});

test('reverse empty string returns empty string', () => {
  expect(reverse('')).toBe('');
});