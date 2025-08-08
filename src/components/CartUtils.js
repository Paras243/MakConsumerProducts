export const generateCartItemsFrom = (cartData, productsData) => {
  const map = new Map(productsData.map(p => [p.id, p]));
  return cartData.map(c => ({
    ...map.get(c.productId),
    quantity: c.qty
  }));
};

export const getTotalCartValue = (items = []) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

export const getTotalItems = (items = []) =>
  items.reduce((total, item) => total + item.quantity, 0);
