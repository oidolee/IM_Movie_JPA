import React, { useState, useEffect } from 'react';
import style from '../../styles/page_6/Mypage_module.css';
import { jwtDecode } from 'jwt-decode';
import ApiService from '../../ApiService';
import { Link } from 'react-router-dom'; // 페이지이동
import MyPage_Theater from './MyPage_Theater';



function MyPage_top() {
    const [cusCouponCount, setCusCouponCount] = useState('');
    const [userInfo, setUserInfo] = useState([]);
    const [email, setEmail] = useState('');


    useEffect(() => {
        // 로컬 스토리지에서 토큰 가져오기
        const authToken = localStorage.getItem("auth_token");

        // 토큰이 존재하는지 확인 후 이메일 추출
        if (authToken) {
            const decodedToken = jwtDecode(authToken); // 수정 필요
            const userEmail = decodedToken.iss;
            setEmail(userEmail);
            reloadsearchCutomer(userEmail);
            reloadCusCouponCount(userEmail);
        }
        

    }, []); // useEffect가 최초 한 번만 실행되도록 빈 배열을 전달


    const reloadsearchCutomer = (email) => {
        ApiService.searchCutomer(email)
            .then(res => {
                console.log("test", res.data);
                setUserInfo(res.data);
                console.log(userInfo.dto.name);
            })
            .catch(err => {
                console.log('searchCutomer() Error!!', err);
            });
    }


    const reloadCusCouponCount = (email) => {
        ApiService.countCusCoupon(email)
            .then(res => {
                console.log("test" + res);
                setCusCouponCount(res.data);
            })
            .catch(err => {
                console.log('reloadConsultList() Error!!', err);
            });
    }


    return (
        <div style={{ display: 'flex' }}>
            <div className={`mypage_box ${style.mypage_box}`}>
                <div className={`my_info ${style.my_info}`}>
                    <div className={`grade_area ${style.grade_area}`}>
                        <div>
                            <span className={`txt_rank_common ${style.txt_rank_common}`}>일반</span>
                        </div>
                    </div>
                    <div className={`name_place${style.name_place}`}>
                        <div className={`name${style.name}`}>
                            <p style={{ textAlign: 'center', fontSize: '30px' }}>
                                <strong> {userInfo && userInfo.dto && userInfo.dto.name}님 </strong> 반가워요!
                            </p>
                        </div>
                    </div>
                    <div className="next_rank">
                        {/* <p>
                            <strong>{cus_grade}</strong>
                            까지 남은 금액
                            <strong>260,000(VIP달성할 금액 - 지금까지 사용할 금액)</strong>
                            원
                        </p> */}
                    </div>
                </div>
                <div className="bx_grade merge2020">
                    <div className="area_gauge">
                        {/* <ul className={`infograde ${style.infograde}`}>
                            <li>
                                <strong>일반(현재등급)</strong>
                                <em>0</em>
                            </li>
                            <li style={{ width: '250px' }}>
                                <ProgressBar now={60} />
                            </li>
                            <li>
                                <strong>{cus_grade}</strong>
                                <em>달성금액260,000</em>
                                <em className="won">원</em>
                            </li>
                        </ul> */}
                    </div>
                </div>
                <div className={`btn_wrap ${style.btn_wrap}`}>
                    {/* <div className={`my_point ${style.my_point}`}>
                        <span className="txt_img">
                            <img src={point} alt="IM_POINT" />
                        </span>
                        <em>12345p</em>
                    </div> */}
                    <div className={`my_coupon ${style.my_coupon}`}>
                        총 쿠폰 개수
                        <em className='txt_color'> {cusCouponCount}매</em>
                    </div>
                </div>
            </div>
            <div>
                <MyPage_Theater/>
            </div>
            {/* <div className={`my_theater${style.my_theater}`}>
                <div style={{ textAlign: 'left', marginTop: '60px',marginBottom: '60px', fontWeight: 'bold', display: 'flex'}}>
                    <h3>MY 영화관</h3> <button className={`btn_setup ${style.btn_setup}`}></button>
                </div>
                <div className={`my_coupon_box ${style.my_coupon_box}`} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    
                    <Link to="/theater/1" className={`plz_login_button ${style.plz_login_button}`}>
                        <div style={{ border: '1px solid #AFAFAF', width: '98px', height: '98px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            홍대입구
                        </div>
                    </Link>

                    <Link to="/theater/2" className={`plz_login_button ${style.plz_login_button}`}>
                        <div style={{ border: '1px solid #AFAFAF', width: '98px', height: '98px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            용산
                        </div>
                    </Link>

                    <Link to="/theater/3" className={`plz_login_button ${style.plz_login_button}`}>
                        <div style={{ border: '1px solid #AFAFAF', width: '98px', height: '98px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            합정
                        </div>
                    </Link>
                </div>
            </div> */}
        </div>
    );
}

export default MyPage_top;
