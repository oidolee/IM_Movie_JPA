import { useState } from 'react';
import React from "react";
import style from "../../../styles/page_5/re_answer_list.module.css";

function Re_answer_list() {
    const [showDetail, setShowDetail] = useState(false);
    const showBox = () => {
        setShowDetail(!showDetail)
    }
    const re_answerData = [
        {
            re_answer_list_no: '1',
            re_answer_type: '영화관',
            re_answer_title: 'consult_title',
            re_answer_regdate: '0000.00.00',
            re_answer_status: '답변완료'
        }
    ]

    return (
        <div>
            <table className={`re_answer_list ${style.re_answer_list}`}>
                <colgroup>
                    <col style={{ width: '8%' }} />
                    <col style={{ width: '20%' }} />
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
                    {re_answerData.map((re_answer, index) => (
                        <tr key={index}>
                            <td>{re_answer.re_answer_list_no}</td>
                            <td>[{re_answer.re_answer_type}]</td>
                            <td>
                                <a onClick={showBox} style={{ color: "black" }}>
                                    {re_answer.re_answer_title}
                                </a>
                            </td>
                            <td>{re_answer.re_answer_regdate}</td>
                            <td>
                                <div className={`re_answer_status ${style.re_answer_status}`}>
                                    {re_answer.re_answer_status}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                {showDetail && (
                    <tr className={`re_answer_detail ${style.answer_detail_detail}`}>
                        <td colSpan={5} className={`answer_detail_detail ${style.answer_detail_detail}`}>
                            <table className={`innerTable1 ${style.innerTable1}`}>
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
                                                <dt className={`q ${style.q}`}>
                                                    <strong className={`text_qna ${style.text_qna}`}>
                                                        <span className={`circleBefore3 ${style.circleBefore3}`}></span>
                                                        <span>영화관</span>
                                                        &nbsp; | &nbsp;
                                                        
                                                    </strong>
                                                    <span>문의내용 타이틀</span>
                                                    <dd style={{ width: '100%', marginLeft: '25px' }}>문의 내용</dd>
                                                </dt>
                                            </dl>
                                            <div style={{ display: 'inline', justifyContent: 'right' }}>
                                                <div style={{ fontSize: '10px' }}>0000.00.00(접수날짜)</div>
                                                <div className={`re_answer_status ${style.re_answer_status}`}>답변완료</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>
                                            <dl>
                                                <dt className={`a ${style.a}`}>
                                                    <div>
                                                        <span className={`circleBefore4 ${style.circleBefore4}`}></span>
                                                    </div>
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
export default Re_answer_list;
