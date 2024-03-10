import React, { useState } from "react";

import style from '../../../styles/page_6/MyPage_myinfo_part.module.css'
import MyPage_myinfo_update from './MyPage_myinfo_update'

function MyPage_myifo_part() {
    const [showDetail, setShowDetail] = useState(false);

    const showBox = () => {
        setShowDetail(!showDetail)
    }

    return (
        <div className={`MyPage__myinfo ${style.MyPage__myinfo}`}>
            <div>
                <ul className={`MyPage__myinfo_box ${style.MyPage__myinfo_box}`}>
                    <li>
                        <a href='/MyPage_myinfo_update' style={{ background: 'grey' }}>
                            <span>
                                <img src="	https://www.lottecinema.co.kr/NLCHS/Content/images/member/ic_my_menu_1.png" alt="회원 정보 변경"></img>
                            </span>
                            <span>회원 정보 변경</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <img src="https://www.lottecinema.co.kr/NLCHS/Content/images/member/ic_my_menu_5.png" alt="회원 탈퇴"></img>
                            </span>
                            <span>회원 탈퇴</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div style={{ border: '1px solid whiteSmoke', padding: '15px 10px 15px 10px' }}>
                <p>
                    <ul className={`MyPage__myinfo_box2 ${style.MyPage__myinfo_box2}`}>
                        <li>
                            IMMultiflex 회원탈퇴를 원하시면 회원탈퇴 버튼을 눌러주세요. 회원을 탈퇴하시면 등록되어 있던 쿠폰/할인권/관람권/포인트 등 개인정보가 삭제되어
                            재가입 시 다시 입력하셔야 합니다.
                        </li>
                        <li>
                            2024년 VIP회원은 2023년 1월 1일 부터 12월 31일 까지 관람한 영화의 VIP 승급금액 실적 기준으로 이루어 집니다.
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default MyPage_myifo_part;