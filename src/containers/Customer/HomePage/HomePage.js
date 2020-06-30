import React, { Component } from 'react'
import './HomePage.css'
import ProductList from '../../../components/Customer/ProductList/ProductList'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as productActions from "../../../actions/product";

class HomePage extends Component  {
    
    componentDidMount() {
        const { productActionCreators } = this.props;
        const { fetchListProduct } = productActionCreators;
        fetchListProduct();
        
      }

    render() {
        this.props.setdd(true);
        const {data} = this.props;
        let tmp_categories = []
        if (this.props.child_categories) {
            tmp_categories = this.props.child_categories

        }
        return (
           
            <div className='container'>
                <div className='row'>
                
                    <div className='col-lg-3'></div>
                    <div className='col-lg-9'>
                        <div className='banner set-bg'>
                        </div>
                    </div>

                </div> 
                <div className='row mt-5'>
                    <img src="https://ccbook.vn/wordpress/wp-content/uploads/2020/01/banner_ngang.png"></img>
                </div>
                  <ProductList  key={1} products={data} title="Sản Phẩm Khuyến Mãi" setdd={this.props.setdd}/>
                  <ProductList  key={2} products={data} title="Sản Phẩm Mới" setdd={this.props.setdd}/>
                  <ProductList   key={3} products={data} title="Bí quyết chinh phục điểm cao" setdd={this.props.setdd}/>
                  <ProductList  key={4} products={data} title="CC Thần Tốc Luyện Đề" setdd={this.props.setdd}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.product.listProduct,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        productActionCreators: bindActionCreators(productActions, dispatch),
    };
  };

  
  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


