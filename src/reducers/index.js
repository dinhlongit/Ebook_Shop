import { combineReducers } from "redux";
import uiReducer from "./ui";
import categoryReducer from "./category";
import homeReducer from "./home";
import loginReducer from "./login";
import productReducer from "./product";
import modalReducer from './modal';
import roleReducer from './role';
import orderReducer from './order';
import producerReducer from './producer';
import cartReducer from './cart';
import {userReducer, userSigninReducer} from "./user";
import reviewReducer from './review';





const rootReducer = combineReducers({
  ui: uiReducer,
  category: categoryReducer,
  home: homeReducer,
  login: loginReducer,
  product:productReducer,
  user:userReducer,
  review:reviewReducer,
  userSignin : userSigninReducer,
  modal: modalReducer,
  role:roleReducer,
  order:orderReducer,
  producer: producerReducer,
  cart : cartReducer
});

export default rootReducer;
