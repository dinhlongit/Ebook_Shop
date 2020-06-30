import React, { Component } from 'react';
import './CategoryList.css';
import { Link } from 'react-router-dom';
export default class CategoryList extends Component {
    render() {
        
        return (
            <ul style={this.props.open ? {} : { transform: 'scaleY(0)', border: 'none' }}>
                {
                    this.props.categories.map((val) => {
                        return (
                            <li key={val.id}>
                                <div className='title'>📙 {val.name}</div>
                                <div className='dropdown_container row'>
                                    {
                                        val.children_categories.map((val1) => {
                                            return (
                                                <div key={val1.name} className='dropdown_col col-3'>
                                                    <div className='title'>{val1.name}</div>
                                                    <ul>
                                                        {val1.categories.map((val2) => {
                                                            return (<li key = {val2.name} className='hover_link'><Link to='/category/'>{val2.name}</Link></li>)
                                                        })}
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
