import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { hideModal } from "../actions/modal";
import { hideLoading, showLoading } from "../actions/ui";
import {
  addUserFailed,
  deleteUserFailed,
  fetchListUser,
  fetchListUserFailed,
  fetchListUserSuccess,
  updateUserFailed,
} from "../actions/user";
import { addUser, deleteUser, getList, updateUser } from "../apis/user";
import { STATUS_CODE } from "../constants";
import * as userTypes from "../constants/user";
import { toastSuccess } from "../helpers/toastHelper";

export function* user_saga() {
  yield takeEvery(userTypes.FETCH_USER, wacthFetchListUser);
  yield takeLatest(userTypes.DELETE_USER, watchDeleteUser);
  yield takeEvery(userTypes.ADD_USER, watchAddUser);
  yield takeLatest(userTypes.UPDATE_USER, watchUpdateUser);
}

function* wacthFetchListUser(action) {
  console.log(action.payload.page);
  yield put(showLoading());
  const resp = yield call(getList, action.payload.page);
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
  yield put(showLoading());
  try {
    console.log(payload);
    const { id } = payload;
    yield put(showLoading());
    const resp = yield call(deleteUser, id);
    const page = yield select((state) => state.user.page);
    toastSuccess("Xóa user thành công");
    yield put(fetchListUser(page));
    yield put(hideModal());
  } catch (e) {
    yield put(deleteUserFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}

function* watchAddUser({ payload }) {
  yield put(showLoading());
  try {
    const { name, email, phone_number, birthday, password, address } = payload;
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
    const page = yield select((state) => state.user.page);
    toastSuccess("Thêm mới user thành công");
    yield put(fetchListUser(page));
    yield put(hideModal());
  } catch (e) {
    yield put(addUserFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}

function* watchUpdateUser({ payload }) {
  yield put(showLoading());
  try {
    console.log(payload);
    const { name, email, phone_number, birthday, password, address } = payload;
    const roles = parseInt(payload.roles);
    console.log(roles);
    const address_id = parseInt(payload.address_id);
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
        roles,
      },
      userEditing.id
    );
    const page = yield select((state) => state.user.page);
    toastSuccess("Update user thành công");
    yield put(fetchListUser(page));
    yield put(hideModal());
  } catch (e) {
    yield put(updateUserFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}
