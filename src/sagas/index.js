import {watchFetchListCategoryAction} from './category'
import {watchFetchListHomeAction} from './home'
import { fork } from 'redux-saga/effects'
import { login_saga } from './login';
import { watchFetchListProductAction } from './product';
import { user_saga } from './user';
import { role_saga } from './role';
import { order_saga } from './order';
import { producer_saga } from './producer';

export default function* rootSaga() {
  yield fork(watchFetchListCategoryAction)
  yield fork(watchFetchListProductAction)
  yield fork(user_saga)
  yield fork(role_saga)
  yield fork(order_saga)
  yield fork(producer_saga)
  yield fork(watchFetchListHomeAction) 
  yield fork(login_saga)
}

