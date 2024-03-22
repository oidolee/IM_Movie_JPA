import React, { Component } from 'react';
import style from '../../../styles/page_6/MyPage_res_module.css'
import ApiService from '../../../ApiService';

class MyPage_Store_part extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: [],    // 5. 리스트 데이터
            message: null
        }
    }

    // 라이프사이클 중 컴포턴트가 생성된 후 사용자에게 보여지기 전까지의 전체 과정을 렌더링(데이트 로딩)
    // db에서 넘어온 데이터를 받아와서 this.reloadSampleList(); 호출한다.
    componentDidMount() {
        this.storeOrderDetailList();  //1.
    }

    // list 
    storeOrderDetailList = () => {
        ApiService.ListStore_MyPage() // 2. 스프링부트와 통신기능 호출 >  3. ApiService.js 스프링부트의 데이터를 가지고 온다.
        .then(res => {              // 4.
            this.setState({
                lists: res.data // res 에 결과 데이타를 담아라
            })
        })
        .catch(err => {
            console.log('ListStore_MyPage() Error!!', err);
        })
    }

    render() {
        return (
            <div>
              {this.state.lists.map((item, index) => (
            <div className={`MyPage_resMoive ${style.MyPage_resMoive}`}>

                    <div key={index}>
                        <div className={`MyPage_res_date_List ${style.MyPage_res_date_List}`}>
                            {/* 반복문 써서 날짜 정보 나오게끔 */}
                            <table>
                                <tr>
                                    <td>2024.03.18(월)</td>
                                    {/* 나중에 포이치문 쓸거여 */}
                                </tr>
                            </table>
                        </div>
                        <div className={`MyPage_res_MovieInfo ${style.MyPage_res_MovieInfo}`}>
                            <div className={`MyPage_res_MovieInfo_small ${style.MyPage_res_MovieInfo_small}`}>
                                <div className={`movie_Name ${style.movie_Name}`}>
                                    <strong>{item.itemName}</strong>
                                </div>
                                <div className={`movie_Name ${style.movie_Name}`}>
                                    <strong>{item.totalPrice}원</strong>
                                </div>
                                <div className={`res_code ${style.res_code}`}>
                                    구매번호 {item.detailCode}
                                </div>
                                <div className={`cancle_accept ${style.cancle_accept}`}>
                                    {/* 영화 시작 30분 전에는 취소 불가능 */}
                                    취소가능
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
                                                <th>상품구성</th>
                                                <td>{item.itemName}</td>
                                            </tr>
                                            <tr>
                                                <th>유효기간</th>
                                                <td colSpan={2}>온라인 상품권 2024-03-18 ~ 2026-03-20</td>
                                            </tr>
                                           
                                            <tr>
                                                <td colSpan={3}>
                                                    <button className={`cancle_res ${style.cancle_res}`}>결제취소</button>
                                                </td>
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
                                            <td style={{color: 'red'}}>{item.totalPrice}원</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            ))}
            </div>
        )
    }
}

export default MyPage_Store_part;