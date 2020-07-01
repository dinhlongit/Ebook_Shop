import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';
import axios from "axios";

const url = 'products';
const category = 'categories';

const limit = 5;

export const getListAdmin = (page) => {
  return axiosService.get(`${API_ENDPOINT}/${url}?limit=${limit}&page=${page}`);
};


export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addProduct = (data) => {

  const token = localStorage.getItem("access-token");

  return axios({
    method: "POST",
    url: `${API_ENDPOINT}/${url}`,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};

export const updateProduct = (data,productId) => {

  const token = localStorage.getItem("access-token");
  
  console.log(token);
  return axios({
    method: "POST",
    url: `${API_ENDPOINT}/${url}/${productId}?_method=PUT`,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
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


