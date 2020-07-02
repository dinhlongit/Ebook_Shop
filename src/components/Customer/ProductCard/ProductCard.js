import React, { Component } from 'react'
import {useState} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-brands-svg-icons";
import { SERVER_IMAGE } from '../../../constants'
import { addProductToCart } from "../../../actions/cart";
import {priceformat} from '../../../constants/priceformat'

class ProductCard extends Component {
    render() {
        const { id, name, photo, description, price, discount} = this.props.product;
        let inCart = false;
        return (

            <div className='col-lg-12 abc'>
                <div className='card'>
                    <div
                        className='img-container p-5'
                        onClick={this.handleProductClick}
                    >
                        <Link to={`/productdetail/${id}`} onClick={() => this.props.setdd(false)}>
                            <img src={`${SERVER_IMAGE}${photo}`} alt={name} className='card-img-top' />
                        </Link>
                        <label className="btn btn-warning discount">- {this.props.product.discount}%</label> 
                        <div className='btn-bar'>
                            {inCart ? (
                                <div 
                                    className='incart'
                                    onClick={() => {
                                        console.log('disable')
                                    }}
                                >
                                    <p className='text-capitalize mb-0' disabled>
                                        {" "}
                                        in cart
                                    </p>

                                </div>
                            ) : (
                                    <button
                                        className='cart-btn'
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            const {product} = this.props;
                                            product.quantity = 1;
                                            this.props.dispatch(addProductToCart(product))
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faCartPlus} />

                                    </button>
                                )}

                               
                        </div>
                    </div>

                </div>
                <div className='product_text'>
                    <h4 className='price'>{price === undefined ? null : priceformat((price - (price * (discount/100))))}</h4>
                    <span className='price notdiscount'>{price === undefined ? null : priceformat(price)}</span>
                    <h6 className='name'>{name}</h6>
                </div>
            </div>

        )
    }
}




export default connect()(ProductCard);
