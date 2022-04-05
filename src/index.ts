import { User } from './models/User';

const user = new User({ id: 1, name: 'Achraf', age: 28 });

user.set({ name: 'OJOJ', age: 99 });

user.save();
