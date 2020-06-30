import {
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
} from "redux-saga/effects";
import {
  fetchListUserSuccess,
  fetchListUserFailed,
  deleteUserSuccess,
  deleteUserFailed,
  addUserSuccess,
  addUserFailed,
  updateUserSuccess,
  updateUserFailed,
} from "../actions/user";


import { hideModal } from "../actions/modal";
import { hideLoading, showLoading } from "../actions/ui";
import { getList, deleteUser, addUser, updateUser } from "../apis/user";
import * as userTypes from "../constants/user";
import { STATUS_CODE } from "../constants";

export function* user_saga() {
  yield takeEvery(userTypes.FETCH_USER, wacthFetchListUser);
  yield takeLatest(userTypes.DELETE_USER, watchDeleteUser);
  yield takeEvery(userTypes.ADD_USER, watchAddUser);
  yield takeLatest(userTypes.UPDATE_USER, watchUpdateUser);
}

function* wacthFetchListUser(action) {
  yield put(showLoading());
  const resp = yield call(getList);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListUserSuccess(data));
  } else {
    yield put(fetchListUserFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* watchDeleteUser({ payload }) {
  console.log(payload);
  const { id } = payload;
  yield put(showLoading());
  const resp = yield call(deleteUser, id);
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteUserSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteUserFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* watchAddUser({ payload }) {
  const {
    name,
    email,
    phone_number,
    birthday,
    password,
    address
  } = payload;

  const roles = parseInt(payload.roles);
  const address_id = parseInt(payload.address_id);

  yield put(showLoading());
  const resp = yield call(addUser, {
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
 // console.log(resp);
  if (status === STATUS_CODE.CREATED) {
   // yield put(addUserSuccess(data.data));
    yield put(hideModal());
  } else {
    yield put(addUserFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* watchUpdateUser({ payload }) {
  console.log(payload);
  const {
    name,
    email,
    phone_number,
    birthday,
    password,
    address,
    address_id
  } = payload;
  const roles = parseInt(payload.roles);
  // const address_id = parseInt(payload.address_id);
  const userEditing = yield select((state) => state.user.userEditing);
  console.log(userEditing.id);
  yield put(showLoading());
  const resp = yield call(
    updateUser,
    {
      name,
      phone_number,
      email,
      birthday,
      password,
      address,
      address_id,
      roles
    },
    userEditing.id
  );
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateUserSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateUserFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}
