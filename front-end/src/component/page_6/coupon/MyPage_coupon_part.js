import React, { useState } from "react";

import style from '../../../styles/page_6/MyPage_coupon.module.css'
import { RadioButtonUnchecked } from "@mui/icons-material";

function MyPage_coupon_part() {
    const [showDetail, setShowDetail] = useState(false);

    let usesable_count = 0;
    const ic_name = '새학기 3000원 할인';
    const coupon_num = '240306001';
    const coupon_discount_price = '240306001';
    const coupon_regDate = '240306001';
    const showBox = () => {
        setShowDetail(!showDetail)
    }

    return (
        <div className={`MyPage_coupon ${style.MyPage_coupon}`}>
            <div className={`MyPage_coupon_useable ${style.MyPage_coupon_useable}`}>
                <p>사용 가능한 쿠폰 : {usesable_count} 매</p>
            </div>
            <div className={`MyPage_coupon_menu ${style.MyPage_coupon_menu}`}>
                <div className={`coupon_delete_parent ${style.coupon_delete_parent}`}>
                    <button className="coupon_delete_child" title='선택삭제'>선택 삭제</button>
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
                        <col style={{ width: '10%' }} />
                        <col />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <tr>
                        <td>checkbox</td>
                        <td>분류</td>
                        <td>구분</td>
                        <td style={{ textAlign: 'center' }}>쿠폰명</td>
                        <td>유효기간</td>
                        <td>상태</td>
                    </tr>
                    <tr className={`coupon_detail_detail1 ${style.coupon_detail_detail1}`}>
                        <td><input type="checkbox" id="one" onClick={showBox}></input></td>
                        <td>123</td>
                        <td>123</td>
                        <td style={{ textAlign: "left" }}>{ic_name}</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                    {showDetail  && (

                        <tr className={`coupon_detail_detail ${style.coupon_detail_detail}`}>
                            <td colSpan={6} className={`coupon_detail_detail_detail ${style.coupon_detail_detail_detail}`}>
                                <table className={`innerTable ${style.innerTable}`}>
                                    <tr>
                                        <td>할인권 번호</td>
                                        <td>{coupon_num}</td>
                                    </tr>
                                    <tr>
                                        <td>할인금액</td>
                                        <td>{coupon_discount_price}</td>
                                    </tr>
                                    <tr>
                                        <td>발급 일자</td>
                                        <td>{coupon_regDate}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                    )}
                </table>
            </div>
        </div>
    );
}

export default MyPage_coupon_part;