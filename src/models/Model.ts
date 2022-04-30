import { AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from './Eventing';

interface Required {
  id?: number;
}

interface ModelAttrs<T> {
  get: <K extends keyof T>(key: K) => T[K];
  set: (updatedData: T) => void;
  getAll: () => T;
}

interface Sync<T> {
  fetch: (id: number) => AxiosPromise;
  save: (data: T) => AxiosPromise;
}

interface Events {
  on: (eventName: string, callback: Callback) => void;
  trigger: (eventName: string) => void;
}

export class Model<T extends Required> {
  constructor(
    private attrs: ModelAttrs<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  /*
    using accessors to easily reach other 
    class methods by composition
  */
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attrs.get;
  }

  set(updatedData: T): void {
    this.attrs.set(updatedData);

    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (!id) throw new Error('Cannot fetch without ID');

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    const data = this.attrs.getAll();

    this.sync
      .save(data)
      .then((res: AxiosResponse) => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
