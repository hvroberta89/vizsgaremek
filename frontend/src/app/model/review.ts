import { User } from './user';

export class Review {
  [key: string]: any;
  _id: string = '';
  editor_user: User = new User();
  rated_user: User = new User();
  score: Number = 1;
  positive: String = '';
  negative: String = '';
  review_date: String;
}
