import { User } from './user';

export class Job {
  [key: string]: any;
  _id: string = '';
  title: string = '';
  category: string = '';
  description: string = '';
  settlement: string = '';
  //date: Date = new Date();
  date: string = '';
  time: string = '';
  tools: boolean = false;
  amount: number = 0;
  wage: string = 'óra bér' || 'fix bér';
  active: boolean = false;
  editor_user: User = new User();
  worker_user?: User = new User();
}
