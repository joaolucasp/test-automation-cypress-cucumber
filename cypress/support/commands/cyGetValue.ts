/// <reference types="cypress" />

/**
 * Retrieves the text value of the specified element.
 *
 * @param element - The selector or alias of the element to retrieve the value from.
 * @param timeout - The maximum time, in milliseconds, to wait for the element to be available. Default is 10000ms.
 * @returns A promise that resolves with the text value of the element.
 */
Cypress.Commands.add('getValue', (element: string, timeout = 10000) => {
  return cy.get(element, { timeout, log: false }).then($element => {
    return $element.text().trim();
  });
});