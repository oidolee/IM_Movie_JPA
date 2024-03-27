import React from 'react';
import style from '../../../styles/page_6/MyPage_res_module.css'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import ApiService from '../../../ApiService';


function MyPage_res_part() {

    const [reservationInfo, setReservationInfo] = useState([]);
    const [emailCheck, setEmailCheck] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const authToken = localStorage.getItem("auth_token");
        if (authToken) {
            const decodedToken = jwtDecode(authToken); // 수정 필요
            const userEmail = decodedToken.iss;
            setEmailCheck(userEmail);
            reloadReservationInfo(userEmail);
        }

    }, []);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1, 두 자리 숫자로 만들기 위해 padStart 사용
        const day = String(date.getDate()).padStart(2, '0'); // 두 자리 숫자로 만들기 위해 padStart 사용
        return `${year}-${month}-${day}`;
    };

    const reloadReservationInfo = (emailCheck) => {
        ApiService.listPayment(emailCheck)
            .then(res => {
                console.log("res.data", res.data);
                const reservationInfo = res.data.list.map(item => ({
                    ...item,
                    pay_sysdate: formatDate(item.pay_sysdate),
                   
                }));
                
                console.log("reservationInfo", reservationInfo);
                const calculatedTotalAmount = reservationInfo.reduce((acc, item) => {
                    console.log("pay_Amount type:", typeof item.pay_amount);
                    console.log("pay_Amount value:", item.pay_amount);
                    return acc + item.pay_amount;
                }, 0);
                
                setTotalAmount(calculatedTotalAmount);
                setReservationInfo(reservationInfo);
                
            })
            .catch(err => {
                console.log('listPayment() Error!!', err);
            });
    }


    return (
        <div className={`MyPage_resMoive ${style.MyPage_resMoive}`}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>상품</th>
                        <th>결제금액</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {reservationInfo.map((reservationInfoItem, index) => (
                        <tr key={index}>
                            <input type="hidden" id='one_id_pk' value={reservationInfoItem.one_id}></input>
                            <input type="hidden" value={reservationInfoItem.c_email}></input>
                            <td>{reservationInfoItem.pay_id}</td>
                            <td>{reservationInfoItem.pay_order_name}</td>
                            <td>
                                {reservationInfoItem.pay_sysdate}
                            </td>
                            <td>{reservationInfoItem.pay_amount} 원</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={3}>총 금액 : </td>
                        <td>{totalAmount} 원</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default MyPage_res_part;
