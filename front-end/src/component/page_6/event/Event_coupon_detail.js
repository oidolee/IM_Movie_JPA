import React, { useEffect, useState } from 'react';
import style from '../../../styles/page_6/Event_coupon_detail_moudle.css';
import ScrollReveal from 'scrollreveal';
import ApiService from '../../../ApiService';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Typography, Select, MenuItem, TextField, Button } from "@mui/material";
import { useHistory } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const Event_coupon_detail = () => {
    const { ic_num } = useParams();
    const [couponList, setCouponList] = useState([]);
    const [email, setEmail] = useState('');
    const [emailCheck, setEmailCheck] = useState('');
    const history = useHistory();


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
        reloadCouponList(ic_num);
        const authToken = localStorage.getItem("auth_token");

        // 토큰이 존재하는지 확인 후 이메일 추출
        if (authToken) {
            const decodedToken = jwtDecode(authToken); // 수정 필요
            const userEmail = decodedToken.iss;
            setEmail(userEmail);
        }
    }, []); // 한 번만 실행됨

    const [couponCus, setCouponCus] = useState({
        c_email: email,
        ic_code: '',
        ic_name: '',
        ic_category: '',
        ic_point: '',
        ic_startDate: '',
        ic_endDate: '',
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setCouponCus(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const saveCoupon = (e) => {
        e.preventDefault();
        const couponCus = {
            c_email: email,
            ic_code: couponList.ic_code,
            ic_name: couponList.ic_name,
            ic_category: couponList.ic_category,
            ic_point: couponList.ic_point,
            ic_startDate: couponList.ic_startDate,
            ic_endDate: couponList.ic_endDate
        };

        ApiService.addCusCoupon(couponCus)
            .then((res) => {
                alert('쿠폰이 발급되었습니다.')
                console.log("addCusCoupon 성공 : ", res.data);
                history.push("/MyPage_coupon");
            })
            .catch((err) => {
                console.log("addCusCoupon 실패 : ", err);
            });
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const reloadCouponList = (ic_num) => {
        ApiService.couponDetailList(ic_num)
            .then(res => {
                console.log('res.data', res.data)
                const couponData = res.data.cpdto;
                couponData.ic_regDate = formatDate(couponData.ic_regDate); // 작성일 포맷 변경
                setCouponList(couponData);
            })
            .catch(err => {
                console.log('fetchCoupon() ERROR!!', err);
            })
    }
    return (
        <div>
            <div className={`Event_coupon_detail ${style.Event_coupon_detail}`} >
                <div >
                    <div className={`Event_coupon_name ${style.Event_coupon_name}`}>
                        <h5>{couponList.ic_name}</h5>
                    </div>
                    <div className={`Event_coupon_regDate ${style.Event_coupon_regDate}`}>
                        <h6>{couponList.ic_regDate}</h6>
                    </div>
                    <div className={`Event_coupon_regDate ${style.Event_coupon_regDate}`}>
                        <h6>쿠폰 이벤트 기간 : {formatDate(couponList.ic_startDate)} ~ {formatDate(couponList.ic_endDate)}</h6>
                    </div>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/page_6/${couponList.ic_img_detail}`} style={{ width: '80%' }} alt='coupon_1' />
                </div>
                <div className={`Event_coupon_content ${style.Event_coupon_content}`}>
                    <TextField
                        required
                        id="standard-required"
                        variant="standard"
                        label="쿠폰코드"
                        type="hidden"
                        name="ic_code"
                        value={couponList.ic_code}
                        onChange={onChange}

                    />
                    <TextField
                        required
                        id="standard-required"
                        variant="standard"
                        label="쿠폰 이름"
                        type="hidden"
                        name="ic_name"
                        value={couponList.ic_name}
                        onChange={onChange}
                    />
                    <br />
                    <TextField
                        required
                        id="standard-required"
                        variant="standard"
                        label="ic_category"
                        type="hidden"
                        name="ic_category"
                        value={couponList.ic_category}
                        onChange={onChange}
                    />
                    <br />
                    <TextField
                        required
                        id="standard-required"
                        variant="standard"
                        label="포인트"
                        type="hidden"
                        name="ic_point"
                        value={couponList.ic_point}
                        onChange={onChange}
                    />
                    <br />
                    <br />

                    <TextField
                        required
                        id="standard-required"
                        variant="standard"
                        label="쿠폰사용시작 날짜 (0000-00-00)형식"
                        type="hidden"
                        name="ic_startDate"
                        value={couponList.ic_startDate}
                        onChange={onChange}
                    />
                    <TextField
                        required
                        id="standard-required"
                        variant="standard"
                        label="쿠폰사용종료 날짜 (0000-00-00)형식"
                        type="hidden"
                        name="ic_endDate"
                        value={couponList.ic_endDate}
                        onChange={onChange}
                    />

                    <Button
                        className={`saveButton ${style.saveButton}`}
                        variant="contained"
                        color="primary"
                        style={{backgroundColor: 'black'}}
                        onClick={saveCoupon}
                    >
                        쿠폰 다운로드
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Event_coupon_detail;
