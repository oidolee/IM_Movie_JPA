import React, { Component } from "react";
import style from "../../styles/page_3/Store_Payment_Finish.css";
import { withRouter } from 'react-router-dom';


class Store_Payment_Finish extends Component {

handlePayment = () => {
    this.props.history.push("/MyPage_Store");
};

handleStore = () => {
  this.props.history.push("/page3");
};
handleHome = () => {
  this.props.history.push("/");
};
  render() {


    return (
      <div className={`Store_Payment_Finish ${style.Store_Payment_Finish}`}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>결제가 성공적으로 완료되었습니다.</h3>
            <div className={`Store_Payment_Finish_btn_wrap ${style.Store_Payment_Finish_btn_wrap}`}>
              <button className="Store_Payment_Finish_btn_col1" onClick={this.handlePayment}>결제내역</button>
              <button className="Store_Payment_Finish_btn_col2" onClick={this.handleStore}>스토어 바로가기</button>
              <button className="Store_Payment_Finish_btn_col3" onClick={this.handleHome}>홈으로 바로가기</button>
            </div>
      </div>
    );
  }
}

export default withRouter(Store_Payment_Finish);