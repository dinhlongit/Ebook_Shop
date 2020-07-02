import Category from '../containers/Category';
import Dashboard from '../containers/Dashboard';
import Product from '../containers/Product';
import User from '../containers/User';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Main from '../containers/Customer/Main'
import Order from '../containers/Order';
import Role from '../containers/Role';
import Producer from '../containers/Producer';


export const API_ENDPOINT = 'http://127.0.0.1:8000/api';
export const SERVER_IMAGE = 'http://localhost:8000/upload/product/';

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    name: 'Dashboard',
    path: '/admin',
    exact: true,
    component: Dashboard,
  },
  {
    name: 'Category',
    path: '/admin/category',
    exact: false,
    component: Category,
  },
  {
    name: 'Product',
    path: '/admin/product',
    exact: false,
    component: Product,
  },
  {
    name: 'User',
    path: '/admin/user',
    exact: false,
    component: User,
  },
  {
    name: 'Order',
    path: '/admin/order',
    exact: false,
    component: Order,
  },
  {
    name: 'Role',
    path: '/admin/role',
    exact: false,
    component: Role,
  },
  {
    name: 'Producer',
    path: '/admin/produder',
    exact: false,
    component: Producer,
  }
];

export const ROUTES = [
  {
    name: 'home',
    path: '/',
    //exact: true,
    component: Main,
  },
  {
    name: 'Trang Login',
    path: '/login',

    component: Login,
  },
  {
    name: 'Trang Register',
    path: '/register',
    
    component: Register,
  }
];
