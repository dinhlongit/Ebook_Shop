import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'users';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addUser = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateUser = (data, userId) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${userId}`, data,{_method: 'put'});
};

export const deleteUser = userId   => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${userId}`,{_method: 'delete'});
};