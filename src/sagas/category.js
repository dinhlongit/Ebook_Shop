import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchListCategorySuccess,
  fetchListCategoryFailed,
} from "../actions/category";
import { hideLoading, showLoading } from "../actions/ui";
import { getList } from "../apis/category";
import * as categoryTypes from "../constants/category";
import { STATUS_CODE } from "../constants";

export function* watchFetchListCategoryAction() {
  yield takeEvery(categoryTypes.FETCH_CATEGORY, wacthFetchListCategory);
}

function* wacthFetchListCategory(action) {
  yield put(showLoading());
  const resp = yield call(getList);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListCategorySuccess(data));
  } else {
    yield put(fetchListCategoryFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}
