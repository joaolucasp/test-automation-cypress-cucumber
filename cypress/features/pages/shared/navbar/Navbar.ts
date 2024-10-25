// Locators
import { NavbarLocators } from '@features/pages/shared/navbar/locators/NavbarLocators';

export class Navbar {
  private readonly locators = NavbarLocators;

  constructor() {}

  public static clickOnOurProducts(): void {
    cy.get(NavbarLocators.navigationLinks.ourProducts).click();
  }

  public static clickOnSpecialOffer(): void {
    cy.get(NavbarLocators.navigationLinks.specialOffer).click();
  }

  public static clickOnPopularItems(): void {
    cy.get(NavbarLocators.navigationLinks.popularItems).click();
  }

  public static clickOnContactUs(): void {
    cy.get(NavbarLocators.navigationLinks.contactUs).click();
  }

  public static searchProduct(product: string) {
    Navbar.clickOnSearchProductLink();
    Navbar.typeSearchProduct(product);
  }

  private static clickOnSearchProductLink(): void {
    cy.get(NavbarLocators.searchProduct.searchLink).click();
  }

  private static typeSearchProduct(product: string): void {
    cy.get(NavbarLocators.searchProduct.searchInput).type(`${product}{enter}`);
  }

  public static clickOnProfileLink(): void {
    cy.get(NavbarLocators.profileLink).click();
  }

  public static clickOnCartLink(): void {
    cy.get(NavbarLocators.cartLink).click();
  }
}
