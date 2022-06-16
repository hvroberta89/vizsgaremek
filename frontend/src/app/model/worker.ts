import { User } from './user';

export class Worker {
  [key: string]: any;
  _id: string = '';
  editor_user: User = new User();
  date_from: String;
  date_to: String;
  category: string = '';
  description: string = '';
  settlement: string = '';
  reviews: User[] = [];
}
