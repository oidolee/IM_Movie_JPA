import React, { useState, useEffect } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Movie_screen.css";
import Reservation_Swiper_screen from "./Reservation_Swiper_screen.js";
import Res_img18 from "../../assets/page_1/18.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";
import Res_img12 from "../../assets/page_1/12.jpg";
import Res_imgAll from "../../assets/page_1/all.jpg";
import Res_screen from "../../assets/page_1/screen.png";
import ApiService from "../../ApiService";

const Reservation_Movie = ({history}) => {
  const [popupOpen, setPopupOpen] = useState(false); // 팝업
  const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화 상태
  const [movies, setMovies] = useState([]); // 영화 목록
  const [remainingSeatsCount, setRemainingSeatsCount] = useState(null); // 잔여 좌석
  const [selectedRegion, setSelectedRegion] = useState("서울"); // 지역
  const [groupedData, setGroupedData] = useState({}); // 지역 그룹화
  const [selectedMovieInfo, setSelectedMovieInfo] = useState(null); // 최종 영화 정보 저장
  const places = {
    서울: ["홍대입구", "용산", "합정", "에비뉴엘", "영등포"],
    경기: ["안양일번가", "광명아울렛", "위례"],
    인천: ["부평", "부평갈산", "부평역사"],
  };

  useEffect(() => {
    listReservation();
    fetchRemainingSeatsCount();
  }, []); 
  
  useEffect(() => {
    if (Object.keys(groupedData).length > 0) {
      handleLocationClick("홍대입구");
    }
  }, [groupedData]);
  
  // 영화 목록
  const listReservation = () => {
    ApiService.listReservation()
      .then((res) => {
        setMovies(res.data);
        console.log("listReservation 성공", res.data);

        // 그룹화된 데이터 사용 예시
        const data = res.data;
        const newData = {}; // 새로운 데이터 객체 생성

        data.forEach((item) => {
          const { place_num } = item;
          let place;
          switch (place_num) {
            case 1:
              place = "홍대입구";
              break;
            case 2:
              place = "용산";
              break;
            case 3:
              place = "합정";
              break;
            case 4:
              place = "에비뉴엘";
              break;
            case 5:
              place = "영등포";
              break;
            case 28:
              place = "안양일번가";
              break;
            case 29:
              place = "광명아울렛";
              break;
            case 30:
              place = "위례";
              break;
            case 31:
              place = "부평";
              break;
            case 38:
              place = "부평갈산";
              break;
            case 40:
              place = "부평역사";
              break;
            default:
              place = "기타";
              break;
          }

          newData[place] = [...(newData[place] || []), item];
        });

        setGroupedData(newData);
      })
      .catch((err) => {
        console.log("listReservation 오류 : ", err);
      });
  };

  const fetchRemainingSeatsCount = () => {
    ApiService.listSeat()
      .then((res) => {
        const remainingSeats = res.data.filter(
          (seat) => seat.st_check !== "r" && seat.st_check !== "y"
        ).length;
        // console.log("잔여 좌석 수:", remainingSeats);
        setRemainingSeatsCount(remainingSeats);
      })
      .catch((err) => {
        console.log("API 호출 오류:", err);
      });
  };

  const handleLocationClick = (location) => {
    const placeData = groupedData[location];
    console.log(`${location}에 대한 데이터:`, placeData);

    // 클릭한 영화 정보 저장
    setSelectedMovie(placeData);

    const menu4Sub = document.querySelector(".menu4_sub ul"); 

    menu4Sub.innerHTML = "";

    if (placeData) {
        placeData.forEach((movieInfo, index) => {
            const { movie_id, place_num, movie_title, theater_id, movie_time, ip_num, start_time } = movieInfo;
            const formattedStartTime = moment(movie_time, "HH:mm:ss").format("HH:mm");

            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <a href="#none">
                    <span>
                        ${movie_title}
                        ${formattedStartTime}<br />
                        ${remainingSeatsCount}/112 ${theater_id}
                    </span>                         
                </a>
            `;
            menu4Sub.appendChild(listItem);
            setSelectedMovieInfo(movieInfo);

            listItem.addEventListener("click", () => {
                console.log(`선택된 영화 정보 ${index + 1}:`, movieInfo);
                handlePopupOpen(movieInfo);
            });
        });
    }
};

  const handlePopupOpen = (movieInfo) => {
    setSelectedMovieInfo(movieInfo);
    setPopupOpen(true); 
    console.log("팝업이 열릴 때 selectedMovieInfo:", movieInfo);
  };

  const handleConfirmation = () => {
    setPopupOpen(false);

    // 선택한 영화 정보를 로컬 스토리지에 저장 (필요한 정보만 추출하여 저장)
    localStorage.setItem(
      "selectedMovieInfo",
      JSON.stringify({
        movie_id: selectedMovieInfo.movie_id,
        place_num: selectedMovieInfo.place_num,
        movie_title: selectedMovieInfo.movie_title,
        theater_id: selectedMovieInfo.theater_id,
        movie_time: selectedMovieInfo.movie_time,
        ip_num: selectedMovieInfo.ip_num,
        start_time: selectedMovieInfo.start_time,
      })
    );

    history.push("/page_1/Reservation_Seat");
  };

  const handleCancellation = () => {
    setPopupOpen(false);
  };

  const handleRegionClick = (placeKey) => {
    if (selectedRegion === placeKey) {
      setSelectedRegion(null);
    } else {
      setSelectedRegion(placeKey);
    }
  };

  const sysdate = moment().format("YYYY-MM-DD");

  return (
    <div className={`Res_screen ${style.Res_Movie}`}>
      <div className="Res_screen_content">
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
                {selectedMovieInfo && (
                  <div className="step_content">
                    <dl>
                      <dt>선택한 영화 제목</dt>
                      <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                        {selectedMovieInfo.movie_title}
                      </dd>
                      <dt>선택한 상영관</dt>
                      <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                        {selectedMovieInfo.theater_id}
                      </dd>
                      <dt>선택한 상영 날짜/시간</dt>
                      <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                        {selectedMovieInfo.movie_time}
                      </dd>
                    </dl>
                  </div>
                )}
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
              <li>영화관별 상영시간표</li>
            </div>
            <li>
              <div className="menu2">
                <ul className="menu2_left">
                {Object.entries(places).map(([placeKey, placeNames]) => (
                    <li key={placeKey} className="region"
                    onClick={(event) => {
                      handleRegionClick(placeKey);
                        }}
                        style={{
                          backgroundColor: selectedRegion === placeKey ? 'white' : 'initial', 
                        }}
                    >
                      <a
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          setSelectedRegion(placeKey);
                          handleRegionClick(placeKey);
                        }}
                        style={{ 
                          color: selectedRegion === placeKey ? 'black' : 'initial',
                        }}       
                      >
                        {placeKey}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="menu2_right">
                  <ul>
                  {selectedRegion && (
                      <div>
                        {Object.entries(places).map(
                          ([placeKey, placeNames]) => (
                            <div key={placeKey}>
                              {placeKey === selectedRegion &&
                                placeNames.map((location, index) => (
                                  <li className="subRegion" key={index}>
                                    <a
                                      href="#"
                                      onClick={(event) => {
                                        event.preventDefault();
                                        handleLocationClick(location);
                                      }}
                                      
                                    >
                                      {location}
                                    </a>
                                  </li>
                                ))}
                            </div>
                          )
                        )}
                      </div>
                    )}
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
                    <Reservation_Swiper_screen />
                  </li>
                  <div className="menu4_main">
                  </div>
                  <div className="menu4_sub">
                  <ul>
                      {movies.map(
                        (movieInfo, index) =>
                          movieInfo.movie_id === 1 &&
                          movieInfo.place_num === 1 && (
                            <li
                              key={index}
                              onClick={() => handlePopupOpen(movieInfo)}
                            >
                              <a href="#none">
                                <span>
                                  {movieInfo.movie_title}
                                  {moment(
                                    movieInfo.movie_time,
                                    "HH:mm:ss"
                                  ).format("HH:mm")}{" "}
                                  <br />
                                  {remainingSeatsCount}/112{" "}
                                  {movieInfo.theater_id}
                                </span>
                              </a>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {popupOpen && selectedMovieInfo && remainingSeatsCount && (
          <div className="popup">
            <div className="popup_content">
              <strong>
                {selectedMovieInfo.movie_title}/{" "}
                {moment(selectedMovieInfo.movie_time, "HH:mm:ss").format(
                  "HH:mm"
                )}{" "}
                ({selectedMovieInfo.theater_id})
              </strong>
              <p>
                잔여좌석 <strong>{remainingSeatsCount}</strong>/112
              </p>
              <img className="Res_screen" src={Res_screen} />
              <p>영화/관람일자 확인해주세요.</p>
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
