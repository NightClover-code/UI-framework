import axios from 'axios';

export const jsonServerAPI = axios.create({
  baseURL: 'http://localhost:3000',
});
