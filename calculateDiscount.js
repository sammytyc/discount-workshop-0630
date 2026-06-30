function calculateDiscount(price, memberType) {
  if (price <= 0) {
    throw new Error('Price must be positive');
  }

  const discounts = {
    gold: 0.85,
    silver: 0.9,
  };

  const multiplier = discounts[memberType] ?? 1;
  const finalPrice = price * multiplier;

  return Math.round(finalPrice * 100) / 100;
}

module.exports = { calculateDiscount };
