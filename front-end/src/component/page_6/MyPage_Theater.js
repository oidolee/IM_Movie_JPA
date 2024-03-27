import React, { useState, useEffect } from 'react';
import style from '../../styles/page_6/Mypage_module.css';
import { jwtDecode } from 'jwt-decode';
import ApiService from '../../ApiService';
import { Link } from 'react-router-dom'; // 페이지이동
import FaqMoiveLocation_Mypage from './FaqMoiveLocation_Mypage'



function MyPage_Theater() {
    const [userTheater, setUserTheater] = useState([]);
    const [email, setEmail] = useState('');
    const [movieLocation, setMovieLocation] = useState(''); // 영화관선택 값

    const handleLocationChange = (location) => {
        setMovieLocation(location);

        setUserTheater({
            ...userTheater,  // movieLocation 값을 최신으로 업데이트
        });
    };

    useEffect(() => {
        // 로컬 스토리지에서 토큰 가져오기
        const authToken = localStorage.getItem("auth_token");

        // 토큰이 존재하는지 확인 후 이메일 추출
        if (authToken) {
            const decodedToken = jwtDecode(authToken); // 수정 필요
            const userEmail = decodedToken.iss;
            setEmail(userEmail);
            reloadTheaterInfo(userEmail);
        }


    }, []); // useEffect가 최초 한 번만 실행되도록 빈 배열을 전달


    const reloadTheaterInfo = (email) => {
        ApiService.selectTheater(email)
            .then(res => {
                console.log("userTheater", res.data);
                setUserTheater(res.data.tdto);
            })
            .catch(err => {
                console.log('searchCutomer() Error!!', err);
            });
    }

    const [showModal, setShowModal] = useState(false); // 모달 열림 여부 상태
    const [selectedTheater, setSelectedTheater] = useState(""); // 선택된 영화관 정보 상태

    // 모달 열기 함수
    const openModal = () => {
        setShowModal(true);
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setShowModal(false);
    };

    // 영화관 선택 함수
    const handleTheaterSelection = (theater) => {
        setSelectedTheater(theater);
        closeModal(); // 영화관 선택 후 모달 닫기
    };

    return (
        <div className={`my_theater${style.my_theater}`}>
            <div style={{ textAlign: 'left', marginTop: '60px', marginBottom: '60px', fontWeight: 'bold', display: 'flex' }}>
                <h3>MY 영화관</h3> <button className={`btn_setup ${style.btn_setup}`} onClick={openModal}></button>
                {showModal && (
                    <FaqMoiveLocation_Mypage close={closeModal} onLocationChange={handleLocationChange} />
                )}

                {/* 선택된 영화관 정보 출력 */}
                {selectedTheater && (
                    <div>
                        <span>선택된 영화관: {selectedTheater.name}</span>
                        <span>위치: {selectedTheater.location}</span>
                    </div>
                )}
            </div>
            <div className={`my_coupon_box ${style.my_coupon_box}`} style={{ display: 'flex', justifyContent: 'space-between' }}>

                <Link to={`/theater/${userTheater.ticketmap_no1}`} className={`plz_login_button ${style.plz_login_button}`}>
                    <div style={{ border: '1px solid #AFAFAF', width: '98px', height: '98px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {userTheater.ic_my_theater_first}
                    </div>
                </Link>

                <Link to={`/theater/${userTheater.ticketmap_no2}`} className={`plz_login_button ${style.plz_login_button}`}>
                    <div style={{ border: '1px solid #AFAFAF', width: '98px', height: '98px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {userTheater.ic_my_theater_second}
                    </div>
                </Link>

                <Link to={`/theater/${userTheater.ticketmap_no3}`} className={`plz_login_button ${style.plz_login_button}`}>
                    <div style={{ border: '1px solid #AFAFAF', width: '98px', height: '98px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {userTheater.ic_my_theater_third}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MyPage_Theater;
