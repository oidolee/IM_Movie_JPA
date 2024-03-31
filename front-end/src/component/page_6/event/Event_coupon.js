import React, { useEffect, useState } from 'react';
import style from '../../../styles/page_6/Event_coupon_moudle.css';
import ScrollReveal from 'scrollreveal';
import ApiService from '../../../ApiService';
import { TextField, Button } from '@mui/material';
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
            reset: false
        });
        reloadCouponList();
    }, []); // 한 번만 실행됨

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const reloadCouponList = () => {
        ApiService.fetchCoupon()
            .then(res => {
                console.log('res.data', res.data)
                const couponList = res.data.map(item => ({
                    ...item,
                    ic_startDate: formatDate(item.ic_startDate),
                    ic_endDate: formatDate(item.ic_endDate),
                    ic_regDate: formatDate(item.ic_regDate)
                }));
                setCouponList(couponList);

            })
            .catch(err => {
                console.log('fetchCoupon() ERROR!!', err);
            })
    }

    //쿠폰 조회 api -> checkCouponExistence 확인
    const checkEventCoupon = () => {
        // TextField 요소 찾기
        const textField = document.getElementById('ic_code');

        // TextField의 값 가져오기
        const ic_code = textField.value.trim();

        // 값이 비어 있는지 확인
        if (!ic_code) {
            // 값이 비어 있음을 알림
            alert('쿠폰을 입력해주세요.');
            return;
        }
        ApiService.fetchCoupon(ic_code)
            .then(res => {
                setCouponList(res.data);
                console.log(couponList)
                checkCouponExistence(couponList, ic_code);
            })
            .catch(err => {
                console.log('fetchCoupon() ERROR!!', err);
            })
    }

    //쿠폰 조회 체크
    const checkCouponExistence = (couponList, targetIcCode) => {
        if (!couponList || couponList.length === 0) {
            console.log('쿠폰 목록이 비어 있습니다.');
            return;
        }

        const couponExists = couponList.some(coupon => coupon.ic_code === targetIcCode);

        if (couponExists) {
            alert(`${targetIcCode} 쿠폰이 존재합니다.\n현장사용 가능합니다.`)
        } else {
            alert(`${targetIcCode} 쿠폰이 존재하지 않습니다.`)
        }
        reloadCouponList();
    };

    // 예시로 'W29unZmm' 쿠폰이 존재하는지 확인

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
                <div style={{ display: "flex", justifyContent: "space-between", alignContent: 'center', marginBottom: "20px" }}>
                    <h5>쿠폰</h5>
                    <div>
                        <TextField
                            required
                            variant="standard"
                            label="쿠폰"
                            type="text"
                            id="ic_code"
                            placeholder='쿠폰입력'
                        />
                        <Button variant="contained" color="primary" onClick={() => checkEventCoupon()}> 쿠폰조회 </Button>
                    </div>
                </div>
                {couponList.map((coupon, index) => (
                    index % 3 === 0 && (
                        <ul key={index}>
                            {couponList.slice(index, index + 3).map((couponItem, subIndex) => (
                                couponItem.ic_img && (
                                    <li key={subIndex}>
                                        <a href={`/Event_coupon_detail/${couponItem.ic_num}`}>
                                            <img src={`${process.env.PUBLIC_URL}/page_6/${couponItem.ic_img}`} alt='coupon_1' />
                                        </a>
                                        <p>{couponItem.ic_name}</p>
                                        <p>{couponItem.ic_startDate} ~ {couponItem.ic_endDate}</p>
                                    </li>
                                )
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
