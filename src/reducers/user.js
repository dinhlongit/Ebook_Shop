import * as userConstants from './../constants/user';
import { toastError,toastSuccess } from '../helpers/toastHelper';
import Cookie from 'js-cookie';
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router'

var userInfo = Cookie.getJSON("userInfo") || null;
const initialState = {
    listUser:[{}],
    userEditing: null,
    userSignin: userInfo 
  };


  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case userConstants.FETCH_USER: {
        return {
          ...state,
        };
      }
      case userConstants.FETCH_USER_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listUser: data,
        };
      }
      case userConstants.FETCH_USER_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
          listUser: [],
        };
      }

      //delete
      case userConstants.DELETE_USER: {
        return {
          ...state,
        };
      }
      case userConstants.DELETE_USER_SUCCESS: {
        const { data: userId } = action.payload; 
        toastSuccess('Xóa user thành công');
        return {
          ...state,
          listUser: state.listUser.filter(item => item.id !== userId),
        };
      }
      case userConstants.DELETE_USER_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
        };
      }

        //====

        case userConstants.ADD_USER: {
          return {
            ...state,
          };
        }
        case userConstants.ADD_USER_SUCCESS: {
          const { data } = action.payload;
          console.log(data);
          toastSuccess('Thêm mới user thành công');
          return {
            ...state,
            listUser: state.listUser.concat([data]),
          };
          //return Object.assign({},state,{ listUser : data})
        }
        case userConstants.ADD_USER_FAILED: {
          const { error } = action.payload;
          toastError(error);
          return {
            ...state,
          };
        }
        case userConstants.SET_USER_EDITING: {
          const { user } = action.payload;
          return {
            ...state,
            userEditing: user,
          };
        }
        case userConstants.UPDATE_USER: {
          return {
            ...state,
          };
        }
        case userConstants.UPDATE_USER_SUCCESS: {
          const { data } = action.payload;
          const { listUser } = state;
          const index = listUser.findIndex(item => item.id === data.id);
          if (index !== -1) {
            const newList = [
              ...listUser.slice(0, index),
              data,
              ...listUser.slice(index + 1),
            ];
            toastSuccess('Cập nhật User thành công');
            return {
              ...state,
              listUser: newList,
            };
          }
          return {
            ...state,
          };
        }
        case userConstants.UPDATE_USER_FAILED: {
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

   function userSigninReducer(state = {}, action) {
    switch (action.type) {
      case userConstants.USER_SIGNIN_REQUEST:
        return { loading: true };
      case userConstants.USER_SIGNIN_SUCCESS:
        toastSuccess("Đăng nhập thành công !");
        return { loading: false, userInfo: action.payload };
      case userConstants.USER_SIGNIN_FAIL:
        toastSuccess("Tài Khoản Hoặc Mật Khẩu Sai !");
        return { loading: false, error: action.payload };
      case userConstants.USER_LOGOUT:
        localStorage.removeItem('cartItems');
        browserHistory.push('/')
        toastSuccess("Đăng Xuất Thành Công !");
        window.location.reload(); 
        return {};
      default: return state;
    }
  }


  function userRegisterReducer(state = {}, action) {
    switch (action.type) {
      case userConstants.USER_REGISTER_REQUEST:
        return { loading: true };
      case userConstants.USER_REGISTER_SUCCESS:
        
        return { loading: false, userInfo: action.payload };
      case userConstants.USER_REGISTER_FAIL:

        return { loading: false, error: action.payload };
      default: return state;
    }
  }




  
  export  {userReducer,userSigninReducer};