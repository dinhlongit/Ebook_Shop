import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductCard from '../ProductCard/ProductCard'


export const brandFilter = (arr, brand) => {
    if(!brand) return arr;

    return arr.filter(product => brand.includes(product.brand));
};


class ProductList1 extends Component {


    render(){
        console.log(this.props.products);
        return(
            <div className="col-lg-9">
             <div className="row mb-3">
                    <div className="col-12 d-none d-lg-block d-xl-block">
                        <div className="card ">
                            <div className="card-header d-flex justify-content-end">
                                <span className="mr-3">Change Layout: </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                
             
                </div>
                </div>

            </div>
        );
    }



}

const mapStateToProps = (state) => {
    return {
        data: state.product.listProduct,
    }
}


export default connect(mapStateToProps, null)(ProductList1);
