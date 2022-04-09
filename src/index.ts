import { User } from './models/User';

const user = new User({ id: 1 });

user.on('change', () => {
  /*
    Render HTML because user changed
  */
  console.log(user);
});

user.fetch();
