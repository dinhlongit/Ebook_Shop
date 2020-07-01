import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'statuses';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addStatus = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateStatus = (data, statusId) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${statusId}?_method=PUT`, data);
};

export const deleteStatus = statusId   => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${statusId}`,{_method: 'delete'});
};