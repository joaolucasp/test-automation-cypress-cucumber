export interface IApiRegisterDto {
  accountType: "USER" | "ADMIN"; // Enum-like, assuming there are specific types
  address: string;
  allowOffersPromotion: boolean;
  aobUser: boolean;
  cityName: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  loginName: string;
  password: string;
  phoneNumber: string;
  stateProvince: string;
  zipcode: string;  
}