import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
class UserReview  extends Component {
    render() { 
        return (
                 <div className="col-sm-12 mt-3">
                 <div>
        <ReactStars
         count={this.props.review.rating}
         value={5}
         onChange={this.ratingChanged}
         size={50}
         color2={"#ffd700"}
          />
        </div>
                <b>{this.props.review.content} </b>
                 <span className="badge badge-success" >{this.props.review.name}</span>
                </div>

          
        );
    }
}
 
export default UserReview;