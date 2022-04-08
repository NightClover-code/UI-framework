import { User } from './models/User';

const user = new User();

user.attributes.set({ id: 1, name: 'Albert', age: 56 });

const id = user.attributes.get('id');

user.events.on('change', () => {
  console.log('change!!');
});

user.events.trigger('change');
