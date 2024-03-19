import React, { useState, useEffect } from "react";
import ApiService from '../../../ApiService';
import style from '../../../styles/page_6/MyPage_coupon_module.css'

import { useCookies } from 'react-cookie'; // useCookies import


function MyPage_coupon_part() {
    const [showDetail, setShowDetail] = useState(false);
    const [cusCouponData, setcusCouponData] = useState([]);
    const [cusCouponCount, setCusCouponCount] = useState('');

    const [cookies_email, setCookie_email] = useCookies(['cookies_email']); // 쿠키 훅 
    const [emailCheck, setEmailCheck] = useState('');
    const [ic_name, setIc_name] = useState('');

    // 상세내역
    const [ic_code, setIc_code] = useState('');
    const [ic_point, setIc_point] = useState('');
    const [ic_regDate, setIc_regDate] = useState('');
    


   
    const showBox = (ic_name) => {
        setShowDetail(!showDetail)
        ApiService.couponList(ic_name)
            .then(res => {
                console.log('ic_name : ' + ic_name);
                console.log('res.data', res.data);
                let coupon = res.data;
                setIc_code(coupon.cpdto.ic_code);
                setIc_point(coupon.cpdto.ic_point);
                setIc_regDate(coupon.cpdto.ic_regDate);
            })
    }


    useEffect(() => {
        reloadCusCouponList(cookies_email.c_email);
        reloadCusCouponCount(cookies_email.c_email);
        if (cookies_email.idCheck !== undefined) {
            setEmailCheck(cookies_email.c_email);
        }
        reloadCusCouponList()
    }, [cookies_email]);



    // 쿠폰 리스트
    const reloadCusCouponList = (emailCheck) => {
        ApiService.fetchCusCouponCus(emailCheck)
            .then(res => {
                console.log("test" + res.data);
                console.log("cookies_email : " + cookies_email.c_email);

                setcusCouponData(res.data);


            })
            .catch(err => {
                console.log('reloadConsultList() Error!!', err);

            });
    }

    // 사용가능한 쿠폰갯수
    const reloadCusCouponCount = (cookies_email) => {
        ApiService.countCusCoupon(cookies_email)
            .then(res => {
                console.log("test" + res);
                setCusCouponCount(res.data);
            })
            .catch(err => {
                console.log('reloadConsultList() Error!!', err);
            });
    }

    return (
        <div className={`MyPage_coupon ${style.MyPage_coupon}`}>
            <div className={`MyPage_coupon_useable ${style.MyPage_coupon_useable}`}>
                <p>사용 가능한 쿠폰 : {cusCouponCount} 매</p>
            </div>
            <div className={`MyPage_coupon_menu ${style.MyPage_coupon_menu}`}>
                <div className={`coupon_delete_parent ${style.coupon_delete_parent}`}>
                    <button className="coupon_delete_child" title='선택삭제' >선택 삭제</button>
                </div>
                <div>
                    <select className={`coupon_menu1 ${style.coupon_menu1}`}>
                        <option value='all'>전체</option>
                        <option value='movie'>영화</option>
                        <option value='store'>스토어</option>
                    </select>
                </div>
                <div>
                    <select className={`coupon_menu2 ${style.coupon_menu2}`}>
                        <option value='canUse'>사용가능</option>
                        <option value='useComplete'>사용완료</option>
                        <option value='cantUse'>기간만료</option>
                    </select>
                </div>
                <div className={`couponRegButton ${style.couponRegButton}`}>
                    <button title="쿠폰 등록" > 쿠폰등록 </button>
                </div>
            </div>
            <div className={`coupon_detail ${style.coupon_detail}`}>
                <table className={`coupon_detail_table ${style.coupon_detail_table}`} >
                    <colgroup>
                        <col style={{ width: '5%' }} />
                        <col style={{ width: '10%' }} />
                        <col />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '6%' }} />
                    </colgroup>
                    <tr>
                        <td>checkbox</td>
                        <td>분류</td>
                        <td style={{ textAlign: 'center' }}>쿠폰명</td>
                        <td>유효기간</td>
                        <td>상태</td>
                    </tr>
                    {cusCouponData.map((cusCouponDataItem, index) => (
                        <tr className={`coupon_detail_detail1 ${style.coupon_detail_detail1}`} key={index}>
                            <td><input type="checkbox" id="ic_num" value={cusCouponDataItem.ic_num}></input></td>
                            <td>{cusCouponDataItem.ic_category}</td>

                            <td style={{ textAlign: "center" }} onClick={() => showBox(cusCouponDataItem.ic_name)}>
                                {cusCouponDataItem.ic_name}
                            </td>
                            <td>{cusCouponDataItem.ic_useDate} 까지</td>

                            <td>
                                {cusCouponDataItem.ic_status === 'y' ? '사용가능' :
                                    cusCouponDataItem.ic_status === 'n' ? '사용완료' :
                                        cusCouponDataItem.ic_status === 'e' ? '기간만료' : '알 수 없음'}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {showDetail && (

                    <div className={`MyPage_coupon ${style.MyPage_coupon}`}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <table>
                                <tr>
                                    <th>쿠폰 상세내역</th>
                                </tr>
                                <tr className={`coupon_detail_detail ${style.coupon_detail_detail}`}>
                                    <td colSpan={6} className={`coupon_detail_detail_detail ${style.coupon_detail_detail_detail}`}>
                                        <table className={`innerTable ${style.innerTable}`}>
                                            <tr>
                                                <td>할인권 번호</td>
                                                <td>{ic_code}</td>
                                            </tr>
                                            <tr>
                                                <td>할인금액</td>
                                                <td>{ic_point}원</td>
                                            </tr>
                                            <tr>
                                                <td>발급 일자</td>
                                                <td>{ic_regDate}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyPage_coupon_part;