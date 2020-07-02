import { toastError, toastSuccess } from '../helpers/toastHelper';
import * as orderstatusConstants from './../constants/orderstatus';

const initialState = {
    listOrderstatus:[{}],
    orderstatusEditing: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case orderstatusConstants.FETCH_ORDERSTATUS: {
        return {
          ...state,
        };
      }
      case orderstatusConstants.FETCH_ORDERSTATUS_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listOrderstatus: data,
        };
      }
      case orderstatusConstants.FETCH_ORDERSTATUS_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
          listOrderstatus: [],
        };
      }

      //delete
      case orderstatusConstants.DELETE_ORDERSTATUS: {
        return {
          ...state,
        };
      }
      case orderstatusConstants.DELETE_ORDERSTATUS_SUCCESS: {
        const { data: userId } = action.payload; 
        toastSuccess('Xóa user thành công');
        return {
          ...state,
          listOrderstatus: state.listOrderstatus.filter(item => item.id !== userId),
        };
      }
      case orderstatusConstants.DELETE_ORDERSTATUS_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
        };
      }

        //====

        case orderstatusConstants.ADD_ORDERSTATUS: {
          return {
            ...state,
          };
        }
        case orderstatusConstants.ADD_ORDERSTATUS_SUCCESS: {
          const { data } = action.payload;
          console.log(data);
          toastSuccess('Thêm mới user thành công');
          return {
            ...state,
            listOrderstatus: state.listOrderstatus.concat([data]),
          };
          //return Object.assign({},state,{ listOrderstatus : data})
        }
        case orderstatusConstants.ADD_ORDERSTATUS_FAILED: {
          const { error } = action.payload;
          toastError(error);
          return {
            ...state,
          };
        }
        case orderstatusConstants.SET_ORDERSTATUS_EDITING: {
          const { user } = action.payload;
          return {
            ...state,
            orderstatusEditing: user,
          };
        }
        case orderstatusConstants.UPDATE_ORDERSTATUS: {
          return {
            ...state,
          };
        }
        case orderstatusConstants.UPDATE_ORDERSTATUS_SUCCESS: {
          const { data } = action.payload;
          const { listOrderstatus } = state;
          const index = listOrderstatus.findIndex(item => item.id === data.id);
          if (index !== -1) {
            const newList = [
              ...listOrderstatus.slice(0, index),
              data,
              ...listOrderstatus.slice(index + 1),
            ];
            toastSuccess('Cập nhật User thành công');
            return {
              ...state,
              listOrderstatus: newList,
            };
          }
          return {
            ...state,
          };
        }
        case orderstatusConstants.UPDATE_ORDERSTATUS_FAILED: {
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