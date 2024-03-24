import React, { useEffect, useState } from 'react';
import style from '../../../styles/page_6/Event_coupon_detail_moudle.css';
import ScrollReveal from 'scrollreveal';
import ApiService from '../../../ApiService';
import { useParams } from 'react-router-dom';

const Event_coupon_detail = () => {
    const { ic_num } = useParams();
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

    const reloadCouponList = () => {
        ApiService.couponList(ic_num)
            .then(res => {
                console.log('res.data', res.data)
                setCouponList(res.data.cpdto);
            })
            .catch(err => {
                console.log('fetchCoupon() ERROR!!', err);
            })
    }
    return (
        <div className={`event_detail ${style.event_detail}`}>
            <div className={`event_ic_name ${style.event_ic_name}`}>
                <div>
                    제목 : {couponList.ic_name}
                </div>
                <div>
                    작성일 : {couponList.ic_regDate}
                </div>
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/page_6/${couponList.ic_img}`} alt='coupon_1' />
            </div>
            <div>
                {couponList.ic_content}
            </div>
        </div>
    );
};

export default Event_coupon_detail;
