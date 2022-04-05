interface UserProps {
  name?: string;
  age?: number;
}

interface Events {
  [key: string]: Callback[];
}

type Callback = () => void;

export class User {
  events: Events;

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(updatedData: UserProps): void {
    Object.assign(this.data, updatedData);
  }

  on(eventName: string, callback: Callback) {}
}
