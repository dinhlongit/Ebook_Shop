import { toastError, toastSuccess } from "../helpers/toastHelper";
import * as statusConstants from "./../constants/status";

const initialState = {
  listStatus: [{}],
  statusEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case statusConstants.FETCH_STATUS: {
      return {
        ...state,
      };
    }
    case statusConstants.FETCH_STATUS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listStatus: data,
      };
    }
    case statusConstants.FETCH_STATUS_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listStatus: [],
      };
    }

    //delete
    case statusConstants.DELETE_STATUS: {
      return {
        ...state,
      };
    }
    case statusConstants.DELETE_STATUS_SUCCESS: {
      const { data: userId } = action.payload;
      toastSuccess("Xóa user thành công");
      return {
        ...state,
        listStatus: state.listStatus.filter((item) => item.id !== userId),
      };
    }
    case statusConstants.DELETE_STATUS_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    //====

    case statusConstants.ADD_STATUS: {
      return {
        ...state,
      };
    }
    case statusConstants.ADD_STATUS_SUCCESS: {
      const { data } = action.payload;
      console.log(data);
      toastSuccess("Thêm mới user thành công");
      return {
        ...state,
        listStatus: state.listStatus.concat([data]),
      };
      //return Object.assign({},state,{ listStatus : data})
    }
    case statusConstants.ADD_STATUS_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case statusConstants.SET_STATUS_EDITING: {
      const { user } = action.payload;
      return {
        ...state,
        statusEditing: user,
      };
    }
    case statusConstants.UPDATE_STATUS: {
      return {
        ...state,
      };
    }
    case statusConstants.UPDATE_STATUS_SUCCESS: {
      const {
        id,
        name,
        phone_number,
        email,
        birthday,
        password,
        address,
        address_id,
        role,
      } = action.payload.data.data;

      const { listStatus } = state;
      const index = listStatus.findIndex((item) => item.id === id);
      if (index !== -1) {
        const newList = [
          ...listStatus.slice(0, index),
          {
            id: id,
            name: name,
            phone_number: phone_number,
            email: email,
            birthday: birthday,
            password: password,
            address: address,
            address_id: address_id,
            roles: role,
          },
          ...listStatus.slice(index + 1),
        ];
        toastSuccess("Cập nhật User thành công");
        return {
          ...state,
          listStatus: newList,
          statusEditing: !state.statusEditing,
        };
      }
      return {
        ...state,
      };
    }
    case statusConstants.UPDATE_STATUS_FAILED: {
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
