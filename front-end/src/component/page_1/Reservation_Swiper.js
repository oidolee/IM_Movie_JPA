import React from 'react';
import moment from "moment";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'moment/locale/ko';

import 'swiper/css';
import 'swiper/css/navigation';
import style from  "../../styles/page_1/Reservation_Swiper.css";

export default function Reservation_Swiper() {

  const sysdate = moment().format("YYYY-MM-DD");

  // 날짜 목록 생성(5일)
  const getDates = (start) => {
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const date = moment(start).add(i, 'days').format("YYYY-MM-DD");
      dates.push(date);
    }
    return dates;
  }

  // sysdate 달의 시작
  const getSlideStartDate = (slideIndex) => {
    return moment(sysdate).add(slideIndex * 5, 'days');
  }

  // 다음 달의 시작
  const getNextMonthStartDate = (slideIndex) => {
    const currentMonthEndDate = moment(sysdate).endOf('month');
    return moment(currentMonthEndDate).add(1, 'day');
  }

  return (
    <div className={`Reservation_Swiper ${style.Reservation_Swiper}`}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> 
        {[0, 1, 2, 3, 4].map((slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div>
              <ul className="swiper_content">
                {getDates(getSlideStartDate(slideIndex)).map((date, index) => (
                  <li key={index} style={{color: moment(date).day() === 0 ? 'red' : 'black'}}>
                    <a href="">{moment(date).format("D")}<br />{moment(date).format("dd")}</a>
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
        {/* 다음 달로 이동하는 슬라이드 추가 */}
        <SwiperSlide>
          <div>
            <ul className="swiper_content">
              {getDates(getNextMonthStartDate()).map((date, index) => (
                <li key={index} style={{color: moment(date).day() === 0 ? 'red' : 'black'}}>
                  <a href="">{moment(date).format("D")}<br />{moment(date).format("dd")}</a>
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
