import { toastError } from "../helpers/toastHelper";
import * as reportConstants from "./../constants/reports";

const initialState = {
  listReport: [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case reportConstants.FETCH_REPORTS: {
      return {
        ...state,
      };
    }
    case reportConstants.FETCH_REPORTS_SUCCESS: {
      const { data } = action.payload;
      console.log(data);
      return {
        ...state,
        listReport: data,
      };
    }
    case reportConstants.FETCH_REPORTS_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listReport: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
