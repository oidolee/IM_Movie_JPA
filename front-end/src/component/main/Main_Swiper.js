import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import style from  "../../styles/main/Main_Swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide_1 from '../../assets/main/slide_1.jpg'
import slide_2 from '../../assets/main/slide_2.jpg'

export default function Main_Swiper() {
  const swiperRef = useRef(null);
  const [isPlayActive, setIsPlayActive] = useState(true);

  const startSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
      // startSlide 함수에서는 보더를 추가하도록 상태 변경
      setIsPlayActive(true);
    }
  };

  const stopSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
      // startSlide 함수에서는 보더를 추가하도록 상태 변경
      setIsPlayActive(false);
    }
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };


  return (
    <div className={`Main_Swiper ${style.Main_Swiper}`}> 
      <Swiper 
       ref={swiperRef}
       spaceBetween={30}
       centeredSlides={true}
       loop={true} // 무한 스크롤 옵션
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
          <img src={slide_1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_2}></img>
        </SwiperSlide>
        
        <div className='Main_Swiper_control_box'>
          <i className={`bi bi-play-fill ${isPlayActive ? 'moveActive' : ''}`} onClick={startSlide}></i>
          <i className={`bi bi-stop-fill ${!isPlayActive ? 'moveActive' : ''}`} onClick={stopSlide}></i>
        </div>
      </Swiper>
    </div>
  );
  
}
