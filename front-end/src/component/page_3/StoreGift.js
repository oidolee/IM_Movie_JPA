import React, { Component } from "react";
import style from "../../styles/page_3/StoreGift.css";
import package1 from "../../assets/page_3/package1.jpg";
import cancel from "../../assets/page_3/cancel.png";
import { withRouter } from 'react-router-dom';
import ApiService from "../../ApiService";
import { Cookies, useCookies } from 'react-cookie';


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
    };
  }

  componentDidMount () {
    const cookies = new Cookies();
    const name = cookies.get('idName'); // 쿠키에서 이메일 정보 가져오기
    if (name) {
      this.setState({ name });
    }
    console.log('name', name);
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
  const { recipientNumber, sender, message, name } = this.state;
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
    })
  );

  // 상태 초기화
  this.setState({
    recipientNumber: "",
    sender: "",
    message: ""
  });

    this.props.history.push("/page_3/Reservation_Payment_Store");
};


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
            <img src={this.props.itemImage} width={200} />
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
              <strong>{this.props.totalPrice}원</strong>
            </dd>
          </div>
        </div>
          <div className="gift_input">
            <table className="StoreGift_input">
              <tr>
                <th> 선물 받는 분 </th>
                <td>
                  <input
                    type="text"
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
                    name="sender"
                    value={this.state.name}
                    size="20"
                    placeholder="선물 하는 분 입력"
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
