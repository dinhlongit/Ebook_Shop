import * as orderConstants from "../constants/order";
import {toastError, toastSuccess} from '../helpers/toastHelper'
import {submitOrder} from "../apis/order";
import {userOrder} from "../apis/order";


export const fetchListOrder = () => {
  return {
    type: orderConstants.FETCH_ORDER,
  };
};

export const deleteListCart = () => {
  toastSuccess("Bạn Đã Đặt Hàng Thành Công! ")
  return {
    type: orderConstants.DELETE_LIST_CART,
  };
};



export const fetchListOrderSuccess = (data) => {
  return {
    type: orderConstants.FETCH_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListOrderFailed = (error) => {
  return {
    type: orderConstants.FETCH_ORDER_FAILED,
    payload: {
      error,
    },
  };
};

//DELETE
export const deleteOrder = (id) => {
  return {
    type: orderConstants.DELETE_ORDER,
    payload: {
      id,
    },
  };
};

export const deleteOrderSuccess = (data) => {
  return {
    type: orderConstants.DELETE_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteOrderFailed = (error) => {
  return {
    type: orderConstants.DELETE_ORDER_FAILED,
    payload: {
      error,
    },
  };
};

///----

export const addOrder = (
  name,
  phone_number,
  email,
  birthday,
  password,
  address,
  address_id,
  roles
) => {
  return {
    type: orderConstants.ADD_ORDER,
    payload: {
      name,
      phone_number,
      email,
      birthday,
      password,
      address,
      address_id,
      roles,
    },
  };
};

export const addOrderSuccess = (data) => {
  return {
    type: orderConstants.ADD_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addOrderFailed = (error) => {
  return {
    type: orderConstants.ADD_ORDER_FAILED,
    payload: {
      error,
    },
  };
};

export const setOrderEditing = (user) => {
  return {
    type: orderConstants.SET_ORDER_EDITING,
    payload: {
      user,
    },
  };
};

export const updateOrder = (
  name,
  phone_number,
  email,
  birthday,
  password,
  address,
  address_id,
  roles
) => {
  return {
    type: orderConstants.UPDATE_ORDER,
    payload: {
      name,
      phone_number,
      email,
      birthday,
      password,
      address,
      address_id,
      roles,
    },
  };
};

export const updateOrderSuccess = (data) => {
  return {
    type: orderConstants.UPDATE_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateOrderFailed = (error) => {
  return {
    type: orderConstants.UPDATE_ORDER_FAILED,
    payload: {
      error,
    },
  };
};


export const submitOrders = datacart => {
  
   return (dispatch=>{
 return submitOrder(datacart).then(res=>{
    const {status, data} = res;
     dispatch(deleteListCart());
  });
   });
};





export const fetchListUserOrder = (user_id) => {
  return (dispatch) =>{
    return userOrder(user_id).then(res=>{
        const {status, data} = res;
        dispatch(fetchListUserOrderSuccess(data.data));
    });
  }

};


export const fetchListUserOrderSuccess = (data) => {
  return {
    type: orderConstants.FETCH_USER_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};