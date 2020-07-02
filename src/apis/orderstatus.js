import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'orderstatuses';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addOrderstatus = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateOrderstatus = (data, orderstatusId) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${orderstatusId}?_method=PUT`, data);
};

export const deleteOrderstatus = orderstatusId   => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${orderstatusId}`,{_method: 'delete'});
};