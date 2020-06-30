import { call, takeLatest, put, delay } from "redux-saga/effects";
import { login } from "../apis/login";
import * as loginTypes from "../constants/login";
import history from "../helpers/history";
import { hideLoading, showLoading } from "../actions/ui";

export function* login_saga() {
  yield takeLatest(loginTypes.LOGIN, watchLogin);
}

function* watchLogin(action) {
  try {
    yield put(showLoading());
    const resp = yield call(login, action.payload.data);
    localStorage.setItem("access-token", resp.data.access_token);
    yield call(history.push, "/admin");
    yield delay(500);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}
