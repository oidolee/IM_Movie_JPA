import React, { Component } from 'react';
import style from '../../styles/page_6/Mypage.module.css'

class MyPage_top extends Component {
    render() {
        return (
            <div className={`mypage_box ${style.mypage_box}`}>
                <div className={`my_info ${style.my_info}`}>
                    <div className={`grade_area ${style.grade_area}`}>
                        <span className={`txt_rank_common ${style.txt_rank_common}`}>일반</span>
                    </div>
                    <p className="name">
                        <strong>아이디들어갈 곳 님</strong>
                        "반가워요!"
                    </p>
                    <div className="profile_set">
                        <button type="button" className="btn_txt_edit" title="레이어 팝업 열기">편집</button>
                    </div>
                    <div className="next_rank">
                        <p>
                            "VIP"
                            "까지 남은 금액"
                            <em>260,000(VIP달성할 금액 - 지금까지 사용할 금액)</em>
                            "원"
                        </p>
                    </div>
                </div>
                <div className="bx_grade merge2020">
                    <div className="area_gauge">
                        <div className="gauge" ></div>
                        <ul className="infograde">
                            <li>
                                <strong>일반(현재등급)</strong>
                                <em>0</em>
                            </li>
                            <li>
                                <strong>다음등급</strong>
                                <em>달성금액0</em>
                                <em className="won">원</em>
                            </li>
                        </ul>
                    </div>
                    <a href='#' className="btn_col5 ty5 rnd">MEMBERSHIP ZONE</a>
                </div>
                <div className="btn_wrap">
                    <a herf="#" target='_blank' title="포인트 페이지 이동">
                        <span className="txt_img">
                            <img src='#' alt="IM_POINT" />
                        </span>
                        <em>총 포인트</em>
                    </a>
                    <a href="#" title='쿠폰함 페이지 이동'>
                        "쿠폰함"
                        <em className='txt_color'>총 쿠폰갯수</em>
                    </a>
                </div>
            </div>
        )
    }
}

export default MyPage_top;