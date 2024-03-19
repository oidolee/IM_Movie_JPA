// import React, { useState, useEffect } from "react";
// import ApiService from '../../../ApiService';
// import style from '../../../styles/page_6/MyPage_coupon_module.css'
// import { useParams } from 'react-router-dom';


// function MyPage_coupon_part() {


//     // 상세내역
//     const [ic_code, setIc_code] = useState('');
//     const [ic_point, setIc_point] = useState('');
//     const [ic_regDate, setIc_regDate] = useState('');
//     const { ic_name } = useParams();


//     useEffect(() => {
//         reloadCouponList(ic_name);
//         console.log('ic_name : ' + ic_name);
//     }, [ic_name]);

//     const reloadCouponList = (ic_name) => {
//         ApiService.couponList(ic_name)
//             .then(res => {
//                 console.log('ic_name : ' + ic_name);
//                 console.log('res.data', res.data);
//                 let coupon = res.data;
//                 setIc_code(coupon.cpdto.ic_code);
//                 setIc_point(coupon.cpdto.ic_point);
//                 setIc_regDate(coupon.cpdto.ic_regDate);
//             })
//     }

//     return (
//         <div className={`MyPage_coupon ${style.MyPage_coupon}`}>
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//                 <table>
//                     <tr>
//                         <th>쿠폰 상세내역</th>
//                     </tr>
//                     <tr className={`coupon_detail_detail ${style.coupon_detail_detail}`}>
//                         <td colSpan={6} className={`coupon_detail_detail_detail ${style.coupon_detail_detail_detail}`}>
//                             <table className={`innerTable ${style.innerTable}`}>
//                                 <tr>
//                                     <td>할인권 번호</td>
//                                     <td>{ic_code}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>할인금액</td>
//                                     <td>{ic_point}원</td>
//                                 </tr>
//                                 <tr>
//                                     <td>발급 일자</td>
//                                     <td>{ic_regDate}</td>
//                                 </tr>
//                             </table>
//                         </td>
//                     </tr>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default MyPage_coupon_part;