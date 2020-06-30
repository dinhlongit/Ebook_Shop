import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'categories';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addCategory = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateCategory = (data, categoryId) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${categoryId}`, data);
};

export const deleteCategory = categoryId => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${categoryId}`);
};
