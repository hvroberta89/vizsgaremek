import { Address } from './address';

export class User {
  _id: string = '';
  user_name: string = '';
  first_name: string = '';
  last_name: string = '';
  gender: string = 'female' || 'male';
  birth_date: Date = new Date();
  address: Address = new Address();
  email: string = '';
  mobil_number: string = '';
}
