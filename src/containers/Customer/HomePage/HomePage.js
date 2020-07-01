import React, { Component } from 'react'
import './HomePage.css'
import ProductList from '../../../components/Customer/ProductList/ProductList'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as productActions from "../../../actions/product";


class HomePage extends Component  {
    
    componentDidMount() {
        const { productActionCreators } = this.props;
        const { fetchListProduct,fetchCategoryProductRequest } = productActionCreators;
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
                  <ProductList  key={1} products={data.filter(item => item.discount > 0)} title="Sản Phẩm Khuyến Mãi" setdd={this.props.setdd}/>
                  <ProductList  key={2} products={data.filter(item => item.status_id == 3)} title="Sản Phẩm Mới" setdd={this.props.setdd}/>
                  <ProductList   key={3} products={data.filter(item => item.category_id == 1)} title="Bí quyết chinh phục điểm cao" setdd={this.props.setdd}/>
                  <ProductList  key={4} products={data.filter(item => item.category_id == 2)} title="CC thần tốc luyện đề 2020" setdd={this.props.setdd}/>
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


