/// <reference types="cypress" />

/**
 * Custom command to select an option from a dropdown.
 * 
 * @param {string} element - The selector for the dropdown element.
 * @param {string} value - The value to be selected from the dropdown.
 * @param {number} [timeout=10000] - The time to wait for the element to be available.
 */
Cypress.Commands.add('customSelect', (element: string, value: string, timeout = 10000) => {
    cy.get(element, { timeout, log: false }).select(value, { log: false });
});

/**
 * Custom command to type a value into an input field.
 * 
 * @param {string} element - The selector for the input element.
 * @param {string} value - The value to be typed into the input field.
 * @param {number} [timeout=10000] - The time to wait for the element to be available.
 */
Cypress.Commands.add('customType', (element: string, value: string, timeout = 10000) => {
    cy.get(element, { timeout, log: false }).type(value, { log: false });
});

/**
 * Custom command to get an element.
 * 
 * @param {string} element - The selector for the element.
 * @param {number} [timeout=10000] - The time to wait for the element to be available.
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} - The Cypress chainable object for the element.
 */
Cypress.Commands.add('customGet', (element: string, timeout = 10000) => {
    return cy.get(element, { timeout, log: false });
});