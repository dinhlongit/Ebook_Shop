import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "./../../actions/category";

class Category extends Component {
  componentDidMount() {
    const { categoryActionCreators } = this.props;
    const { fetchListCategory } = categoryActionCreators;
    fetchListCategory();
  }

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <div>
                {
                  data.map((skill,index) => {
                    
                    return (
                      <div  key={index}>
                        <h4>{skill.name}</h4>
                        <ul>
                     
                          {
                            skill.children_categories.map((skillDetail,index) => {
                              return (
                                <div key={index}>
                                  <li>
                              
                                    {skillDetail.name}
                                  </li>
                                         <ul>
                                           {
                                             skillDetail.categories.map((cc,index)=>{
                                               return (
                                                <li key={index}>
                                         
                                                {cc.name}
                                             
                                              </li>
                                               )
                                             })
                                           }
                                           </ul>
                                 
                                           </div>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.category.listCategory.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    categoryActionCreators: bindActionCreators(categoryActions, dispatch),
    // modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
