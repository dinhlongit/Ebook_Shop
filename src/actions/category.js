import * as categoryConstants from '../constants/category';
import { STATUSES } from '../constants';


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

export const addCategory = (title, description) => {
  return {
    type: categoryConstants.ADD_CATEGORY,
    payload: {
      title,
      description,
    },
  };
};

export const addCategorySuccess = data => {
  return {
    type: categoryConstants.ADD_CATEGORY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addCategoryFailed = error => {
  return {
    type: categoryConstants.ADD_CATEGORY_FAILED,
    payload: {
      error,
    },
  };
};

export const setCategoryEditing = task => {
  return {
    type: categoryConstants.SET_CATEGORY_EDITING,
    payload: {
      task,
    },
  };
};

export const updateCategory = (title, description) => {
  return {
    type: categoryConstants.UPDATE_CATEGORY,
    payload: {
      title,
      description,
    },
  };
};

export const updateCategorySuccess = data => {
  return {
    type: categoryConstants.UPDATE_CATEGORY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateCategoryFailed = error => {
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
