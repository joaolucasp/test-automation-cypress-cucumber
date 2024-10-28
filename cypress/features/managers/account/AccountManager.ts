// Core Services
import { IApiResponseData } from "@services/advantage-shopping-api/AdvantageShoppingApi";
import { AccountService } from "@services/advantage-shopping-api/modules/account/AccountService";

// Types of Account Module
import { IApiSession } from '@services/advantage-shopping-api/modules/account/types/IApiSession';
import { IApiLoginDto } from "@services/advantage-shopping-api/modules/account/types/IApiLoginDto";
import { IApiRegisterDto } from "@services/advantage-shopping-api/modules/account/types/IApiRegisterDto";

// Core Types
import { IApiStatusMessage } from "@services/advantage-shopping-api/types/IApiStatusMessage";

export class AccountManager {
  constructor() {}

  public static createAccount(accountDto: IApiRegisterDto): Cypress.Chainable<IApiResponseData<IApiStatusMessage>> {
    return new AccountService().createAccount(accountDto);
  }

  public static loginAccount(loginDto: IApiLoginDto): Cypress.Chainable<IApiSession> {
    return new AccountService().loginAccount(loginDto);
  }
};