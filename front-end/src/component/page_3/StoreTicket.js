import React, { Component } from "react";
import style from "../../styles/page_3/StoreTicket.css";
import cancel from "../../assets/page_3/cancel.png";
import ApiService from '../../ApiService';

class StoreTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 1,
      ticketmap_no: '',
      ticketmap_latitude: '', // 위도
      ticketmap_longitude: '', // 경도
      lists: [],
      message: null
    };
  }

  // 상세지도
  onChange = (e) => { 
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  createMap = () => {
  const { kakao } = window;
  const container = document.getElementById('map');
  console.log(kakao)
  const options = {
    center: new kakao.maps.LatLng(this.state.ticketmap_latitude, this.state.ticketmap_longitude),
    level: 3
  };

  const map = new kakao.maps.Map(container, options);

  // 마커 위치 설정
  const markerPosition = new kakao.maps.LatLng(this.state.ticketmap_latitude, this.state.ticketmap_longitude);
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


  componentDidMount() {
    this.storeListMap(); // 리스트목록을 가져옵니다.
  }

  // 리스트목록을 가져오는 함수
  storeListMap = () => {
    ApiService.ListStore_Map()
        .then(res => {
            this.setState({
                lists: res.data
            }, () => {
                // 리스트 목록을 가져온 후에 createMap 함수를 호출하여 지도를 생성합니다.
                this.createMap();

                // 서울 영화관 목록의 첫 번째 항목의 ticketmap_no를 가져와서 EditStore_Map 함수 호출
                const seoulStores = this.state.lists.filter(item => item.ticketmap_address.includes('서울'));
                if (seoulStores.length > 0) {
                    this.EditStore_Map(seoulStores[0].ticketmap_no);
                }
            });
        })
        .catch(err => {
            console.log('Error fetching store list:', err);
        });
}

  // edit 버튼 클릭 시 실행되는 함수
  EditStore_Map = (ticketmap_no) => {
    console.log("edit 버튼 호출");
    window.localStorage.setItem("sampleID", ticketmap_no);
    ApiService.fetchStoreMapByID(ticketmap_no)
      .then(res => {
        // API에서 받아온 데이터를 상태에 설정하여 지도를 다시 렌더링합니다.
        this.setState({
          ticketmap_no: res.data.ticketmap_no,
          ticketmap_latitude: res.data.ticketmap_latitude,
          ticketmap_longitude: res.data.ticketmap_longitude
        }, () => {
          // setState 후에 새로운 데이터로 지도를 다시 생성합니다.
          this.createMap();
        });
      })
      .catch(error => {
        console.error('Error fetching store map by ID:', error);
      });
  }

  // 팝업 닫기 함수
  closeStoreGift = () => {
    const { onClose } = this.props;
    onClose(); // 부모 컴포넌트에게 모달 닫기 이벤트 전달
  };

  // 선택한 값 변경 함수
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
            {/* {selectedValue === 1 && (
              <div className={`StoreTicket_area_detail ${style.StoreTicket_area_detail}`}>
                <ul>
                  {this.state.lists && this.state.lists.map((item, index) => (
                    <li>
                      <a onClick={() => this.EditStore_Map(item.ticketmap_no)} key={item.ticketmap_no}>
                        <span key={index}>
                          {item.ticketmap_name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
            )} */}
            {selectedValue === 1 && (
                <div className={`StoreTicket_area_detail ${style.StoreTicket_area_detail}`}>
                  <ul>
                    {this.state.lists && this.state.lists.map((item, index) => (
                      item.ticketmap_address.includes('서울') && ( // 서울이라는 단어가 포함된 주소를 가진 항목만 출력
                        <li key={index}>
                          <a onClick={() => this.EditStore_Map(item.ticketmap_no)}>
                            <span>{item.ticketmap_name}</span>
                          </a>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}
              {selectedValue === 2 && (
                <div className={`StoreTicket_area_detail ${style.StoreTicket_area_detail}`}>
                  <ul>
                    {this.state.lists && this.state.lists.map((item, index) => (
                      item.ticketmap_address.includes('경기') && ( // 서울이라는 단어가 포함된 주소를 가진 항목만 출력
                        <li key={index}>
                          <a onClick={() => this.EditStore_Map(item.ticketmap_no)}>
                            <span>{item.ticketmap_name}</span>
                          </a>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}
              {selectedValue === 3 && (
                <div className={`StoreTicket_area_detail ${style.StoreTicket_area_detail}`}>
                  <ul>
                    {this.state.lists && this.state.lists.map((item, index) => (
                      item.ticketmap_address.includes('인천') && ( // 서울이라는 단어가 포함된 주소를 가진 항목만 출력
                        <li key={index}>
                          <a onClick={() => this.EditStore_Map(item.ticketmap_no)}>
                            <span>{item.ticketmap_name}</span>
                          </a>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}
               {selectedValue === 4 && (
                <div className={`StoreTicket_area_detail ${style.StoreTicket_area_detail}`}>
                  <ul>
                    {this.state.lists && this.state.lists.map((item, index) => (
                      item.ticketmap_address.includes('충남') && ( // 서울이라는 단어가 포함된 주소를 가진 항목만 출력
                        <li key={index}>
                          <a onClick={() => this.EditStore_Map(item.ticketmap_no)}>
                            <span>{item.ticketmap_name}</span>
                          </a>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}
              {selectedValue === 5 && (
                <div className={`StoreTicket_area_detail ${style.StoreTicket_area_detail}`}>
                  <ul>
                    {this.state.lists && this.state.lists.map((item, index) => (
                      item.ticketmap_address.includes('강원') && ( // 서울이라는 단어가 포함된 주소를 가진 항목만 출력
                        <li key={index}>
                          <a onClick={() => this.EditStore_Map(item.ticketmap_no)}>
                            <span>{item.ticketmap_name}</span>
                          </a>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}
            <div>
              <div id="map" className={`StoreTicket_map ${style.StoreTicket_map}`} style={{ width: '530px', height: '530px' }}>Test</div>
            </div>
          </div>
          <div className="storeGift_bg_color"></div>
        </div>
      </div>
    );
  }
}

export default StoreTicket;