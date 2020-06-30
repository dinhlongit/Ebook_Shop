import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { submitOrders } from "../../../actions/order";

function Shipping(props) {
  
   
  
   // const [country, setCountry] = useState('');
   const [full_name, settfull_name] = useState(props.userSigin ? props.userSigin.name : "");
   const [street, setstreet] = useState(props.userSigin ? props.userSigin.address : "");
   const [address_id, setaddress_id] = useState(props.userSigin ? props.userSigin.address_id : 1);
   const [phone_number, setphone_number] = useState(props.userSigin ? props.userSigin.phone_number : "");


   const dispatch = useDispatch();
   var info = {full_name,street,address_id, phone_number};
   console.log(props.userSigin);

   if (props.userSigin){
      info.user_id = props.userSigin.id;
   }
   const submitHandler = (e) => {
    e.preventDefault();
    const cartItems = props.cart;
    const data = {
        cart : cartItems,
        transaction_info : info
    };
    
    console.log(data)
    dispatch(submitOrders(data));
    
  }
   


   return <div>
       <br></br>
   
    <form onSubmit={submitHandler} >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"><b>Full Name</b></label>
          <input value = {full_name}  type="full_name" className="form-control" id="full_name" aria-describedby="emailHelp"  onChange={(e) => settfull_name(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1"><b>Address</b></label>
          <input value = {street} type="text" className="form-control" id="street" name="street"  onChange={(e) => setstreet(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1"><b>Phone Number</b></label>
          <input value = {phone_number} type="text" className="form-control" id="phone_number" name="phone_number"  onChange={(e) => setphone_number(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1"><b>City</b></label>
        <select value = {address_id} className="form-control" id="address_id" name="address_id" onChange={(e) => setaddress_id(e.target.value)}>
        <option value="1">Hue</option>
        <option value="2">Da Nang</option>
        <option value="3">Quang Tri</option>
        <option value="4">Thua Thien Hue</option>
      </select>
      <br></br>
        </div>


        <button type="submit" className="btn btn-warning">CHECK OUT</button>
      </form>
 </div>


}
export default Shipping;



