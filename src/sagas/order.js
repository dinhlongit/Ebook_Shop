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
    fetchListOrderSuccessById,
    fetchListOrderFailedById
  } from "../actions/order";
  import { hideModal } from "../actions/modal";
  import { hideLoading, showLoading } from "../actions/ui";
  import { getList, deleteOrder, addOrder, updateOrder,getListById } from "../apis/order";
  import * as orderTypes from "../constants/order";
  import { STATUS_CODE } from "../constants";
  
  export function* order_saga() {
    yield takeEvery(orderTypes.FETCH_ORDER, wacthFetchListOrder);
    yield takeLatest(orderTypes.DELETE_ORDER, watchDeleteOrder);


    yield takeEvery(orderTypes.FETCH_ORDER_BYID, wacthFetchListOrderById);

  }
  
  function* wacthFetchListOrder(action) {
    yield put(showLoading());
    try {
      const resp = yield call(getList, action.payload.page);
      const { status, data } = resp;
      yield put(fetchListOrderSuccess(data));
    } catch (e) {
      yield put(fetchListOrderFailed(e));
    } finally {
      yield delay(1000);
      yield put(hideLoading());
    }
  }
  
function* wacthFetchListOrderById(action) {
  yield put(showLoading());
  try {
    const { id } = action.payload;
    const resp = yield call(getListById, id);
    const { status, data } = resp;
    yield put(fetchListOrderSuccessById(data));
  } catch (e) {
    yield put(fetchListOrderFailedById(e));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
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
  
