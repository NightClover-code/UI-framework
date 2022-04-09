export class Attributes<T> {
  constructor(private data: T) {}
  /* 
    crazy generics to tell TS that
    the return type must match the data's keys 
  */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (updatedData: T): void => {
    Object.assign(this.data, updatedData);
  };

  getAll(): T {
    return this.data;
  }
}
