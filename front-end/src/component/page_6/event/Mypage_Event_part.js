import { useState } from 'react';
import React from "react";
import style from '../../../styles/page_6/Mypage_Event_part_module.css';

function Mypage_Event_part() {
    const [showDetail, setShowDetail] = useState(false);
    const showBox = () => {
        setShowDetail(!showDetail)
    }
    const eventData = [
        {
            event_list_no: '1',
            event_type: '시사회',
            event_title: '파묘 시사회 이벤트',
            event_regdate: '0000.00.00',
            event_status: '당첨'
        }
    ]

    return (
        <div>
            <table className={`consult_list ${style.event_list}`}>
                <colgroup>
                    <col style={{ width: '8%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: 'auto' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '8%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th> 카테고리 </th>
                        <th> 이벤트명 </th>
                        <th> 이벤트 기간 </th>
                        <th> 응모일 </th>
                        <th> 비고 </th>
                    </tr>
                </thead>
                <tbody>
                    {eventData.map((eventData, index) => (
                        <tr key={index}>
                            <td>{eventData.event_list_no}</td>
                            <td>[{eventData.event_type}]</td>
                            <td>
                                <a onClick={showBox} style={{ color: "black" }}>
                                    {eventData.event_title}
                                </a>
                            </td>
                            <td>{eventData.event_regdate}</td>
                            <td>
                                <div className={`event_status ${style.event_status}`}>
                                    {eventData.event_status}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Mypage_Event_part;