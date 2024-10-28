// Core
import { IApiStatusMessage } from '@services/advantage-shopping-api/types/IApiStatusMessage';
import { AdvantageShoppingApi, IApiResponseData, IRequestDefinition } from '@services/advantage-shopping-api/AdvantageShoppingApi';

// Account Types
import { IApiSession } from '@services/advantage-shopping-api/modules/account/types/IApiSession';
import { IApiLoginDto } from '@services/advantage-shopping-api/modules/account/types/IApiLoginDto';
import { IApiRegisterDto } from '@services/advantage-shopping-api/modules/account/types/IApiRegisterDto';

export class AccountService extends AdvantageShoppingApi {
  public createAccount(accountDto: IApiRegisterDto): Cypress.Chainable<IApiResponseData<IApiStatusMessage>> {
    const requestDefinition: IRequestDefinition = {
      method: 'POST',
      url: `${this.apiUrl}/accountservice/accountrest/api/v1/register`,
      body: {
        ...accountDto,
      },
    };

    return this.executeRequest<IApiStatusMessage>(requestDefinition);
  }

  public loginAccount(loginDto: IApiLoginDto): Cypress.Chainable<IApiSession> {
    return this.login(loginDto);
  }
};