import { useState, useEffect } from 'react';
import React from "react";
import style from '../../../styles/page_6/MyPage_consult_list_part_module.css';
import ApiService from '../../../ApiService';
import {Link} from 'react-router-dom';
import { useCookies } from 'react-cookie'; // useCookies import
import { jwtDecode } from 'jwt-decode';

function MyPage_consult_list_part2() {
    const [showDetailIndex, setShowDetailIndex] = useState(-1); // 상세 정보를 표시할 항목의 인덱스를 저장할 상태 추가
    const [group, setGroup] = useState([]);
    const [cookies, setCookie] = useCookies(['c_email', 'idName']);
    const [emailCheck, setEmailCheck] = useState('');
    

    useEffect(() => {
        
        
        // 로컬 스토리지에서 토큰 가져오기
        const authToken = localStorage.getItem("auth_token");

        // 토큰이 존재하는지 확인 후 이메일 추출
        if (authToken) {
            const decodedToken = jwtDecode(authToken); // 수정 필요
            const userEmail = decodedToken.iss;
            setEmailCheck(userEmail);
            reloadGroupList(userEmail);
        }
        
    }, []);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1, 두 자리 숫자로 만들기 위해 padStart 사용
        const day = String(date.getDate()).padStart(2, '0'); // 두 자리 숫자로 만들기 위해 padStart 사용
        return `${year}-${month}-${day}`;
    };

    const reloadGroupList = (emailCheck) => {
        ApiService.GroupCusList(emailCheck)
            .then(res => {
                console.log("test", res.data);
                const groupData = res.data.map(item => ({
                    ...item,
                    now_grdate: formatDate(item.now_grdate) // 각 consultItem의 ib_date를 포맷 변경
                }));
                console.log(groupData);
                setGroup(groupData);
            })
            .catch(err => {
                console.log('reloadGroupList() Error!!', err);
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
                    {group.map((groupItem, index) => (
                            <tr key={index}> 
                                <input type="hidden" id='group_id_pk' value={groupItem.group_id}></input>
                                <input type="hidden" value={groupItem.c_email}></input>
                                <td>{groupItem.group_id}</td>
                                <td>[{groupItem.group_type}]</td>
                                <td>
                                    <Link to={`/MyPage_consult_answer_2/${groupItem.group_id}`} style={{ color: "black" }}>
                                        {groupItem.group_title}
                                    </Link>
                                </td>
                                <td>{groupItem.now_grdate}</td>
                                <td>
                                    <div className={`consult_status ${style.consult_status}`}>
                                        {groupItem.gr_show === 'y' ? '답변대기 중' : '답변 완료'}
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default MyPage_consult_list_part2;
