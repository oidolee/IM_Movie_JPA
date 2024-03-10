import React, { useRef, useState } from 'react';
import style from "../../../styles/page_5/moviePlace.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

//이미지
import Swiper1 from '../../../assets/page_5_4/Swiper1.jpg'
import Swiper2 from '../../../assets/page_5_4/Swiper2.jpg'
import Swiper3 from '../../../assets/page_5_4/Swiper3.jpg'
import Swiper4 from '../../../assets/page_5_4/Swiper4.jpg'
import Swiper5 from '../../../assets/page_5_4/Swiper5.jpg'

import traffic from '../../../assets/page_5_4/traffic.png'
import carpark from '../../../assets/page_5_4/carpark.png'
import map from '../../../assets/page_5_4/map.png'

function Place() {
    const swiperRef = useRef(null);
    const [isPlayActive, setIsPlayActive] = useState(true);

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
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
    <>
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
          <div className='Main_Swiper_control_box'>
            <i className={`bi bi-play-fill ${isPlayActive ? 'moveActive' : ''}`} onClick={startSlide}></i>
            <i className={`bi bi-stop-fill ${!isPlayActive ? 'moveActive' : ''}`} onClick={stopSlide}></i>
          </div>
        </Swiper>
      </div>

        <div className={`place_title ${style.place_title}`}>
        <label for="pp_name">가산디지털</label>
        </div>

        <div className={`place_con ${style.place_con}`}>
        <p>.총 상영관 수6개관총 좌석수1,054석 <br/>
        서울 금천구 디지털로10길 9 (가산동)  <br/>
        공지사항 10/25(수) 04시 ~ 09시 한국문화진흥원 컬쳐랜드(문화상품권)  <br/>
        </p>
        </div>

        <div className={`btn_wrap ${style.btn_wrap}`}>
        <button className={`place_btn ${style.place_btn}`} id="4"><img src={traffic} alt='대중교통 안내 '/></button>
        <button className={`place_btn ${style.place_btn}`} id="5"><img src={carpark} alt='자가용/주차안내'/></button>
        <button className={`place_btn ${style.place_btn}`} id="6"><img src={map} alt='지도보기'/></button>
      </div>



        
    </>
    );
}

export default Place;
