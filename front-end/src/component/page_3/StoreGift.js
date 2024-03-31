import React, { Component } from "react";
import style from "../../styles/page_3/StoreGift.css";
import package1 from "../../assets/page_3/package1.jpg";
import cancel from "../../assets/page_3/cancel.png";
import { withRouter } from 'react-router-dom';
import ApiService from "../../ApiService";
import { jwtDecode } from 'jwt-decode';
import { Cookies, useCookies } from 'react-cookie';

const localHost = "http://localhost:3000/"; // 로컬
const proHost = "http://3.39.155.236:3000/"; // 개벌

let serverUrl;

if (process.env.NODE_ENV === 'development') {
  serverUrl = localHost;
} else {
  serverUrl = proHost;
}

console.log("현재 베이스 주소 storegift")
console.log(serverUrl)

class StoreGift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageLength: 0,
      koreanLength: 0,
      englishLength: 0,
      recipientNumber: "",
      isSenderEmpty: false,
      isMessageEmpty: false, 
      sender: "",
      message: "",
      name: '',
      email: '',
      userName : '',
      detailRegDate : ''
    };
  }

  componentDidMount() {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("auth_token");
    // 토큰이 존재하는지 확인 후 이메일 추출
    if (authToken) {
        const decodedToken = jwtDecode(authToken);
        const userEmail = decodedToken.iss;
        this.setState({ email: userEmail });
        console.log(userEmail)
        this.reloadsearchCutomer(userEmail)
      }

    // 오늘 날짜를 구하여 detailRegDate에 할당
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    this.setState({ detailRegDate: formattedDate });
    console.log('detailRegDate------', this.state.detailRegDate);
  }

  
  closeStoreGift = () => {
    const { onClose } = this.props;
    onClose(); 
  };

  handleMessageInput = (e) => {
    const message = e.target.value;
    const koreanLength = (message.match(/[\u3131-\uD79D]/g) || []).length; 
    const englishLength = message.length - koreanLength; 

    this.setState({
      messageLength: message.length,
      koreanLength,
      englishLength,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,

    });
  };

  handleRecipientInput = (e) => {
    const recipientNumber = e.target.value;

    // 정규표현식을 사용하여 숫자 12자 이상이면서 010으로 시작하지 않는 경우를 검사
    const isValidNumber = /^[0-9]{12,}$/.test(recipientNumber) && !recipientNumber.startsWith("010");

    this.setState({
      recipientNumber,
      isValidNumber,
    });
  };

  handlePayment = () => {
    const { recipientNumber, sender, message, name, email, userName } = this.state;
    const { totalQuantity, totalPrice, itemCode, itemName, itemImage } = this.props;

    // 선물 받는 분 번호가 12자 이상이면 알림창 띄우기
    if (recipientNumber.length >= 12 || recipientNumber.length < 10) {
      alert("잘못된 형식입니다.");
      return; // 결제 로직 중단
    }

    window.localStorage.removeItem("sampleID");
    window.localStorage.setItem(
      "sampleID",
      JSON.stringify({
        recipientNumber,
        sender,
        message,
        totalQuantity,
        totalPrice,
        itemCode,
        itemName,
        itemImage,
        name,
        email,
        userName,
        detailRegDate: this.state.detailRegDate,
      })
    );

    // 상태 초기화
    this.setState({
      recipientNumber: "",
      sender: "",
      message: "",
    });

    this.props.history.push("/page_3/Reservation_Payment_Store");
  };

  reloadsearchCutomer = (email) => {
    ApiService.searchCutomer(email)
    .then(res => {
      console.log("이름", res.data);
      this.setState({
        userName: res.data.dto.name,
      });
      
      console.log(res.data.name);
    })
    .catch(err => {
      console.log('searchCutomer() Error!!', err);
    });
  }

  render() {       
    return (
      <div id="layerCouponGift" className="layer_coupon_gift">
        <strong className={`hidden ${style.hidden}`}>레이어 팝업 시작</strong>
        <div className={`layer_header ${style.layer_header}`}>
          <div>
            <h4 className={`StoreGift_tit ${style.StoreGift_tit}`}>선물하기</h4>
          </div>
          <div>
            <button
              type="button"
              className={`btn_close ${style.btn_close}`}
              onClick={this.closeStoreGift}
            >
              <img src={cancel} alt="팝업 닫기" />
            </button>
          </div>
        </div>

        <div className={`coupon_gift_top ${style.coupon_gift_top}`}>
          <div className="StoreGift_bx_thm">
            <img src={serverUrl+this.props.itemImage} width={200} />
          </div>
          <div className={`bx_tit ${style.bx_tit}`}>
            <div>
              <h5><strong>{this.props.itemName}</strong></h5>
              <div>
                <strong><span>총 수량 {this.props.totalQuantity}개</span></strong>
              </div>
            </div>
          </div>
          <div className={`bx_cnt ${style.bx_cnt}`}>
            <dt>총 합계</dt>
            <dd>
              <strong>{this.props.totalPrice.toLocaleString()}원</strong>
            </dd>
          </div>
        </div>
          <div className="gift_input">
            <table className="StoreGift_input">
              <tr>
                <th> 선물 받는 분 </th>
                <td>
                  <input
                    type="password"
                    className={`g_input ${style.g_input}`}
                    name="recipientNumber"
                    value={this.state.recipientNumber}
                    size="20"
                    placeholder="휴대폰 번호 입력(-없이)"
                    required
                    autoFocus
                    onChange={this.handleRecipientInput}
                  />
                </td>
              </tr>
              <tr>
                <th> 선물 하는 분 </th>
                <td>
                  <input
                    type="text"
                    className={`g_input ${style.g_input}`}
                    name="userName"
                    value={this.state.userName}
                    size="20"
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th> 메세지 입력 </th>
                <td>
                  <div>
                    <input
                      type="text"
                      id="StoreGift_message"
                      className={`g_input ${style.g_input}`}
                      name="message"
                      value={this.state.message}
                      size="20"
                      placeholder="마음을 표현하는 메세지를 입력해주세요."
                      onChange={this.handleChange}
                      required
                      maxLength={100} // 최대 글자 수 제한
                      onInput={(e) => this.handleMessageInput(e)}
                    />
                    <input
                      type="hidden"
                      name="itemCode"
                      value={this.props.itemCode} // props로 전달된 itemCode 사용  
                    />
                    <input
                      type="hidden"
                      name="itemName"
                      value={this.props.itemName} // props로 전달된 itemName 사용
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="2" >
                  <div className={`characterCount ${style.characterCount}`}>
                          {this.state.messageLength}/100 (한글 {this.state.koreanLength}자 / 영문 {this.state.englishLength}자)
                  </div>
                </td>

              </tr>
              <tr>
                <td colSpan="2" style={{ borderBottom: "none" }}>
                  <div>
                    <input
                      className={`StoreGift_inputButton ${style.StoreGift_inputButton}`}
                      type="submit"
                      value="결제하기"
                      onClick={this.handlePayment}
                    />
                  </div>
                </td>
              </tr>
            </table>
            <div className="storeGift_bg_color"></div>
          </div>

      </div>
    );
  }
}

export default withRouter(StoreGift);
