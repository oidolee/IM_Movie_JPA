import React, { useEffect, useState } from 'react';
import style from '../../../styles/page_6/Event_coupon_moudle.css';
import ScrollReveal from 'scrollreveal';
import ApiService from '../../../ApiService';

const Event_coupon = () => {
    const [couponList, setCouponList] = useState([]);
    useEffect(() => {
        // ScrollReveal 시작 코드 추가
        ScrollReveal().reveal('.scrollUp', {
            delay: 500,
            duration: 1000,
            origin: 'left',
            distance: '30px',
            easing: 'ease',
            reset: true
        });
        reloadCouponList();
    }, []); // 한 번만 실행됨

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1, 두 자리 숫자로 만들기 위해 padStart 사용
        const day = String(date.getDate()).padStart(2, '0'); // 두 자리 숫자로 만들기 위해 padStart 사용
        return `${year}-${month}-${day}`;
    };

    const reloadCouponList = () => {
        ApiService.fetchCoupon()
            .then(res => {
                console.log('res.data', res.data)
                setCouponList(res.data);
            })
            .catch(err => {
                console.log('fetchCoupon() ERROR!!', err);
            })
    }
    return (
        <div className={`event_Home ${style.event_Home}`}>
            <div className={`scrollUp event_Home_top ${style.event_Home_top}`}>
                <h5>쿠폰 이벤트</h5>
                <ul>
                    <li><a href="#">당첨자 발표</a></li>
                    <li><a href="#">나의 응모내역</a></li>
                    <li><a href="#">지난 이벤트</a></li>
                </ul>
            </div>
            <div className={`scrollUp event_section event_section1 ${style.event_section1}`}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                    <h5>쿠폰</h5>
                </div>
                {couponList.map((coupon, index) => (
                    index % 3 === 0 && (
                        <ul key={index}>
                            {couponList.slice(index, index + 3).map((couponItem, subIndex) => (
                                <li key={subIndex}>
                                    <a href={`/Event_coupon_detail/${couponItem.ic_num}`}>
                                        <img src={`${process.env.PUBLIC_URL}/page_6/${couponItem.ic_img}`} alt='coupon_1' />
                                    </a>
                                    <p>{couponItem.ic_name}</p>
                                    <p>{couponItem.ic_startDate} ~ {couponItem.ic_endDate}</p>
                                </li>
                            ))}
                        </ul>
                    )
                ))}
                <ul>
                    <li>
                        <a href="#">
                            <img src='https://cf.lottecinema.co.kr//Media/Event/f7a6e421af46446c9d64e9b4e38a71fc.jpg' alt='coupon_2' />
                        </a>
                        <p>2024.03.15 ~ 2024.03.21</p>
                    </li>
                    <li>
                        <a href="#">
                            <img src='https://cf.lottecinema.co.kr//Media/Event/ea9b773da64943a8a876f7cb8d19deb8.jpg' alt='coupon_3' />
                        </a>
                        <p>2024.03.15 ~ 2024.04.21</p>
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

export default Event_coupon;
