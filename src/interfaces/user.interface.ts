import { Country } from '../enums/country.enum';

export interface User {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phone: number;
  password: string;
  country: Country;
}
