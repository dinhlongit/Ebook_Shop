import { call, delay, put, take } from 'redux-saga/effects';
import { fetchListHomeSuccess } from '../actions/home';
import { hideLoading, showLoading } from '../actions/ui';
import { getList } from '../apis/home';
import * as taskTypes from '../constants/home';
  

 export function* watchFetchListHomeAction() {
    while (true) {
      const action = yield take(taskTypes.FETCH_HOME); 
      yield put(showLoading());
      const { params } = action.payload;
      try{
        const resp = yield call(getList, params);
       // const { status, data } = resp;
       const { data } = resp;
        yield put(fetchListHomeSuccess(data));
      }catch(e){
       // yield put(fetchListHomeFailed(data));
      }
      
     
      yield delay(1000);
      yield put(hideLoading());
    }
  }
  

  

  
