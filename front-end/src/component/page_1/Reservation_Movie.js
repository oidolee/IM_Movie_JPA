import React, { useState, useEffect } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Movie.css";
import Reservation_Swiper from "./Reservation_Swiper.js";
import Res_img15 from "../../assets/page_1/15.jpg";
import Res_img12 from "../../assets/page_1/12.jpg";
import Res_imgAll from "../../assets/page_1/all.jpg";
import Res_screen from "../../assets/page_1/screen.png";
import ApiService from "../../ApiService";
import { useHistory } from "react-router-dom";

const Reservation_Movie = ({ history }) => {
  const [reservation, setReservation] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null); // 선택한 영화관 상태
  const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화 상태
  const [movies, setMovies] = useState([]); // 선택한 영화관에 대한 영화 목록 상태
  const [remainingSeatsCount, setRemainingSeatsCount] = useState(null);

  const [subRegions, setSubRegions] = useState({
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
  });

  useEffect(() => {
    listReservation();
  }, []);

  const listReservation = () => {
    ApiService.listReservation()
      .then((res) => {
        setReservation(res.data);
        console.log("listReservation 성공", res.data);
      })
      .catch((err) => {
        console.log("listReservation 오류 : ", err);
      });
  };

  // 연령에 대한 이미지
  const getMovieImage = (age) => {
    if (age === "All") {
      return <img src={Res_imgAll} />;
    } else if (age === "15") {
      return <img src={Res_img15} />;
    }
  };

  // 영화 선택 핸들러
  const handleMovieSelection = (reservations) => {
    setSelectedMovie(reservations);
  };

  // 영화관 선택 핸들러
  const handleTheaterSelection = (subRegion) => {
    // 선택한 영화관을 상태에 저장합니다.
    setSelectedTheater(subRegion);

    // 서버에 선택한 영화관 정보를 전송하여 해당 영화관에 예약된 영화 목록을 받아옵니다.
    ApiService.listReservation(subRegion)
      .then((res) => {
        setMovies(res.data); // 받아온 예약 목록을 상태에 저장합니다.
      })
      .catch((err) => {
        console.log("Error fetching reservations:", err);
      });
  };

  /// API를 호출하여 잔여 좌석 수를 가져오는 함수
  const fetchRemainingSeatsCount = () => {
    ApiService.listSeat()
      .then((res) => {
        // 받아온 좌석 정보에서 st_check가 "r" 또는 "y"가 아닌 좌석들의 수를 구합니다.
        const remainingSeats = res.data.filter(
          (seat) => seat.st_check !== "r" && seat.st_check !== "y"
        ).length;
        console.log("잔여 좌석 수:", remainingSeats);
        // 상태로 관리하여 컴포넌트에서 사용할 수 있도록 업데이트합니다.
        setRemainingSeatsCount(remainingSeats);
      })
      .catch((err) => {
        console.log("API 호출 오류:", err);
      });
  };

  // 컴포넌트가 마운트될 때 한 번만 API를 호출하여 잔여 좌석 수를 가져옵니다.
  useEffect(() => {
    fetchRemainingSeatsCount();
  }, []);

  const handleConfirmation = () => {
    setPopupOpen(false);
    history.push("/page_1/Reservation_Seat");
  };

  const handleCancellation = () => {
    setPopupOpen(false);
  };

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const sysdate = moment().format("YYYY-MM-DD");

  return (
    <div className={`Res_Movie ${style.Res_Movie}`}>
      <div className="Res_menu_content">
        <div className="Res_menu1">
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
        <div className="Res_menu2">
          <ul>
            <div className="Res_tit">
              <li>영화관</li>
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
                        handleRegionClick(region);
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
                        <li className="subRegions" key={subRegion}>
                          <a
                            href="#"
                            onClick={() => handleTheaterSelection(subRegion)}
                          >
                            {subRegion}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="Res_menu3">
          <ul>
            <div className="Res_tit">
              <li>영화선택</li>
            </div>
            <li>
              <div className="menu3">
                <ul className="menu3_left">
                  {movies.map((movie) => (
                    <li key={movie.movie_id}>
                      <a
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          handleMovieSelection(movie);
                        }}
                      >
                        {getMovieImage(movie.movie_age)}
                        {movie.res_movie_name}
                      </a>
                    </li>
                  ))}
                </ul>
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
                  {selectedMovie && (
                    <div className="menu4_main">
                      <a href="#none">
                        {getMovieImage(selectedMovie.movie_age)}
                        {selectedMovie.res_movie_name}
                      </a>
                    </div>
                  )}
                  {selectedMovie && remainingSeatsCount !== null && (
                    <div className="menu4_sub">
                      <ul>
                        <li>
                          <a href="#none" onClick={() => setPopupOpen(true)}>
                            <span>
                              {moment(
                                selectedMovie.res_movie_time,
                                "HH:mm:ss"
                              ).format("HH:mm")}
                              <br />
                              {remainingSeatsCount}/112{" "}
                              {selectedMovie.theater_id}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {popupOpen && selectedMovie && (
          <div className="popup">
            <div className="popup_content">
              <strong>
                {selectedMovie.res_movie_name}/{" "}
                {moment(selectedMovie.res_movie_time, "HH:mm:ss").format(
                  "HH:mm"
                )}
                ({selectedMovie.theater_id})
              </strong>
              {remainingSeatsCount !== null && (
                <p>
                  잔여좌석 <strong>{remainingSeatsCount}</strong>/112
                </p>
              )}
              <img className="Res_screen" src={Res_screen} />
              <p>
                본 영화는 만 <img src={Res_img15} className="Res_screen_img" />
                세 이상 관람가 영화입니다.
              </p>
              <button name="n" onClick={handleCancellation}>
                취소
              </button>
              <button name="y" onClick={handleConfirmation}>
                인원/좌석 선택
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservation_Movie;
