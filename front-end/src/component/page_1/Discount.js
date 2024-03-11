import React, { Component } from "react";
import moment from "moment";
import style from "../../styles/page_1/Discount.css";
import Res_img12 from "../../assets/page_1/12.jpg";
import Card from "../../assets/page_1/card.jpg";

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
      <div className={`Discount ${style.Discount}`}>
        <div className="Discount_content">
          <div className="Discount_container">
            <div className="Discount_contents">
              <div className="Discount_section">
                <div className="Discount_right">
                  <div className="Discount_table_div">
                    <br />
                    <h4>할인안내</h4>
                    <div>
                      <ul className="Discount_list">
                        <li>
                          <div className="Discount_img">
                            <img
                              src="https://cf.lottecinema.co.kr//Media/WebAdmin/29eb9d8b3257480186229687fa879487.png"
                              alt="Discount_img"
                              className="Discount_image"
                            />
                            <div className="Discount_overlay">
                              <div className="Discount_ex">
                                <br />
                                - 할인 금액 : 3천원 현장할인
                                <br />
                                - 전월 실적 20만원 이상, 매출금액 1만원 이상 시
                                서비스 제공
                                <br />
                                - 369 서비스 여부에 따라 차등할인 제공(상세내용
                                부산은행 문의)
                                <br />
                                - 기타 중복 할인 불가
                                <br />
                                - 할인 : 월 1회, 연 12회
                                <br />
                                - 고객센터 : 1588-4000
                                <br />
                              </div>
                            </div>
                          </div>
                          <span className="Discount_ex_content">
                            <br />
                            <strong>369체크카드</strong>
                            <br />
                            3천원 할인
                            <br />
                          </span>
                        </li>
                        <li>
                          <div className="Discount_img">
                            <img
                              src="https://cf.lottecinema.co.kr//Media/WebAdmin/f8ca74437ccf43098607603977f7c4d5.jpg"
                              alt="Discount_img"
                              className="Discount_image"
                            />
                            <div className="Discount_overlay">
                              <div className="Discount_ex">
                                <br />
                                - 할인 금액 : 3천원 현장할인
                                <br />
                                - 전월 실적 20만원 이상, 매출금액 1만원 이상 시
                                서비스 제공
                                <br />
                                - 369 서비스 여부에 따라 차등할인 제공(상세내용
                                부산은행 문의)
                                <br />
                                - 기타 중복 할인 불가
                                <br />
                                - 할인 : 월 1회, 연 12회
                                <br />
                                - 고객센터 : 1588-4000
                                <br />
                              </div>
                            </div>
                          </div>
                          <span className="Discount_ex_content">
                            <br />
                            <strong>울산시청 복지카드</strong>
                            <br />
                            2천원 할인
                            <br />
                          </span>
                        </li>
                        <li>
                          <div className="Discount_img">
                            <img
                              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5181%2F2019%2F08%2F26%2F0001566018_001_20190826100220478.jpg&type=sc960_832"
                              alt="Discount_img"
                              className="Discount_image"
                            />
                            <div className="Discount_overlay">
                              <div className="Discount_ex">
                                <br />
                                - 할인 금액 : 3천원 현장할인
                                <br />
                                - 전월 실적 20만원 이상, 매출금액 1만원 이상 시
                                서비스 제공
                                <br />
                                - 369 서비스 여부에 따라 차등할인 제공(상세내용
                                부산은행 문의)
                                <br />
                                - 기타 중복 할인 불가
                                <br />
                                - 할인 : 월 1회, 연 12회
                                <br />
                                - 고객센터 : 1588-4000
                                <br />
                              </div>
                            </div>
                          </div>
                          <span className="Discount_ex_content">
                            <br />
                            <strong>아이조아 카드</strong>
                            <br />
                            1,500원 할인
                            <br />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation_Movie;
