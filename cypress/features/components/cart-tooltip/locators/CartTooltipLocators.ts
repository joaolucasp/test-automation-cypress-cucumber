export const CartTooltipLocators = {
  totalItems: '#toolTipCart table > tfoot > tr:first > td:first label',
  totalPrice: '#toolTipCart table > tfoot > tr:last > td:last span',

  productRow: '#toolTipCart table > tbody > tr',

  product: (index: number) => {
    const productRow = `#toolTipCart table > tbody > tr:nth-child(${index + 1})`;

    return {
      productName: `${productRow} td:nth-child(2) h3`,
      productQuantity: `${productRow} td:nth-child(2) label:first`,
      productColor: `${productRow} td:nth-child(2) label:last span`,
      productPrice: `${productRow} td:nth-child(3) .price`
    };
  },

  checkoutButton: '#toolTipCart #checkOutPopUp',
};
