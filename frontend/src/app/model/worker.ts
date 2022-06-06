import { User } from './user';

export class Worker {
  [key: string]: any;
  _id: string = '';
  user_name: string = '';
  date_from: Date = new Date();
  date_to: Date = new Date();
  nature: string = '';
  settlement: string = '';
  ratings: number = 0;
  reviews: string[] = [];
}
