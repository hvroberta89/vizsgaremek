import { Category } from './category';
import { User } from './user';

export class Job {
  [key: string]: any;
  _id?: string = '';
  title: string = '';
  category: Category | string = '';
  description: string = '';
  settlement: string = '';
  date: Date = new Date("YYYY-MM-DD");
  //date: string = '';
  time: string = '';
  tools: boolean = false;
  amount: number = 0;
  wage: string = '';
  active: boolean = false;
  editor_user: User | string = '';
  worker_user?: User | string = '';
}
