// Locators
import { HomepageLocators } from '@features/pages/homepage/locators/HomepageLocators';

export class Homepage {
  private readonly locators = HomepageLocators;

  constructor() {}

  public clickOnSpeakersCard(): void {
    cy.get(this.locators.speakersCard).click();
  }

  public clickOnTabletsCard(): void {
    cy.get(this.locators.tabletsCard).click();
  }

  public clickOnLaptopsCard(): void {
    cy.get(this.locators.laptopsCard).click();
  }

  public clickOnMonitorsCard(): void {
    cy.get(this.locators.miceCard).click();
  }

  public clickOnHeadphonesCard(): void {
    cy.get(this.locators.headPhonesCard).click();
  }
}
