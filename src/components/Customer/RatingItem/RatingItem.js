import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import { toastError,toastSuccess } from '../../../helpers/toastHelper';


class RatingItem extends React.Component {
    render() {
      return (
        <div>
     <ReactStars
    count={5}
    value={this.props.rating}
    edit={false}
    size={50}
    color2={"#ffd700"}
     />
        </div>
      );
    }
  }
  
export default RatingItem;