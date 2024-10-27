// Components
import { CartTooltip } from '@features/components/cart-tooltip/CartTooltip';

// Types
import { IProduct } from '@features/pages/shared/types/product/IProduct';

export class Checkout {
  /* Note:
    Observei que na tela de checkout, o componente de "ORDER SUMMARY" é o mesmo componente do tooltip do carrinho.
    Portanto, como eu já havia componentizado o tooltip do carrinho, eu posso reutilizar o mesmo componente.
    Dessa forma, eu consigo reaproveitar o código e evitar duplicidade de código.  
  */
  private components = {
    cartComponent: CartTooltip
  };
    
  constructor() {}

  public getTotalItemsFromCart(): Cypress.Chainable<number> {
    return this.components.cartComponent.getTotalItems();
  }

  public getAllProductsInCart(): Cypress.Chainable<IProduct[]> {
    return this.components.cartComponent.getAllProductsFromCart();
  }
};