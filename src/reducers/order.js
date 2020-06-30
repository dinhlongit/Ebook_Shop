import * as orderConstants from './../constants/order';
import { toastError,toastSuccess } from '../helpers/toastHelper';
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router'
const initialState = {
    listOrder:[{}],
    orderEditing: null,
    listUserOrder: [] 
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case orderConstants.FETCH_ORDER: {
        return {
          ...state,
        };
      }
      case orderConstants.FETCH_USER_ORDER_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listUserOrder: data,
        };
      }


      case orderConstants.FETCH_ORDER_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listOrder: data,
        };
      }
      case orderConstants.FETCH_ORDER_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
          listOrder: [],
        };
      }

      //delete
      case orderConstants.DELETE_ORDER: {
        return {
          ...state,
        };
      }
      case orderConstants.DELETE_ORDER_SUCCESS: {
        const { data: orderId } = action.payload; 
        toastSuccess('Xóa order thành công');
        return {
          ...state,
          listOrder: state.listOrder.filter(item => item.id !== orderId),
        };
      }
      case orderConstants.DELETE_ORDER_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
        };
      }

        //====

        case orderConstants.ADD_ORDER: {
          return {
            ...state,
          };
        }
        case orderConstants.ADD_ORDER_SUCCESS: {
          const { data } = action.payload;
          console.log(data);
          toastSuccess('Thêm mới user thành công');
          return {
            ...state,
            listOrder: state.listOrder.concat([data]),
          };
          //return Object.assign({},state,{ listOrder : data})
        }
        case orderConstants.ADD_ORDER_FAILED: {
          const { error } = action.payload;
          toastError(error);
          return {
            ...state,
          };
        }
        case orderConstants.SET_ORDER_EDITING: {
          const { user } = action.payload;
          return {
            ...state,
            orderEditing: user,
          };
        }
        case orderConstants.UPDATE_ORDER: {
          return {
            ...state,
          };
        }
        case orderConstants.UPDATE_ORDER_SUCCESS: {
          const { data } = action.payload;
          const { listOrder } = state;
          const index = listOrder.findIndex(item => item.id === data.id);
          if (index !== -1) {
            const newList = [
              ...listOrder.slice(0, index),
              data,
              ...listOrder.slice(index + 1),
            ];
            toastSuccess('Cập nhật User thành công');
            return {
              ...state,
              listOrder: newList,
            };
          }
          return {
            ...state,
          };
        }
        case orderConstants.UPDATE_ORDER_FAILED: {
          const { error } = action.payload;
          toastError(error);
          return {
            ...state,
          };
        }

         case orderConstants.DELETE_LIST_CART: {
          localStorage.clear();
          browserHistory.push('/')
          window.location.reload(); 
           return state;
       }

      default:
        return state;
    }
  };
  
  export default reducer;