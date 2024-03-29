import { useState, useEffect } from 'react';
import React from "react";
import style from '../../../styles/page_6/MyPage_consult_list_part_module.css';
import ApiService from '../../../ApiService';
import {Link} from 'react-router-dom';
import { useCookies } from 'react-cookie'; // useCookies import
function MyPage_consult_list_part() {
    const [showDetailIndex, setShowDetailIndex] = useState(-1); // 상세 정보를 표시할 항목의 인덱스를 저장할 상태 추가
    const [consult, setConsult] = useState([]);
    const [cookies, setCookie] = useCookies(['c_email', 'idName']);
    const [emailCheck, setEmailCheck] = useState('');

    useEffect(() => {
        reloadConsultList();
    }, []);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const reloadConsultList = () => {
        ApiService.fetchConsult()
        .then(res => {
            console.log("test", res.data);
            const consultData = res.data.map(item => ({
                ...item,
                ib_date: formatDate(item.ib_date) 
            }));
            setConsult(consultData);
            console.log('consultData', consultData);
        })
        .catch(err => {
            console.log('reloadConsultList() Error!!', err);
        });
    }

    

    

    return (
        <div>
            <h4 style={{marginTop:"50px"}}>1:1 문의</h4>
            <table className={`consult_list ${style.consult_list}`}>
                <colgroup>
                    <col style={{ width: '8%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: 'auto' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '8%' }} />
                </colgroup>
                <thead style={{borderTop:"0"}}>
                    <tr>
                        <th> 번호 </th>
                        <th> 분류 </th>
                        <th> 아이디 </th>
                        <th> 제목 </th>
                        <th> 작성일 </th>
                        <th> 상태 </th>
                    </tr>
                </thead>
                <tbody>
                    {consult.map((consultItem, index) => (
                            <tr key={index}> 
                                <input type="hidden" id='one_id_pk' value={consultItem.one_id}></input>
                                <input type="hidden" value={consultItem.c_email}></input>
                                <td>{consultItem.one_id}</td>
                                <td>{consultItem.ib_type}</td>
                                <td>{consultItem.c_email}</td>
                                <td>
                                    <Link to={`/admin/page_6/consult/Admin_counsult_detail_answer/${consultItem.one_id}`} style={{ color: "black" }}>
                                        {consultItem.ib_title}
                                    </Link>
                                </td>
                                <td>{consultItem.ib_date}</td>
                                <td>
                                    <div style={{
                                        padding: '5px',
                                        boxSizing: 'border-box',
                                        width: '100px',
                                        margin: '0 auto',
                                        backgroundColor: consultItem.ib_show === 'y' ? 'blue' : ''                                    }}
                                    className={`consult_status ${style.consult_status}`}>
                                        {consultItem.ib_show === 'y' ? '답변대기 중' : '답변 완료'}
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
