// Types
import { IApiLoginDto } from './modules/account/types/IApiLoginDto';

export class AdvantageShoppingApi {
  public apiUrl = Cypress.env('apiUrl');
  private accessToken: Cypress.Chainable<string> | null = null;

  constructor() {}

  public login(loginDto: IApiLoginDto): Cypress.Chainable<string> {
    const requestDefinition = {
      method: 'POST',
      url: `${this.apiUrl}/accountrest/api/v1/login`,
      body: {
        ...loginDto,
      }
    };

    this.accessToken = cy.request(requestDefinition).then(response => {
      return response.body.AuthenticationResult.AccessToken as string;
    });

    return this.accessToken;
  }

  /* 
      NOTE: Esse método é responsável por obter o accessToken. 
      Foi necessário utilizar uma mistura de cypress commands e promises para garantir que o token seja obtido antes de realizar a requisição.
      Isto ocorre porque o método login() é assíncrono e não podemos garantir que o token será obtido antes da requisição ser realizada.
      A consequência disso é que se não fizéssemos dessa forma, a N-ésima requisição seria feita utilizando um token inválido.
    */
  public getAccessToken(loginDto: IApiLoginDto): Cypress.Chainable<string> {
    if (!this.accessToken) {
      this.login(loginDto).then(token => {
        cy.wrap(token).as('apiAccessToken');
      });
    }

    return cy.get('@apiAccessToken').then(storedToken => {
      return storedToken as unknown as string;
    });
  }

  public executeRequest<T>(requestDefinition: IRequestDefinition, loginDto?: IApiLoginDto): Cypress.Chainable<T> {
    // If there is no loginDto, we can execute the request without the need of an access token
    if (!loginDto) {
      return cy.request<T>(requestDefinition).then(response => {
        return cy.wrap(response.body);
      });
    }

    return this.getAccessToken(loginDto).then(acessToken => {
      requestDefinition.headers = {
        ...requestDefinition.headers,
        Authorization: `Bearer ${acessToken}`
      };

      return cy.request<T>(requestDefinition).then(response => {
        return cy.wrap(response.body);
      });
    });
  }
}

export interface IRequestDefinition {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  headers?: object;
  body?: object;
}

export type IPaginatedResponse<T> = {
  data: T[];
  pageMetadata: any;
};

export enum ApiOrderingTypes {
  ASC = 'ASC',
  DESC = 'DESC'
}
