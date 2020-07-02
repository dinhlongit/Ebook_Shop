import * as homeConstants from '../constants/home';
//import { STATUSES } from '../constants';

export const fetchListHome = (params = {}) => {
  return {
    type: homeConstants.FETCH_HOME,
    payload: {
      params,
    },
  };
};

export const fetchListHomeSuccess = data => {
  return {
    type: homeConstants.FETCH_HOME_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListHomeFailed = error => {
  return {
    type: homeConstants.FETCH_HOME_FAILED,
    payload: {
      error,
    },
  };
};