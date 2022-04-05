import { User } from './models/User';

const user = new User({ name: 'my_name', age: 20 });

user.set({ name: 'lole' });

console.log(user);
