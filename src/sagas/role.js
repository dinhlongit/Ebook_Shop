import { call, delay, put, takeEvery,takeLatest} from "redux-saga/effects";
import {
  fetchListRoleSuccess,
  fetchListRoleFailed,
  
} from "../actions/role";
import { hideModal } from '../actions/modal';
import { hideLoading, showLoading } from "../actions/ui";
import { getList, deleteUser, addUser, updateUser} from "../apis/role";
import * as roleTypes from "../constants/role";
import { STATUS_CODE } from "../constants";

export function* role_saga() {
  yield takeEvery(roleTypes.FETCH_ROLE, wacthFetchListRole);
}


function* wacthFetchListRole(action) {
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListRoleSuccess(data));
    } else {
      yield put(fetchListRoleFailed(data));
    }
   // yield delay(100);
    yield put(hideLoading());
  }
  
