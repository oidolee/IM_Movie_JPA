import React, { useRef, useState } from 'react';
import style from "../../../styles/page_5/movieDetail.module.css";

//이미지
import traffic from '../../../assets/page_5_4/traffic.png'
import carpark from '../../../assets/page_5_4/carpark.png'
import map from '../../../assets/page_5_4/map.png'

import movie1 from '../../../assets/page_5/movie1.jpg'



function movieDetail() {

return (
    <>
    <div className={`detail_movie_wrap ${style.detail_movie_wrap}`}>
    <div className={`detail_info ${style.detail_info}`}>
        <div className={`detail_img_box ${style.detail_img_box}`}>
            <img src={movie1} alt='파묘상세' style={{ width: '250px' }} />
        </div>

        <div className={`detail_text ${style.detail_text}`}>
            <div className={`detail_title ${style.detail_title}`}>
                <label htmlFor="pp_name">파묘</label>
            </div>

            <div className={`detail_con ${style.detail_con}`}>
                <div className={`detail_con1 ${style.detail_con1}`}>
                <label for="de_date">2024.02.22 개봉</label>
                <label for="de_time">| 134분 |</label>
                <label for="de_age"> <span style={{ color: 'orange' }}>15세이상관람가</span></label>
                <label for="de_num">| 804.1만명</label>
                </div>
            </div>

            <div className={`btn_wrap1 ${style.btn_wrap1}`}>
                <button className={`detail_btn ${style.detail_btn}`} id="10">&#9658;예고편 재생 </button>
                <button className={`detail_btn ${style.detail_btn}`} id="11"><img src={carpark} alt='자가용/주차안내'/></button>
                <button className={`detail_btn ${style.detail_btn}`} id="12"><img src={map} alt='지도보기'/></button>
            </div>
        </div>
    </div>
</div>

        
      </>
    );
}

export default movieDetail;
