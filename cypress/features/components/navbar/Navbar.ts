// Locators
import { NavbarLocators } from '@features/components/navbar/locators/NavbarLocators';

export class Navbar {
  private static readonly locators = NavbarLocators;

  constructor() {}

  public static clickOnOurProducts(): void {
    cy.get(Navbar.locators.navigationLinks.ourProducts).click();
  }

  public static clickOnSpecialOffer(): void {
    cy.get(Navbar.locators.navigationLinks.specialOffer).click();
  }

  public static clickOnPopularItems(): void {
    cy.get(Navbar.locators.navigationLinks.popularItems).click();
  }

  public static clickOnContactUs(): void {
    cy.get(Navbar.locators.navigationLinks.contactUs).click();
  }

  public static searchProduct(product: string) {
    Navbar.clickOnSearchProductLink();
    Navbar.typeSearchProduct(product);
  }

  private static clickOnSearchProductLink(): void {
    cy.get(Navbar.locators.searchProduct.searchLink).click();
  }

  private static typeSearchProduct(product: string): void {
    cy.get(Navbar.locators.searchProduct.searchInput).type(`${product}{enter}`);
  }

  public static clickOnProfileLink(): void {
    cy.get(Navbar.locators.profileLink).click();
  }

  public static clickOnCartLink(): void {
    cy.get(Navbar.locators.cartLink).click();
  }
}
