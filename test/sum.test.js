const { sum, subtract, multiply } = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 6 to equal 24', () => {
  expect(multiply(4, 6)).toBe(24);
});

test('sum of negative numbers (-4) + (-6) to equal -10', () => {
  expect(sum(-4, -6)).toBe(-10);
});

test('subtracting from zero 0 - 8 to equal -8', () => {
  expect(subtract(0, 8)).toBe(-8);
});

test('multiplying by zero 7 * 0 to equal 0', () => {
  expect(multiply(7, 0)).toBe(0);
});
