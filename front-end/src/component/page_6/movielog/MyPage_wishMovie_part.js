import React, { useState } from "react";

import style from '../../../styles/page_6/MyPage_wishMovie.module.css'


function MyPage_wishMovie_part() {
    const [showDetail, setShowDetail] = useState(false);

    let usesable_count = 0;
    const ic_name = '새학기 3000원 할인';
    const coupon_num = '240306001';
    const coupon_discount_price = '240306001';
    const coupon_regDate = '240306001';
    const showBox = () => {
        setShowDetail(!showDetail)
    }

    const movieCnt= '8';

    const movieWishList = [
        {   
            moiveImg: '이미지 경로',
            movieName: '조용하지 않은 창해',
            movieAge: '9999',
            movieGrade: '4.8'
        }
    ];
    

    return (
        <div className={`MyPage_movie_wish ${style.MyPage_movie_wish}`}>
            <div className={`wishMovieCnt ${style.wishMovieCnt}`}>
                <p className={`wishMovieCnt1 ${style.wishMovieCnt1}`}>내가 보고싶은 영화 <span className={`movieCnt ${style.movieCnt}`}>{movieCnt}</span> 편</p>
            </div>
            <div className={`Mypage_moive_content ${style.Mypage_moive_content}`} >
                {movieWishList.map((movieWishList, index) => (
                    <div key={index} className={`Mypage_moive_detail ${style.Mypage_moive_detail}`}>
                        <div className={`Mypage_moive_detailImg ${style.Mypage_moive_detailImg}`}>
                            <a href="page_1/Reservation_Movie"><img src={movieWishList.moiveImg} alt="영화이미지"></img></a>
                        </div>
                        <div className={`Mypage_moive_info ${style.Mypage_moive_info}`}>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{movieWishList.movieName}</div>
                            <div>관람등급 : {movieWishList.movieAge}세</div>
                            <div>평점 : {movieWishList.movieGrade}</div>
                        </div>
                    </div>
                ))}
                
                {/* <div className={`Mypage_moive_detail ${style.Mypage_moive_detail}`}>
                    <div className={`Mypage_moive_detailImg ${style.Mypage_moive_detailImg}`}>
                        <a href="#reservationPage"><img src="#" alt="영화이미지"></img></a>
                    </div>
                    <div className={`Mypage_moive_info ${style.Mypage_moive_info}`}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{movieName}</div>
                        <div>관람등급 : {movieAge}세</div>
                        <div>평점 : {movieGrade}</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default MyPage_wishMovie_part;