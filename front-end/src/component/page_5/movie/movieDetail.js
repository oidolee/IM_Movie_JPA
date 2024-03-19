import React, { useState } from 'react';
import style from "../../../styles/page_5/movieDetail.module.css";
import { useCookies } from 'react-cookie'; // 로그인 확인용

// 이미지
import movie1 from "../../../assets/page_5/movie1.jpg";
import heart from "../../../assets/page_5_5/heart.png";
import send from "../../../assets/page_5_5/send.png";

import trailer1 from "../../../assets/page_5_5/trailer1.png";
import trailer2 from "../../../assets/page_5_5/trailer2.png";

import BobMarley_OneLove from '../../../assets/page_5/BobMarley_OneLove.jpg';
// import { Link } from '@mui/material';

import { Link, useHistory } from 'react-router-dom'; // 페이지이동

function MovieDetail() {
  const [showModal, setShowModal] = useState(false); // 모달 창 열림/닫힘 상태
  const [selectedValue, setSelectedValue] = useState(1); // 선택된 값
  const [selectedTrailer, setSelectedTrailer] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['idCheck']); // 로그인 확인용
  const history = useHistory();

  const handleTrailerClick = (trailerUrl) => {
    setSelectedTrailer(trailerUrl);
    setShowModal(true); // 모달 창 열기
  };

  // 모달 창을 닫는 함수
  const handleCloseModal = () => {
    setShowModal(false); // 모달 창 닫기
  };

  // 탭 선택 핸들러
  const handleSelect = (value) => {
    setSelectedValue(value);
  };


  const [selectedStars, setSelectedStars] = useState(5);

  // 클릭한 별수에 따라 별 이미지를 조절합니다.
  const handleStarClick = (starNumber) => {
    setSelectedStars(starNumber);
  };

  console.log(selectedStars)

  

  return (
    <>
      <div className={`detail_movie_wrap ${style.detail_movie_wrap}`}>
        <div className={`detail_info ${style.detail_info}`}>
          <div className={`detail_img_box ${style.detail_img_box}`}>
            <img src={movie1} alt="파묘상세" style={{ width: "250px" }} />
          </div>

          <div className={`detail_text ${style.detail_text}`}>
            <div className={`detail_title ${style.detail_title}`}>
              <label htmlFor="pp_name">파묘</label>
            </div>

            <div className={`detail_con ${style.detail_con}`}>
              <div className={`detail_con1 ${style.detail_con1}`}>
                <label htmlFor="de_date">2024.02.22 개봉</label>
                <label htmlFor="de_time">| 134분 |</label>
                <label htmlFor="de_age">
                  {" "}
                  <span style={{ color: "orange" }}>15세이상관람가</span>
                </label>
                <label htmlFor="de_num">| 804.1만명</label>
              </div>
            </div>

            <div className={`btn_wrap1 ${style.btn_wrap1}`}>
              <button className={`detail_btn1 ${style.detail_btn1}`} id="10" onClick={() => handleTrailerClick("https://cf.lottecinema.co.kr//Media/MovieFile/MovieMedia/202402/20808_301_1.mp4")}>
                &#9658;예고편 재생{" "}
              </button>
              <button className={`detail_btn2 ${style.detail_btn2}`} id="11">
                <img src={heart} alt="하트" />
                4,148
              </button>
              <button className={`detail_btn3 ${style.detail_btn3}`} id="12">
                <img src={send} alt="공유하기" />
              </button>
            </div>

            <div id="section4" className={`detail_box ${style.detail_box}`}>
              <p className={`detail_con2 ${style.detail_con2}`}>
                미국 LA, 거액의 의뢰를 받은 무당 ‘화림’(김고은)과
                ‘봉길’(이도현)은<br></br>
                기이한 병이 대물림되는 집안의 장손을 만난다.<br></br>
                조상의 묫자리가 화근임을 알아챈 ‘화림’은 이장을 권하고,<br></br>
                돈 냄새를 맡은 최고의 풍수사 ‘상덕’(최민식)과 장의사
                ‘영근’(유해진)이 합류한다.<br></br>
                <p />
                “전부 잘 알 거야… 묘 하나 잘못 건들면 어떻게 되는지”<br></br>
                절대 사람이 묻힐 수 없는 악지에 자리한 기이한 묘.<br></br>
                ‘상덕’은 불길한 기운을 느끼고 제안을 거절하지만,<br></br>
                ‘화림’의 설득으로 결국 파묘가 시작되고…<br></br>
                <p />
                나와서는 안될 것이 나왔다.
              </p>
            </div>

            <div className={`btn_wrap2 ${style.btn_wrap2}`}>
              <button className={`detail_btn4 ${style.detail_btn4}`} id="13">
                예매하기
              </button>
            </div>
          </div>
        </div>

        <div className={`detail_down ${style.detail_down}`}>
          <button
            type="button"
            className={`tit ${style.tit} ${selectedValue === 1 ? style.StoreDetail_selectedTab : ''}`}
            onClick={() => handleSelect(1)}
            style={{ width: "50%", left: "0%", height: "70px" }}
          >
            <span>상세정보</span>
          </button>
          <button
            type="button"
            className={`tit ${style.tit} ${selectedValue === 2 ? style.StoreDetail_selectedTab : ''}`}
            onClick={() => handleSelect(2)}
            style={{ width: "50%", left: "0%", height: "70px" }}
          >
            <span>관람평</span>
          </button>
          <div>
            <div className={`detail_box1 ${style.detail_box1}`}>
              {selectedValue === 1 && (
                <div>
                  <p>영화정보</p>
                  <p>
                    <span style={{ color: "gray" }}>.장르</span> 미스터리/한국
                  </p>
                  <p>
                    <span style={{ color: "gray" }}>.감독</span> 장재현
                  </p>
                  <p>
                    <span style={{ color: "gray" }}>.출연</span>{" "}
                    최민식,김고은,유해진,이도현
                  </p>
                </div>
              )}

              {selectedValue === 2 && (
                <div>
                  {/* 관람평 영역 */}

                  {!cookies.idCheck && (
                    <div className={`plz_login ${style.plz_login}`}>
                      <h4>로그인 후 관람평 등록 해주세요</h4>

                      <Link to="/login">
                        <button className={`plz_login_button ${style.plz_login_button}`}>
                          로그인
                        </button>
                      </Link>
                    </div>
                  )}
                  {cookies.idCheck && (
                    <div className={`star_info ${style.star_info}`}>
                      <div class="star_rate type5">
                        <ul>
                          {[1, 2, 3, 4, 5].map((starNumber) => (
                            <li key={starNumber} className={`star_box${starNumber}`} onClick={() => handleStarClick(starNumber)}>
                              <img
                                className={`star_on${starNumber} ${selectedStars >= starNumber ? `${style.star_on}${starNumber}` : ''}`}
                                src="https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ico_star64_on.png"
                                alt={`Star ${starNumber}`}
                                style={{ display: selectedStars >= starNumber ? 'inline' : 'none' }}
                              />
                              <img
                                className={`star_off ${style.star_off}`}
                                src="https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ico_star64_off.png"
                                alt={`Empty Star ${starNumber}`}
                                style={{ display: selectedStars < starNumber ? 'inline' : 'none' }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>


                      <div className={`star_img_box ${style.star_img_box}`}>
                         <img src={`https://www.lottecinema.co.kr/NLCHS/Content/images/icon/icon_reviewcharacterbig_${selectedStars}.svg`} alt={`star${selectedStars}`} />
                      </div>
                    </div>
                  )}

                  {/*  등록부분 */}
                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-md-6 offset-md-3 d-flex">
                        <textarea className="form-control mr-2" rows="3" placeholder="내용을 입력하세요"></textarea>
                        <button className="btn btn-primary" style={{ minWidth: '80px' }}>전송</button>

                      </div>
                    </div>
                  </div>

                </div>
              
              )}
            </div>
          </div>

          {selectedValue === 2 && (
            <div className={`movie_review_list ${style.movie_review_list}`}>
                <ul>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="https://www.lottecinema.co.kr/NLCHS/Content/images/temp/temp_reviewcharacter_03.jpg" alt="image_by_rate" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
                  <div className={`movie_review_content ${style.movie_review_content}`}>
                    <p>작성자</p>
                    <p>2024.03.16 09:11</p>
                    <p>영화 최고에요!.</p>
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <img src="https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ic_review_good.png" alt="image_by_rate" style={{ marginRight: '5px', width: '20px', height: '20px' }} />

                    85
                  </div>
                </li>

                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="https://www.lottecinema.co.kr/NLCHS/Content/images/temp/temp_reviewcharacter_03.jpg" alt="image_by_rate" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
                  <div className={`movie_review_content ${style.movie_review_content}`}>
                    <p>작성자</p>
                    <p>2024.03.16 09:11</p>
                    <p>너무 재미있었어요~!.</p>
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <img src="https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ic_review_good.png" alt="image_by_rate" style={{ marginRight: '5px', width: '20px', height: '20px' }} />

                    77
                  </div>
                </li>

                </ul>
            </div>

          )}
          
        </div>

        <div className={`detail_down3 ${style.detail_down3}`}>
          <label htmlFor="de_title">트레일러</label>
        </div>
        <button
          className={`detail_trailer1 ${style.detail_trailer1}`}
          onClick={() => handleTrailerClick("https://cf.lottecinema.co.kr//Media/MovieFile/MovieMedia/202402/20808_301_1.mp4")}
        >
          <img src={trailer1} alt="트레일러1" />
        </button>
        <button
          className={`detail_trailer2 ${style.detail_trailer2}`}
          onClick={() => handleTrailerClick("https://cf.lottecinema.co.kr//Media/MovieFile/MovieMedia/202402/20808_301_2.mp4")}
        >
          <img src={trailer2} alt="트레일러2" />
        </button>
      </div>

      {showModal && (
        <div className={`modal ${style.modal}`} onClick={handleCloseModal}>
          <div
            className={`modal_content ${style.modal_content}`}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedTrailer}
              controls
              autoPlay
              className={style.modal_video}
            ></video>
          </div>
        </div>
      )}


      <div className={`detail_last ${style.detail_last}`}>
        <ul>
          <li><a href='#'><img src={BobMarley_OneLove} alt="detail.img" /></a></li>
        </ul>
      </div>

    </>
  );
}

export default MovieDetail;
