import {
    call,
    delay,
    put,
    takeEvery,
    takeLatest,
    select,
  } from "redux-saga/effects";
  import {
    fetchListOrderSuccess,
    fetchListOrderFailed,
    deleteOrderSuccess,
    deleteOrderFailed,
    addOrderSuccess,
    addOrderFailed,
    updateOrderSuccess,
    updateOrderFailed,
  } from "../actions/order";
  import { hideModal } from "../actions/modal";
  import { hideLoading, showLoading } from "../actions/ui";
  import { getList, deleteOrder, addOrder, updateOrder } from "../apis/order";
  import * as orderTypes from "../constants/order";
  import { STATUS_CODE } from "../constants";
  
  export function* order_saga() {
    yield takeEvery(orderTypes.FETCH_ORDER, wacthFetchListOrder);
    yield takeLatest(orderTypes.DELETE_ORDER, watchDeleteOrder);

  }
  
  function* wacthFetchListOrder(action) {
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListOrderSuccess(data));
    } else {
      yield put(fetchListOrderFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }

  function* watchDeleteOrder({ payload }) {
    console.log(payload);
    const { id } = payload;
    yield put(showLoading());
    const resp = yield call(deleteOrder, id);
    const { data, status: statusCode } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
      yield put(deleteOrderSuccess(id));
      yield put(hideModal());
    } else {
      
      yield put(deleteOrderFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
  
