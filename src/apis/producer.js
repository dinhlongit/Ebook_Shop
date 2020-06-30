import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'producers';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addProducer = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateProducer = (data, producerId) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${producerId}`, data,{_method: 'put'});
};

export const deleteProducer = producerId   => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${producerId}`,{_method: 'delete'});
};