import { jsonServerAPI } from '../api';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

interface Events {
  [key: string]: Callback[];
}

type Callback = () => void;

export class User {
  events: Events = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(updatedData: UserProps): void {
    Object.assign(this.data, updatedData);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];

    handlers.push(callback);

    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach(callback => {
      callback();
    });
  }

  async fetch(): Promise<void> {
    const { data } = await jsonServerAPI.get(`/users/${this.get('id')}`);

    this.set(data);
  }
}
