import React, { Component } from "react";
import moment from "moment";
import style from  "../../styles/page_1/Reservation_Movie_screen.css";
import Reservation_Swiper_screen from "./Reservation_Swiper_screen.js";
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
    this.setState({ popupOpen: false });
    window.location.href = "/page_1/Reservation_Seat";
  }

  handleCancellation = () => {
    this.setState({ popupOpen: false });
  }

  render() {
    const sysdate = moment().format("YYYY-MM-DD");

    return (
      <div className={`Res_screen ${style.Res_screen}`}>
        <div id="Res_menu2">
          <ul className="Res_left">
            <li className="Res_tit2">영화관</li>
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
        <div id="Res_menu4">
          <ul className="Res_left">
            <li className="Res_tit4">{sysdate}</li>
            <li>
              <div className="menu4">
                <ul className="menu4_left">
                  <li>
                    <Reservation_Swiper_screen />
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
