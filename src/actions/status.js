import * as statusConstants from "../constants/user";

export const fetchListStatus = () => {
  return {
    type: statusConstants.FETCH_STATUS,
  };
};

export const fetchListStatusSuccess = (data) => {
  return {
    type: statusConstants.FETCH_STATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListStatusFailed = (error) => {
  return {
    type: statusConstants.FETCH_STATUS_FAILED,
    payload: {
      error,
    },
  };
};

//DELETE
export const deleteStatus = (id) => {
  return {
    type: statusConstants.DELETE_STATUS,
    payload: {
      id,
    },
  };
};

export const deleteStatusSuccess = (data) => {
  return {
    type: statusConstants.DELETE_STATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteStatusFailed = (error) => {
  return {
    type: statusConstants.DELETE_STATUS_FAILED,
    payload: {
      error,
    },
  };
};

///----

export const addStatus = (
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
    type: statusConstants.ADD_STATUS,
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

export const addStatusSuccess = (data) => {
  return {
    type: statusConstants.ADD_STATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addStatusFailed = (error) => {
  return {
    type: statusConstants.ADD_STATUS_FAILED,
    payload: {
      error,
    },
  };
};

export const setStatusEditing = (user) => {
  return {
    type: statusConstants.SET_STATUS_EDITING,
    payload: {
      user,
    },
  };
};

export const updateStatus = (
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
    type: statusConstants.UPDATE_STATUS,
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

export const updateStatusSuccess = (data) => {
  return {
    type: statusConstants.UPDATE_STATUS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateStatusFailed = (error) => {
  return {
    type: statusConstants.UPDATE_STATUS_FAILED,
    payload: {
      error,
    },
  };
};
