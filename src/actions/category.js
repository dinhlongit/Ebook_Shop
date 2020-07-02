import * as categoryConstants from '../constants/category';
import {
  STATUSES
} from '../constants';


export const fetchListCategory = () => {
  return {
    type: categoryConstants.FETCH_CATEGORY,
  };
};

export const fetchListCategorySuccess = data => {
  return {
    type: categoryConstants.FETCH_CATEGORY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListCategoryFailed = error => {
  return {
    type: categoryConstants.FETCH_CATEGORY_FAILED,
    payload: {
      error,
    },
  };
};

//===

export const fetchListCategoryAdmin = (page) => {
  return {
    type: categoryConstants.FETCH_CATEGORY_ADMIN,
    payload: {
      page,
    },
  };
};

export const fetchListCategoryAdminSuccess = data => {
  return {
    type: categoryConstants.FETCH_CATEGORY_SUCCESS_ADMIN,
    payload: {
      data,
    },
  };
};

export const fetchListCategoryAdminFailed = error => {
  return {
    type: categoryConstants.FETCH_CATEGORY_FAILED_ADMIN,
    payload: {
      error,
    },
  };
};

///===


//==

export const fetchListCategoryAdminFull = () => {
  return {
    type: categoryConstants.FETCH_CATEGORY_ADMIN_FULL,
  };
};

export const fetchListCategorySuccessAdminFull = (data) => {
  return {
    type: categoryConstants.FETCH_CATEGORY_SUCCESS_ADMIN_FULL,
    payload: {
      data,
    },
  };
};

export const fetchListSubCategoryFailedAdminFull = (error) => {
  return {
    type: categoryConstants.FETCH_CATEGORY_FAILED_ADMIN_FULL,
    payload: {
      error,
    },
  };
};

//==

//--------------------------------------------------------------------------------------------------

export const filterCategory = keyword => ({
  type: categoryConstants.FILTER_CATEGORY,
  payload: {
    keyword,
  },
});

export const filterCategorySuccess = data => ({
  type: categoryConstants.FILTER_CATEGORY_SUCCESS,
  payload: {
    data,
  },
});

export const addCategory = (name, photo, parrent_id) => {
  return {
    type: categoryConstants.ADD_CATEGORY,
    payload: {
      name,
      photo,
      parrent_id,
    },
  };
};

export const addCategorySuccess = (data) => {
  return {
    type: categoryConstants.ADD_CATEGORY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addCategoryFailed = (error) => {
  return {
    type: categoryConstants.ADD_CATEGORY_FAILED,
    payload: {
      error,
    },
  };
};

export const setCategoryEditing = (user) => {
  return {
    type: categoryConstants.SET_CATEGORY_EDITING,
    payload: {
      user,
    },
  };
};

export const updateCategory = (name, photo, parrent_id) => {
  return {
    type: categoryConstants.UPDATE_CATEGORY,
    payload: {
      name,
      photo,
      parrent_id,
    },
  };
};

export const updateCategorySuccess = (data) => {
  return {
    type: categoryConstants.UPDATE_CATEGORY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateCategoryFailed = (error) => {
  return {
    type: categoryConstants.UPDATE_CATEGORY_FAILED,
    payload: {
      error,
    },
  };
};


export const deleteCategory = id => {
  return {
    type: categoryConstants.DELETE_CATEGORY,
    payload: {
      id,
    },
  };
};

export const deleteCategorySuccess = data => {
  return {
    type: categoryConstants.DELETE_CATEGORY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteCategoryFailed = error => {
  return {
    type: categoryConstants.DELETE_CATEGORY_FAILED,
    payload: {
      error,
    },
  };
};


//==
export const fetchListSubCategory = () => {
  return {
    type: categoryConstants.FETCH_SUBCATEGORY,
  };
};

export const fetchListSubCategorySuccess = (data) => {
  console.log(data);
  return {
    type: categoryConstants.FETCH_SUBCATEGORY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListSubCategoryFailed = (error) => {
  return {
    type: categoryConstants.FETCH_SUBCATEGORY_FAILED,
    payload: {
      error,
    },
  };
};