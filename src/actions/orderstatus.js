import * as orderstatusConstants from "../constants/orderstatus";

export const fetchListOrderstatus = () => {
  return {
    type: orderstatusConstants.FETCH_ORDERSTATUS,
  };
};

export const fetchListOrderstatusSuccess = (data) => {
  return {
    type: orderstatusConstants.FETCH_ORDERSTATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListOrderstatusFailed = (error) => {
  return {
    type: orderstatusConstants.FETCH_ORDERSTATUS_FAILED,
    payload: {
      error,
    },
  };
};

//DELETE
export const deleteOrderstatus = (id) => {
  return {
    type: orderstatusConstants.DELETE_ORDERSTATUS,
    payload: {
      id,
    },
  };
};

export const deleteOrderstatusSuccess = (data) => {
  return {
    type: orderstatusConstants.DELETE_ORDERSTATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteOrderstatusFailed = (error) => {
  return {
    type: orderstatusConstants.DELETE_ORDERSTATUS_FAILED,
    payload: {
      error,
    },
  };
};

///----

export const addOrderstatus = (
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
    type: orderstatusConstants.ADD_ORDERSTATUS,
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

export const addOrderstatusSuccess = (data) => {
  return {
    type: orderstatusConstants.ADD_ORDERSTATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addOrderstatusFailed = (error) => {
  return {
    type: orderstatusConstants.ADD_ORDERSTATUS_FAILED,
    payload: {
      error,
    },
  };
};

export const setOrderstatusEditing = (user) => {
  return {
    type: orderstatusConstants.SET_ORDERSTATUS_EDITING,
    payload: {
      user,
    },
  };
};

export const updateOrderstatus = (
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
    type: orderstatusConstants.UPDATE_ORDERSTATUS,
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

export const updateOrderstatusSuccess = (data) => {
  return {
    type: orderstatusConstants.UPDATE_ORDERSTATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateOrderstatusFailed = (error) => {
  return {
    type: orderstatusConstants.UPDATE_ORDERSTATUS_FAILED,
    payload: {
      error,
    },
  };
};
