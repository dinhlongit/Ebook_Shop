import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./../../actions/product";
var linkAnh = "https://ccbook.vn/wordpress/wp-content/uploads/2020/03/";
class Product extends Component {

    componentDidMount() {
        const { productActionCreators } = this.props;
        const { fetchListProduct } = productActionCreators;
        fetchListProduct();
      }
    

  render() {

    const { data } = this.props;
    console.log(data);

    return (
      <main>
        <div className="container-fluid">
          <h1 className="mt-4">Product</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <a href="index.html">Admin</a>
            </li>
            <li className="breadcrumb-item active">Product</li>
          </ol>
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-table mr-1" />
              DataTable Product
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing={0}
                >
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Photo</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Discount</th>
                      <th>Producer</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Photo</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Discount</th>
                      <th>Producer</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {
                        data.map((value,index)=>{
                            return (
                                <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>
                                <img className="img-flud" src={linkAnh+value.photo}   />
                                </td>
                                <td>{value.amount}</td>
                                <td>{value.category}</td>
                                <td>{value.price}</td>
                                <td>{value.discount}</td>
                                <td>{value.producer}</td>
                                
                              </tr>
                            )
                        })
                    }


                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      data: state.product.listProduct,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        productActionCreators: bindActionCreators(productActions, dispatch),
      // modalActionCreators: bindActionCreators(modalActions, dispatch),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Product);
