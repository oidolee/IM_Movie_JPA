import React, { useEffect } from 'react';
import style from '../../../styles/page_6/Event_moudle.css'; 
import ScrollReveal from 'scrollreveal';

const EventHome = () => {
    useEffect(() => {
        // ScrollReveal 시작 코드 추가
        ScrollReveal().reveal('.scrollUp', {
            delay: 300,
            duration: 1000,
            origin: 'left',
            distance: '30px',
            easing: 'ease',
            reset: false
        });
    }, []); // 한 번만 실행됨

    return (
        <div className={`event_Home ${style.event_Home}`}>
            <div className={`scrollUp event_Home_top ${style.event_Home_top}`}>
                <h5>전체 이벤트</h5>
                <ul>
                    <li><a href="#">당첨자 발표</a></li>
                    <li><a href="#">응모내역</a></li>
                    <li><a href="#">지난 이벤트</a></li>
                </ul>
            </div>
            <div className={`scrollUp event_section event_section1 ${style.event_section1}`}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                    <h5>쿠폰</h5>
                    <a href="/Event_coupon">더보기</a>
                </div>
                <ul>
                    <li>
                        <a href="#">
                            <img src='https://cf.lottecinema.co.kr//Media/Event/61254ebb80554f8382f8b3a9827c0723.png' alt='coupon_1' />
                        </a>
                        <p>2024.03.15 ~ 2024.03.21</p>
                    </li>
                    <li>
                        <a href="#">
                            <img src='https://cf.lottecinema.co.kr//Media/Event/a6df32e16d5d41a9acfae39139775cf9.jpg' alt='coupon_2' />
                        </a>
                        <p>2024.03.15 ~ 2024.03.21</p>
                    </li>
                    <li>
                        <a href="#">
                            <img src='https://cf.lottecinema.co.kr//Media/Event/c287281b445d416c86790ff32015a60c.jpg' alt='coupon_3' />
                        </a>
                        <p>2024.03.15 ~ 2024.04.21</p>
                    </li>
                </ul>
            </div>
            <div className={`scrollUp event_section event_section2 ${style.event_section2}`}>
                <h5>시사회 / 무대인사</h5>
                <ul>
                    <li>
                        <a href="#">
                            <img src='https://cf.lottecinema.co.kr//Media/Event/419e1e047130420dacf2f750523b28f6.jpg' alt='greeding_1' />
                        </a>
                        <p>2024.03.15 ~ 2024.03.21</p>
                    </li>
                    <li>
                        <a href="#">
                            <img src='https://cf.lottecinema.co.kr//Media/Event/b4e04438e2da4c0ba87a623946988175.jpg' alt='greeding_2' />
                        </a>
                        <p>2024.03.15 ~ 2024.03.21</p>
                    </li>
                    <li>
                        <a href="#">
                            <img src='https://cf.lottecinema.co.kr//Media/Event/2f82885e1338494f9d64b64163863950.jpg' alt='greeding_3' />
                        </a>
                        <p>2024.03.15 ~ 2024.04.21</p>
                    </li>
                </ul>
            </div>

            <div className={`scrollUp event_section2 event_myTheater ${style.event_myTheater}`}>
                <h5>우리동네영화관</h5>
                <ul>
                    <li>
                        <a className={`bn_tit active ${style.bn_tit}`}>
                            <span class="txt_zone ty1">수유</span>
                            <strong>[수유] 조조시간 확대 시행 (~12시까지)</strong>
                            <span class="bn_tit_date">2024.02.21 ~ 2024.12.31</span>
                        </a>
                        <div class="bn_cont" style={{ display: "none" }}>
                            내용1
                        </div>
                    </li>

                    <li>
                        <a className={`bn_tit ${style.bn_tit}`}>
                            <span class="txt_zone ty5">수유</span>
                            <strong>[가산] 심야 극장 개장 (~02시까지)</strong>
                            <span class="bn_tit_date">2024.03.21 ~ 2024.06.31</span>
                        </a>
                        <div class="bn_cont" style={{ display: "none" }}>
                            내용2
                        </div>
                    </li>

                    <li>
                        <a className={`bn_tit ${style.bn_tit}`}>
                            <span class="txt_zone ty2">수유</span>
                            <strong>[신촌] ICT 문화 시작</strong>
                            <span class="bn_tit_date">2024.02.21 ~ 2024.04.03</span>
                        </a>
                        <div class="bn_cont" style={{ display: "none" }}>
                            내용3
                        </div>
                    </li>
                </ul>
            </div>

            <div className={`scrollUp event_section3 event_add1 ${style.event_add1}`}>
                <img src="https://cf2.lottecinema.co.kr/lotte_image/2024/BobMarley_OneLove/0311/BobMarley_OneLove_980180_2.jpg" alt='add1' />
            </div>

            <div className={`scrollUp event_section3 event_add2 ${style.event_add2}`}>
                <img src="https://cf2.lottecinema.co.kr/lotte_image/2022/Hyundaicard/Hyundaicard_980240.jpg" alt="hyundai" />
            </div>
        </div>
    );
};

export default EventHome;
