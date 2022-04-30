export type Callback = () => void;

interface Events {
  [key: string]: Callback[];
}

export class Eventing {
  events: Events = {};
  /* 
    hooking up events and registering callbacks, 
    then calling them when needed using trigger. 
  */

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];

    handlers.push(callback);

    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach(callback => {
      callback();
    });
  };
}
