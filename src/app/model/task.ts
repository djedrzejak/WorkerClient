import { Priority } from './priority';
import { Status } from './status';
import { Client } from './client';

export class Task {
  id: number;
  title?: string;
  content?: string;
  price?: number;
  priority?: Priority;
  status?: Status;
  client?: Client;
  progress: number;
  paid: boolean;
  createDate?: Date;
  closeDate?: Date;
  comments: Comment[] = [];
}
