import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'reports';

export const getList = (month) => {
  return axiosService.get(`${API_ENDPOINT}/${url}?month=${month}`);
};
