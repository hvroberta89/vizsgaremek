import { Category } from './category';
import { User } from './user';

export class Worker {
  [key: string]: any;
  _id?: string = '';
  editor_user: User | string = '';
  category: Category | string = '';
  date_from:  Date = new Date("YYYY-MM-DD");
  date_to:  Date = new Date("YYYY-MM-DD");
  description: string = '';
  settlement: string = '';
  reviews: User[] = [];
}
