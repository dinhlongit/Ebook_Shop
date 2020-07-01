import React, { Component } from 'react'
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default class ProductList extends Component {

    render() {
      //  console.log(this.props.products);
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                slidesToSlide: 2 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        return (
            <section className='featured'>
                  
                <div className='container add_shadow'>
                    <div className='row'>
                        <div className='col-lg-12'>
                                
                            <div className='list_title'>
                                <h2>{this.props.title}</h2>
                            </div>
                        </div>
                    </div>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                    //     autoPlay={this.props.deviceType !== "mobile" ? true : false}
                   //      autoPlaySpeed={3000}
                        renderDotsOutside = {true}
                        responsive={responsive}
                        infinite={true}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="carousel-item-padding-40-px"
                    >
                        {this.props.products ? this.props.products.map(product => {
                            return <ProductCard  product={product} key = {product.id} setdd={this.props.setdd}/>
                        }) : "error"}
                    </Carousel>



                </div>
            </section>
        )
    }
}
