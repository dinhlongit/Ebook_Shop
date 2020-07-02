import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchListReportFailed,
  fetchListReportSuccess,
} from "../actions/reports";
import { hideLoading, showLoading } from "../actions/ui";
import { getList } from "../apis/report";
import * as reportTypes from "../constants/reports";

export function* report_saga() {
  yield takeEvery(reportTypes.FETCH_REPORTS, wacthFetchListReport);
}

function* wacthFetchListReport(action) {
  console.log(action.payload.month);
  yield put(showLoading());
  try {
    const resp = yield call(getList, action.payload.month);
    const { status, data } = resp;
    console.log(resp.data);
    yield put(fetchListReportSuccess(data));
  } catch (e) {
    yield put(fetchListReportFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}
