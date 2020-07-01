import * as productConstants from '../constants/product';
import { getDetailProduct } from "../apis/product";
import { getCategoryProduct } from "../apis/product";
import { getProductByName } from "../apis/product";
import { toastError,toastSuccess } from '../helpers/toastHelper';


export const fetchCategoryProductRequest = (catID,pdcID,price1,price2,keyword,sort,limit, page) => {
     return (dispatch) =>{
     return getCategoryProduct(catID,pdcID,price1,price2,keyword,sort,limit, page).then(res=>{
         const {status, data} = res;
         const totalPage = data.last_page;
         dispatch(fetchCategoryProduct(data.data,totalPage))
     });
   }

};

export const fetchCategoryProduct = (data,totalPage) => {
  return {
    type: productConstants.FETCH_PRODUCT_CATEGORY_SUCCESS,
    payload: {
      data,totalPage
    },
  };
};

export const fetchSearchProductRequest = (keyword) => {
   return (dispatch) =>{
   return getProductByName(keyword).then(res=>{
     console.log(keyword)
       const {status, data} = res;
       dispatch(fetchSearchProduct(data))
   });
 }
};

export const fetchSearchProduct = data => {
return {
 type: productConstants.FETCH_PRODUCT_SEARCH_SUCCESS,
 payload: {
   data,
 },
};
};

export const fetchDetailProductRequest = (id) => {
      return (dispatch) =>{
        return getDetailProduct(id).then(res=>{
            const {status, data} = res;
            dispatch(fetchDetailProduct(data.data[0]))
        });
      }

};

export const fetchDetailProduct = data => {
  return {
    type: productConstants.FETCH_DETAIL_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};


export const fetchListProduct = () => {
    return {
      type: productConstants.FETCH_PRODUCT,
    };
  };

export const fetchListProductByCategory = (id) => {
    return {
      type: productConstants.FETCH_PRODUCT_CATEGORY,
      payload : id
    };
  };

  export const fetchListProductSuccess = data => {
    
    return {
      type: productConstants.FETCH_PRODUCT_SUCCESS,
      payload: {
        data,
      },
    };
  };
  
  export const fetchListProductFailed = error => {
    return {
      type: productConstants.FETCH_PRODUCT_FAILED,
      payload: {
        error,
      },
    };
  };