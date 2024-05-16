const { sum, subtract } = require('../src/math');

test('sum adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

// test('sum adds two numbers correctly', () => {
//    expect(sum(1, 2)).toBe(4);
// });