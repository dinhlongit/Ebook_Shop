import {connect} from 'react-redux';
import React, { Component } from 'react'
import CartItem from '../../../components/Customer/CartItem/CartItem'
import Shipping  from '../Shipping/Shipping'
import './CartDetailPage.css'



class CartDetailPage extends Component {
     
    render() {
        
        var cartItemss  = JSON.parse(localStorage.getItem('cartItems'));
       
        if (cartItemss == null){
            cartItemss = []
        }
    
        const cartInfor = []
        cartItemss.map( cart =>{
            cartInfor.push({
                product_id : cart.id,
                amount : cart.quantity,
                price : cart.price

            });
        })


        console.log(cartInfor)

        return (
            <>
                    <div className="container" style={{paddingTop: '6rem'}}>
                        <div className="row">
                            <div className="col-sm-9">
                                
                           
                        <div className="card shopping-cart">
                            <div className="card-header bg-dark text-light">
                                <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                                Shipping cart
                                <div className="clearfix"></div>
                            </div>
                            
                            <div className="card-body">
                                {cartItemss.map(cart => (
                                    <CartItem key = {cart.id} {...cart} img={`${cart.photo}`} />
                                ))  }
                             
                            </div>
                            <div className="card-footer">
                                <div className="pull-right" style={{margin: '10px'}}>
                                    <div className="pull-right" style={{margin: '5px'}}>
                                    <h3 className="totalCart">   Thành Tiền : {this.props.totalPrice} đ</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3 shipping">
                        <Shipping cart = {cartInfor} userSigin = {this.props.userSignin}></Shipping>
                        </div>
                             </div>
                    </div>

                    
                </>
        );
    }
}

const mapStateToProps = state => {

   // console.log(state, 'state has changed');
   

    return {
        userSignin : state.user.userSignin,
        cartItems: state.cart.cart,
        cartItemCount: state.cart.cart.reduce((count, curItem) => {
             return count + curItem.quantity;
         }, 0),
        totalPrice: state.cart.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(CartDetailPage);