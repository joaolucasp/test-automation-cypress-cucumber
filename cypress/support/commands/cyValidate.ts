/// <reference types="cypress" />

// Helper
import { ObjectHelper } from "@helpers/object";

/**
 * Performs assertions on a given value based on the specified criteria.
 *
 * @param {T} retrievedValue - The value to be asserted.
 * @param {AssertionTypes} assert - The assertion to be performed.
 * @param {T} expectedValue - The expected value to compare against.
 * @param {string} successMessage - The message to display if the assertion is successful.
 * @param {string} failureMessage - The message to display if the assertion fails.
 * @returns void
 *
 * @example
 * cy.expected(10, 'equal', 10, 'Values are equal', 'Values are not equal');
 */
Cypress.Commands.add(
  'expected',
  <T>(
    retrievedValue: T,
    assert: AssertionTypes,
    expectedValue: T,
    successMessage: string,
    failureMessage: string
  ) => {
    let customMessage = '';

    switch (assert) {
      case AssertionTypes.EQUAL:
        retrievedValue === expectedValue ? (customMessage = successMessage) : (customMessage = failureMessage);
        expect(retrievedValue).to.equal(expectedValue, customMessage);
        break;

      case AssertionTypes.NOT_EQUAL:
        retrievedValue !== expectedValue ? (customMessage = successMessage) : (customMessage = failureMessage);
        expect(retrievedValue).to.not.equal(expectedValue, customMessage);
        break;

      case AssertionTypes.CONTAINS:
        if (typeof retrievedValue === 'string' || Array.isArray(retrievedValue)) {
          (retrievedValue as unknown as string).includes(String(expectedValue))
            ? (customMessage = successMessage)
            : (customMessage = failureMessage);
          expect(retrievedValue).to.contain(expectedValue, customMessage);
        } else {
          throw new Error('CONTAINS assertion can only be used with strings or arrays');
        }
        break;

      case AssertionTypes.NOT_CONTAINS:
        if (typeof retrievedValue === 'string' || Array.isArray(retrievedValue)) {
          !(retrievedValue as unknown as string).includes(String(expectedValue))
            ? (customMessage = successMessage)
            : (customMessage = failureMessage);
          expect(retrievedValue).to.not.contain(expectedValue, customMessage);
        } else {
          throw new Error('NOT_CONTAINS assertion can only be used with strings or arrays');
        }
        break;

      case AssertionTypes.GREATER_THAN:
        if (typeof retrievedValue === 'number' && typeof expectedValue === 'number') {
          retrievedValue > expectedValue ? (customMessage = successMessage) : (customMessage = failureMessage);
          expect(retrievedValue).to.be.greaterThan(expectedValue, customMessage);
        } else {
          throw new Error('GREATER_THAN assertion can only be used with numbers');
        }
        break;

      case AssertionTypes.LESS_THAN:
        if (typeof retrievedValue === 'number' && typeof expectedValue === 'number') {
          retrievedValue < expectedValue ? (customMessage = successMessage) : (customMessage = failureMessage);
          expect(retrievedValue).to.be.lessThan(expectedValue, customMessage);
        } else {
          throw new Error('LESS_THAN assertion can only be used with numbers');
        }
        break;

      case AssertionTypes.GREATER_THAN_OR_EQUAL:
        if (typeof retrievedValue === 'number' && typeof expectedValue === 'number') {
          retrievedValue >= expectedValue ? (customMessage = successMessage) : (customMessage = failureMessage);
          expect(retrievedValue).to.be.at.least(expectedValue, customMessage);
        } else {
          throw new Error('GREATER_THAN_OR_EQUAL assertion can only be used with numbers');
        }
        break;

      case AssertionTypes.LESS_THAN_OR_EQUAL:
        if (typeof retrievedValue === 'number' && typeof expectedValue === 'number') {
          retrievedValue <= expectedValue ? (customMessage = successMessage) : (customMessage = failureMessage);
          expect(retrievedValue).to.be.at.most(expectedValue, customMessage);
        } else {
          throw new Error('LESS_THAN_OR_EQUAL assertion can only be used with numbers');
        }
        break;

      default:
        throw new Error(`Unknown assertion: ${assert}`);
    }
  }
);

/**
 * Compares two objects to determine if they are equal.
 * @param {T} obj1 - The first object to compare.
 * @param {T} obj2 - The second object to compare.
 * @param {string} successMessage - The message to display if the objects are equal.
 * @param {string} failureMessage - The message to display if the objects are not equal.
 */
Cypress.Commands.add('compareObjects', (obj1: object | undefined, obj2: object | undefined, successMessage: string, failureMessage: string) => {
  let customMessage = '';
  let objectsAreEqual = ObjectHelper.compareObjects(obj1, obj2);

  customMessage = objectsAreEqual ? successMessage : failureMessage;

  expect(obj1).to.deep.equal(obj2, customMessage);
});

export enum AssertionTypes {
  EQUAL = 'equal',
  NOT_EQUAL = 'not.equal',
  CONTAINS = 'contains',
  NOT_CONTAINS = 'not.contains',
  GREATER_THAN = 'greaterThan',
  LESS_THAN = 'lessThan',
  GREATER_THAN_OR_EQUAL = 'greaterThanOrEqual',
  LESS_THAN_OR_EQUAL = 'lessThanOrEqual'
}