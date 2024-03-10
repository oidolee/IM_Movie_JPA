import React, { Component } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Payment.css";
import Res_event from "../../assets/page_1/event.png";
import Res_movie from "../../assets/page_1/movie.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";
import Checkout from "../../pages/Checkout";
import Modal from "react-modal";

class Reservation_Payment extends Component {
  state = {
    isPointClicked: false,
    showModal: false,
  };

  handlePaymentClick = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handlePointClick = () => {
    this.setState((prevState) => ({
      isPointClicked: !prevState.isPointClicked,
    }));
  };

  render() {
    const sysdate = moment().format("YYYY-MM-DD");

    return (
      <div className={`Res_Payment ${style.Res_Payment}`}>
        <div className="Res_payment_content">
          <div className="Res_menu1">
            <ul>
              <li className="step" id="step2">
                <a href="#Res_step01">
                  <strong>
                    <span>
                      01
                      <br />
                      상영시간
                    </span>
                  </strong>
                  <div className="step_content2">
                    <dl>
                      <dt>선택한 영화 제목</dt>
                      <dd></dd>
                      <dt>선택한 상영관</dt>
                      <dd></dd>
                      <dt>선택한 상영 날짜</dt>
                      <dd></dd>
                      <dt>선택한 상영 시간</dt>
                      <dd></dd>
                    </dl>
                  </div>
                </a>
              </li>
              <li className="step" id="step2">
                <a href="#Res_step02">
                  <strong>
                    <span>
                      02
                      <br />
                      인원/좌석
                    </span>
                  </strong>
                  <div className="step_content2">
                    <dl>
                      <dt>인원</dt>
                      <dd></dd>
                      <dt>좌석</dt>
                      <dd></dd>
                    </dl>
                  </div>
                </a>
              </li>
              <li className="step" id="step1">
                <a href="#Res_step03">
                  <strong>
                    <span>
                      03
                      <br />
                      결제
                    </span>
                  </strong>
                  <div className="step_content">
                    <dl>
                      <dt>티켓금액</dt>
                      <dd></dd>
                      <dt>할인금액</dt>
                      <dd></dd>
                      <dt>총합계</dt>
                      <dd></dd>
                    </dl>
                  </div>
                </a>
              </li>
              <li className="step">
                <a href="#Res_step04">
                  <strong>
                    <span>
                      04
                      <br />
                      결제완료
                    </span>
                  </strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="Res_menu2">
            <ul>
              <div className="Res_tit">
                <li>영화선택</li>
              </div>
              <div className="menu2">
                <ul>
                  <li className="menu2_main">
                    <img src={Res_movie} className="movie_img" />
                  </li>
                  <div className="menu2_sub">
                    <ul>
                      <li>
                        <img src={Res_img15} className="age_img" />
                        <strong>파묘</strong>
                      </li>
                      <li>일시 2024-03-07 (목) 17:05 ~ 19~29</li>
                      <li>영화관 건대입구</li>
                      <li>인원 성인1</li>
                      <li>좌석 D3</li>
                    </ul>
                  </div>
                  <a href="/page3">
                    <img src={Res_event} className="event_img" />
                  </a>
                </ul>
              </div>
            </ul>
          </div>
          <div className="Res_menu3">
            <ul>
              <div className="Res_tit">
                <li>결제수단</li>
              </div>
              <li>
                <div className="menu3">
                  <ul>
                    <li className="menu3_main">최종 결제수단</li>
                    <li>
                      <button
                        className="payment_seat"
                        onClick={this.handlePaymentClick}
                      >
                        결제수단
                      </button>
                      <Modal
                        isOpen={this.state.showModal}
                        onRequestClose={this.handleCloseModal}
                        className="Modal"
                        overlayClassName="Overlay"
                        handleCloseModal={this.handleCloseModal}
                      >
                        <div className={`Payment ${style.Payment}`}>
                          <Checkout />
                          <button
                            className="Payment_close"
                            onClick={this.handleCloseModal}
                          >
                            취소
                          </button>
                        </div>
                      </Modal>
                      <button
                        className="point_seat"
                        onClick={this.handlePointClick}
                      >
                        포인트
                      </button>
                    </li>
                    <div className="point_seat_main">
                      <ul className="point_seat_sub">
                        {this.state.isPointClicked && (
                          <div className="usePoint">
                            <li>회원ID : </li>
                            <li>잔여 포인트 : </li>
                            <li>
                              사용 포인트 :{" "}
                              <input
                                type="text"
                                placeholder="사용할 포인트 입력하세요."
                              />
                            </li>
                            <li>
                              <button
                                className="usePointBtn"
                                onClick={this.handlePointClick}
                              >
                                사용
                              </button>
                            </li>
                          </div>
                        )}
                      </ul>
                    </div>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="Res_menu4">
            <ul>
              <div className="Res_tit">
                <li>결제하기</li>
              </div>
              <li>
                <div className="menu4">
                  <ul className="menu4_top">
                    <li>예약정보</li>
                    <li>카드</li>
                    <li>금액</li>
                    <li>등등</li>
                  </ul>
                  <ul className="menu4_bottom">
                    <li className="paymentBtn">
                      <span>상품금액</span>
                    </li>
                    <li className="paymentBtn">할인금액</li>
                    <li className="paymentBtn">결제금액</li>
                    <li>
                      <button className="paymentBtn_total">결제하기</button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation_Payment;
