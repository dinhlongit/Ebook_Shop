import * as roleConstants from './../constants/role';
import { toastError,toastSuccess } from '../helpers/toastHelper';

const initialState = {
    listRole:[{}],
    roleEditing: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case roleConstants.FETCH_ROLE: {
        return {
          ...state,
        };
      }
      case roleConstants.FETCH_ROLE_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listRole: data,
        };
      }
      case roleConstants.FETCH_ROLE_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
          listRole: [],
        };
      }

      //delete
      case roleConstants.DELETE_ROLE: {
        return {
          ...state,
        };
      }
      case roleConstants.DELETE_ROLE_SUCCESS: {
        const { data: roleId } = action.payload; 
        toastSuccess('Xóa role thành công');
        return {
          ...state,
          listRole: state.listRole.filter(item => item.id !== roleId),
        };
      }
      case roleConstants.DELETE_ROLE_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
        };
      }

        //====

        case roleConstants.ADD_ROLE: {
          return {
            ...state,
          };
        }
        case roleConstants.ADD_ROLE_SUCCESS: {
          const { data } = action.payload;
          toastSuccess('Thêm mới role thành công');
          return {
            ...state,
            listRole: [data].concat(state.listRole),
          };
        }
        case roleConstants.ADD_ROLE_FAILED: {
          const { error } = action.payload;
          toastError(error);
          return {
            ...state,
          };
        }
        case roleConstants.SET_ROLE_EDITING: {
          const { user } = action.payload;
          return {
            ...state,
            roleEditing: user,
          };
        }
        case roleConstants.UPDATE_ROLE: {
          return {
            ...state,
          };
        }
        case roleConstants.UPDATE_ROLE_SUCCESS: {
          const { data } = action.payload;
          const { listRole } = state;
          const index = listRole.findIndex(item => item.id === data.id);
          if (index !== -1) {
            const newList = [
              ...listRole.slice(0, index),
              data,
              ...listRole.slice(index + 1),
            ];
            toastSuccess('Cập nhật role thành công');
            return {
              ...state,
              listRole: newList,
            };
          }
          return {
            ...state,
          };
        }
        case roleConstants.UPDATE_ROLE_FAILED: {
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