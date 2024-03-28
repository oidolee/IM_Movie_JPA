import React, { Component } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Payment.css";
import Res_event from "../../assets/page_1/event.png";
import Res_img15 from "../../assets/page_1/15.jpg";
import Checkout from "../page_1/Checkout";
import Modal from "react-modal";
import { withRouter } from "react-router-dom";
import ApiService from "../../ApiService";
import { Cookies, useCookies } from "react-cookie";
import StoreGift from "./StoreGift";

const localHost = "http://localhost:3000/"; // 로컬
const proHost = "http://3.39.155.236:3000/"; // 개벌

let serverUrl;

if (process.env.NODE_ENV === "development") {
  serverUrl = localHost;
} else {
  serverUrl = proHost;
}

console.log("현재 베이스 주소");
console.log(serverUrl);

class Reservation_Payment_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      itemName: "",
      itemImage: "",
      totalQuantity: "",
      totalPrice: "",
      email: "",
      itemCode: "",
      userName: "",
    };
  }
  

  componentDidMount() {
    const cookies = new Cookies();
    const email = cookies.get("email"); // 쿠키에서 이메일 정보 가져오기
    if (email) {
      this.setState({ email });
    }

    const name = cookies.get("idName"); // 쿠키에서 이메일 정보 가져오기
    if (name) {
      this.setState({ name });
    }
    console.log("name", name);

    console.log("name", name);
    const storedData = localStorage.getItem("sampleID");

    if (storedData) {
      const {
        totalQuantity,
        totalPrice,
        itemCode,
        itemName,
        itemImage, // 이미 추출된 itemImage 변수를 사용
      } = JSON.parse(storedData);

      console.log("itemImage1");
      console.log(itemImage);

      this.setState({ itemImage: itemImage }); // 최초 한 번만 setState() 호출
      this.setState({ itemName: itemName });
      this.setState({ totalQuantity: totalQuantity });
      this.setState({ totalPrice: totalPrice });
    } else {
      console.error("저장된 데이터가 없습니다.");
      // 저장된 데이터가 없는 경우 처리할 작업을 수행합니다.
    }
  }

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

  handlePayment = () => {
   
    const { email } = this.state;

    // ApiService에 쿠키로부터 가져온 이메일 정보 전달
    ApiService.addStoreOrder({ email })
      .then((response) => {
        console.log("결제 데이터 전송 성공:", response.data);
        // 데이터 전송 후 필요한 작업을 수행합니다.
        // 예를 들어 페이지 이동 등...
        this.props.history.push("/page_3/Store_Payment_Finish");
      })
      .catch((error) => {
        console.error("결제 데이터 전송 실패:", error);
        // 실패 시 적절한 에러 처리를 수행합니다.
      });

    // localStorage에서 저장된 데이터 가져오기
    const storedData = localStorage.getItem("sampleID");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log("R p store==============", parsedData);
    } else {
      console.log("저장된 데이터가 없습니다.");
    }

    if (storedData) {
      const {
        recipientNumber,
        sender,
        message,
        totalQuantity,
        totalPrice,
        itemCode,
        itemName,
        name,
        email,
        userName,
        detailRegDate,
        ic_code
      } = JSON.parse(storedData);


      //쿠폰등록 시작
      // 중복되지 않는 랜덤 코드 생성 함수
      const generateUniqueRandomCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const existingCodes = new Set(); // 중복 코드를 추적하기 위한 Set

        do {
          result = '';
          for (let i = 0; i < 8; i++) { // 코드 길이는 8로 가정
            result += characters.charAt(Math.floor(Math.random() * characters.length));
          }
        } while (existingCodes.has(result)); // 생성된 코드가 중복될 경우 다시 생성

        existingCodes.add(result); // 생성된 코드를 Set에 추가하여 중복을 피함
        return result;
      };

      // 오늘 날짜
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
      let day = today.getDate();

      // 오늘로부터 일주일 후의 날짜 계산
      let oneWeekLater = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000));
      let expiredYear = oneWeekLater.getFullYear();
      let expiredMonth = oneWeekLater.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
      let expiredDay = oneWeekLater.getDate();

      // 날짜를 원하는 형식으로 조합하되 두 자리로 맞춤
      let formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
      let formattedExpiredDate = expiredYear + '-' + (expiredMonth < 10 ? '0' + expiredMonth : expiredMonth) + '-' + (expiredDay < 10 ? '0' + expiredDay : expiredDay);

      let inputData = {
          ic_code: generateUniqueRandomCode(),
          ic_name: itemName,
          ic_category: '스토어',
          ic_point: totalPrice,
          ic_startDate: formattedDate,
          ic_endDate: formattedExpiredDate,
          ic_regDate: formattedDate
      };
      console.log("쿠폰등록 값 : ")
      console.log(inputData)
      ApiService.addCoupon(inputData)
        .then((res)=>{
          console.log("res page_3_addCoupon 결과 : ")
          console.log(res)
        })
        .catch((error)=>{ 
          console.error("결제 데이터 전송 실패:", error);
        })

        //return false;


        //쿠폰등록 끝

      ApiService.addStoreOrderDetail({
        totalQuantity,
        totalPrice,
        itemCode,
        itemName,
        detailRegDate,
      })
        .then((response) => {
          console.log("데이터 전송 성공:", response.data);
        })
        .catch((error) => {
          console.error("데이터 전송 실패:", error);
        });

      // 서버로 데이터 전송
      ApiService.sendGiftMessage({
        recipientNumber,
        name,
        sender,
        message,
        totalQuantity,
        totalPrice,
        itemCode,
        itemName,
        email,
        userName,
        detailRegDate,
        ic_code: inputData.ic_code,
      })
        .then((response) => {
          console.log("데이터 전송 성공:", response.data);
          // 데이터 전송 후 필요한 작업을 수행합니다.
          // 예를 들어 페이지 이동 등...
        })
        .catch((error) => {
          console.error("데이터 전송 실패:", error);
          // 실패 시 적절한 에러 처리를 수행합니다.
        });
    } else {
      console.error("저장된 데이터가 없습니다.");
      // 저장된 데이터가 없는 경우 처리할 작업을 수행합니다.
    }

    this.props.history.push("/page_3/Store_Payment_Finish");
  };

  render() {
    const sysdate = moment().format("YYYY-MM-DD");
    const { totalQuantity, totalPrice, itemCode, itemName, itemImage } =
      this.props;

    return (
      <div className={`Res_Payment ${style.Res_Payment}`}>
        <div className="Res_payment_content">
          <div className="Res_menu1">
            <ul>
              <li className="step" id="step2">
                <a href="#Res_step01">
                  <strong>
                    <span>
                      <br />
                    </span>
                  </strong>
                  <div className="step_content2">
                    <dl>
                      <dt></dt>
                      <dd></dd>
                      <dt></dt>
                      <dd></dd>
                      <dt></dt>
                      <dd></dd>
                      <dt></dt>
                      <dd></dd>
                    </dl>
                  </div>
                </a>
              </li>
              <li className="step" id="step2">
                <a href="#Res_step02">
                  <strong>
                    <span>
                      <br />
                    </span>
                  </strong>
                  <div className="step_content2">
                    <dl>
                      <dt></dt>
                      <dd></dd>
                      <dt></dt>
                      <dd></dd>
                    </dl>
                  </div>
                </a>
              </li>
              <li className="step" id="step1">
                <a href="#Res_step03">
                  <strong>
                    <span>
                      <br />
                    </span>
                  </strong>
                  <div className="step_content">
                    <dl>
                      <dt></dt>
                      <dd></dd>
                      <dt></dt>
                      <dd></dd>
                      <dt></dt>
                      <dd></dd>
                    </dl>
                  </div>
                </a>
              </li>
              <li className="step">
                <a href="#Res_step04">
                  <strong>
                    <span>
                      <br />
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
                    <img
                      src={serverUrl + this.state.itemImage}
                      className="movie_img"
                    />
                  </li>
                  <div className="menu2_sub">
                    <ul>
                      <li>
                        <strong>{this.state.itemName}</strong>
                      </li>
                      <li>온라인 관람권 2개</li>
                      <li>수량 {this.state.totalQuantity} 개 </li>
                      <li></li>
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
                  </ul>
                  <ul className="menu4_bottom">
                    <li className="paymentBtn">
                      결제금액 {this.state.totalPrice} 원
                    </li>
                    <li>
                      <button
                        className="paymentBtn_total"
                        onClick={this.handlePayment}
                      >
                        결제하기
                      </button>
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

export default withRouter(Reservation_Payment_Store);