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
import { useHistory, useParams } from "react-router-dom";

const Reservation_Movie = ({ history }) => {
  const [reservation, setReservation] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null); // 선택한 지역
  const [theaterName, setTheaterName] = useState();
  const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화 상태
  const [movies, setMovies] = useState([]); // 영화 목록
  const [timeLists, setTimeLists] = useState([]); // 영화 목록
  const [remainingSeatsCount, setRemainingSeatsCount] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null); // 지역 클릭
  const { place_num } = useParams(); // 영화 지점 번호
  const [groupedData, setGroupedData] = useState({});

  const places = {
    서울: ["홍대입구", "용산", "합정", "에비뉴엘", "영등포"],
    경기: ["안양일번가", "광명아울렛", "위례"],
    인천: ["부평", "부평갈산", "부평역사"],
  };

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
            default:
              place = "기타";
              break;
          }

          // newData에 해당 place가 없으면 빈 배열로 초기화하고, 있으면 기존 배열을 사용합니다.
          newData[place] = [...(newData[place] || []), item];
        });

        // setGroupedData를 통해 상태를 업데이트합니다.
        setGroupedData(newData);
      })
      .catch((err) => {
        console.log("listReservation 오류 : ", err);
      });
  };

  useEffect(() => {
    listReservation();
  }, []);

  const handleLocationClick = (location) => {
    const placeData = groupedData[location];
    console.log(`${location}에 대한 데이터:`, placeData);
    // 여기서 placeData를 사용하여 메뉴를 표시하도록 설정할 수 있습니다.
  };

  const getPlaceNumFromLocation = (location) => {
    let place_num = null;
    Object.entries(places).forEach(([placeKey, placeNames]) => {
      if (placeNames.includes(location)) {
        place_num = placeKey;
      }
    });
    return place_num;
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

  // 컴포넌트가 마운트될 때 한 번만 API를 호출하여 잔여 좌석 수를 가져옴
  useEffect(() => {
    fetchRemainingSeatsCount();
  }, []);

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
                  {Object.entries(places).map(([placeKey, placeNames]) => (
                    <li key={placeKey}>
                      <a
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          setSelectedRegion(placeKey);
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
                                  <li className="subRegions" key={index}>
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
        <div className="Res_menu3">
          <ul>
            <div className="Res_tit">
              <li>영화선택</li>
            </div>
            <li>
              <div className="menu3">
                <ul className="menu3_left">
                  <li>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                      }}
                    ></a>
                  </li>
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
                  <div className="menu4_main">
                    <a href="#none"></a>
                  </div>
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
