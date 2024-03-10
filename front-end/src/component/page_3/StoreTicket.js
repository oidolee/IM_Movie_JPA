import React, { Component } from "react";
import style from "../../styles/page_3/StoreTicket.css";
import cancel from "../../assets/page_3/cancel.png";

class StoreGift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 1,
    };
  }


  closeStoreGift = () => {
    const { onClose } = this.props;
    onClose(); // 부모 컴포넌트에게 모달 닫기 이벤트 전달
  };

  handleSelect = (value) => {
    this.setState({ selectedValue: value });
  };

  render() {
    const { selectedValue } = this.state;

    return (
      <div id="layer_StoreTicket" className="layer_StoreTicket">
        <strong className={`hidden ${style.hidden}`}>레이어 팝업 시작</strong>

        <div className={`layer_header_StoreTicket ${style.layer_header_StoreTicket}`}>

          <h4 className={`StoreTicket_tit ${style.StoreTicket_tit}`}>사용가능 영화관</h4>

          <button
            type="button"
            className={`btn_close ${style.btn_close}`}
            onClick={this.closeStoreGift}
          >
            <img src={cancel} alt="팝업 닫기" />
          </button>

          <div className={`StoreTicket_posible ${style.StoreTicket_posible}`}>
            <div className={`StoreTicket_area ${style.StoreTicket_area}`}>
              <ul>
                <li>
                  <a href="#none" onClick={() => this.handleSelect(1)} className={selectedValue === 1 ? style.selectedButton : ''}>
                    서울
                  </a>
                </li>
                <li>
                <a href="#none" onClick={() => this.handleSelect(2)}>
                    경기
                </a>
                </li>
                <li>
                <a href="#none" onClick={() => this.handleSelect(3)}>
                    인천
                </a>
                </li>
                <li>
                <a href="#none" onClick={() => this.handleSelect(4)}>
                    충남
                </a>
                </li>
                <li>
                <a href="#none" onClick={() => this.handleSelect(5)}>
                    강원
                </a>
                </li>
              </ul>
            </div>
            {selectedValue === 1 && 
            <div className={`StoreTicket_area_detail ${style.StoreTicket_area_detail}`}>
              <ul>
                <li>
                    <span>
                      가산디지털
                    </span>
                </li>
                <li>
                    <span>
                      가양
                    </span>
                </li>
              </ul>
            </div>
             }
          </div>

          <div className="storeGift_bg_color"></div>
        </div>
      </div>
    );
  }
}

export default StoreGift;
