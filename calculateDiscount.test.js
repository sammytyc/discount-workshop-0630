const { calculateDiscount } = require('./calculateDiscount');

describe('calculateDiscount', () => {
  test('gold member receives 20% discount (pays 80%)', () => {
    const result = calculateDiscount(100, 'gold');
    expect(result).toBe(80);
  });

  test('silver member receives 10% discount (pays 90%)', () => {
    const result = calculateDiscount(100, 'silver');
    expect(result).toBe(90);
  });

  test('regular member receives no discount', () => {
    const result = calculateDiscount(100, 'regular');
    expect(result).toBe(100);
  });

  test('unknown member type receives no discount', () => {
    const result = calculateDiscount(100, 'unknown');
    expect(result).toBe(100);
  });

  test('undefined member type receives no discount', () => {
    const result = calculateDiscount(100, undefined);
    expect(result).toBe(100);
  });

  test('rounds final price to 2 decimal places', () => {
    const result = calculateDiscount(33.33, 'gold');
    expect(result).toBe(26.66);
  });

  test('rounds final price with silver member', () => {
    const result = calculateDiscount(15.50, 'silver');
    expect(result).toBe(13.95);
  });

  test('throws error for negative price', () => {
    expect(() => calculateDiscount(-50, 'gold')).toThrow();
  });

  test('throws error for zero price', () => {
    expect(() => calculateDiscount(0, 'gold')).toThrow();
  });

  test('works with decimal prices', () => {
    const result = calculateDiscount(99.99, 'gold');
    expect(result).toBe(79.99);
  });

  test('discounted price is exactly correct for gold member', () => {
    const result = calculateDiscount(100, 'gold');
    expect(result).toBe(80);
  });

  test('rounds up when necessary', () => {
    const result = calculateDiscount(33.34, 'gold');
    expect(result).toBe(26.67);
  });

  test('handles null member type as no discount', () => {
    const result = calculateDiscount(100, null);
    expect(result).toBe(100);
  });

  test('handles extreme decimal precision', () => {
    const result = calculateDiscount(0.01, 'gold');
    expect(result).toBe(0.01);
  });

  test('handles tiny prices with rounding', () => {
    const result = calculateDiscount(1.005, 'silver');
    expect(result).toBe(0.90);
  });

});
