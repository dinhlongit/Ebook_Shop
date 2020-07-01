import { toastError, toastSuccess } from "../helpers/toastHelper";
import * as productstatusConstants from "./../constants/productstatus";

const initialState = {
  listProductstatus: [{}],
  productstatusEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case productstatusConstants.FETCH_PRODUCTSTATUS: {
      return {
        ...state,
      };
    }
    case productstatusConstants.FETCH_PRODUCTSTATUS_SUCCESS: {
      const { data } = action.payload;
      console.log(data);
      return {
        ...state,
        listProductstatus: data,
      };
    }
    case productstatusConstants.FETCH_PRODUCTSTATUS_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listProductstatus: [],
      };
    }

    //delete
    case productstatusConstants.DELETE_PRODUCTSTATUS: {
      return {
        ...state,
      };
    }
    case productstatusConstants.DELETE_PRODUCTSTATUS_SUCCESS: {
      const { data: userId } = action.payload;
      toastSuccess("Xóa user thành công");
      return {
        ...state,
        listProductstatus: state.listProductstatus.filter((item) => item.id !== userId),
      };
    }
    case productstatusConstants.DELETE_PRODUCTSTATUS_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    //====

    case productstatusConstants.ADD_PRODUCTSTATUS: {
      return {
        ...state,
      };
    }
    case productstatusConstants.ADD_PRODUCTSTATUS_SUCCESS: {
      const { data } = action.payload;
      console.log(data);
      toastSuccess("Thêm mới user thành công");
      return {
        ...state,
        listProductstatus: state.listProductstatus.concat([data]),
      };
      //return Object.assign({},state,{ listProductstatus : data})
    }
    case productstatusConstants.ADD_PRODUCTSTATUS_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case productstatusConstants.SET_PRODUCTSTATUS_EDITING: {
      const { user } = action.payload;
      return {
        ...state,
        productstatusEditing: user,
      };
    }
    case productstatusConstants.UPDATE_PRODUCTSTATUS: {
      return {
        ...state,
      };
    }
    case productstatusConstants.UPDATE_PRODUCTSTATUS_SUCCESS: {
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
      const { listProductstatus } = state;
      const index = listProductstatus.findIndex((item) => item.id === id);
      if (index !== -1) {
        const newList = [
          ...listProductstatus.slice(0, index),
          {
            id: id,
            name: name,
            phone_number: phone_number,
            email: email,
            birthday: birthday,
            password: password,
            address: address,
            address_id: address_id,
            role: role,
          },
          ...listProductstatus.slice(index + 1),
        ];
        toastSuccess("Cập nhật User thành công");
        return {
          ...state,
          listProductstatus: newList,
          productstatusEditing: !state.productstatusEditing,
        };
      }
      return {
        ...state,
      };
    }
    case productstatusConstants.UPDATE_PRODUCTSTATUS_FAILED: {
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
