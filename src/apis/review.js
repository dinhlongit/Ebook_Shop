import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';


const url = 'reviews';

export const getProductReview = productID => {
    return axiosService.get(`${API_ENDPOINT}/products/${productID}/${url}`);
  }

  export const addProductReview = data => {
    return axiosService.post(`${API_ENDPOINT}/users/${data.user_id}/${url}`, data);
  }

  