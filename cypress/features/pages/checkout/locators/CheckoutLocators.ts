import { CartTooltipLocators } from "@features/components/cart-tooltip/locators/CartTooltipLocators";

export const CheckoutLocators = {
  totalItems: '#userCart .itemsCount',

  product: (index: number) => {
    return CartTooltipLocators.product(index);
  },

  totalPrice: '#userCart .totalValue'
};