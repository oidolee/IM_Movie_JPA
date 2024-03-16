import React, { Component } from "react";
import style from "../../styles/page_3/StoreTicket.css";
import cancel from "../../assets/page_3/cancel.png";
import ApiService from '../../ApiService';

class StoreGift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 1,
      list: [],
      message: null
    };
  }

  componentDidMount() {
    const { kakao } = window;
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.557217148, 126.9248917127),
      level: 3
    };  
    
    this.storeList();  //1. 리스트목록

    const map = new kakao.maps.Map(container, options);

    // 마커 위치 설정
    const markerPosition = new kakao.maps.LatLng(37.557217148, 126.924891712);

    // 마커 생성
    const marker = new kakao.maps.Marker({
      map: map,
      position: markerPosition
    });

    // 커스텀 오버레이를 사용하여 마커 아래에 회사 이름 표시

    const customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: markerPosition,

      yAnchor: -0.5 // 마커 아래에 표시되도록 설정
    });
  }

  
    // 리스트목록
    storeList = () => {
      ApiService.ListStore_Admin() // 2. 스프링부트와 통신기능 호출 >  3. ApiService.js 스프링부트의 데이터를 가지고 온다.
      .then(res => {              // 4.
          this.setState({
              lists: res.data // res 에 결과 데이타를 담아라
          })
      })
      .catch(err => {
          console.log('ListStore_Admin() Error!!', err);
      })
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
            <div id="StoreTicket_area" className={`StoreTicket_area ${style.StoreTicket_area}`}>
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
{selectedValue === 1 && (
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
    <div>
      <div id="map" className={`StoreTicket_map ${style.StoreTicket_map}`} style={{ width: '530px', height: '530px' }}>Test</div>
    </div>
  </div>
)}

          </div>


             




          <div className="storeGift_bg_color"></div>
        </div>
      </div>
    );
  }
}

export default StoreGift;
