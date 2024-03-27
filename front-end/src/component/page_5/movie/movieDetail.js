import React, { useState, useEffect } from 'react';
import style from "../../../styles/page_5/movieDetail.module.css";
import { useCookies } from 'react-cookie'; // 로그인 확인용
import { useParams } from 'react-router-dom';
import ApiService from '../../../ApiService';


// 이미지
import movie1 from "../../../assets/page_5/movie1.jpg";
import heart from "../../../assets/page_5_5/heart.png";
import send from "../../../assets/page_5_5/send.png";

import trailer1 from "../../../assets/page_5_5/trailer1.png";
import trailer2 from "../../../assets/page_5_5/trailer2.png";

import BobMarley_OneLove from '../../../assets/page_5/BobMarley_OneLove.jpg';
// import { Link } from '@mui/material';

import { Link, useHistory } from 'react-router-dom'; // 페이지이동
import { jwtDecode } from 'jwt-decode';






// 관람평
function StarRating({ maxStars, selectedStars, onStarClick }) {
  return (
    <ul>
      {[...Array(maxStars).keys()].map((index) => (
        <li key={index + 1} className={`star_box${index + 1}`} onClick={() => onStarClick(index + 1)}>
          <img
            className={`star_on${index + 1} ${selectedStars >= index + 1 ? `${style.star_on}${index + 1}` : ''}`}
            src="https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ico_star64_on.png"
            alt={`Star ${index + 1}`}
            style={{ display: selectedStars >= index + 1 ? 'inline' : 'none' }}
          />
          <img
            className={`star_off ${style.star_off}`}
            src="https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ico_star64_off.png"
            alt={`Empty Star ${index + 1}`}
            style={{ display: selectedStars < index + 1 ? 'inline' : 'none' }}
          />
        </li>
      ))}
    </ul>
  );
}

//상세페이지
function MovieDetail() {
  const [showModal, setShowModal] = useState(false); // 모달 창 열림/닫힘 상태
  const [selectedValue, setSelectedValue] = useState(1); // 선택된 값
  const [selectedTrailer, setSelectedTrailer] = useState("");

  const { movie_id } = useParams(); // useParams 훅을 사용하여 URL의 id 값을 가져옴

  //관람평 등록 값
  const [selectedStars, setSelectedStars] = useState(5); //관람평 별값
  const [reviewContents, setReviewContents] = useState('');

  //아이디확인
  const [authToken, setAuthToken] = useState(null); // 토큰 상태 추가
  const [email, setEmail] = useState('');


  // id 값 사용 예시
  console.log("movie_id:", movie_id);

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


  // 클릭한 별수에 따라 별 이미지를 조절합니다.
  const handleStarClick = (starNumber) => {
    setSelectedStars(starNumber);
  };

  const handleSubmit = () => {
    if (!reviewContents.trim()) {
      // 후기 내용이 비어 있을 때 처리할 내용을 여기에 작성합니다.
      alert('후기 내용을 입력해주세요.');
      return;
    }
    let inputData = {
      movie_id: movie_id,
      cus_id: email,
      review_star: selectedStars,
      review_contents: reviewContents,
    }
    console.log(inputData)
    console.log("관람평 등록")

    ApiService.addReview(inputData)
      .then((res) => {
        console.log(res)
        // 변수 초기화
        setSelectedStars('5');
        setReviewContents('');
        alert("관람평 등록 완료 ")
        // window.location.reload();
        // history.push("/movieDetail/" + movie_id);
        reviewList(movie_id);
        setSelectedValue(2);
      })
      .catch((error) => {
        alert('관람평 등록 중 오류가 발생했습니다.');
        console.error('관람평 등록 오류:', error);
      });
  }

  useEffect(() => {
    // authToken 상태가 변경될 때마다 실행되는 부분
    reviewList(movie_id);
    selectLoad();

    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("auth_token");

    // 토큰이 존재하는지 확인 후 이메일 추출
    if (authToken) {
        setAuthToken(authToken)
        const decodedToken = jwtDecode(authToken); // 수정 필요
        const userEmail = decodedToken.iss;
        setEmail(userEmail);
    }
  }, []);



  const [getReviewlists, setGetReviewlists] = useState([]);

  // 관람평
  const reviewList = (movie_id) => {
    console.log("reviewList start")
    ApiService.reviewList(movie_id)
      .then((res) => {
        console.log(res.data)
        setGetReviewlists(res.data)
        // setParkingData(res.data);
        // setLists(res.data);
      })
      .catch((err) => {
        console.log('parkingList Error', err);
      });
  }
  console.log("관람평 결과")
  console.log(getReviewlists)

  // 영화상세
  const [detailInfo, setDetailInfo] = useState({
    movie_id: "",
    mov_image: "",
    mov_title: "",
    mov_date: "",
    mov_time: "",
    mov_age: "",
    mov_visitor: "",
    mov_contents: "",
    mov_con: "",
    mov_pd: "",
    mov_cast: "",
    mov_image2: "",
    mov_image3: "",
    mov_trailer1: "",
    mov_trailer2: "",
    mov_category: "",
  });

  const selectLoad = () => {
    ApiService.selectUpdate(movie_id)
      .then((res) => {
        let list = res.data;
        let mov_date_final = list.dto.mov_date; 
        let getMovDate = new Date(mov_date_final);
        let formattedMovDate = getMovDate.toLocaleDateString(); // Date 객체를 원하는 형식의 문자열로 변환

        setDetailInfo({
          movie_id: list.dto.movie_id,
          mov_image: list.dto.mov_image,
          mov_title: list.dto.mov_title,
          mov_date: formattedMovDate,
          mov_time: list.dto.mov_time,
          mov_age: list.dto.mov_age,
          mov_visitor: list.dto.mov_visitor,
          mov_contents: list.dto.mov_contents,
          mov_con: list.dto.mov_con,
          mov_pd: list.dto.mov_pd,
          mov_cast: list.dto.mov_cast,
          mov_image2: list.dto.mov_image2,
          mov_image3: list.dto.mov_image3,
          mov_trailer1: list.dto.mov_trailer1,
          mov_trailer2: list.dto.mov_trailer2,
          mov_category: list.dto.mov_category,
        });
        console.log("selectByIdUpdate 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("selectByIdUpdate 실패 : ", err);
      });
  };

  return (
    <>
      <div className={`detail_movie_wrap ${style.detail_movie_wrap}`}>
        <div className={`detail_info ${style.detail_info}`}>
          <div className={`detail_img_box ${style.detail_img_box}`}>
            <img src={`${process.env.PUBLIC_URL}/page_5/${detailInfo.mov_image}`} alt="파묘상세" style={{ width: "250px" }} />
          </div>

          <div className={`detail_text ${style.detail_text}`}>
            <div className={`detail_title ${style.detail_title}`}>
              <label htmlFor="pp_name">{detailInfo.mov_title}</label>
            </div>

            <div className={`detail_con ${style.detail_con}`}>
              <div className={`detail_con1 ${style.detail_con1}`}>
                <label htmlFor="de_date">{new Date(detailInfo.mov_date).toLocaleDateString()} 개봉</label>
                <label htmlFor="de_time">| {detailInfo.mov_time}분 |</label>
                <label htmlFor="de_age">
                  {" "}
                  <span style={{ color: "orange" }}>{detailInfo.mov_age}</span>
                </label>
                <label htmlFor="de_num">| {detailInfo.mov_visitor}</label>
              </div>
            </div>

            <div className={`btn_wrap1 ${style.btn_wrap1}`}>
              <button className={`detail_btn1 ${style.detail_btn1}`} id="10" onClick={() => handleTrailerClick(detailInfo.mov_trailer1)}>
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
              {detailInfo.mov_contents}
              </p>
            </div>

            <div className={`btn_wrap2 ${style.btn_wrap2}`}>
            <Link to="/page_1/Reservation_Movie">
              <button className={`detail_btn4 ${style.detail_btn4}`} id="13">
                예매하기
              </button>
              </Link>
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
                    <span style={{ color: "gray" }}>.장르</span> {detailInfo.mov_con}
                  </p>
                  <p>
                    <span style={{ color: "gray" }}>.감독</span> {detailInfo.mov_pd}
                  </p>
                  <p>
                    <span style={{ color: "gray" }}>.출연</span>{" "}
                    {detailInfo.mov_cast}
                  </p>
                </div>
              )}

              {selectedValue === 2 && (
                <div>
                  {/* 관람평 영역 */}

                  {!authToken && (
                    <div className={`plz_login ${style.plz_login}`}>
                      <h4>로그인 후 관람평 등록 해주세요</h4>

                      <Link to="/login">
                        <button className={`plz_login_button ${style.plz_login_button}`}>
                          로그인
                        </button>
                      </Link>
                    </div>
                  )}
                  {authToken && (
                    <div className={`star_info ${style.star_info}`}>
                      {/* <div class="star_rate type5">
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
                      </div> */}
                      <div className="star_rate type5">
                        <StarRating maxStars={5} selectedStars={selectedStars} onStarClick={handleStarClick} />
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
                        <textarea
                          name="review_contents"
                          className="form-control mr-2"
                          rows="3"
                          placeholder="내용을 입력하세요"
                          value={reviewContents}
                          onChange={(e) => setReviewContents(e.target.value)}
                        ></textarea>
                        <button className="btn btn-primary" style={{ minWidth: '80px' }} onClick={() => handleSubmit()}>등록</button>

                      </div>
                    </div>
                  </div>

                </div>

              )}
            </div>
          </div>
          {/* 관람평 출력 부분 */}
          {selectedValue === 2 && (
            <div className={`movie_review_list ${style.movie_review_list}`}>
              <ul>
                {getReviewlists.map((review, index) => {
                  // review_date를 JavaScript의 Date 객체로 변환
                  const reviewDate = new Date(review.review_date);
                  // 날짜를 원하는 형식으로 포맷팅 (예: "YYYY-MM-DD hh:mm")
                  const formattedDate = reviewDate.toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                  }).replace(/\./g, '-');

                  return (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      {/* 이미지 파일 경로를 동적으로 설정 */}
                      <img src={`https://www.lottecinema.co.kr/NLCHS/Content/images/temp/temp_reviewcharacter_0${6 - review.review_star}.jpg`} alt="image_by_rate" style={{ marginRight: '10px', width: '50px', height: '50px' }} />

                      <div className={`movie_review_content ${style.movie_review_content}`}>
                        <p>{review.cus_id}</p>
                        <p>작성일: {formattedDate}</p>
                        <p>{review.review_contents}</p>
                      </div>
                      <div style={{ marginLeft: 'auto' }}>
                        <img src="https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ic_review_good.png" alt="image_by_rate" style={{ marginRight: '5px', width: '20px', height: '20px' }} />
                        {/* 좋아요 카운트 */}
                        {review.review_star}
                      </div>
                    </li>
                  );
                })}
              </ul>


            </div>

          )}

        </div>

        <div className={`detail_down3 ${style.detail_down3}`}>
          <label htmlFor="de_title">트레일러</label>
        </div>
        <button
          className={`detail_trailer1 ${style.detail_trailer1}`}
          onClick={() => handleTrailerClick(detailInfo.mov_trailer1)}
        >
          <img src={`${process.env.PUBLIC_URL}/page_5_1/${detailInfo.mov_image2}`} alt="트레일러1" />
        </button>
        <button
          className={`detail_trailer1 ${style.detail_trailer2}`}
          onClick={() => handleTrailerClick(detailInfo.mov_trailer2)}
        >
          <img src={`${process.env.PUBLIC_URL}/page_5_1/${detailInfo.mov_image3}`} alt="트레일러2" />
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
