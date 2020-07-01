import { call, delay, put, takeEvery ,takeLatest,select} from "redux-saga/effects";
import {
  fetchListProductSuccess,
  fetchListProductFailed,
  fetchListProductSuccessAdmin,
  fetchListProductFailedAdmin,
  fetchListProductAdmin,
  deleteProductFailed,
  addProductFailed,
  updateProductFailed
} from "../actions/product";
import { hideLoading, showLoading } from "../actions/ui";
import { getList ,getListAdmin,deleteProduct,addProduct,updateProduct} from "../apis/product";
import * as productTypes from "../constants/product";
import { STATUS_CODE } from "../constants";
import { hideModal } from "../actions/modal";
import { toastSuccess } from "../helpers/toastHelper";

export function* watchFetchListProductAction() {
  yield takeEvery(productTypes.FETCH_PRODUCT, wacthFetchListProduct);
  yield takeEvery(productTypes.FETCH_PRODUCT_ADMIN, wacthFetchListProductAdmin);


  yield takeLatest(productTypes.DELETE_PRODUCT, watchDeleteProduct);
  yield takeEvery(productTypes.ADD_PRODUCT, watchAddProduct);
  yield takeLatest(productTypes.UPDATE_PRODUCT, watchUpdateProduct);

}

function* wacthFetchListProduct(action) {
  yield put(showLoading());
  const resp = yield call(getList);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListProductSuccess(data));
  } else {
    yield put(fetchListProductFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}


function* wacthFetchListProductAdmin(action) {
  yield put(showLoading());
  console.log(action);
  const resp = yield call(getListAdmin, action.payload.page);
  console.log(resp.data);
  const { status, data } = resp;
  console.log(data);
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListProductSuccessAdmin(data));
  } else {
    yield put(fetchListProductFailedAdmin(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}



function* watchDeleteProduct({ payload }) {
  yield put(showLoading());
  try {
    const { id } = payload;
    yield put(showLoading());
    const resp = yield call(deleteProduct, id);
    const page = yield select((state) => state.product.page);
    toastSuccess("Xóa product thành công");
    yield put(fetchListProductAdmin(page));
    yield put(hideModal());
  } catch (e) {
    yield put(deleteProductFailed(e));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchAddProduct({ payload }) {
  yield put(showLoading());
  console.log(payload.data);
  try {
    const resp = yield call(addProduct, payload.data);
    const page = yield select((state) => state.product.page);
    toastSuccess("Thêm mới product thành công");
    yield put(fetchListProductAdmin(page));
    yield put(hideModal());
  } catch (e) {
    yield put(addProductFailed(e));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchUpdateProduct({ payload }) {
  yield put(showLoading());
  console.log(payload.data);
  try {
    const productEditing = yield select(
      (state) => state.product.productEditing
    );
    const resp = yield call(updateProduct, payload.data, productEditing.id);
    const page = yield select((state) => state.product.page);
    toastSuccess("Update product thành công");
    yield put(fetchListProductAdmin(page));
    yield put(hideModal());
  } catch (e) {
    yield put(updateProductFailed(e));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}
