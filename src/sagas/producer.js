import { call, delay, put, takeEvery,takeLatest} from "redux-saga/effects";
import {
  fetchListProducerSuccess,
  fetchListProducerFailed,
  
} from "../actions/producer";
import { hideModal } from '../actions/modal';
import { hideLoading, showLoading } from "../actions/ui";
import { getList, deleteUser, addUser, updateUser} from "../apis/producer";
import * as producerTypes from "../constants/producer";
import { STATUS_CODE } from "../constants";

export function* producer_saga() {
  yield takeEvery(producerTypes.FETCH_PRODUCER, wacthFetchListProducer);
}


function* wacthFetchListProducer(action) {
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListProducerSuccess(data));
    } else {
      yield put(fetchListProducerFailed(data));
    }
   // yield delay(100);
    yield put(hideLoading());
  }
  
