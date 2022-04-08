import { jsonServerAPI } from '../api';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(updatedData: UserProps): void {
    Object.assign(this.data, updatedData);
  }

  async fetch(): Promise<void> {
    const { data } = await jsonServerAPI.get(`/users/${this.get('id')}`);

    this.set(data);
  }

  async save(): Promise<void> {
    const id = this.get('id');

    if (!id) {
      jsonServerAPI.put(`/users/${id}`, this.data);
    } else {
      jsonServerAPI.post(`/users`, this.data);
    }
  }
}
