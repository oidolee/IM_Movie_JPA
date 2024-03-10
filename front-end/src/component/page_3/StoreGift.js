import React, { Component } from "react";
import style from "../../styles/page_3/StoreGift.css";
import package1 from "../../assets/page_3/package1.jpg";
import cancel from "../../assets/page_3/cancel.png";

class StoreGift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageLength: 0,
      koreanLength: 0,
      englishLength: 0,
    };
  }

  closeStoreGift = () => {
    const { onClose } = this.props;
    onClose(); // 부모 컴포넌트에게 모달 닫기 이벤트 전달
  };

  handleMessageInput = (e) => {
    const message = e.target.value;
    const koreanLength = (message.match(/[\u3131-\uD79D]/g) || []).length; // 한글 글자 수 계산
    const englishLength = message.length - koreanLength; // 영문 글자 수 계산

    this.setState({
      messageLength: message.length,
      koreanLength,
      englishLength,
    });
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
            <img src={package1} alt="[롯시와 봄] 패키지" width={200} />
          </div>
          <div className={`bx_tit ${style.bx_tit}`}>
            <div>
              <h5><strong>[롯시와 봄] 패키지</strong></h5>
            <div>

            </div>
              <span>총 수량 0개</span>
            </div>
          </div>
          <div className={`bx_cnt ${style.bx_cnt}`}>
              <dt>총 합계</dt>
              <dd>
                <strong>0</strong>원
              </dd>
          </div>
        </div>


          <div className="gift_input">
            <table className="StoreGift_input">
              <tr>
                <th> 선물 받는 분 </th>
                <td>
                  <input
                    type="recipient"
                    className={`g_input ${style.g_input}`}
                    name="recipient"
                    size="20"
                    placeholder="휴대폰 번호 입력(-없이)"
                    required
                    autofocus
                  />
                </td>
              </tr>
              <tr>
                <th> 선물 하는 분 </th>
                <td>
                  <input
                    type="sender"
                    className={`g_input ${style.g_input}`}
                    name="sender"
                    size="20"
                    placeholder="선물 하는 분 입력"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th> 메세지 입력 </th>
                <td>
                  <div>
                    <input
                      type="message"
                      id="StoreGift_message"
                      className={`g_input ${style.g_input}`}
                      name="message"
                      size="20"
                      placeholder="마음을 표현하는 메세지를 입력해주세요."
                      required
                      maxLength={100} // 최대 글자 수 제한
                      onInput={(e) => this.handleMessageInput(e)}
                    />

                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2" >
                  <div className={`characterCount ${style.characterCount}`}>
                          {this.state.messageLength}/100 (한글 {this.state.koreanLength}자 / 영문 {this.state.englishLength}자)
                  </div>
                </td>

              </tr>
              <tr>
                <td colspan="2" style={{ borderBottom: "none" }}>
                  <div>
                    <input
                      className={`StoreGift_inputButton ${style.StoreGift_inputButton}`}
                      type="submit"
                      value="결제하기"
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

export default StoreGift;
