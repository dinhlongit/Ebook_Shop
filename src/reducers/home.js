import { toastError } from '../helpers/toastHelper';
import * as homeConstants from './../constants/home';

const initialState = {
  listHome: [],
  homeEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case homeConstants.FETCH_HOME: {
      return {
        ...state,
        listHome: [],
      };
    }
    case homeConstants.FETCH_HOME_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listHome: data,
      };
    }
    case homeConstants.FETCH_HOME_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listHome: [],
      };
    }
    // case homeConstants.FILTER_HOME_SUCCESS: {
    //   const { data } = action.payload;
    //   return {
    //     ...state,
    //     listCategory: data,
    //   };
    // }
    // case homeConstants.ADD_HOME: {
    //   return {
    //     ...state,
    //   };
    // }
    // case homeConstants.ADD_HOME_SUCCESS: {
    //   const { data } = action.payload;
    //   toastSuccess('Thêm mới công việc thành công');
    //   return {
    //     ...state,
    //     listCategory: [data].concat(state.listCategory),
    //   };
    // }
    // case homeConstants.ADD_HOME_FAILED: {
    //   const { error } = action.payload;
    //   toastError(error);
    //   return {
    //     ...state,
    //   };
    // }
    // case homeConstants.SET_HOME_EDITING: {
    //   const { task } = action.payload;
    //   return {
    //     ...state,
    //     taskEditing: task,
    //   };
    // }
    // case homeConstants.UPDATE_HOME: {
    //   return {
    //     ...state,
    //   };
    // }
    // case homeConstants.UPDATE_HOME_SUCCESS: {
    //   const { data } = action.payload;
    //   const { listCategory } = state;
    //   const index = listCategory.findIndex(item => item.id === data.id);
    //   if (index !== -1) {
    //     const newList = [
    //       ...listCategory.slice(0, index),
    //       data,
    //       ...listCategory.slice(index + 1),
    //     ];
    //     toastSuccess('Cập nhật công việc thành công');
    //     return {
    //       ...state,
    //       listCategory: newList,
    //     };
    //   }
    //   return {
    //     ...state,
    //   };
    // }
    // case homeConstants.UPDATE_HOME_FAILED: {
    //   const { error } = action.payload;
    //   toastError(error);
    //   return {
    //     ...state,
    //   };
    // }
    // case homeConstants.DELETE_HOME: {
    //   return {
    //     ...state,
    //   };
    // }
    // case homeConstants.DELETE_HOME_SUCCESS: {
    //   const { data: taskId } = action.payload; // task id
    //   toastSuccess('Xóa công việc thành công');
    //   return {
    //     ...state,
    //     listCategory: state.listCategory.filter(item => item.id !== taskId),
    //   };
    // }
    // case homeConstants.DELETE_HOME_FAILED: {
    //   const { error } = action.payload;
    //   toastError(error);
    //   return {
    //     ...state,
    //   };
    // }
    default:
      return state;
  }
};

export default reducer;
