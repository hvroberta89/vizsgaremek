import { User } from './user';

export class Review {
  [key: string]: any;
  _id?: string = '';
  editor_user: User | string = '';
  rated_user: User | string = '';
  score: Number = 0;
  positive?: String = '';
  negative?: String = '';
  review_date:  Date = new Date("YYYY-MM-DD");
}
