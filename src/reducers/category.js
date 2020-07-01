import * as categoryConstants from './../constants/category';
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listCategory:{status:'',message:'',data:[{children_categories:[{categories:[{}]}]}]},
  categoryEditing: null,
  listCategoryAdmin: [{}],
  listCategoryAdminFull: [{}],
  listSubCategory: [{}],
  page: "",
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

    ///==
    case categoryConstants.FETCH_CATEGORY_ADMIN: {
      return {
        ...state,
      };
    }
    case categoryConstants.FETCH_CATEGORY_SUCCESS_ADMIN: {
      const { data } = action.payload;
      return {
        ...state,
        listCategoryAdmin: data,
        page: data.current_page,
      };
    }
    case categoryConstants.FETCH_CATEGORY_FAILED_ADMIN: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listCategoryAdmin: [],
      };
    }


    ///

    //
    case categoryConstants.FETCH_SUBCATEGORY: {
      return {
        ...state,
      };
    }
    case categoryConstants.FETCH_SUBCATEGORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listSubCategory: data,
      };
    }
    case categoryConstants.FETCH_SUBCATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listSubCategory: [],
      };
    }
    
     //

     case categoryConstants.FETCH_CATEGORY_ADMIN_FULL: {
      return {
        ...state,
      };
    }
    case categoryConstants.FETCH_CATEGORY_SUCCESS_ADMIN_FULL: {
      const { data } = action.payload;
      return {
        ...state,
        listCategoryAdminFull: data,
      };
    }
    case categoryConstants.FETCH_CATEGORY_FAILED_ADMIN_FULL: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listCategoryAdminFull: [],
      };
    }

    //
    ///==
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
      toastSuccess("Thêm mới category thành công");
      window.location.reload();
      return {
        ...state,
      };
    }
    case categoryConstants.ADD_CATEGORY_FAILED: {
      toastError("Thêm mới category thất bại");
      window.location.reload();
      return {
        ...state,
      };
    }
    case categoryConstants.SET_CATEGORY_EDITING: {
      const category = action.payload.user;

      return {
        ...state,
        categoryEditing: category,
      };
    }
    case categoryConstants.UPDATE_CATEGORY: {
      return {
        ...state,
      };
    }
    case categoryConstants.UPDATE_CATEGORY_SUCCESS: {
      const { data } = action.payload;
      toastError("Update category thành công");
      window.location.reload();
      return {
        ...state,
        categoryEditing: !state.categoryEditing,
      };
    }

    case categoryConstants.UPDATE_CATEGORY_FAILED: {
      toastError("Update category thất bại");
      window.location.reload();
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

    //
    case categoryConstants.FETCH_SUBCATEGORY: {
      return {
        ...state,
      };
    }
    case categoryConstants.FETCH_SUBCATEGORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listSubCategory: data,
      };
    }
    case categoryConstants.FETCH_SUBCATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listSubCategory: [],
      };
    }

    
    default:
      return state;
  }
};

export default reducer;