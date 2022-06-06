import { User } from './user';
import { Nature } from './nature';

export class Job {
  _id: string = '';
  title: string = '';
  nature: Nature = new Nature();
  description: string = '';
  settlement: string = '';
  date: Date = new Date();
  time: string = '';
  tools: boolean = false;
  amount: number = 0;
  wage: string = 'óra bér' || 'fix bér';
  active: boolean = false;
  editor_user_name: User = new User();
  worker_user_name?: User = new User();
}
