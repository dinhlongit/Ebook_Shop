import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'users';

const limit = 10;


export const getList = (page) => {
  return axiosService.get(`${API_ENDPOINT}/${url}?limit=${limit}&page=${page}`);
};

export const addUser = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateUser = (data, userId) => {
  console.log(userId)
  return axiosService.post(`${API_ENDPOINT}/${url}/${userId}?_method=PUT`, data);
};

export const deleteUser = userId   => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${userId}`,{_method: 'delete'});
};


export const updateProfile = (id,user)   => {
  return axiosService.post(`${API_ENDPOINT}/auth/update/${id}`,user);
};



