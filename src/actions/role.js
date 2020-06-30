import * as roleConstants from '../constants/role';

export const fetchListRole = () => {
    return {
      type: roleConstants.FETCH_ROLE,
    };
  };
  
  export const fetchListRoleSuccess = data => {
    return {
      type: roleConstants.FETCH_ROLE_SUCCESS,
      payload: {
        data,
      },
    };
  };
  
  export const fetchListRoleFailed = error => {
    return {
      type: roleConstants.FETCH_ROLE_FAILED,
      payload: {
        error,
      },
    };
  };



  //DELETE
  export const deleteRole = id => {
    return {
      type: roleConstants.DELETE_ROLE,
      payload: {
        id,
      },
    };
  };
  
  export const deleteRoleSuccess = data => {
    return {
      type: roleConstants.DELETE_ROLE_SUCCESS,
      payload: {
        data,
      },
    };
  };
  
  export const deleteRoleFailed = error => {
    return {
      type: roleConstants.DELETE_ROLE_FAILED,
      payload: {
        error,
      },
    };
  };

  ///----

  export const addRole = (title, description) => {
    return {
      type: roleConstants.ADD_ROLE,
      payload: {
        title,
        description,
      },
    };
  };
  
  export const addRoleSuccess = data => {
    return {
      type: roleConstants.ADD_ROLE_SUCCESS,
      payload: {
        data,
      },
    };
  };
  
  export const addRoleFailed = error => {
    return {
      type: roleConstants.ADD_ROLE_FAILED,
      payload: {
        error,
      },
    };
  };
  
  export const setRoleEditing = task => {
    return {
      type: roleConstants.SET_ROLE_EDITING,
      payload: {
        task,
      },
    };
  };
  
  export const updateRole = (title, description) => {
    return {
      type: roleConstants.UPDATE_ROLE,
      payload: {
        title,
        description,
      },
    };
  };
  
  export const updateRoleSuccess = data => {
    return {
      type: roleConstants.UPDATE_ROLE_SUCCESS,
      payload: {
        data,
      },
    };
  };
  
  export const updateRoleFailed = error => {
    return {
      type: roleConstants.UPDATE_ROLE_FAILED,
      payload: {
        error,
      },
    };
  };