import React, { Component } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Movie_screen.css";
import Reservation_Swiper from "./Reservation_Swiper_screen.js";
import Res_img15 from "../../assets/page_1/15.jpg";
import Res_img12 from "../../assets/page_1/12.jpg";
import Res_imgAll from "../../assets/page_1/all.jpg";
import Res_screen from "../../assets/page_1/screen.png";

class Reservation_Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpen: false,
      selectedRegion: null,
      subRegions: {
        서울: [
          "가산디지털",
          "가양",
          "강동",
          "건대입구",
          "김포공항",
          "노원",
          "도곡",
          "독산",
          "브로드웨이(신사)",
          "서울대이북",
          "수락산",
        ],
        "경기/인천": [
          "광교아울렛",
          "광명(광명사거리)",
          "광명아울렛",
          "광주터미널",
          "구리아울렛",
          "동탄",
          "라페스타",
          "마석",
          "별내",
          "병점",
          "부천(신중동역)",
        ],
        "충청/대전": ["당진", "대전(백화점)"],
        "전라/광주": ["광주(백화점)", "광주광산", "군산나운"],
        "경북/대구": ["경주", "경주황성"],
        "경남/부산/울산": ["거창", "광복", "김해부원", "김해아울렛(장유)"],
        강원: ["남원주", "동해", "원주무실", "춘천"],
        제주: ["서귀포", "제주연동"],
      },
    };
  }

  handleConfirmation = () => {
    this.setState({ popupOpen: false });
    window.location.href = "/page_1/Reservation_Seat";
  };

  handleCancellation = () => {
    this.setState({ popupOpen: false });
  };

  handleRegionClick = (region) => {
    this.setState({ selectedRegion: region });
  };

  render() {
    const sysdate = moment().format("YYYY-MM-DD");

    const { subRegions, selectedRegion } = this.state;

    return (
      <div className={`Res_screen ${style.Res_screen}`}>
        <div className="Res_screen_content">
          <div className="Res_menu2">
            <ul>
              <div className="Res_tit">
                <li>영화관별 상영시간표</li>
              </div>
              <li>
                <div className="menu2">
                  <ul className="menu2_left">
                    {Object.keys(subRegions).map((region) => (
                      <li
                        className={`subRegions ${
                          selectedRegion === region ? "active" : ""
                        }`}
                        key={region}
                        onClick={(event) => {
                          event.preventDefault(); // 기본 동작 막기
                          this.handleRegionClick(region);
                        }}
                      >
                        <a href="#">{region}</a>
                      </li>
                    ))}
                  </ul>

                  <div className="menu2_right">
                    <ul>
                      {selectedRegion &&
                        subRegions[selectedRegion].map((subRegion, index) => (
                          <li className="subRegions" key={index}>
                            <a href="#">{subRegion}</a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="Res_menu4">
            <ul>
              <div className="Res_tit">
                <li>{sysdate}</li>
              </div>
              <li>
                <div className="menu4">
                  <ul className="menu4_left">
                    <li>
                      <Reservation_Swiper />
                    </li>
                    <div className="menu4_main">
                      <a href="#none">
                        <img src={Res_img15} />
                        파묘
                      </a>
                    </div>
                    <div className="menu4_sub">
                      <ul>
                        <li>
                          <a
                            href="#none"
                            onClick={() => this.setState({ popupOpen: true })}
                          >
                            <span>
                              13:40
                              <br />
                              82/100 3관
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
          {this.state.popupOpen && (
            <div className="popup">
              <div className="popup_content">
                <strong>파묘/13:40(3관)</strong>
                <p>
                  잔여좌석 <strong>82</strong>/100
                </p>

                <img className="Res_screen" src={Res_screen} />
                <p>
                  <img src={Res_img15} />본 영화는 만 15세 이상 관람가
                  영화입니다.
                </p>
                <button name="n" onClick={this.handleCancellation}>
                  취소
                </button>
                <button name="y" onClick={this.handleConfirmation}>
                  인원/좌석 선택
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Reservation_Movie;
