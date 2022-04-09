import { AxiosPromise } from 'axios';
import { jsonServerAPI } from '../api';

interface Required {
  id?: number;
}

export class Sync<T extends Required> {
  /* 
    fetch user and save it to json server,
    ensure that the user gets updated if has an id.
  */
  fetch = (id: number): AxiosPromise => {
    return jsonServerAPI.get(`/users/${id}`);
  };

  save = (data: T): AxiosPromise => {
    const { id } = data;

    if (id) {
      return jsonServerAPI.put(`/users/${id}`, data);
    } else {
      return jsonServerAPI.post(`/users`, data);
    }
  };
}
