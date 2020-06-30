import * as productConstants from './../constants/product';
import { toastError } from '../helpers/toastHelper';




const initialState = {
    listProduct:[{}],
    listProductSearch:[{}],
    productEditing: null,
    detailProduct : {},
    total : []
    
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case productConstants.FETCH_PRODUCT: {
        return {
          ...state
        };
      }
    
      case productConstants.FETCH_PRODUCT_SUCCESS: {
        const { data } = action.payload;
        console.log(data)
        return {
          ...state,
          listProduct: data,
        };
      }


      case productConstants.FETCH_PRODUCT_SEARCH_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listProductSearch: data,
        };
      }

      case productConstants.FETCH_PRODUCT_CATEGORY_SUCCESS: {
        const { data, totalPage } = action.payload;
        const page = []
        for (let i = 1 ; i <= totalPage ; i++){
          page.push(i);
        }
        console.log(page);  
  
        return {
          ...state,
          listProduct: data,
          total : page
        };
      }

      case productConstants.FETCH_DETAIL_PRODUCT_SUCCESS: {
        const {data} = action.payload;
   
        return {
          ...state,
          detailProduct : data
        };
      }

  

      case productConstants.FETCH_PRODUCT_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
          listProduct: [],
        };
      }
      default:
        return state;
    }
  };
  
  export default reducer;