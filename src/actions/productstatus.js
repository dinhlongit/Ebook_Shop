import * as productstatusConstants from "../constants/productstatus";

export const fetchListProductstatus = () => {
  return {
    type: productstatusConstants.FETCH_PRODUCTSTATUS,
  };
};

export const fetchListProductstatusSuccess = (data) => {
  return {
    type: productstatusConstants.FETCH_PRODUCTSTATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListProductstatusFailed = (error) => {
  return {
    type: productstatusConstants.FETCH_PRODUCTSTATUS_FAILED,
    payload: {
      error,
    },
  };
};

//DELETE
export const deleteProductstatus = (id) => {
  return {
    type: productstatusConstants.DELETE_PRODUCTSTATUS,
    payload: {
      id,
    },
  };
};

export const deleteProductstatusSuccess = (data) => {
  return {
    type: productstatusConstants.DELETE_PRODUCTSTATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteProductstatusFailed = (error) => {
  return {
    type: productstatusConstants.DELETE_PRODUCTSTATUS_FAILED,
    payload: {
      error,
    },
  };
};

///----

export const addProductstatus = (
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
    type: productstatusConstants.ADD_PRODUCTSTATUS,
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

export const addProductstatusSuccess = (data) => {
  return {
    type: productstatusConstants.ADD_PRODUCTSTATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addProductstatusFailed = (error) => {
  return {
    type: productstatusConstants.ADD_PRODUCTSTATUS_FAILED,
    payload: {
      error,
    },
  };
};

export const setProductstatusEditing = (user) => {
  return {
    type: productstatusConstants.SET_PRODUCTSTATUS_EDITING,
    payload: {
      user,
    },
  };
};

export const updateProductstatus = (
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
    type: productstatusConstants.UPDATE_PRODUCTSTATUS,
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

export const updateProductstatusSuccess = (data) => {
  return {
    type: productstatusConstants.UPDATE_PRODUCTSTATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateProductstatusFailed = (error) => {
  return {
    type: productstatusConstants.UPDATE_PRODUCTSTATUS_FAILED,
    payload: {
      error,
    },
  };
};
