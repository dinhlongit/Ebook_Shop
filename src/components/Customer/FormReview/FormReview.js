import React, { Component } from 'react';
import  RatingItem  from '../../../components/Customer/RatingItem/RatingItem.js'
import ReactStars from "react-rating-stars-component";
import { toastError,toastSuccess } from '../../../helpers/toastHelper';
import * as ProductReviewAction from '../../../actions/review'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class FormReview  extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: "",
            rating : 0
        }
         
       }


    ratingChanged = (newRating) => {

        toastSuccess("Rating " + newRating + "*")
        this.setState({
            rating: newRating
        })



       const { ProductReviewActionCreators } = this.props
       const { addProductReviews } = ProductReviewActionCreators
     
 
        const username = this.props.userSignin.name;
        //dispatch o day
         addProductReviews({
             user_id: this.props.userSignin.id,
             content : this.state.content,
             rating : newRating,
             product_id :this.props.productId
         },username);

     
        
      };

      handleInputChange = (e) =>{
        
        e.preventDefault();
            const name = e.target.name
            const value = e.target.value
            this.setState({
                [name]: value
            })
        
      }
    
    render() { 
        return (
            <div>
               <div class="form-group">
                   <label for="exampleFormControlTextarea1">Comment Of You </label>
                   <textarea onChange={(e) => this.handleInputChange(e)} class="form-control" id="content" name="content" rows="3"></textarea>
                 </div>
                 <div>
     <ReactStars
    count={5}
    value={this.state.rating}
    onChange={(e) => this.ratingChanged(e)}
    size={50}
    color2={"#ffd700"}
     />
        </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    ProductReviewActionCreators: bindActionCreators(ProductReviewAction, dispatch)
})
export default connect(null, mapDispatchToProps)(FormReview)

