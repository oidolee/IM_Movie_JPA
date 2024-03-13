import { useState, useEffect } from 'react';
import React from "react";
import style from '../../../styles/page_6/MyPage_consult_list_part.modul.css';
import ApiService from '../../../ApiService';

function MyPage_consult_list_part() {
    const [showDetailIndex, setShowDetailIndex] = useState(-1); // 상세 정보를 표시할 항목의 인덱스를 저장할 상태 추가
    const [consult, setConsult] = useState([]);

    useEffect(() => {
        reloadConsultList();
    }, []);

    const reloadConsultList = () => {
        ApiService.fetchConsult()
        .then(res => {
            console.log("test" + res);
            setConsult(res.data);
        })
        .catch(err => {
            console.log('reloadConsultList() Error!!', err);
        });
    }

    const toggleDetail = (index) => {
        setShowDetailIndex(index === showDetailIndex ? -1 : index); // 클릭된 항목의 인덱스로 showDetailIndex 상태를 업데이트
    }

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
                    {consult.map((consultItem, index) => (
                        <React.Fragment key={consultItem.one_id}>
                            <tr onClick={() => toggleDetail(index)}> {/* 클릭 이벤트 추가 */}
                                <td>{consultItem.one_id}</td>
                                <td>[{consultItem.ib_type}]</td>
                                <td>
                                    <a style={{ color: "black" }}>
                                        {consultItem.ib_title}
                                    </a>
                                </td>
                                <td>{consultItem.ib_date}</td>
                                <td>
                                    <div className={`consult_status ${style.consult_status}`}>
                                    {consultItem.ib_show === 'y' ? '답변완료' : '답변대기 중'}
                                    </div>
                                </td>
                            </tr>
                            {showDetailIndex === index && ( // 해당 항목의 인덱스가 showDetailIndex와 일치할 때만 consult_detail을 렌더링
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
                                                            <dt className={`q ${style.q}`}>
                                                                <strong className={`txt_qna ${style.txt_qna}`}>
                                                                    <span className={`circleBefore ${style.circleBefore}`}></span>
                                                                    <span>영화관</span>
                                                                    &nbsp; | &nbsp;
                                                                    
                                                                </strong>
                                                                <span>문의내용 타이틀</span>
                                                                <dd style={{ width: '100%', marginLeft: '25px' }}>문의 내용</dd>
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
                                                            <dt className={`a ${style.a}`}>
                                                                <div>
                                                                    <span className={`circleBefore2 ${style.circleBefore2}`}></span>
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
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MyPage_consult_list_part;
