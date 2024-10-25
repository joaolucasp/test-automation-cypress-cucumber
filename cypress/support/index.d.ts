declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select an option from a dropdown
       * @example cy.customSelect('selector', 'value')
       */
      customSelect(element: string, value: string, timeout?: number): Chainable<void>;

      /**
       * Custom command to type a value into an input field
       * @example cy.customType('selector', 'value')
       */
      customType(element: string, value: string, timeout?: number): Chainable<void>;

      /**
       * Custom command to get an element
       * @example cy.customGet('selector')
       */
      customGet(element: string, timeout?: number): Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to get value from element
       * @example cy.getValue('selector')
       */
      getValue(element: string, timeout?: number): Chainable<string>;

      /**
       * Custom command to validate expected value
       * @example cy.expected(10, 'equal', 10, 'Values are equal', 'Values are not equal')
       */
      expected<T>(
        retrievedValue: T,
        assert: AssertionsInterface,
        expectedValue: T,
        successMessage: string,
        failureMessage: string
      ): void;

      /**
       * Custom command to compare objects
       * @example cy.compareObjects(obj1, obj2, 'Objects are equal', 'Objects are not equal')
       */
      compareObjects(obj1: object | undefined, obj2: object | undefined, successMessage: string, failureMessage: string): void;
    }
  }
  