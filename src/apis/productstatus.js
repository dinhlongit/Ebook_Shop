import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'productstatuses';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addProductstatus = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateProductstatus = (data, productstatusId) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${productstatusId}?_method=PUT`, data);
};

export const deleteProductstatus = productstatusId   => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${productstatusId}`,{_method: 'delete'});
};