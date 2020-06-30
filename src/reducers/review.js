import { toastError, toastSuccess } from '../helpers/toastHelper';
import * as reviewConstants from './../constants/review';

const initialState = {
    listReview:[{}],
    reviewEditing: null,
  };


  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case reviewConstants.FETCH_REVIEW_PRODUCT: {
        return {
          ...state,
        };
      }
      case reviewConstants.FETCH_REVIEW_PRODUCT_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listReview: data,
        };
      }

      case reviewConstants.ADD_REVIEW_PRODUCT_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listReview: state.listReview.concat(data),
        };
      }
      

      default:
        return state;
    }
  };
  
  export default reducer;