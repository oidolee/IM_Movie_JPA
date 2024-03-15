import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import style from '../../../styles/page_6/MyPage_consult_list_part.modul.css';
import ApiService from '../../../ApiService';
import { useParams } from 'react-router-dom';

function MyPage_consult_answer_part() {
    const [consult, setConsult] = useState([]);
    const [consultAnswer, setConsultAnswer] = useState([]);
    const [dataArray, setDataArray] = useState([]);


    //const[detailInfo , setDetailinfo] = useState[""]
    //펀딩 이름, 종류 , 펀딩 시작 날짜, 종료 날짜, 처리 상태, 상세 정보, 목표 수익률, 현 수익률
    const { one_id } = useParams(); //주소에서 값 받아오기
    //const customer_num = window.sessionStorage.getItem("customerNum"); //가입 고객 번호

    // const [ib_type , setIb_type] = useState(''); 
    // const [ib_type_detail , setIb_type_detail] = useState(''); 
    // const [ib_title , setIb_title] = useState(''); 
    // const [ib_content , setIb_content] = useState(''); 
    // const [ib_date , setIb_date] = useState(''); 






    useEffect(() => {
        reloadConsultDetail(one_id);
        reloadConsultAnswerList(one_id);
    }, [one_id]);

    const reloadConsultDetail = () => {
        ApiService.fetchConsultDetail(one_id)
            .then(res => {
                console.log('one_id' + one_id)
                console.log("test", res);
                setDataArray = [setConsult(res.data)];
                console.log("consult : " + consult);
            })
            .catch(err => {
                console.log('reloadConsultDetail() Error!!', err);
            });
    }

    const reloadConsultAnswerList = () => {
        ApiService.fetchConsultAnswer(one_id)
            .then(res => {
                console.log("test", res);
                setConsultAnswer(res.data);
                
            })
            .catch(err => {
                console.log('reloadConsultAnswerList() Error!!', err);
            });
    }

    return (
        <div>
            
                <table className={`innerTable ${style.innerTable}`} >
                    <tbody>test
                    {dataArray.map((consultItem, index) => (
                        
                        <tr key={index}>
                             {"f.data : " + consultItem.data}
                            <td style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
                                <dl>
                                    <dt className={`q ${style.q}`}>
                                        <strong className={`txt_qna ${style.txt_qna}`}>
                                            <span className={`circleBefore ${style.circleBefore}`}></span>
                                            <span>{consultItem.csdto.ib_type}</span>
                                            &nbsp; | &nbsp;

                                        </strong>
                                        <span>문의내용 타이틀{consultItem.data.csdto.ib_title}</span>
                                        <dd style={{ width: '100%', marginLeft: '25px' }}>{consultItem.ib_content}</dd>
                                    </dt>
                                </dl>
                                <div style={{ display: 'inline', justifyContent: 'right' }}>
                                    <div style={{ fontSize: '10px' }}>{consultItem.csdto.ib_regdate}(접수날짜)</div>
                                    <div className={`consult_status ${style.consult_status}`}>답변완료</div>
                                </div>
                            </td>
                        </tr>
                        ))}
                    {consultAnswer.map((consultAnswerItem, index) => (    
                        <tr key={index}>
                            <td style={{ textAlign: 'center' }}>
                                <dl>
                                    <dt className={`a ${style.a}`}>
                                        <div>
                                            <span className={`circleBefore2 ${style.circleBefore2}`}></span>
                                        </div>
                                        <dd style={{ width: '100%' }}>{consultAnswerItem.iba_content}</dd>
                                    </dt>
                                </dl>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
           

            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>답변</strong></td>
                        </tr>
                        <tr>
                            <td>
                                <textarea></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button onClick={() => {/* 버튼 클릭 핸들러 구현 */ }}>등록</Button>
                                <Button onClick={() => {/* 버튼 클릭 핸들러 구현 */ }}>취소</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default MyPage_consult_answer_part;
