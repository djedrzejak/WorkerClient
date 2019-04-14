import { Priority } from './priority';
import { Settlement } from './settlement';
import { Status } from './status';
import { Client } from './client';

export interface Task {
  id: number;
  title?: string;
  content?: string;
  price?: number;
  priority: Priority;
  settlement: Settlement;
  status?: Status;
  client: Client;
}
