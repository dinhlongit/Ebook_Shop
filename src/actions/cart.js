import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART
} from '../constants/cart'
import {
    toastError,
    toastSuccess
} from '../helpers/toastHelper'

export const addProductToCart = product => {

    toastSuccess("Đã Thêm Vào Giỏ Hàng !");

    console.log(product)
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
};

export const removeProductToCart = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
    }
};

export const incrementCartQuantity = productId => {
    return {
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
};

export const decrementCartQuantity = productId => {
    return {
        type: DECREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
};