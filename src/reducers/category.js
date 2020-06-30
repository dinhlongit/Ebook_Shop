import * as categoryConstants from './../constants/category';
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listCategory:{status:'',message:'',data:[{children_categories:[{categories:[{}]}]}]},
  categoryEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryConstants.FETCH_CATEGORY: {
      return {
        ...state,
      };
    }
    case categoryConstants.FETCH_CATEGORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCategory: data,
      };
    }
    case categoryConstants.FETCH_CATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listCategory: [],
      };
    }
    case categoryConstants.FILTER_CATEGORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCategory: data,
      };
    }
    case categoryConstants.ADD_CATEGORY: {
      return {
        ...state,
      };
    }
    case categoryConstants.ADD_CATEGORY_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('Thêm mới công việc thành công');
      return {
        ...state,
        listCategory: [data].concat(state.listCategory),
      };
    }
    case categoryConstants.ADD_CATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case categoryConstants.SET_CATEGORY_EDITING: {
      const { task } = action.payload;
      return {
        ...state,
        categoryEditing: task,
      };
    }
    case categoryConstants.UPDATE_CATEGORY: {
      return {
        ...state,
      };
    }
    case categoryConstants.UPDATE_CATEGORY_SUCCESS: {
      const { data } = action.payload;
      const { listCategory } = state;
      const index = listCategory.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listCategory.slice(0, index),
          data,
          ...listCategory.slice(index + 1),
        ];
        toastSuccess('Cập nhật công việc thành công');
        return {
          ...state,
          listCategory: newList,
        };
      }
      return {
        ...state,
      };
    }
    case categoryConstants.UPDATE_CATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case categoryConstants.DELETE_CATEGORY: {
      return {
        ...state,
      };
    }
    case categoryConstants.DELETE_CATEGORY_SUCCESS: {
      const { data: taskId } = action.payload; // task id
      toastSuccess('Xóa công việc thành công');
      return {
        ...state,
        listCategory: state.listCategory.filter(item => item.id !== taskId),
      };
    }
    case categoryConstants.DELETE_CATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;