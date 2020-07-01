import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'orders';
const users = 'users'

const limit = 3;

export const getList = (page) => {
  return axiosService.get(`${API_ENDPOINT}/${url}?limit=${limit}&page=${page}`);
};

export const addOrder = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateOrder = (data, orderId) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${orderId}`, data,{_method: 'put'});
};

export const deleteOrder = orderId => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${orderId}`,{_method: 'delete'});
};

export const submitOrder = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const userOrder = user_id => {
  return axiosService.get(`${API_ENDPOINT}/${users}/${user_id}/${url}`);
};

export const getListById = (orderId) => {
  return axiosService.get(`${API_ENDPOINT}/${url}/${orderId}`);
};
