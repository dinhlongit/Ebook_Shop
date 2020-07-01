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
  addProducerFailed,
  addProducerSuccess,
  deleteProducerFailed,
  deleteProducerSuccess,
  fetchListProducerFailed,
  fetchListProducerSuccess,
  updateProducerFailed,
  updateProducerSuccess,
  getCatProducerSuccess,
  getCatProducerFail
} from "../actions/producer";
import { hideLoading, showLoading } from "../actions/ui";
import {
  addProducer,
  deleteProducer,
  getList,
  updateProducer,
  getCatProducer
} from "../apis/producer";
import * as producerTypes from "../constants/producer";

export function* producer_saga() {
  yield takeEvery(producerTypes.FETCH_PRODUCER, wacthFetchListProducer);
  yield takeLatest(producerTypes.DELETE_PRODUCER, watchDeleteProducer);
  yield takeEvery(producerTypes.ADD_PRODUCER, watchAddProducer);
  yield takeLatest(producerTypes.UPDATE_PRODUCER, watchUpdateProducer);
}

function* wacthFetchListProducer(action) {
  yield put(showLoading());
  try {
    const resp = yield call(getList);
    const { status, data } = resp;
    yield put(fetchListProducerSuccess(data));
  } catch (e) {
    yield put(fetchListProducerFailed(e));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchDeleteProducer({ payload }) {
  yield put(showLoading());
  try {
    const { id } = payload;
    const resp = yield call(deleteProducer, id);
    const { data } = resp;
    yield put(deleteProducerSuccess(data));
    yield put(hideModal());
    window.location.reload();
  } catch (e) {
    yield put(deleteProducerFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}

function* watchAddProducer({ payload }) {

  console.log(payload)
  yield put(showLoading());
  try {
    const { name } = payload;
    yield put(showLoading());
    const resp = yield call(addProducer, {
      name,
    });
    const { data, status } = resp;
    console.log(data)
    yield put(addProducerSuccess(data));
    yield put(hideModal());
  } catch (e) {
   // yield put(addProducerFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}

function* watchUpdateProducer({ payload }) {
  yield put(showLoading());
  try {
    const { name } = payload;
    const producerEditing = yield select(
      (state) => state.producer.producerEditing
    );
    console.log(producerEditing.id);
    yield put(showLoading());
    const resp = yield call(
      updateProducer,
      {
        name,
      },
      producerEditing.id
    );
    const { data, status: statusCode } = resp;
    console.log(data);
    yield put(updateProducerSuccess(data));
  } catch (e) {
    yield put(updateProducerFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}

// function* watchGetCatProducer(action) {
//   yield put(showLoading())
//   try {
//     const resp = yield call(getCatProducer, action.payload.catID)
//     const { status, data } = resp
//     yield put(getCatProducerSuccess(data))
//   } catch (error) {
//     console.log(error)
//     yield put(getCatProducerFail(error))
//   } finally {
//     yield delay(500)
//     yield put(hideLoading())
//   }
// }