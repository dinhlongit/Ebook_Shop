import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'auth/login';

export const login = data => {
    return axiosService.post(`${API_ENDPOINT}/${url}`, data);
  };