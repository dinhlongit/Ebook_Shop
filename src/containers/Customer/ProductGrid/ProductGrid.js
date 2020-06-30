import React, { Component } from 'react'
import ProducCard from '../../../components/Customer/ProductCard/ProductCard'
import './ProductGrid.css'
export default class ProductGrid extends Component {
    render() {
        return (
            <div className='row'>
                <div className='container add_shadow'>
                    <div className='row'>
                        <div className='col-lg-12'>
                                
                            <div className='list_title'>
                                <h4>{this.props.title}</h4>
                            </div>
                        </div>
                {this.props.products.map(product => {
                    return (
                        <div className='col-lg-4 col-md-6 col-sm-6 add_margin'>
                            <ProducCard product={product} setdd={() => {}}></ProducCard>
                        </div>
                    )
                })}
         </div>
            </div>
            </div>
        )
    }
}