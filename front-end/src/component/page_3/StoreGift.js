import React, { Component } from "react";
import style from "../../styles/page_3/StoreGift.css";
import package1 from "../../assets/page_3/package1.jpg";
import cancel from "../../assets/page_3/cancel.png";

class StoreGift extends Component {
  closeStoreGift = () => {
    const { onClose } = this.props;
    onClose(); // 부모 컴포넌트에게 모달 닫기 이벤트 전달
  };

  render() {
    return (
      <div id="layerCouponGift" className="layer_wrap layer_coupon_gift active">
        <strong className={`hidden ${style.hidden}`}>레이어 팝업 시작</strong>
        <strong className={`hidden ${style.hidden}`}>레이어 팝업 시작</strong>

        <div className={`layer_header ${style.layer_header}`}>
          <div>
            <h4 className={`tit ${style.tit}`}>선물하기</h4>
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
          <div className="bx_thm">
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

        <div>
          <div className="gift">
            <table>
              <tr>
                <th> 선물 받는 분 </th>
                <td>
                  <input
                    type="recipient"
                    className={`input ${style.input}`}
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
                    className={`input ${style.input}`}
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
                  <input
                    type="message"
                    className={`input ${style.input}`}
                    name="message"
                    size="20"
                    placeholder="마음을 표현하는 메세지를 입력해주세요."
                    required
                  />
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
      </div>
    );
  }
}

export default StoreGift;
