import { User } from './models/User';

const user = new User({ name: 'New', age: 0 });

user.on('save', () => {
  console.log(`saved user with name: ${user.get('name')}`);
});

user.save();
