import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { hideModal } from "../actions/modal";
import {
  addOrderstatusFailed,
  addOrderstatusSuccess,
  deleteOrderstatusFailed,
  deleteOrderstatusSuccess,
  fetchListOrderstatusFailed,
  fetchListOrderstatusSuccess,
  updateOrderstatusFailed,
  updateOrderstatusSuccess,
} from "../actions/orderstatus";
import { hideLoading, showLoading } from "../actions/ui";
import {
  addOrderstatus,
  deleteOrderstatus,
  getList,
  updateOrderstatus,
} from "../apis/orderstatus";
import { STATUS_CODE } from "../constants";
import * as orderstatusTypes from "../constants/orderstatus";

export function* orderstatus_saga() {
  yield takeEvery(
    orderstatusTypes.FETCH_ORDERSTATUS,
    wacthFetchListOrderstatus
  );
  yield takeLatest(orderstatusTypes.DELETE_ORDERSTATUS, watchDeleteOrderstatus);
  yield takeEvery(orderstatusTypes.ADD_ORDERSTATUS, watchAddOrderstatus);
  yield takeLatest(orderstatusTypes.UPDATE_ORDERSTATUS, watchUpdateOrderstatus);
}

function* wacthFetchListOrderstatus(action) {
  yield put(showLoading());
  const resp = yield call(getList);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListOrderstatusSuccess(data));
  } else {
    yield put(fetchListOrderstatusFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* watchDeleteOrderstatus({ payload }) {
  console.log(payload);
  const { id } = payload;
  yield put(showLoading());
  const resp = yield call(deleteOrderstatus, id);
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteOrderstatusSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteOrderstatusFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* watchAddOrderstatus({ payload }) {
  console.log(payload);

  const { name, email, phone_number, birthday, password, address } = payload;

  const roles = parseInt(payload.roles);
  const address_id = parseInt(payload.address_id);

  yield put(showLoading());
  const resp = yield call(addOrderstatus, {
    name,
    phone_number,
    email,
    birthday,
    password,
    address,
    address_id,
    roles,
  });
  const { data, status } = resp;
  console.log(resp);
  if (status === STATUS_CODE.CREATED) {
    yield put(addOrderstatusSuccess(data.data));
    yield put(hideModal());
  } else {
    yield put(addOrderstatusFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* watchUpdateOrderstatus({ payload }) {
  console.log(payload);
  const {
    name,
    email,
    phone_number,
    birthday,
    password,
    address,
    address_id,
  } = payload;
  const roles = parseInt(payload.roles);
  // const address_id = parseInt(payload.address_id);
  const orderstatusEditing = yield select(
    (state) => state.orderstatus.orderstatusEditing
  );
  console.log(orderstatusEditing.id);
  yield put(showLoading());
  const resp = yield call(
    updateOrderstatus,
    {
      name,
      phone_number,
      email,
      birthday,
      password,
      address,
      address_id,
      roles,
    },
    orderstatusEditing.id
  );
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateOrderstatusSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateOrderstatusFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}
