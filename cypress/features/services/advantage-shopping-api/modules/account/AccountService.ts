// Core
import { AdvantageShoppingApi, IRequestDefinition } from '@features/services/advantage-shopping-api/AdvantageShoppingApi';

// Account Types
import { IApiRegisterDto } from '@features/services/advantage-shopping-api/modules/account/types/IApiRegisterDto';

export class AccountService extends AdvantageShoppingApi {
  public createAccount(accountDto: IApiRegisterDto): Cypress.Chainable<IApiRegisterDto> {
    const requestDefinition: IRequestDefinition = {
      method: 'POST',
      url: `${this.apiUrl}/accountrest/api/v1/register`,
      body: {
        ...accountDto,
      },
    };

    return this.executeRequest<IApiRegisterDto>(requestDefinition);
  }
};