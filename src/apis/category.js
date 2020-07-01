import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'categories';
const limit = 10;

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const getListAdmin = (page) => {
  return axiosService.get(`${API_ENDPOINT}/getcategories?limit=${limit}&page=${page}`);
};

export const getListAdminFull = () => {
  return axiosService.get(`${API_ENDPOINT}/getcategories`);
};

export const getListSub = () => {
  return axiosService.get(`${API_ENDPOINT}/getsubcategories`);
};

export const addCategory = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateCategory = (data, categoryId) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${categoryId}?_method=PUT`, data);
};

export const deleteCategory = categoryId   => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${categoryId}`,{_method: 'delete'});
};