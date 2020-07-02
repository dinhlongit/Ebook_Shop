import React, { Component } from 'react'
import img from '../../../img/product-1.png'
import { Link } from 'react-router-dom'
import './ProductDetail.css'
import {useState} from 'react';
import Carousel from 'react-multi-carousel'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as productActions from "../../../actions/product";
import * as reviewtActions from "../../../actions/review";
import * as cartActions from "../../../actions/product";
import {SERVER_IMAGE} from '../../../constants'
import { addProductToCart } from "../../../actions/cart";
import RatingItem from "../../../components/Customer/RatingItem/RatingItem"
import ReactStars from "react-rating-stars-component";
import { toastError,toastSuccess } from '../../../helpers/toastHelper';
import  UserReview   from '../../../components/Customer/UserReview/UserReview';
import FormReview from '../../../components/Customer/FormReview/FormReview';
import {priceformat} from '../../../constants/priceformat'


class ProductDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            rating : "",
            content : ""
        }
        this.ratingChanged = this.ratingChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const { productActionCreators,  } = this.props;
        const { fetchDetailProductRequest } = productActionCreators;
        fetchDetailProductRequest(this.props.match.params.id);

        const { reviewActionCreators  } = this.props;
        const { fetchListReviewProduct } = reviewActionCreators;
        fetchListReviewProduct(this.props.match.params.id);
        
      

 
    }
    handleAdd = (product) =>{
        console.log(product)
        this.props.addTocart(product)
    }

    handleChangeCount = (i) => {
        return () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + i
                }
            })
        }
    }
   

    ratingChanged = (newRating) => {
        this.setState({
            rating: newRating,
          });
          toastSuccess("Cảm Ơn Bạn Đã Đánh Giá " +newRating + "*")
      };

    handleSubmit(e){
        e.preventDefault();
    }



    handleChange(event) {

        const target = event.target;
        const value = target.value;
        this.setState({
          content: target.value,
        });
        
      }
    render() {
         
        const {data} = this.props;
    
        const { id, name, photo, description, amount, price, discount, information, producer, category, rating, amount_rating} = data;

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        return (
            <div className='container add_border'>
                <div className="row">
                    <div className="col-10 col-md-6 img_container">
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            autoPlaySpeed={1000}
                            renderDotsOutside={true}
                            responsive={responsive}
                            infinite={true}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            itemClass="carousel-item-padding-40-px"
                        >
                            <img src={`${SERVER_IMAGE}${photo}`} className="img-fluid" alt="product" />
                            <img src={`${SERVER_IMAGE}${photo}`} className="img-fluid" alt="product" />
                            <img src={`${SERVER_IMAGE}${photo}`} className="img-fluid" alt="product" />
                            <img src={`${SERVER_IMAGE}${photo}`} className="img-fluid" alt="product" />
                            <img src={`${SERVER_IMAGE}${photo}` } className="img-fluid" alt="product" />
                        </Carousel>
               
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <div className='col-lg-12 col-10 product_title add_line_after'>
                            <p className='name'>{name}</p>
                            
                             {rating == null ?  <RatingItem rating={5}></RatingItem> : <RatingItem rating={rating}></RatingItem>}
                            <p className="text-title text-muted mt-3 mb-2 secondary">
                               Nhà Xuất Bản  : <span className="text-uppercase producer">{producer}</span>
                            </p>
                        </div>
                        <div className='col-lg-12 col-10 add_line_after description'>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                Mô tả :
                            </p>
                            <p className="">
                                {information}
                            </p>
                        </div>
                        <div className='col-lg-12 col-10 product_price'>
                            <p className='text-muted price_secondary'>
                                Giá :
                                <span className='price'>{price === undefined ? null : priceformat((price - (price * (discount/100))))}</span>
                                <span className='price notdiscount'>{price === undefined ? null : priceformat(price)}</span>

                            </p>
                        </div>
                        <div className='col-lg-12 col-10 in_stock'>
                            <p className='text-muted'>
                                Còn     : <span>{amount}</span>
                            </p>
                        </div>
                        <div className='col-lg-12 col-10 product_btns'>
                            <div className=''>
                                {/* <div className="pro-qty">
                                    <div className="dec qtybtn" onClick={this.state.count > 1 ? this.handleChangeCount(-1) : null}>
                                        -
                                    </div>
                                    <div className="count">{this.state.count}</div>
                                    <div className="inc qtybtn" onClick={this.state.count < amount ? this.handleChangeCount(1) : null}>
                                        +
                                    </div>
                                </div>   */}
                              
                                    

                                <button className='button-second'
                                 onClick={() => {
                                    data.quantity = 1;
                                    this.handleAdd(data)
                                }}
                                >
                                    Add to cart
                                    
                            </button>
                                <Link to="/">
                                    <button className='button-main'>
                                        Continue shopping
                                </button>
                                </Link>
                            </div>
                     

                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Review</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>{information}</p>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Rating</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className='col-12'>
            
               
 
               {this.props.userSignin ? <FormReview productId = {this.props.match.params.id} userSignin = {this.props.userSignin}></FormReview> : null}
                    
        
                </div>
             </div>

             <div className='row'>
                    <div className='col-12'>
                        <div className="product__details__tab">
             <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Comment</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                 {this.props.listReviewProduct == null ?[] : this.props.listReviewProduct.map((review)=>{
                    return (
                        <UserReview review={review} ></UserReview>
                    )

                 })}
               
               
             </div>
                
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        data: state.product.detailProduct,
        listReviewProduct : state.review.listReview,
        userSignin : state.user.userSignin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        productActionCreators: bindActionCreators(productActions, dispatch),
        reviewActionCreators: bindActionCreators(reviewtActions, dispatch),
        addTocart : (product) => dispatch(addProductToCart(product)) 
    
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);


