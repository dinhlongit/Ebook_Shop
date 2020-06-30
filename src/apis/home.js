import qs from 'query-string';
import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

// http://127.0.0.1:8000/api/categories
const url = 'home';

export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

// http://127.0.0.1:8000/api/categories METHOD: POST
export const addHome = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

// http://127.0.0.1:8000/api/categories/:id METHOD: PUT
export const updateHome = (data, homeId) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${homeId}`, data);
};

// http://127.0.0.1:8000/api/categories/:id METHOD: DELETE
export const deleteHome = homeId => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${homeId}`);
};
