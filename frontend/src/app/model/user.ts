import { Address } from './address';

export class User {
  [key: string]: any;
  _id: string = '';
  user_name: string = '';
  first_name: string = '';
  last_name: string = '';
  gender: string = 'Nő' || 'Férfi';
  birth_date: String;
  address: Address = new Address();
  email: string = '';
  mobil_number: string = '';
  password?: string = '';
  role?: number = 1;
}

