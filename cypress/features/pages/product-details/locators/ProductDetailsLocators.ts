export const ProductDetailsLocators = {
  productName: '#Description h1',
  productPrice: '#Description h2',
  productDescription: '#Description p',

  quantity: '#productProperties input[name="quantity"]',

  quantityActions: {
    increase: '#productProperties .smoolMargin .plus',
    decrease: '#productProperties .smoolMargin .minus',
  },

  addToCartButton: '#productProperties button[name="save_to_cart"]',
};