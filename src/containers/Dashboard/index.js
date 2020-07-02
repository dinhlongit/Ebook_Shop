import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as reportActions from "./../../actions/reports";

class Dashboard extends Component {
  componentDidMount() {
    const { reportActionCreators } = this.props;
    const { fetchListReport } = reportActionCreators;
    fetchListReport(7);
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="mt-4">Dashboard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <div className="container-fluid">

        <div className="row justify-content-between">
    
          <div className="col-xl-2 col-md-6 ">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">Chưa xử lý</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <p>Tổng tiền:</p>
                <p>{this.props.data[0][0]["money_total"]}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6">
            <div className="card bg-success text-white mb-4">
              <div className="card-body">Đã đóng gói</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <p>Tổng tiền:</p>
                <p>{this.props.data[0][1]["money_total"]}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6">
            <div className="card bg-info text-white mb-4">
              <div className="card-body">Đã giao</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <p>Tổng tiền:</p>
                <p>{this.props.data[0][2]["money_total"]}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6">
            <div className="card bg-danger text-white mb-4">
              <div className="card-body">Đã hũy</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <p>Tổng tiền:</p>
                <p>{this.props.data[0][3]["money_total"]}</p>
              </div>
            </div>
          </div>
          

          <div className="col-xl-2 col-md-6">
            <div className="card bg-secondary text-white mb-4">
              <div className="card-body">Đang giao</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <p>Tổng tiền:</p>
                <p>{this.props.data[0][4]["money_total"]}</p>
              </div>
            </div>
          </div>
        </div>

       

        <div className="row justify-content-between">
          <div className="col-xl-2 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">Chưa xử lý</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <p>Số order:</p>
                <p>{this.props.data[1][0]["number_order"]}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6">
            <div className="card bg-success text-white mb-4">
              <div className="card-body">Đã đóng gói</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <p>Số order:</p>
                <p>{this.props.data[1][1]["number_order"]}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6">
            <div className="card bg-info text-white mb-4">
              <div className="card-body">Đã giao</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <p>Số order:</p>
                <p>{this.props.data[1][2]["number_order"]}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6">
            <div className="card bg-danger text-white mb-4">
              <div className="card-body">Đã hũy</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <p>Số order:</p>
                <p>{this.props.data[1][3]["number_order"]}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6">
            <div className="card bg-secondary text-white mb-4">
              <div className="card-body">Đang giao</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <p>Số order:</p>
                <p>{this.props.data[1][4]["number_order"]}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.report.listReport,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    reportActionCreators: bindActionCreators(reportActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
