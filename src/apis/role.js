import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'roles';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addRole = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateRole = (data, roleId) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${roleId}`, data);
};

export const deleteRole = roleId   => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${roleId}`,{_method: 'delete'});
};