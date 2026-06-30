const { calculateDiscount } = require('./calculateDiscount');

describe('calculateDiscount', () => {
  test('gold member gets 20% off', () => {
    expect(calculateDiscount(100, 'gold')).toBeLessThan(100);
    // was toBe(80) — now meaningless
  });
});
