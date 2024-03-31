import React, { useState, useEffect } from "react";
import ApiService from '../../../ApiService';
import style from '../../../styles/page_6/MyPage_coupon_module.css'
import Table from 'react-bootstrap/Table';
import { jwtDecode } from 'jwt-decode';
import { useCookies } from 'react-cookie'; // useCookies import


function MyPage_coupon_part() {
    const [showDetail, setShowDetail] = useState(false);
    const [cusCouponData, setcusCouponData] = useState([]);
    const [cusCouponCount, setCusCouponCount] = useState('');

    const [cookies_email, setCookie_email] = useCookies(['cookies_email']); // 쿠키 훅 
    const [email, setEmail] = useState('');
    const [ic_name, setIc_name] = useState('');

    // 상세내역
    const [ic_code, setIc_code] = useState('');
    const [ic_point, setIc_point] = useState('');
    const [ic_regDate, setIc_regDate] = useState('');
    const [ic_startDate, setIc_startDate] = useState('');
    const [ic_endDate, setIc_endDate] = useState('');
    const [ic_num, setIc_num] = useState('');




    const showBox = (ic_num) => {
        setShowDetail(!showDetail)
        // 쿠폰 상세내역
        ApiService.cusCouponDetail(ic_num)
            .then(res => {
                console.log('ic_num : ' + ic_num);
                console.log('res.data', res.data);
                let coupon = res.data;
                setIc_code(coupon.cpcusdto.ic_code);
                setIc_point(coupon.cpcusdto.ic_point);
                setIc_regDate(formatDate(coupon.cpcusdto.ic_regDate));

            })
            .catch(err => {
                console.log('couponDetailList() ERROR!!', err);
            })

    }


    useEffect(() => {
        const authToken = localStorage.getItem("auth_token");
        if (authToken) {
            const decodedToken = jwtDecode(authToken);
            const userEmail = decodedToken.iss;
            setEmail(userEmail);
            reloadCusCouponList(userEmail);
            reloadCusCouponCount(userEmail);
        }

    }, []);


    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1, 두 자리 숫자로 만들기 위해 padStart 사용
        const day = String(date.getDate()).padStart(2, '0'); // 두 자리 숫자로 만들기 위해 padStart 사용
        return `${year}-${month}-${day}`;
    };

    // 쿠폰 리스트
    const reloadCusCouponList = (emailCheck) => {
        const currentDate = new Date(); // 현재 날짜 가져오기
        ApiService.fetchCusCouponCus(emailCheck)
            .then(res => {
                console.log("test", res.data);
                console.log("email : " + emailCheck);
                const cusCouponData = res.data.map(coupon => {
                    const endDate = new Date(coupon.ic_endDate); // 쿠폰의 종료일을 날짜 객체로 변환
                    let status = ''; // 쿠폰 상태 초기화
                    if (endDate < currentDate) { // 만료일이 현재 날짜보다 이전이면
                        status = 'e'; // 기간 만료
                    } else {
                        status = coupon.ic_status; // 그렇지 않으면 쿠폰의 원래 상태 유지
                    }

                    return {
                        ...coupon,
                        ic_startDate: formatDate(coupon.ic_startDate),
                        ic_regDate: formatDate(coupon.ic_regDate),
                        ic_endDate: formatDate(coupon.ic_endDate),
                        ic_status: status // 변경된 쿠폰 상태 설정
                    };
                });

                setcusCouponData(cusCouponData);
            })
            .catch(err => {
                console.log('fetchCusCouponCus() Error!!', err);
            });
    }

    // 사용가능한 쿠폰갯수
    const reloadCusCouponCount = (email) => {
        ApiService.countCusCoupon(email)
            .then(res => {
                console.log("test", res.data);
                setCusCouponCount(res.data);
                console.log(cusCouponCount);
            })
            .catch(err => {
                console.log('reloadConsultList() Error!!', err);
            });
    }

    // 선택삭제 
    const handleDeleteCoupon = (ic_num) => {
        console.log('선택 삭제 버튼 클릭');
        ApiService.deleteCusCoupon(ic_num)
            .then(response => {
                console.log('삭제 요청 성공');
                window.location.reload();
                // 성공적으로 삭제되었을 때 필요한 동작 수행
            })
            .catch(error => {
                console.error('삭제 요청 실패:', error);
                // 삭제 요청이 실패했을 때 필요한 동작 수행
            });
    };


    return (
        <div className={`MyPage_coupon ${style.MyPage_coupon}`}>
            <div className={`MyPage_coupon_useable ${style.MyPage_coupon_useable}`}>
                <p>사용 가능한 쿠폰 : {cusCouponCount} 매</p>
            </div>
            <div className={`MyPage_coupon_menu ${style.MyPage_coupon_menu}`}>
                <div className={`coupon_delete_parent ${style.coupon_delete_parent}`}>

                </div>
                {/* <div>
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
                </div> */}
                {/* <div className={`couponRegButton ${style.couponRegButton}`}>
                    <button title="쿠폰 등록" > 쿠폰등록 </button>
                </div> */}
            </div>
            <div className={`MyPage_resMoive ${style.MyPage_resMoive}`}>
                <Table striped bordered hover>
                    <colgroup>
                        <col style={{ width: '8%' }} />
                        <col style={{ width: '10%' }} />
                        <col />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>삭제</th>
                            <th>분류</th>
                            <th style={{ textAlign: 'center' }}>쿠폰명</th>
                            <th>유효기간</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cusCouponData.map((cusCouponDataItem, index) => (
                            <tr className={`coupon_detail_detail1 ${style.coupon_detail_detail1}`} key={index}>
                                <td><button className={`coupon_delete_child ${style.coupon_delete_child}`} title='선택삭제' onClick={() => handleDeleteCoupon(cusCouponDataItem.ic_num)}>삭제</button></td>
                                <td>{cusCouponDataItem.ic_category}</td>

                                <td style={{ textAlign: "center" }} onClick={() => showBox(cusCouponDataItem.ic_num)}>
                                    {cusCouponDataItem.ic_name}
                                </td>
                                <td>{cusCouponDataItem.ic_startDate}부터 ~ {cusCouponDataItem.ic_endDate}까지</td>

                                <td>
                                    {cusCouponDataItem.ic_status === 'y' ? '사용가능' :
                                        cusCouponDataItem.ic_status === 'n' ? '사용완료' :
                                            cusCouponDataItem.ic_status === 'e' ? '기간만료' : '알 수 없음'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            
            {/* <div className={`coupon_detail ${style.coupon_detail}`}>
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
                            <td><button className="coupon_delete_child" title='선택삭제' onClick={() => handleDeleteCoupon(cusCouponDataItem.ic_num)}>삭제</button></td>
                            <td>{cusCouponDataItem.ic_category}</td>

                            <td style={{ textAlign: "center" }} onClick={() => showBox(cusCouponDataItem.ic_name)}>
                                {cusCouponDataItem.ic_name}
                            </td>
                            <td>{cusCouponDataItem.ic_startDate}부터 ~ {cusCouponDataItem.ic_endDate}까지</td>

                            <td>
                                {cusCouponDataItem.ic_status === 'y' ? '사용가능' :
                                    cusCouponDataItem.ic_status === 'n' ? '사용완료' :
                                        cusCouponDataItem.ic_status === 'e' ? '기간만료' : '알 수 없음'}
                            </td>
                        </tr>
                    ))}
                </table>
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {showDetail && (

                    <div className={`MyPage_coupon ${style.MyPage_coupon}`}>
                        <div style={{ display: 'flex', justifyContent: 'center',  width: '300px'}}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>쿠폰 상세내역</th>
                                    </tr>
                                </thead>
                                <tbody>
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
                                </tbody>
                            </Table>
                            {/* <table>
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
                            </table> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyPage_coupon_part;