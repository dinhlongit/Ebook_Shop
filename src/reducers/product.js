import * as productConstants from './../constants/product';
import { toastError, toastSuccess } from '../helpers/toastHelper';




const initialState = {
    listProduct:[{}],
    listProductSearch:[{}],
    productEditing: null,
    detailProduct : {},
    total : [],
    listProductAdmin: [{}],
    page:''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case productConstants.FETCH_PRODUCT: {
        return {
          ...state
        };
      }
    
      case productConstants.FETCH_PRODUCT_SUCCESS: {
        const { data } = action.payload;
        console.log(data)
        return {
          ...state,
          listProduct: data,
        };
      }


      case productConstants.FETCH_PRODUCT_SEARCH_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listProductSearch: data,
        };
      }

      case productConstants.FETCH_PRODUCT_CATEGORY_SUCCESS: {
        const { data, totalPage } = action.payload;
        const page = []
        for (let i = 1 ; i <= totalPage ; i++){
          page.push(i);
        }
        console.log(page);  
  
        return {
          ...state,
          listProduct: data,
          total : page
        };
      }

      case productConstants.FETCH_DETAIL_PRODUCT_SUCCESS: {
        const {data} = action.payload;
   
        return {
          ...state,
          detailProduct : data
        };
      }

  

      case productConstants.FETCH_PRODUCT_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
          listProduct: [],
        };
      }


      
    case productConstants.FETCH_PRODUCT_ADMIN: {
      return {
        ...state,
      };
    }
    case productConstants.FETCH_PRODUCT_SUCCESS_ADMIN: {
      const { data } = action.payload;
      return {
        ...state,
        listProductAdmin: data,
        page: data.current_page,
      };
    }
    case productConstants.FETCH_PRODUCT_FAILED_ADMIN: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listProductAdmin: [],
      };
    }

    case productConstants.SET_PRODUCT_EDITING: {
      const { user } = action.payload;
      console.log(action);
      return {
        ...state,
        productEditing: user,
      };
    }


    case productConstants.UPDATE_PRODUCT: {
      return {
        ...state,
      };
    }
    case productConstants.UPDATE_PRODUCT_SUCCESS: {
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

      const { listProduct } = state;
      const index = listProduct.findIndex((item) => item.id === id);
      if (index !== -1) {
        const newList = [
          ...listProduct.slice(0, index),
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
          ...listProduct.slice(index + 1),
        ];
        toastSuccess("Cập nhật product thành công");
        return {
          ...state,
          listProduct: newList,
          productEditing: !state.productEditing,
        };
      }
      return {
        ...state,
      };
    }
    case productConstants.UPDATE_PRODUCT_FAILED: {
      toastError("Update product thất bại");
      window.location.reload();
      return {
        ...state,
      };
    }


     //delete
     case productConstants.DELETE_PRODUCT: {
      return {
        ...state,
      };
    }
    case productConstants.DELETE_PRODUCT_SUCCESS: {
      const { data: userId } = action.payload;
      toastSuccess("Xóa product thành công");
      return {
        ...state,
        listProduct: state.listProduct.filter((item) => item.id !== userId),
      };
    }
    case productConstants.DELETE_PRODUCT_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    //====

    case productConstants.ADD_PRODUCT: {
      return {
        ...state,
      };
    }
    case productConstants.ADD_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      console.log(data);
      toastSuccess("Thêm mới user thành công");
      return {
        ...state,
        listProduct: state.listProduct.concat([data]),
      };
      //return Object.assign({},state,{ listProduct : data})
    }
    case productConstants.ADD_PRODUCT_FAILED: {
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