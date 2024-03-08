import React, { Component } from "react";
import moment from "moment";
import style from  "../../styles/page_1/Reservation_Movie.css";
import Reservation_Swiper from "./Reservation_Swiper.js";
import Res_img15 from '../../assets/page_1/15.jpg';
import Res_img12 from '../../assets/page_1/12.jpg';
import Res_imgAll from '../../assets/page_1/all.jpg';
import Res_screen from '../../assets/page_1/screen.png';

class Reservation_Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      popupOpen: false
    };
  }

  handleConfirmation = () => {
    // 팝업 확인 시 /page_1/Seat_Movie 페이지로 이동
    this.setState({ popupOpen: false });
    window.location.href = "/page_1/Reservation_Seat";
  }

  handleCancellation = () => {
    // 팝업 취소 시 /page_1/Reservation_Movie 페이지로 이동
    this.setState({ popupOpen: false });
    window.location.href = "/page_1/Reservation_Movie";
  }

  render() {
    const sysdate = moment().format("YYYY-MM-DD");

    return (
      <div className={`Res_menu ${style.Res_menu}`}>
        <div id="Res_menu1">
          <ul>
            <li className="step" id="step1">
              <a href="#Res_step01">
                <strong>
                  <span>
                    01
                    <br />
                    상영시간
                  </span>
                </strong>
                <div className="step_content">
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
            <li className="step">
              <a href="#Res_step02">
                <strong>
                  <span>
                    02
                    <br />
                    인원/좌석
                  </span>
                </strong>
                <div className="step_content">
                  <dl>
                    <dt>인원</dt>
                    <dd></dd>
                    <dt>좌석</dt>
                    <dd></dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step">
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
        <div id="Res_menu2">
          <ul className="Res_left">
            <li className="Res_tit">영화관</li>
            <li>
              <div className="menu2">
                <ul className="menu2_left">
                  <li>전체</li>
                  <li>
                    <a href="#none">서울</a>
                  </li>
                  <li>
                    <a href="#none">경기/인천</a>
                  </li>
                  <li>
                    <a href="#none">충청/대전</a>
                  </li>
                  <li>
                    <a href="#none">전라/광주</a>
                  </li>
                  <li>
                    <a href="#none">경북/대구</a>
                  </li>
                  <li>
                    <a href="#none">경남/부산/울산</a>
                  </li>
                  <li>
                    <a href="#none">강원</a>
                  </li>
                  <li>
                    <a href="#none">제주</a>
                  </li>
                </ul>
                <ul className="menu2_right">
                  <li>
                    <a href="#none">서울</a>
                  </li>
                  <li>
                    <a href="#none">경기/인천</a>
                  </li>
                  <li>
                    <a href="#none">충청/대전</a>
                  </li>
                  <li>
                    <a href="#none">전라/광주</a>
                  </li>
                  <li>
                    <a href="#none">경북/대구</a>
                  </li>
                  <li>
                    <a href="#none">경남/부산/울산</a>
                  </li>
                  <li>
                    <a href="#none">강원</a>
                  </li>
                  <li>
                    <a href="#none">제주</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div id="Res_menu3">
          <ul className="Res_left">
            <li className="Res_tit">영화 선택</li>
            <li>
              <div className="menu3">
                <ul className="menu3_left">
                  <li>
                    <a href="#none"><img src={Res_img15} />파묘</a>
                  </li>
                  <li>
                    <a href="#none"><img src={Res_img12} />듄:파트2</a>
                  </li>
                  <li>
                    <a href="#none"><img src={Res_img12} />건국전쟁</a>
                  </li>
                  <li>
                    <a href="#none"><img src={Res_imgAll} />윙카</a>
                  </li>
                  <li>
                    <a href="#none"><img src={Res_img12} />소풍</a>
                  </li>
                  <li>
                    <a href="#none"><img src={Res_imgAll} />로봇 드림</a>
                  </li>
                  <li>
                    <a href="#none"><img src={Res_img12} />패스트 라이브즈</a>
                  </li>
                  <li>
                    <a href="#none"><img src={Res_imgAll} />엘리멘탈</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div id="Res_menu4">
          <ul className="Res_left">
            <li className="Res_tit">{sysdate}</li>
            <li>
              <div className="menu4">
                <ul className="menu4_left">
                  <li>
                    <Reservation_Swiper />
                  </li>
                  <div className="menu4_main">
                    <a href="#none"><img src={Res_img15} />파묘</a>
                  </div>
                  <div className="menu4_sub">
                    <ul>
                      <li>
                      <a href="#none" onClick={() => this.setState({ popupOpen: true })}>
                          <span>
                            13:40<br />
                            82/100      3관
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>               
                </ul>
              </div>
            </li>
          </ul>
        </div>

         {/* 팝업 창 */}
         {this.state.popupOpen && (
          <div className="popup">
            <div className="popup_content">
              <strong>파묘/13:40(3관)</strong>
              <p>잔여좌석 <strong>82</strong>/100</p>
              <p><img src={Res_img15} />본 영화는 만 15세 이상 관람가 영화입니다.</p>
              <img className="Res_screen" src={Res_screen} />
              <button name="n" onClick={this.handleCancellation}>취소</button>
              <button name="y" onClick={this.handleConfirmation}>인원/좌석 선택</button>  
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Reservation_Movie;
