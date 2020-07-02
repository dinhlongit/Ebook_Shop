import * as productConstants from '../constants/product';
import {
  getDetailProduct
} from "../apis/product";
import {
  getCategoryProduct
} from "../apis/product";
import {
  getProductByName
} from "../apis/product";
import {
  toastError,
  toastSuccess
} from '../helpers/toastHelper';


export const fetchCategoryProductRequest = (catID, pdcID, price1, price2, keyword, sort, limit, page) => {
  return (dispatch) => {
    return getCategoryProduct(catID, pdcID, price1, price2, keyword, sort, limit, page).then(res => {
      const {
        status,
        data
      } = res;
      const totalPage = data.last_page;
      dispatch(fetchCategoryProduct(data.data, totalPage))
    });
  }

};

export const fetchCategoryProduct = (data, totalPage) => {
  return {
    type: productConstants.FETCH_PRODUCT_CATEGORY_SUCCESS,
    payload: {
      data,
      totalPage
    },
  };
};

export const fetchSearchProductRequest = (keyword) => {
  return (dispatch) => {
    return getProductByName(keyword).then(res => {
      console.log(keyword)
      const {
        status,
        data
      } = res;
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
  return (dispatch) => {
    return getDetailProduct(id).then(res => {
      const {
        status,
        data
      } = res;
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
    payload: id
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


export const fetchListProductAdmin = (page) => {
  console.log(page)
  return {
    type: productConstants.FETCH_PRODUCT_ADMIN,
    payload: {
      page,
    },
  };
};

export const fetchListProductSuccessAdmin = data => {
  return {
    type: productConstants.FETCH_PRODUCT_SUCCESS_ADMIN,
    payload: {
      data,
    },
  };
};

export const fetchListProductFailedAdmin = error => {
  return {
    type: productConstants.FETCH_PRODUCT_FAILED_ADMIN,
    payload: {
      error,
    },
  };
};


export const deleteProduct = (id) => {
  return {
    type: productConstants.DELETE_PRODUCT,
    payload: {
      id,
    },
  };
};

export const deleteProductSuccess = (data) => {
  return {
    type: productConstants.DELETE_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteProductFailed = (error) => {
  return {
    type: productConstants.DELETE_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};


export const addProduct = (data) => {
  console.log(data)
  return {
    type: productConstants.ADD_PRODUCT,
    payload: {
      data
    }

  };
};

export const addProductSuccess = (data) => {
  return {
    type: productConstants.ADD_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addProductFailed = (error) => {
  return {
    type: productConstants.ADD_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};

export const setProductEditing = (user) => {
  return {
    type: productConstants.SET_PRODUCT_EDITING,
    payload: {
      user,
    },
  };
};

export const updateProduct = (data) => {
  return {
    type: productConstants.UPDATE_PRODUCT,
    payload: {
      data
    },
  };
};

export const updateProductSuccess = (data) => {
  return {
    type: productConstants.UPDATE_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateProductFailed = (error) => {
  return {
    type: productConstants.UPDATE_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};