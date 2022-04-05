import { User } from './models/User';

const user = new User({ id: 4, name: 'Gaster', age: 40 });

user.set({ name: 'Alfred' });

// const user = new User({ id: 2, name: 'John', age: 10 });

user.save();

user.fetch();

const otherUser = new User({ id: 2, name: 'John', age: 10 });

otherUser.set({ name: 'Alfred' });

// const otherUser = new User({ id: 2, name: 'John', age: 10 });

otherUser.save();

// otherUser.fetch();
