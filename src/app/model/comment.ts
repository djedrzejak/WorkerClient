import { Task } from './task';

export class Comment {
  id: number;
  content?: string;
  task: Task;
  createDate: Date;
}
