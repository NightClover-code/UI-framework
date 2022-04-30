import { Callback } from './Eventing';

interface ModelAttrs<T> {
  set: (updatedData: T) => void;
}

interface Sync {}

interface Events {
  on: (eventName: string, callback: Callback) => void;
  trigger: (eventName: string) => void;
}

export class Model<T> {
  constructor(
    private attrs: ModelAttrs<T>,
    private events: Events,
    private sync: Sync
  ) {}
}
