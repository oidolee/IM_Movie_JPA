import React, { useState, useEffect } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Movie.css";
import Reservation_Swiper from "./Reservation_Swiper.js";
import Res_img18 from "../../assets/page_1/18.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";
import Res_img12 from "../../assets/page_1/12.jpg";
import Res_imgAll from "../../assets/page_1/all.jpg";
import Res_screen from "../../assets/page_1/screen.png";
import ApiService from "../../ApiService";
import { useHistory } from "react-router-dom";

const Reservation_Movie = ({ history }) => {
  const [reservation, setReservation] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null); // 선택한 지역
  const [theaterName, setTheaterName] = useState();
  const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화 상태
  const [movies, setMovies] = useState([]); // 영화 목록
  const [remainingSeatsCount, setRemainingSeatsCount] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null); // 지역 클릭

  const places = {
    서울: ["홍대입구", "용산", "합정", "에비뉴엘", "영등포"],
    경기: ["안양일번가", "광명아울렛", "위례"],
    인천: ["부평", "부평갈산", "부평역사"],
  };

  useEffect(() => {
    fetchMovie(); // 영화 목록
  }, []);

  // 영화 목록
  const fetchMovie = () => {
    ApiService.fetchMovie()
      .then((res) => {
        setMovies(res.data);
        console.log("fetchMovie 성공", res.data);
      })
      .catch((err) => {
        console.log("fetchMovie 오류 : ", err);
      });
  };

  // 연령에 대한 이미지
  const getMovieImage = (mov_age) => {
    if (mov_age === "전체관람가") {
      return <img src={Res_imgAll} />;
    } else if (mov_age === "15세이상관람가") {
      return <img src={Res_img15} />;
    } else if (mov_age === "12세이상관람가") {
      return <img src={Res_img12} />;
    } else if (mov_age === "18세이상관람가") {
      return <img src={Res_img18} />;
    }
  };

  const handleSelection = (region) => {
    setSelectedPlace(region);
  };

  // // 상영관-지역 목록
  // const fetchtime1 = () => {
  //   ApiService.fetchtime1()
  //     .then((res) => {
  //       // 받은 데이터 그룹화
  //       const groupedData = groupByPlaceNum(res.data);
  //       setPlaces(groupedData);
  //       console.log("fetchtime1 성공", groupedData);
  //     })
  //     .catch((err) => {
  //       console.log("fetchMovie 오류 : ", err);
  //     });
  // };

  // // 그룹화
  // const groupByPlaceNum = (data) => {
  //   return data.reduce((groups, item) => {
  //     const group = groups[item.place_num] || [];
  //     group.push(item);
  //     groups[item.place_num] = group;
  //     return groups;
  //   }, {});
  // };

  // // 영화 선택 핸들러
  // const handleMovieSelection = (reservations) => {
  //   setSelectedMovie(reservations);
  // };

  // // 영화관 선택 핸들러
  // const handleTheaterSelection = (subRegion) => {
  //   // 선택한 영화관을 상태에 저장합니다.
  //   setSelectedTheater(subRegion);

  //   // 서버에 선택한 영화관 정보를 전송하여 해당 영화관에 예약된 영화 목록을 받아옵니다.
  //   ApiService.listReservation(subRegion)
  //     .then((res) => {
  //       setMovies(res.data); // 받아온 예약 목록을 상태에 저장합니다.
  //     })
  //     .catch((err) => {
  //       console.log("Error fetching reservations:", err);
  //     });

  //   // 선택한 지역을 설정합니다.
  //   setSelectedPlace(subRegion);
  // };

  // // 지역 선택 핸들러
  // const handleRegionClick = (region) => {
  //   setSelectedRegion(region);
  // };

  // 잔여 좌석 수 호출
  const fetchRemainingSeatsCount = () => {
    ApiService.listSeat()
      .then((res) => {
        // st_check가 "r" 또는 "y"가 아닌 좌석들의 수
        const remainingSeats = res.data.filter(
          (seat) => seat.st_check !== "r" && seat.st_check !== "y"
        ).length;
        console.log("잔여 좌석 수:", remainingSeats);
        setRemainingSeatsCount(remainingSeats);
      })
      .catch((err) => {
        console.log("API 호출 오류:", err);
      });
  };

  // 컴포넌트가 마운트될 때 한 번만 API를 호출하여 잔여 좌석 수를 가져옴
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
                  {Object.entries(places).map(([placeKey, placeName]) => (
                    <li key={placeKey}>
                      <a
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          handleSelection(placeKey);
                        }}
                      >
                        {placeKey}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="menu2_right">
                <ul>
                  {selectedPlace &&
                    places[selectedPlace].map((place, index) => (
                      <li className="subRegions" key={index}>
                        <a
                          href="#"
                          onClick={(event) => {
                            event.preventDefault();
                            handleTheaterSelection(place);
                          }}
                        >
                          {place}
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
                    <li key={movie.mov_id}>
                      <a
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          handleMovieSelection(movie);
                        }}
                      >
                        {getMovieImage(movie.mov_age)}
                        {movie.mov_title}
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
                        {getMovieImage(selectedMovie.mov_age)}
                        {selectedMovie.mov_title}
                      </a>
                    </div>
                  )}
                  <div className="menu4_sub">
                    <ul>
                      <li>
                        {remainingSeatsCount !== null &&
                          selectedPlace &&
                          selectedMovie && (
                            <a href="#none" onClick={() => setPopupOpen(true)}>
                              <span>
                                {moment(
                                  selectedPlace.start_time,
                                  "HH:mm:ss"
                                ).format("HH:mm")}
                                <br />
                                {remainingSeatsCount}/112{" "}
                                {selectedPlace.theater_id}
                              </span>
                            </a>
                          )}
                      </li>
                    </ul>
                  </div>
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
