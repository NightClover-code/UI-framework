import { User } from './models/User';

const user = User.buildUser({ age: 18, name: 'Achraf', id: 1 });

user.on('change', () => {
  console.log('Something changed!!');
});

user.trigger('change');

user.save();
