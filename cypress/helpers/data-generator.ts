import { faker } from '@faker-js/faker'; 

// Types
import { IApiRegisterDto } from '@services/advantage-shopping-api/modules/account/types/IApiRegisterDto';

export class DataGenerator {
  public static generateUser(): IApiRegisterDto {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
      accountType: "ADMIN",
      address: `${faker.address.streetName()} ${faker.datatype.number({ min: 1, max: 9999 })}`,
      allowOffersPromotion: true,
      aobUser: true,
      cityName: faker.address.cityName(),
      country: "UNITED_STATES_US",
      email: `test_${firstName}_${lastName}@mailinator.com`,
      firstName: firstName,
      lastName: lastName,
      loginName: `User_${firstName}`,
      password: 'Pass123456',
      phoneNumber: faker.phone.number(),
      /* Note:
        O estado/província não está dinâmico pois percebi que a API não suporta alguns estados/províncias dos EUA.
        Como por exemplo, o estado da Carolina do Norte. Portanto, para evitar flickering, deixei o estado/província fixo.
      */
      stateProvince: "Idaho",
      zipcode: faker.address.zipCode('#######'),
    };
  };
};