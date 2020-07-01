import { call, delay, put, takeEvery,select,takeLatest } from "redux-saga/effects";
import {
  fetchListCategorySuccess,
  fetchListCategoryFailed,
  fetchListCategoryAdminSuccess,
  fetchListCategoryAdminFailed,
  fetchListCategorySuccessAdminFull,
  fetchListSubCategoryFailedAdminFull,
  fetchListCategoryAdmin,
  addCategoryFailed,
  updateCategoryFailed,
  deleteCategoryFailed,
  fetchListSubCategorySuccess,
  fetchListSubCategoryFailed
} from "../actions/category";
import { hideLoading, showLoading } from "../actions/ui";
import { getList,getListAdmin,getListAdminFull,addCategory,deleteCategory,updateCategory,getListSub} from "../apis/category";
import * as categoryTypes from "../constants/category";
import { STATUS_CODE } from "../constants";
import { toastSuccess } from "../helpers/toastHelper";
import { hideModal } from "../actions/modal";


export function* watchFetchListCategoryAction() {
  yield takeEvery(categoryTypes.FETCH_CATEGORY, wacthFetchListCategory);
  yield takeEvery(
    categoryTypes.FETCH_CATEGORY_ADMIN,
    wacthFetchListCategoryAdmin
  );
  yield takeEvery(
    categoryTypes.FETCH_CATEGORY_ADMIN_FULL,
    wacthFetchListCategoryAdminFull
  );
  yield takeEvery(categoryTypes.ADD_CATEGORY, watchAddCategory);
  yield takeLatest(categoryTypes.DELETE_CATEGORY, watchDeleteCategory);
  yield takeLatest(categoryTypes.UPDATE_CATEGORY, watchUpdateCategory);
  yield takeEvery(categoryTypes.FETCH_SUBCATEGORY, wacthFetchListSubCategory);


}

function* wacthFetchListCategory(action) {
  yield put(showLoading());
  const resp = yield call(getList);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListCategorySuccess(data));
  } else {
    yield put(fetchListCategoryFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* wacthFetchListCategoryAdmin(action) {
  console.log(action.payload.page);
  yield put(showLoading());
  try {
    const resp = yield call(getListAdmin, action.payload.page);
    const { status, data } = resp;
    console.log(data);
    yield put(fetchListCategoryAdminSuccess(data));
  } catch (e) {
    yield put(fetchListCategoryAdminFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}

function* wacthFetchListCategoryAdminFull(action) {
  yield put(showLoading());
  try {
    const resp = yield call(getListAdminFull);
    const { status, data } = resp;
    yield put(fetchListCategorySuccessAdminFull(data));
  } catch (e) {
    yield put(fetchListSubCategoryFailedAdminFull(e));
  } finally {
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchAddCategory({ payload }) {
  yield put(showLoading());
  try {
    const { name, photo } = payload;
    const parrent_id = parseInt(payload.parrent_id);
    yield put(showLoading());
    const resp = yield call(addCategory, {
      name,
      photo,
      parrent_id,
    });
    const { data, status } = resp;
    const page = yield select((state) => state.category.page);
    toastSuccess("Thêm mới category thành công");
    yield put(fetchListCategoryAdmin(page));
    yield put(hideModal());
  } catch (e) {
    yield put(addCategoryFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}


function* watchDeleteCategory({ payload }) {
  yield put(showLoading());
  try {
    const { id } = payload;
    const resp = yield call(deleteCategory, id);
    const page = yield select((state) => state.category.page);
    toastSuccess("Xóa category thành công");
    yield put(fetchListCategoryAdmin(page));
    yield put(hideModal());
  } catch (e) {
    yield put(deleteCategoryFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}

function* watchUpdateCategory({ payload }) {
  yield put(showLoading());
  try {
    const { name, photo } = payload;
    const parrent_id = parseInt(payload.parrent_id);
    const categoryEditing = yield select(
      (state) => state.category.categoryEditing
    );
    yield put(showLoading());
    const resp = yield call(
      updateCategory,
      {
        name,
        photo,
        parrent_id,
      },
      categoryEditing.id
    );
    const page = yield select((state) => state.category.page);
    toastSuccess("Update category thành công");
    yield put(fetchListCategoryAdmin(page));
    yield put(hideModal());
  } catch (e) {
    yield put(updateCategoryFailed(e));
  } finally {
    yield delay(0);
    yield put(hideLoading());
  }
}



function* wacthFetchListSubCategory(action) {
  yield put(showLoading());
  const resp = yield call(getListSub);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListSubCategorySuccess(data));
  } else {
    yield put(fetchListSubCategoryFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}


