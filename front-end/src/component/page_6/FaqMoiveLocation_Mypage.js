import React, { Component } from "react";
import style from "../../styles/page_3/StoreTicket.css";
import cancel from "../../assets/page_3/cancel.png";
import ApiService from '../../ApiService';
import { jwtDecode } from 'jwt-decode';

class FaqMoiveLocation_Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 1,
      ticketmap_no: '',
      ticketmap_latitude: '',
      ticketmap_longitude: '',
      lists: [],
      message: null,
      it_no: '',
      c_email: '',
      theaters: [ // theaters 배열 초기화
        { ticketmap_no1: '', ic_my_theater_1: '' },
        { ticketmap_no2: '', ic_my_theater_2: '' },
        { ticketmap_no3: '', ic_my_theater_3: '' }
      ],
      submitted: false,
      checkselectedValue: 0, // 초기값으로 0을 설정
      selectedRadioIndex : 0
    };
    // this.theaterState = {
    //   it_no: '',//   c_email: '',
    //   ic_my_theater_first: '',
    //   ic_my_theater_second: '',
    //   ic_my_theater_third: '',
    //   ticketmap_no1: '',
    //   ticketmap_no2: '',
    //   ticketmap_no3: '',
    // }
  }

  // 상세지도
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // 등록 버튼 클릭 핸들러
  handleRegister = () => {
    const { theaters } = this.state;
    console.log(theaters)
    let inputData = {
      it_no: this.state.it_no,
      c_email: this.state.c_email,
      ic_my_theater_1: theaters[0].ic_my_theater,
      ic_my_theater_2: theaters[1].ic_my_theater,
      ic_my_theater_3: theaters[2].ic_my_theater,
      ticketmap_no1: theaters[0].ticketmap_no,
      ticketmap_no2: theaters[1].ticketmap_no,
      ticketmap_no3: theaters[2].ticketmap_no,
    }
    console.log(inputData)
    
    // ApiService를 사용하여 서버에 정보 전송
    ApiService.updateTheater(inputData)
      .then(response => {
        this.setState({ submitted: true });
        alert("등록 완료");
        window.location.reload()
      })
      .catch(error => {
        console.error("등록 실패:", error);
      });
  };

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
    const authToken = localStorage.getItem("auth_token");

    // 토큰이 존재하는지 확인 후 이메일 추출
    if (authToken) {
      const decodedToken = jwtDecode(authToken); // 수정 필요
      const userEmail = decodedToken.iss;
      this.setState({ c_email: userEmail });
      this.reloadTheater(userEmail);
    }
    this.storeListMap(); // 리스트목록을 가져옵니다.
  }

  reloadTheater = (email) => {
    ApiService.selectTheater(email)
      .then(res => {
        const cusTheater = res.data.tdto;
        console.log("cusTheater", cusTheater);
        if(cusTheater == null){
          this.setState({
            it_no: 1,
            c_email: email,
            theaters: [ // theaters 배열 초기화
              { ticketmap_no: 1, ic_my_theater: "홍대입구" },
              { ticketmap_no: 2, ic_my_theater: "용산" },
              { ticketmap_no: 3, ic_my_theater: "합정" }
            ],
  
          })
        }else {

          this.setState({
            it_no: cusTheater.it_no,
            c_email: cusTheater.c_email,
            theaters: [ // theaters 배열 초기화
              { ticketmap_no: cusTheater.ticketmap_no1, ic_my_theater: cusTheater.ic_my_theater_1 },
              { ticketmap_no: cusTheater.ticketmap_no2, ic_my_theater: cusTheater.ic_my_theater_2 },
              { ticketmap_no: cusTheater.ticketmap_no3, ic_my_theater: cusTheater.ic_my_theater_3 }
            ],
  
          })
        }
      })
  }

  // 리스트목록을 가져오는 함수
  storeListMap = () => {
    ApiService.ListStore_Map()
      .then(res => {
        this.setState({
          lists: res.data
        }, () => {

          console.log("lists : ");
          console.log(this.state.lists);
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


  // 영화관 정보 입력 핸들러
  handleTheaterChange = (index, e) => {
    const { name, value } = e.target;
    const { theaters } = this.state;
    const updatedTheaters = [...theaters]; // 불변성 유지를 위해 새로운 배열 생성
    updatedTheaters[index] = { ...updatedTheaters[index], [name]: value }; // 해당 인덱스의 요소만 업데이트
    this.setState({ theaters: updatedTheaters });
  }
  

  // edit 버튼 클릭 시 실행되는 함수
  EditStore_Map = (ticketmap_no) => {
    window.localStorage.setItem("movie_location", ticketmap_no);
    ApiService.fetchStoreMapByID(ticketmap_no)
      .then(res => {
        const { ticketmap_no, ticketmap_latitude, ticketmap_longitude, ticketmap_name } = res.data;
        const { theaters } = this.state;
        const updatedTheaters = theaters.map(theater => {
          if (theater.ticketmap_no === ticketmap_no) {
            return { ticketmap_no: ticketmap_no, ic_my_theater: ticketmap_name };
          }
          return theater;
        });
        console.log(ticketmap_no)
        this.setState({
        
          ticketmap_no: ticketmap_no,
          ticketmap_latitude: ticketmap_latitude,
          ticketmap_longitude: ticketmap_longitude,
          theaters: updatedTheaters,
        }, () => {
          this.createMap();
          this.setState(prevState => ({
            theaters: prevState.theaters.map((theater, index) => {
              if (index === prevState.selectedRadioIndex) {
                return { ...theater, ticketmap_no: ticketmap_no };
              }
              return theater;
            })
          }));
         
        });
      
       
        
      })
      .catch(error => {
        console.error('Error fetching store map by ID:', error);
      });
  };

  EditStore_MapName = (ticketmap_name) => {
    window.localStorage.setItem("ticketmap_name", ticketmap_name);
    // 부모 컴포넌트로 값을 전달
    this.props.onLocationChange(ticketmap_name);

    this.setState(prevState => ({
      theaters: prevState.theaters.map((theater, index) => {
        if (index === prevState.selectedRadioIndex) {
          return { ...theater, ic_my_theater: ticketmap_name };
        }
        return theater;
      })
    }));
  }


  // 팝업 닫기 함수
  closeLocation = () => {
    this.props.close();// 부모 컴포넌트에게 모달 닫기 이벤트 전달    
  };

  // 선택한 값 변경 함수
  handleSelect = (value) => {
    this.setState({ selectedValue: value });
  };


  saveTheater = () => {
    console.log("내마음속에 저장");
  };

  handleReset = () => {
    this.setState({
      theaters: [
        { ticketmap_no: '', ic_my_theater: '' },
        { ticketmap_no: '', ic_my_theater: '' },
        { ticketmap_no: '', ic_my_theater: '' }
      ],
      ticketmap_no: '', // 추가: 선택한 영화관 정보도 초기화
      ticketmap_latitude: '',
      ticketmap_longitude: ''
    }, () => {
      this.storeListMap();
    });
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
            onClick={this.closeLocation}
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
                  {this.state.lists && this.state.lists.map((item, index) => (
                    item.ticketmap_address.includes('서울') && ( // 서울이라는 단어가 포함된 주소를 가진 항목만 출력
                      <li key={index}>
                        {/* EditStore_Map 네이버맵 , EditStore_MapName 문의 지점입력  */}
                        <a onClick={() => { this.EditStore_Map(item.ticketmap_no); this.EditStore_MapName(item.ticketmap_name); }}>
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
                        <a onClick={() => { this.EditStore_Map(item.ticketmap_no); this.EditStore_MapName(item.ticketmap_name); }}>
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
                        <a onClick={() => { this.EditStore_Map(item.ticketmap_no); this.EditStore_MapName(item.ticketmap_name); }}>
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
                        <a onClick={() => { this.EditStore_Map(item.ticketmap_no); this.EditStore_MapName(item.ticketmap_name); }}>
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
                        <a onClick={() => { this.EditStore_Map(item.ticketmap_no); this.EditStore_MapName(item.ticketmap_name); }}>
                          <span>{item.ticketmap_name}</span>
                        </a>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            )}
            {/* 각 영화관 입력 폼 */}
            <ul style={{ display: 'inline', marginTop:"30px" }}>
              {this.state.theaters.map((theater, index) => (
                <React.Fragment key={index}>
                 <li style={{display: "flex"}}>

                   <input 
                      type="radio" 
                      id={`check_radio_${index}`} 
                      name="check_radio" 
                      checked={this.state.selectedRadioIndex === index} // 선택된 값이 0일 때만 체크
                      onChange={() => this.setState({ selectedRadioIndex: index })} // 라디오 버튼이 변경될 때 선택된 값을 설정
                      value={index+1}
                    />
                    <p style={{color:"black", margin:0, marginLeft:"10px"}}>
                      {index+1}순위
                    </p>
                    
                 </li>

                  <li>
                   
                    <input
                      required
                      id={`ticketmap_no${index + 1}`}
                      variant="standard"
                      label={`영화관 번호${index + 1}`}
                      type="text"
                      name="ticketmap_no"
                      value={theater.ticketmap_no}
                      onChange={(e) => this.handleTheaterChange(index, e)}
                    ></input>
                  </li>
                  <li>
                    <input
                      required
                      id={`ic_my_theater${index + 1}`}
                      variant="standard"
                      label={`영화관 이름${index + 1}`}
                      type="text"
                      name="ic_my_theater"
                      value={theater.ic_my_theater}
                      onChange={(e) => this.handleTheaterChange(index, e)}
                    ></input>
                  </li>
                  <br></br>
                </React.Fragment>
              ))}
              <li>
                <button onClick={this.handleRegister}>등록</button>
              </li>
            </ul>
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

export default FaqMoiveLocation_Mypage;