import { User } from './models/User';

const user = new User({ id: 1, name: 'Albert', age: 56 });

user.on('change', () => {
  /*
    Render HTML because user changed
  */
  console.log('something changed!');
});
