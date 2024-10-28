// Utils and Helpers
import { AssertionTypes } from "cypress/support/commands/cyValidate";

export class CommomAssertions {
  constructor () {}

  public static validateIfResponseIsOk(statusCode: number): void {
    const customSuccessMessage = `[Service] A resposta da requisição retornou o status code 200`;
    const customFailureMessage = `[Service] A requisição não foi feita com sucesso. Status Code retornado: ${statusCode}`;

    cy.expected(statusCode, AssertionTypes.EQUAL, 200, customSuccessMessage, customFailureMessage);
  }
};