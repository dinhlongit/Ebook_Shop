import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as orderActions from "../../actions/order";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import { update } from "../../actions/user";
import CartDetailPage from '../../containers/Customer/CartDetailPage/CartDetailPage';
import './Profile.css';
import CartItem from '../../components/Customer/CartItem/CartItem'
import {city} from '../../constants/city'
var status ;
function Profile(props) {
  
 
    var userSigin  = props.userLogin;
 
    const [full_name, settfull_name] = useState(userSigin ? userSigin.name : "");
    const [street, setstreet] = useState(userSigin ? userSigin.address : "");
    const [address_id, setaddress_id] = useState(userSigin ? userSigin.address_id : "");
    const [email, setemail] = useState(userSigin ? userSigin.email : "");
    const [phone_number, setphone_number] = useState(userSigin ? userSigin.phone_number : "");
    var cartItems = [];
   
    for ( let i = 0 ; i < props.data.length ; i++ ){
      var order = []
      var total = 0;
     for (let j = 0 ; j < props.data[i].length -1  ; j++){

          const item = {
            id : props.data[i][j].id,
            name : props.data[i][j].name,
            photo : props.data[i][j].photo,
            description : props.data[i][j].description,
            amount : props.data[i][j].amount,
            price : props.data[i][j].price,
            category : props.data[i][j].category,
            discount : props.data[i][j].discount,
            information: props.data[i][j].information,
            category_id: props.data[i][j].category_id,
            producer_id: props.data[i][j].producer_id,
            status_id: props.data[i][j].status_id ,
            quantity : props.data[i][j].pivot.amount
          }
           total += item.quantity * (item.price - (item.price * (item.discount/100)));
           order.push(item);
     }
     order.push(total);
     order.push( props.data[i][props.data[i].length - 1 ].status)
     cartItems.push(order);
   
   }
 

   useEffect(() => { 
    
    const { orderActionCreators } = props;
    const { fetchListUserOrder } = orderActionCreators;
    fetchListUserOrder(userSigin.id);
    }, [])

   const dispatch = useDispatch();
   const submitHandler = (e) => {
    e.preventDefault();
    const name = full_name;
    const address = street;
    dispatch(update({name,address,address_id,email,phone_number},userSigin.id))
  }

  //
 // <form onSubmit={submitHandler} >
   
   return <div>
        {/* <GlobalLoading /> */}
       <br></br>
    <div className="container"> 
     <div className="row">
      <div class="col-sm-4"> 
    <form onSubmit={submitHandler} className="form_profile" >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"><b>Full Name</b></label>
          <input value = {full_name}  type="full_name" className="form-control" id="full_name" aria-describedby="emailHelp"  onChange={(e) => settfull_name(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1"><b>Address</b></label>
          <input value = {street} type="text" className="form-control" id="street" name="street"  onChange={(e) => setstreet(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1"><b>Email</b></label>
          <input value = {userSigin ? userSigin.email : ""} type="text" className="form-control" id="email" name="email"  onChange={(e) => setstreet(e.target.value)} readOnly/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1"><b>Phone Number</b></label>
          <input value = {phone_number} type="text" className="form-control" id="phone_number" name="phone_number"  onChange={(e) => setphone_number(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1"><b>City</b></label>
        <select value = {address_id} className="form-control" id="address_id" name="address_id" onChange={(e) => setaddress_id(e.target.value)}>
        {city.map((item,key)=>{
         return  <option value={item.id}>{item.name}</option>
        })}
      </select>
      <br></br>
        </div>
     

        <button  type="submit" className="btn btn-warning">UPDATE INFO</button>
      </form>
      </div>
       <div className="col-sm-8 order_Manage">

      
      {cartItems.map((value,key) => (
      <div id="accordion">
      <div className="card">
      <div className="card-header">
      <a className="collapsed card-link" data-toggle="collapse" href={`#key${key}`}>
      <h4> 📘 Đơn Hàng {key + 1 } <h3 className = "btn btn-warning center processBtn">{JSON.stringify(value[value.length - 1])} </h3> </h4>
       </a>
     </div>
      <div id={`key${key}`} class="collapse" data-parent="#accordion">
      <div class="card-body">
      {
       value.slice(0,value.length-2).map(cart => (
        <CartItem key = {cart.id} {...cart} img={`${cart.photo}`} />
       ))
       }
       <h3 className = "btn btn-success processBtn" >Tổng Số Tiền : {JSON.stringify(value[value.length - 2])} đ </h3>
      </div>
    </div>
     </div>
     </div>
        ))}
          </div>
      </div>
 </div>
 </div>

}
const mapStateToProps = (state) => {
  return {
    data: state.order.listUserOrder,
    userLogin: state.user.userUpdate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    orderActionCreators: bindActionCreators(orderActions, dispatch),
    updateUser : (user,id) => dispatch(update(user,id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);




