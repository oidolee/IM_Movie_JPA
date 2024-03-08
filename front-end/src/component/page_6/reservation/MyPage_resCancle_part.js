import React, { Component } from 'react';
import style from '../../../styles/page_6/MyPage_res.module.css'
import { red } from '@mui/material/colors';


class MyPage_resCancle_part extends Component {
    render() {
        return (
            <div className={`MyPage_resMoive ${style.MyPage_resMoive}`}>
                <div className={`MyPage_res_date_List ${style.MyPage_res_date_List}`}>
                    {/* 반복문 써서 날짜 정보 나오게끔 */}
                    <table>
                        <tr>
                            <td>날짜</td>
                            {/* 나중에 포이치문 쓸거여 */}
                        </tr>
                        <tr>
                            <td>날짜</td>
                        </tr>
                        <tr>
                            <td>날짜</td>
                        </tr>
                        <tr>
                            <td>날짜</td>
                        </tr>
                    </table>
                </div>
                <div className={`MyPage_res_MovieInfo ${style.MyPage_res_MovieInfo}`}>
                    <div className={`MyPage_res_MovieInfo_small ${style.MyPage_res_MovieInfo_small}`}>
                        <div className={`movie_Name ${style.movie_Name}`}>
                            <strong>영화 이름</strong>
                        </div>
                        <div className={`movie_Name ${style.movie_Name}`}>
                            <strong>가격</strong>
                        </div>
                        <div className={`res_code ${style.res_code}`}>
                            예매번호 0000000
                        </div>
                        <div className={`cancle_accept ${style.cancle_accept}`} >
                            0000.00.00 취소 완료                            
                        </div>
                    </div>
                    <div className={`MyPage_res_MovieInfo_detail ${style.MyPage_res_MovieInfo_detail}`}>
                        <div className={`movie_info ${style.movie_info}`}>
                            <div className={`movie_img ${style.movie_img}`}>
                                <img src='#' alt='영화포스터' />
                            </div>
                            <div className={`movie_info_detail ${style.movie_info_detail}`}>
                                <table>
                                    <tr>
                                        <th>상영일시</th>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>상영관</th>
                                        <td colSpan={2}></td>
                                    </tr>
                                    <tr>
                                        <th>관람인원</th>
                                        <td colSpan={2}></td>
                                    </tr>
                                    <tr>
                                        <th>좌석</th>
                                        <td colSpan={2}></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <hr/>
                        <div className={`movice_purchase_date ${style.movice_purchase_date}`}>
                            <table>
                                <tr>
                                    <th>결제일시</th>
                                    <td colSpan={5}>0000-00-00 00:00:00</td>
                                </tr>
                                <tr>
                                    <td><strong>주문금액</strong></td>
                                    <td>0000000원</td>
                                    <td><strong>할인금액</strong></td>
                                    <td>0000000원</td>
                                    <td><strong>총 결제 금액</strong></td>
                                    <td style={{color: 'red'}}>0000000원</td>
                                </tr>
                                <tr>
                                    <td>취소일시</td>
                                    <td style={{color: red}}>0000-00-00 00:00:00</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPage_resCancle_part;