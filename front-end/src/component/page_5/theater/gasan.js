import React, { useEffect, useRef, useState } from "react";
import style from "../../../styles/page_5/gasan.module.css";
import ApiService from "../../../ApiService";
import { useParams } from "react-router-dom";

// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//이미지
import Swiper1 from "../../../assets/page_5_4/Swiper1.jpg";
import Swiper2 from "../../../assets/page_5_4/Swiper2.jpg";
import Swiper3 from "../../../assets/page_5_4/Swiper3.jpg";
import Swiper4 from "../../../assets/page_5_4/Swiper4.jpg";
import Swiper5 from "../../../assets/page_5_4/Swiper5.jpg";

import traffic from "../../../assets/page_5_4/traffic.png";
import carpark from "../../../assets/page_5_4/carpark.png";
import map from "../../../assets/page_5_4/map.png";
import group from "../../../assets/page_5_4/group.png";


import BobMarley_OneLove from "../../../assets/page_5/BobMarley_OneLove.jpg";
import { colors } from "@mui/material";

//시간 라이브라리
import moment from "moment";

function Place() {
  const swiperRef = useRef(null);
  const [isPlayActive, setIsPlayActive] = useState(true);
  const [checkMoviTitle, setCheckMoviTitle] = useState({});
  const { place_num } = useParams(); // 영화 지점 번호 
  const [theaterName, setTheaterName] = useState();
  const [selectMovieDate, setSelectMovieDate] = useState();
  const [dayBoxCount, setDayBoxCount] = useState(1);
  

  const startSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay?.start();
      setIsPlayActive(true);
    }
  };

  const stopSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay?.stop();
      setIsPlayActive(false);
    }
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const [selectedValue, setSelectedValue] = useState(1);

  // 탭 선택 핸들러
  const handleSelect = (value) => {
    console.log("handleSelect start")
    console.log(value)
    setSelectedValue(value);
  };

  const [date, setDate] = useState(new Date());
  const [movieWeek, setWeek] = useState([]);

  useEffect(() => {
    let now = new Date();
    let currentDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()  
    );

    let currentDate_2 = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;


    let currentWeek = makeWeekArr(currentDate);
    setDate(currentDate);
    setWeek(currentWeek);
    setSelectedDate(currentDate); // 처음 로딩시 오늘날짜 클릭
    setSelectMovieDate(currentDate_2);
    reloadTimeList(currentDate_2);
  }, [place_num]);

  const makeWeekArr = (date) => {
    let week = [];
    for (let i = 0; i < 10; i++) { // 10일
      let newDate = new Date(date.valueOf() + 86400000 * i); // 현재 날짜부터 i일 뒤의 날짜를 구함
      week.push([i, newDate]); // 배열에 [인덱스, 날짜] 형태로 추가
    }
    return week;
  };


  const onPressArrowLeft = () => {
    let newDate = new Date(date.valueOf() - 86400000 * 7);
    let newWeek = makeWeekArr(newDate);
    setDate(newDate);
    setWeek(newWeek);
    setDayBoxCount(dayBoxCount-1)
  };

  const onPressArrowRight = () => {
    let newDate = new Date(date.valueOf() + 86400000 * 7);
    let newWeek = makeWeekArr(newDate);
    setDate(newDate);
    setWeek(newWeek);
    setDayBoxCount(dayBoxCount+1)
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (clickedDate) => {
    let currentDate_2 = `${clickedDate.getFullYear()}-${(clickedDate.getMonth() + 1).toString().padStart(2, '0')}-${clickedDate.getDate().toString().padStart(2, '0')}`;
    console.log("handleDateClick")
    console.log(currentDate_2)
    setSelectMovieDate(currentDate_2)
    reloadTimeList(currentDate_2)
    setSelectedDate(clickedDate); // 선택된 날짜 상태 변수 업데이트
    // 여기서 선택된 날짜에 대한 추가적인 작업을 수행할 수 있습니다.
  };

  //상영시간 버튼
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getLocation();
    
  }, [place_num]);

  const getLocation = () => {
    ApiService.fetchStoreMapByID(place_num)
      .then((res) => {

        setTheaterName(res.data)
        console.log("fetchStoreMapByID");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("reloadTimeList() Error!!", err);
      });
  };

  const reloadTimeList = (currentDate_2) => {
    let currentDate = new Date(currentDate_2); // currentDate_2를 Date 객체로 변환합니다.
    currentDate.setDate(currentDate.getDate() - 1); // 날짜에서 하루를 뺍니다.

    let closeTime = currentDate.toISOString().split('T')[0]; // ISO 8601 형식으로 변환한 후 시간 부분을 제거합니다.


    let inputData = {
      place_num : place_num,
      open_time : currentDate_2,
      close_time : closeTime,
    }
    console.log("처음 넘기는 값 ")
    console.log(inputData)

    ApiService.reloadTimeList(inputData)
   
      .then((res) => {
        console.log("jpa result");
        console.log(res.data);
        setPlaces(res.data);
      })
      .catch((err) => {
        console.log("reloadTimeList() Error!!", err);
      });
  };

  const categoryMap5 = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  };

  const movieMap = {};

  // let checkMVObj = [];
  let checkMVObj = {};
  console.log("places", places)
  // console.log(categoryMap5)
  places.forEach((place) => {
    if (!movieMap[place.movie_id]) {
      // console.log(place)
      checkMVObj[place.movie_id] = place.movie_title
      movieMap[place.movie_id] = []; // 해당 영화가 없는 경우 빈 배열을 만듭니다.
    }

    categoryMap5[place.movie_id]?.push(place);
  });

  return (
    <>
      {/* 상단 swiper */}
      <div className={`mySwiper ${style.mySwiper}`}>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Swiper1} alt="Swiper1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper2} alt="Swiper2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper3} alt="Swiper3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper4} alt="Swiper4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper5} alt="Swiper5" />
          </SwiperSlide>
          <div className="Main_Swiper_control_box">
            <i
              className={`bi bi-play-fill ${isPlayActive ? "moveActive" : ""}`}
              onClick={startSlide}
            ></i>
            <i
              className={`bi bi-stop-fill ${!isPlayActive ? "moveActive" : ""}`}
              onClick={stopSlide}
            ></i>
          </div>
        </Swiper>
      </div>

      <div className={`place_wrap1 ${style.place_wrap1}`}>

        
        <div className={`place_title ${style.place_title}`}>
          <label for="pp_name">{theaterName && theaterName.ticketmap_name ? theaterName.ticketmap_name : ""}점</label>
          <a
            href="/groupform"
            className={`ddgroup_btn ${style.ddgroup_btn}`}
            id="20"
          >
            <img src={group} alt="단체 대관문의" />
          </a>
        </div>

        <div className={`place_con ${style.place_con}`}>
          <p>
            {theaterName && theaterName.ticketmap_address ? theaterName.ticketmap_address : ""} <br />
            공지사항 10/25(수) 04시 ~ 09시 한국문화진흥원 컬쳐랜드(문화상품권){" "}
            <br />
          </p>
        </div>

        <div className={`theater_btn_wrap ${style.theater_btn_wrap}`}>
            <button className={`place_btn ${style.place_btn}`} id="4">
              <img src={traffic} alt="대중교통 안내 " />
            </button>
            <button className={`place_btn ${style.place_btn}`} id="5">
              <img src={carpark} alt="자가용/주차안내" />
            </button>
            <button className={`place_btn ${style.place_btn}`} id="6">
              <img src={map} alt="지도보기" />
            </button>
        </div>
      </div>

      <div className={`place_down ${style.place_down}`}>
        <button
          type="button"
          className={`tit ${style.tit} ${selectedValue === 1 ? style.StoreDetail_selectedTab : ""
            }`}
          onClick={() => handleSelect(1)}
          style={{ width: "50%", left: "0%", height: "70px" }}
        >
          <span>상세정보</span>
        </button>
        <div>

          <div className={`place_box1 ${style.place_box1}`}>
            {selectedValue === 1 && (
              <div className={`calendarwrap ${style.calendarwrap}`}>
                <div className={style.calendarContainer}>

                  <input id="todayBox" type="hidden" value={selectMovieDate} />
                  <input id="dayBoxCount" type="hidden" value={dayBoxCount} />
                  <div className={style.calendarHeader}>
                    
                    <button style={{ opacity: dayBoxCount !== 1 ? '1' : '0', pointerEvents: dayBoxCount !== 1 ? 'auto' : 'none' }} onClick={onPressArrowLeft}>&lt;</button>
                    <h2>
                      {date.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                      })}
                    </h2>
                    <button onClick={onPressArrowRight}>&gt;</button>
                  </div>

                  {/* calendarDays */}

                  <div className={style.calendarDays}>
                    {movieWeek.map(([index, day]) => (
                      <div
                        key={index}
                        className={
                          day.toDateString() === selectedDate?.toDateString()
                            ? `${style.calendarDay} ${style.calendarToday} ${style.selectedDate}`
                            : day.getDay() === 0 // 일요일인 경우
                              ? `${style.calendarDay} ${style.sunday}`
                              : day.getDay() === 6 // 토요일인 경우
                                ? `${style.calendarDay} ${style.saturday}`
                                : style.calendarDay
                        }
                        onClick={() => handleDateClick(day)}
                      >
                        <div>{day.getDate()}</div>
                        <div>{day.toLocaleString("default", { weekday: "short" })}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}

            <div className={`place_box2 ${style.place_box2}`}>
              <div className={`age_level ${style.age_level}`}>
                <label>전체 관람과</label>
                <label>만 12세 이상 관람가</label>
                <label>만 15세 이상 관람가</label>
                <label>청소년 관람불가</label>
              </div>
            </div>

            <div className={`re_container ${style.re_container}`}>

              {checkMVObj[1] && (

                <div className={`pamu1 ${style.pamu1}`}>
                  <li>{checkMVObj[1]}</li>
                  <li>2D</li>
                  {categoryMap5[1].slice(0, 5).map((place, index) => (
                    <div key={index} className={`timeb1 ${style.timeb1}`}>
                      <button
                        className={`${style.squareButton} ${isClicked ? style.clicked : ""}`}
                        onClick={handleClick}
                      >
                        {place.movie_time}
                        <br></br>
                        {place.theater_id}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {checkMVObj[2] && (
                <div className={`dune1 ${style.dune1}`}>
                  <li>{checkMVObj[2]}</li>
                  <li>2D</li>
                  {categoryMap5[2].slice(0, 5).map((place, index) => (
                    <div key={index} className={`timeb1 ${style.timeb1}`}>
                      <button
                        className={`${style.squareButton} ${isClicked ? style.clicked : ""}`}
                        onClick={handleClick}
                      >
                        {place.movie_time}
                        <br></br>
                        {place.theater_id}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {checkMVObj[3] && (
                <div className={`bab1 ${style.bab1}`}>
                  <li>{checkMVObj[3]}</li>
                  <li>2D</li>
                  {categoryMap5[3].slice(0, 5).map((place, index) => (
                    <div key={index} className={`timeb1 ${style.timeb1}`}>
                      <button
                        className={`${style.squareButton} ${isClicked ? style.clicked : ""}`}
                        onClick={handleClick}
                      >
                        {place.movie_time}
                        <br></br>
                        {place.theater_id}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {checkMVObj[4] && (
                <div className={`oneandonly1 ${style.oneandonly1}`}>
                  <li>{checkMVObj[4]}</li>
                  <li>2D</li>
                  {categoryMap5[4].slice(0, 5).map((place, index) => (
                    <div key={index} className={`timeb1 ${style.timeb1}`}>
                      <button
                        className={`${style.squareButton} ${isClicked ? style.clicked : ""}`}
                        onClick={handleClick}
                      >
                        {place.movie_time}
                        <br></br>
                        {place.theater_id}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {checkMVObj[5] && (
                <div className={`wingka1 ${style.wingka1}`}>
                  <li>{checkMVObj[5]}</li>
                  <li>2D</li>
                  {categoryMap5[5].slice(0, 5).map((place, index) => (
                    <div key={index} className={`timeb1 ${style.timeb1}`}>
                      <button
                        className={`${style.squareButton} ${isClicked ? style.clicked : ""}`}
                        onClick={handleClick}
                      >
                        {place.movie_time}
                        <br></br>
                        {place.theater_id}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {checkMVObj[6] && (
                <div className={`maydecember1 ${style.maydecember1}`}>
                  <span>{checkMVObj[6]}</span>
                  <span>2D</span>
                  {categoryMap5[6].slice(0, 5).map((place, index) => (
                    <div key={index} className={`timeb1 ${style.timeb1}`}>
                      <button
                        className={`${style.squareButton} ${isClicked ? style.clicked : ""}`}
                        onClick={handleClick}
                      >
                        {place.movie_time}
                        <br></br>
                        {place.theater_id}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


      <div className={`mv_lastIMG1 ${style.mv_lastIMG1}`}>
        <ul>
          <li>
            <a href="#">
              <img src={BobMarley_OneLove} alt="noitce_img_1" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Place;
