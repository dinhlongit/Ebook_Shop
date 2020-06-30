import * as reviewConstants from "../constants/review";
import {getProductReview} from '../apis/review'
import {addProductReview} from '../apis/review'


  export const fetchListReviewProduct = (id) => {
    return (dispatch) =>{
    return getProductReview(id).then(res=>{
        const {status, data} = res;
        dispatch(fetchListReviewProductSuccess(data))
    });
  }
 };
 
 export const fetchListReviewProductSuccess = data => {
 
 return {
  type: reviewConstants.FETCH_REVIEW_PRODUCT_SUCCESS,
  payload: {
    data,
  },
 };
 };


 export const addProductReviews = (review,username) => {
     console.log(review)
     return (dispatch) =>{
        return addProductReview(review).then(res=>{
             
            const {status, data} = res;
             const datas = {
                 name : username,
                 content : data.data.content,
                 rating : data.data.rating,
             }
            dispatch(addProductReviewsSuccess(datas))
        });

     }
    
}


export const addProductReviewsSuccess = data => {
    return {
     type: reviewConstants.ADD_REVIEW_PRODUCT_SUCCESS,
     payload: {
       data,
     },
    };
    };






  



