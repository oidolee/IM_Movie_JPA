import { useState, useEffect } from 'react';
import React from "react";
import style from '../../../styles/page_6/MyPage_consult_list_part.modul.css';
import ApiService from '../../../ApiService';
import {Link} from 'react-router-dom';
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
                            <tr> 
                                <input type="hidden" id='one_id_pk' value={consultItem.one_id}></input>
                                <input type="hidden" value={consultItem.c_email}></input>
                                <td>{consultItem.one_id}</td>
                                <td>[{consultItem.ib_type}]</td>
                                <td>
                                    <Link to={`/MyPage_consult_answer/${consultItem.one_id}`} style={{ color: "black" }}>
                                        {consultItem.ib_title}
                                    </Link>
                                </td>
                                <td>{consultItem.ib_date}</td>
                                <td>
                                    <div className={`consult_status ${style.consult_status}`}>
                                    {consultItem.ib_show === 'y' ? '답변완료' : '답변대기 중'}
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default MyPage_consult_list_part;
