import React, {useState, useEffect } from 'react';
import ProductList1 from "../../../components/Customer/ProductList1/ProductList1";
import ProductCard from '../../../components/Customer/ProductCard/ProductCard'
import ProductList from '../../../components/Customer/ProductList/ProductList'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as productActions from "../../../actions/product";
import { fetchCategoryProductRequest } from "../../../actions/product";
import { useDispatch } from 'react-redux';
import ProductGrid from "../../../containers/Customer/ProductGrid/ProductGrid";
import Category from '../../Category';
import './Shop.css'


var title = "";
var listPrice = [
    {price1 : 0,price2 : 50000, name: "Dưới 50.000đ"},
    {price1 : 50000,price2 : 100000, name: "50.000 đ Đến 100.000đ"},
    {price1 : 100000,price2 : 150000, name: "100.000 đ đến 150.000đ"},
    {price1 : 150000,price2 : 1000000000000, name: "Trên 150.000đ"}
]

const Shop = (props) => {

    const [catID,setCategory] = useState('');
    const [pdcID,setProducer] = useState('');
    const [price1,setMinPrice] = useState('');
    const [price2,setMaxPrice] = useState('');
    const [keyword,setKeyword] = useState('');
    const [sort,setSort] = useState('');
    const [limit,setLimit] = useState(9);
    const [page,setPage] = useState(1);


    useEffect(() => {
        handleListProduct(catID,pdcID,price1,price2,page,sort);
      
        }, [])

    const dispatch = useDispatch();
    const handleListProduct = (catID,pdcID,price1,price2,page) =>{
        // console.log(catID)
        // console.log(pdcID)
        dispatch(fetchCategoryProductRequest(catID,pdcID,price1,price2,keyword,sort,limit, page));
    }

    const data = props.data;
    const listCategory =props.listCategory.data;
    props.setdd(false);

   

    return (
       
        <React.Fragment>
         <div className="container" >
         <div className="row">
         <div className="col-sm-3">
         <div className="list-group"  style={{paddingTop: '2.5rem'}}>
        <a href="#" className="list-group-item list-group-item-action active">
        Filter By Category
        </a>
        <ul className="shopping">
        <li><input type="radio"
         onClick={(id) =>{
          title = "Tất Cả";
          handleListProduct('',pdcID,price1,price2,page,sort)}}
         name="categories" 
         className="checkmark" 
         /><label htmlFor="cat">Tất Cả</label>
         </li>
        {
          
         listCategory ? listCategory.map(category => { 
          return (
            <li><input
            onClick={(id) =>{
            title = category.name;
            setCategory(category.id)
            handleListProduct(category.id,pdcID,price1,price2,page,sort)}}
            type="radio" 
            id={category.id}
            name="categories" 
            className="checkmark"
            defaultValue={1} /><label htmlFor="cat1">{category.name}</label>
            </li>
          ) 
        }) : null   
        }
         </ul>   
      </div>
      
      <div className="list-group"  style={{paddingTop: '2.5rem'}}>

        <a href="#" className="list-group-item list-group-item-action active price">
        Filter By Price
        </a>
        <ul className="shopping">
           <li><input type="radio"
              onClick={(id) =>{
                setSort("asc"); 
                handleListProduct(catID,pdcID,price1,price2 ,page,"asc")
             }}
             name="filterprice"
              defaultValue={1} 
              /><label >Giá Cao Đến Thấp</label>
              </li>
           <li><input type="radio" id="2" 
             onClick={(id) =>{
              setSort("desc"); 
              handleListProduct(catID,pdcID,price1,price2 ,page,"desc")
           }}
           name="filterprice" 
           defaultValue={1} 
           /><label>Giá Thấp Đến Cao</label>
           </li>
       </ul>
       
       </div>

       <div className="list-group"  style={{paddingTop: '2.5rem'}}>

        <a href="#" className="list-group-item list-group-item-action active price">
        Filter By Price
        </a>


        <ul className="shopping">
        {
           
           listPrice ? listPrice.map(price => { 
          return (
            <li><input
            onClick={(id) =>{
                setMinPrice(price.price1); 
                setMaxPrice(price.price2);
                handleListProduct(catID,pdcID,price.price1,price.price2 ,page,sort)
        }}
            type="radio" 
            id={price}
            name="price" 
            defaultValue={1} /><label htmlFor="price">{price.name}</label>
            </li>
          ) 
        }) : null   
        }
         </ul>   
      </div>
    


      </div>
  <div className="col-sm-9">

   <ProductGrid key={1} products={data} title={title} setdd={props.setdd}/>  
  <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
     
     {
         props.totalPage.map((value,key) =>{
          return ( 
         <li
         onClick={(id) =>{
            setPage(value); 
            handleListProduct(catID,pdcID,price1,price2,value,sort)
          }}
         className="page-item">
         <a className="page-link">{value}</a></li>)
         })
     }
 
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>

      </div>
       </div>
            </div>
        </React.Fragment>
    );
};


const mapStateToProps = (state) => {
    return {
        data: state.product.listProduct,
        listCategory: state.category.listCategory,
        totalPage: state.product.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        productActionCreators: bindActionCreators(productActions, dispatch),
    };
  };

  
  export default connect(mapStateToProps, mapDispatchToProps)(Shop);
