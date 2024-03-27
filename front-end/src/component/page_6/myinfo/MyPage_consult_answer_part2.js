import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import style from '../../../styles/page_6/MyPage_consult_list_part_module.css';
import ApiService from '../../../ApiService';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function MyPage_consult_answer_part2() {
    const [group, setGroup] = useState([]);
    const [groupAnswerList, setGroupAnswerList] = useState([]);



    //const[detailInfo , setDetailinfo] = useState[""]
    //펀딩 이름, 종류 , 펀딩 시작 날짜, 종료 날짜, 처리 상태, 상세 정보, 목표 수익률, 현 수익률
    const { group_id } = useParams(); //주소에서 값 받아오기
    //const customer_num = window.sessionStorage.getItem("customerNum"); //가입 고객 번호

    const [group_type, setGroup_type] = useState('');
    const [group_title, setGroup_title] = useState('');
    const [group_con, setGroup_con] = useState('');
    const [now_grdate, setNow_grdate] = useState('');
    const [gr_show, setGr_show] = useState('');

    const history = useHistory();

    const [groupAnswerData, setGroupAnswerData] = useState([

    ]);
    const [groupData, setGroupData] = useState({
        gr_show: 'n'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGroupAnswerData(prevState => ({
            ...prevState,
            [name]: value
        }));

        setGroupData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    

    const saveGroupAnswer = (e) => {
        e.preventDefault();

        // 필요한 로직 수행
        const requestBody = {
            re_con: groupAnswerData.re_con,
            group_id: group_id,
            gr_show: 'n'
        };
        ApiService.addgroupAnwser(requestBody)
            .then(res => {
                console.log('입력 성공:', res.data);
                // 필요한 작업 수행
                if (res.data.resultCode == '200') {
                    alert("답변 등록 성공");
                    ApiService.updategroupData(group_id)
                    .then(res => {
                        console.log('상태 업데이트 성공:', res.data);
                        // 필요한 작업 수행
                        window.location.reload(); 
                    })
                    .catch(err => {
                        console.error('상태 업데이트 에러:', err);
                    });
                } else {
                    alert("답변 등록 실패");
                    window.location.reload(); // history.push()로 페이지를 이동합니다.
                }
            })
            .catch(err => {
                console.error('답변 등록 에러:', err);
            });
    }



    useEffect(() => {
        reloadGroupDetail(group_id);
        reloadGroupAnswerList(group_id);

    }, [group_id]);


    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1, 두 자리 숫자로 만들기 위해 padStart 사용
        const day = String(date.getDate()).padStart(2, '0'); // 두 자리 숫자로 만들기 위해 padStart 사용
        return `${year}-${month}-${day}`;
    };

    const reloadGroupDetail = (group_id) => {
        ApiService.groupDetail(group_id)
            .then(res => {
                console.log('group_id : ' , group_id)
                console.log("test", res.data);
                let group = res.data;
                setGroup_type(group.dto.group_type)
                setGroup_title(group.dto.group_title)
                setGroup_con(group.dto.group_con)
                setNow_grdate(formatDate(group.dto.now_grdate))
                setGr_show(group.dto.gr_show)
                console.log("group : " + group);
            })
            .catch(err => {
                console.log('reloadGroupDetail() Error!!', err);
            });
    }

    const reloadGroupAnswerList = (group_id) => {
        ApiService.GroupAnswer(group_id)
            .then(res => {
                console.log("answer", res.data);
                setGroupAnswerList(res.data);
                

            })
            .catch(err => {
                console.log('reloadGroupAnswerList() Error!!', err);
            });
    }



    return (
        <div>
            <table className={`innerTable ${style.innerTable}`} >
                <tbody>
                    <tr >
                        <td style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
                            <dl>
                                <dt className={`q ${style.q}`}>
                                    <strong className={`txt_qna ${style.txt_qna}`}>
                                        <span className={`circleBefore ${style.circleBefore}`}></span>
                                        <span>{group_type}</span>
                                        &nbsp; | &nbsp;

                                    </strong>
                                    <span>{group_title}</span>
                                    <dd style={{ width: '100%', marginLeft: '350px' }}>{group_con}</dd>
                                </dt>
                            </dl>
                            <div style={{ display: 'inline', justifyContent: 'right' }}>
                                <div style={{ fontSize: '10px' }}>{now_grdate}</div>
                                <div className={`consult_status ${style.consult_status}`}>{gr_show === 'y' ? '답변대기 중' : '답변 완료'}</div>
                            </div>
                        </td>
                    </tr>

                    {groupAnswerList.map((groupAnswerListItem, index) => (
                        <tr key={index}>
                            <td style={{ textAlign: 'center' }}>
                                <dl>
                                    <dt className={`a ${style.a}`}>
                                        <div>
                                            <span className={`circleBefore2 ${style.circleBefore2}`}></span>
                                        </div>
                                        <dd style={{ width: '100%', marginLeft: '15px' }}>
                                            <pre>
                                                {groupAnswerListItem.re_title}
                                            </pre>

                                            <pre>
                                                {groupAnswerListItem.re_con}
                                            </pre>
                                        </dd>
                                    </dt>
                                </dl>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div >
    )
}

export default MyPage_consult_answer_part2;
