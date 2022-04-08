import { AxiosPromise } from 'axios';
import { jsonServerAPI } from '../api';

interface Required {
  id?: number;
}

export class Sync<T extends Required> {
  fetch(id: number): AxiosPromise {
    return jsonServerAPI.get(`/users/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return jsonServerAPI.put(`/users/${id}`, data);
    } else {
      return jsonServerAPI.post(`/users`, data);
    }
  }
}
