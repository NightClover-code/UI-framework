import { jsonServerAPI } from './api';

jsonServerAPI.post('/users', {
  name: 'myname',
  age: 20,
});

jsonServerAPI.get('/users/1');
