// Broken: returns new array but mutates same object references.
const applyDiscount = (cart, discount) => {
  if (!cart.length) {
    return [];
  }

  const [head, ...tail] = cart
  const current = Object.assign({}, head);
  current.price *= (1 - discount);

  return [current].concat(applyDiscount(tail, discount));
};

module.exports = applyDiscount;

