import { useState } from 'react';
import React from "react";
import style from '../../../styles/page_6/MyPage_consult_list_part.modul.css';

function MyPage_consult_list_part() {
    const [showDetail, setShowDetail] = useState(false);
    const showBox = () => {
        setShowDetail(!showDetail)
    }
    const consultData = [
        {
            consult_list_no: '1',
            consult_type: '영화관',
            consult_title: 'consult_title',
            consult_regdate: '0000.00.00',
            consult_status: '답변완료'
        }
    ]

    return (
        <div>
            <table className={`consult_list ${style.consult_list}`}>
                <colgroup>
                    <col style={{ width: '8%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: 'auto' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '8%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th> 번호 </th>
                        <th> 분류 </th>
                        <th> 제목 </th>
                        <th> 작성일 </th>
                        <th> 상태 </th>
                    </tr>
                </thead>
                <tbody>
                    {consultData.map((consult, index) => (
                        <tr key={index}>
                            <td>{consult.consult_list_no}</td>
                            <td>[{consult.consult_type}]</td>
                            <td>
                                <a onClick={showBox} style={{ color: "black" }}>
                                    {consult.consult_title}
                                </a>
                            </td>
                            <td>{consult.consult_regdate}</td>
                            <td>
                                <div className={`consult_status ${style.consult_status}`}>
                                    {consult.consult_status}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                {showDetail && (
                    <tr className={`consult_detail ${style.coupon_detail_detail}`}>
                        <td colSpan={5} className={`coupon_detail_detail_detail ${style.coupon_detail_detail_detail}`}>
                            <table className={`innerTable ${style.innerTable}`}>
                                <thead>
                                    <tr>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', background: 'whiteSmoke' }}>
                                            <div>
                                                <span>영화관 |</span>
                                            </div>
                                            <div><span> 답변 수신 |</span></div>
                                        </div>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
                                            <dl>
                                                <dt>
                                                    <strong className={`txt_qna ${style.text_qna}`}>
                                                        <div className={`circleBefore${style.circleBefore}`}></div>
                                                        <span>영화관</span>
                                                        &nbsp; | &nbsp;
                                                        <span>문의내용 타이틀</span>
                                                    </strong>
                                                    <dd style={{ width: '100%' }}>문의 내용</dd>
                                                </dt>
                                            </dl>
                                            <div style={{ display: 'inline', justifyContent: 'right' }}>
                                                <div style={{ fontSize: '10px' }}>0000.00.00(접수날짜)</div>
                                                <div className={`consult_status ${style.consult_status}`}>답변완료</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>
                                            <dl>
                                                <dt>
                                                    <dd style={{ width: '100%' }}>안녕하세요 답변드리겠습니다.</dd>
                                                </dt>
                                            </dl>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                )}
            </table>
        </div>
    )
}
export default MyPage_consult_list_part;