export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(updatedData: T): void {
    Object.assign(this.data, updatedData);
  }
}
