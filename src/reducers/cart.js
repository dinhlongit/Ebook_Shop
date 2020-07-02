import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART
} from '../constants/cart'

         //     var cartItems  = JSON.parse(localStorage.getItem('cartItems'));
        //     localStorage.setItem('cartItems', JSON.stringify(this.props.cartItems));
    const initialState = {
        cart: JSON.parse(localStorage.getItem('cartItems')) || []
    };
    
    
    const cartReducer = (state = initialState, action ) => {
        let updatedCart;
        let updatedItemIndex;
    
        switch (action.type) {
            case INCREMENT_CART_ITEM_QUANTITY:
                updatedCart = [...state.cart];
                updatedItemIndex = updatedCart.findIndex(
                    item => item.id === action.payload
                );
    
                const incrementedItem = {
                    ...updatedCart[updatedItemIndex]
                };
    
                incrementedItem.quantity++;
    
                updatedCart[updatedItemIndex] = incrementedItem;
    
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));
                return {...state, cart: updatedCart};
    
            case DECREMENT_CART_ITEM_QUANTITY:
                updatedCart = [...state.cart];
                updatedItemIndex = updatedCart.findIndex(
                    item => item.id === action.payload
                );
    
                const decrementedItem = {
                    ...updatedCart[updatedItemIndex]
                };
    
                decrementedItem.quantity--;
    
                updatedCart[updatedItemIndex] = decrementedItem;
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));
                return {...state, cart: updatedCart};
    
            case ADD_PRODUCT_TO_CART:
               // const xx = action.payload.quantity = 1
                
             //   console.log(updatedCart)


                updatedCart = [...state.cart];
                 
                updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);
    
                if(updatedItemIndex < 0) {
                    updatedCart.push({...action.payload});
                } else {
                    const updatedItem = {
                        ...updatedCart[updatedItemIndex]
                    };
    
                    updatedItem.quantity++;
                    console.log(action.payload.amount)
                    console.log(updatedItem.quantity++)
                    if (updatedItem.quantity >= action.payload.amount){
                        updatedItem.quantity = action.payload.amount;
                    }
                  //  console.log(updatedItem)
                    updatedCart[updatedItemIndex] = updatedItem;
                }
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));
                return {...state, cart: updatedCart};

                
            case REMOVE_PRODUCT_FROM_CART:
                updatedCart = [...state.cart];
                updatedItemIndex = updatedCart.findIndex(
                    item => item.id === action.payload
                );
    
                updatedCart.splice(updatedItemIndex, 1);
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));
                return {...state, cart: updatedCart};
            default:
                return state;
    
        }
    };
    
    export default cartReducer;