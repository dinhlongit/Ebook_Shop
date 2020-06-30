import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'products';
const category = 'categories';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addProduct = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateProduct = (data, productId) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${productId}`, data);
};

export const deleteProduct = productId   => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${productId}`);
};

export const getDetailProduct = productId =>{
  return axiosService.get(`${API_ENDPOINT}/${url}/${productId}`);
}

// export const getCategoryProduct = cate_id =>{
//   return axiosService.get(`${API_ENDPOINT}/${category}/${cate_id}/${url}`);
// }

export const getCategoryProduct = (catID,pdcID,price1,price2,keyword,sort,limit, page) =>{
  console.log(`${API_ENDPOINT}/fillter/products?category=${catID}&producer=${pdcID}&price=${price1},${price2}&keyword=${keyword}&sort=${sort}&limit=${limit}&page=${page}`)
  if (price1=='' && price2 == '' ){
    return axiosService.get(`${API_ENDPOINT}/fillter/products?category=${catID}&producer=${pdcID}&price=&keyword=${keyword}&sort=${sort}&limit=${limit}&page=${page}`)
  }
  return axiosService.get(`${API_ENDPOINT}/fillter/products?category=${catID}&producer=${pdcID}&price=${price1},${price2}&keyword=${keyword}&sort=${sort}&limit=${limit}&page=${page}`)
}


export const getProductByName = keyword =>{
  return axiosService.get(`${API_ENDPOINT}/filter/${url}?keyword=${keyword}`);
}


