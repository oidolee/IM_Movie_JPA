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
import slide_3 from '../../assets/main/slide_3.png'
import slide_4 from '../../assets/main/slide_4.jpg'
import slide_5 from '../../assets/main/slide_5.jpg'


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
      return '<span class="' + className + '"></span>';
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
         delay: 5500,
         disableOnInteraction: false,
       }}
       pagination={pagination}
       modules={[Autoplay, Pagination, Navigation]}
       navigation={true}
       className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_1} alt='slide_1'></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_2} alt='slide_2'></img>
          
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_3} alt='slide_3'></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_4} alt='slide_4'></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_5} alt='slide_5'></img>
        </SwiperSlide>
        
        <div className='page_2 Main_Swiper_control_box'>
          <i className={`bi bi-play-fill ${isPlayActive ? 'moveActive' : ''}`} onClick={startSlide}></i>
          <i className={`bi bi-stop-fill ${!isPlayActive ? 'moveActive' : ''}`} onClick={stopSlide}></i>
        </div>
      </Swiper>
    </div>
  );
  
}
