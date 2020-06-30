import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchListProductSuccess,
  fetchListProductFailed,
} from "../actions/product";
import { hideLoading, showLoading } from "../actions/ui";
import { getList } from "../apis/product";
import * as productTypes from "../constants/product";
import { STATUS_CODE } from "../constants";

export function* watchFetchListProductAction() {
  yield takeEvery(productTypes.FETCH_PRODUCT, wacthFetchListProduct);
}

function* wacthFetchListProduct(action) {
  yield put(showLoading());
  const resp = yield call(getList);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListProductSuccess(data));
  } else {
    yield put(fetchListProductFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}
