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
  addProductstatusFailed,
  addProductstatusSuccess,
  deleteProductstatusFailed,
  deleteProductstatusSuccess,
  fetchListProductstatusFailed,
  fetchListProductstatusSuccess,
  updateProductstatusFailed,
  updateProductstatusSuccess,
} from "../actions/productstatus";
import { hideLoading, showLoading } from "../actions/ui";
import {
  addProductstatus,
  deleteProductstatus,
  getList,
  updateProductstatus,
} from "../apis/productstatus";
import { STATUS_CODE } from "../constants";
import * as productstatusTypes from "../constants/productstatus";

export function* productstatus_saga() {
  yield takeEvery(
    productstatusTypes.FETCH_PRODUCTSTATUS,
    wacthFetchListProductstatus
  );
  yield takeLatest(
    productstatusTypes.DELETE_PRODUCTSTATUS,
    watchDeleteProductstatus
  );
  yield takeEvery(productstatusTypes.ADD_PRODUCTSTATUS, watchAddProductstatus);
  yield takeLatest(
    productstatusTypes.UPDATE_PRODUCTSTATUS,
    watchUpdateProductstatus
  );
}

function* wacthFetchListProductstatus(action) {
  console.log(action);
  yield put(showLoading());
  const resp = yield call(getList);
  const { status, data } = resp;
  console.log(data);
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListProductstatusSuccess(data));
  } else {
    yield put(fetchListProductstatusFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* watchDeleteProductstatus({ payload }) {
  console.log(payload);
  const { id } = payload;
  yield put(showLoading());
  const resp = yield call(deleteProductstatus, id);
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteProductstatusSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteProductstatusFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* watchAddProductstatus({ payload }) {
  console.log(payload);

  const { name, email, phone_number, birthday, password, address } = payload;

  const roles = parseInt(payload.roles);
  const address_id = parseInt(payload.address_id);

  yield put(showLoading());
  const resp = yield call(addProductstatus, {
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
    yield put(addProductstatusSuccess(data.data));
    yield put(hideModal());
  } else {
    yield put(addProductstatusFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* watchUpdateProductstatus({ payload }) {
  console.log(payload);
  const { name, email, phone_number, birthday, password, address } = payload;
  const roles = parseInt(payload.roles);
  const address_id = parseInt(payload.address_id);
  const productstatusEditing = yield select(
    (state) => state.productstatus.productstatusEditing
  );
  console.log(productstatusEditing.id);
  yield put(showLoading());
  const resp = yield call(
    updateProductstatus,
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
    productstatusEditing.id
  );
  const { data, status: statusCode } = resp;
  console.log(data);
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateProductstatusSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateProductstatusFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}
