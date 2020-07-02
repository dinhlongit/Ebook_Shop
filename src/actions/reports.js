import * as reportConstants from "../constants/reports";

export const fetchListReport = (month) => {
  return {
    type: reportConstants.FETCH_REPORTS,
    payload: {
      month,
    },
  };
};

export const fetchListReportSuccess = (data) => {
  return {
    type: reportConstants.FETCH_REPORTS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListReportFailed = (error) => {
  return {
    type: reportConstants.FETCH_REPORTS_FAILED,
    payload: {
      error,
    },
  };
};
