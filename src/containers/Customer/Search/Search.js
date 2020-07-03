import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import './Search.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchSearchProductRequest} from "../../../actions/product";
import axios from 'axios';

var link = "/productdetail/";  
var imageLink = "http://localhost:8000/upload/product/";  

  class Search extends React.Component {
   

    constructor() {
      super();
      this.state = {
        value: '',
        suggestions: []
      };
    } 

    handleFetchListSearch = (keyword) =>{
      this.props.fetchListSearch(keyword);
  }
  retrieveDataAsynchronously = (searchText) => {
    let url = "http://127.0.0.1:8000/api/filter/products?keyword="+searchText;
    axios.get(url)
    .then(response => {
      this.setState({
        suggestions: response.data
      });
    })
    .catch(error => {
      console.error(error);
    })
  }
   getSuggestionValue = suggestion => suggestion.name;
   renderSuggestion = suggestion => (
     <div>
  <Link to={`${link}${suggestion.id}`}>
  <img src={`${imageLink}${suggestion.photo}`} className="image_search">
  </img>  
  {suggestion.name}
  </Link>
  </div>
  );
  
    onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
 
    };

    onSuggestionsFetchRequested = ({ value }) => {
      this.retrieveDataAsynchronously(value)
    };

    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
    this.props.setdd(false);
    const { value, suggestions } = this.state;
    //var languages = this.props.data;

      // Autosuggest will pass through all these props to the input.
      const inputProps = {
        placeholder: 'What do you want to find ?',
        value,
        onChange: this.onChange
      };
  
      // Finally, render it!
      return (
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      );
    }
  }


const mapStateToProps = (state) => {
    return {
        data: state.product.listProduct,
         dataSearch: state.product.listProductSearch,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListSearch : (keyword) => dispatch(fetchSearchProductRequest(keyword))
  };
};



  export default connect(mapStateToProps, mapDispatchToProps)(Search);