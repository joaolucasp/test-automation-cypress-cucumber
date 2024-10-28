// Types
import { IApiLoginDto } from '@services/advantage-shopping-api/modules/account/types/IApiLoginDto';
import { IApiSession } from '@services/advantage-shopping-api/modules/account/types/IApiSession';
import { IApiLoginResponse } from '@services/advantage-shopping-api/modules/account/types/IApiLoginResponse';

export class AdvantageShoppingApi {
  public apiUrl = Cypress.env('apiUrl');
  private session: Cypress.Chainable<IApiSession> | null = null;

  constructor() {}

  public login(loginDto: IApiLoginDto): Cypress.Chainable<IApiSession> {
    const requestDefinition: IRequestDefinition = {
      method: 'POST',
      url: `${this.apiUrl}/accountservice/accountrest/api/v1/login`,
      body: {
        ...loginDto,
      }
    };

    this.session = this.executeRequest<IApiLoginResponse>(requestDefinition).then((response: IApiResponseData<IApiLoginResponse>) => {
      return {
        accessToken: response.data.statusMessage.token,
        userId: response.data.statusMessage.userId,
      }
    });

    return this.session;
  }

  public executeRequest<T>(requestDefinition: IRequestDefinition): Cypress.Chainable<IApiResponseData<T>> {
    return cy.request<T>(requestDefinition).then(response => {
      const responseData: IApiResponseData<T> = {
        data: response.body,
        statusCode: response.status
      };

      return cy.wrap(responseData);
    });
  }
}

export interface IRequestDefinition {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  headers?: object;
  body?: object;
}

export type IApiResponseData<T> = {
  data: T;
  statusCode: number;    
}