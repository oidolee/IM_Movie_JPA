import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import style from '../../../styles/page_6/MyPage_consult_list_part.modul.css';
import ApiService from '../../../ApiService';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function MyPage_consult_answer_part() {
    const [consult, setConsult] = useState([]);
    const [consultAnswer, setConsultAnswer] = useState([]);



    //const[detailInfo , setDetailinfo] = useState[""]
    //펀딩 이름, 종류 , 펀딩 시작 날짜, 종료 날짜, 처리 상태, 상세 정보, 목표 수익률, 현 수익률
    const { one_id } = useParams(); //주소에서 값 받아오기
    //const customer_num = window.sessionStorage.getItem("customerNum"); //가입 고객 번호

    const [ib_type, setIb_type] = useState('');
    const [ib_type_detail, setIb_type_detail] = useState('');
    const [ib_title, setIb_title] = useState('');
    const [ib_content, setIb_content] = useState('');
    const [ib_date, setIb_date] = useState('');

    const history = useHistory();

    const [consultAnswerData, setConsultAnswerData] = useState({
        one_id_answer: '',
        one_id: '',
        iba_content: '',
        iba_date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConsultAnswerData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const resetForm = () => {
        setConsultAnswerData({
            iba_content: '',
            
        });
    }

    const saveConsultAnswer = (e) => {
        e.preventDefault();
        // 필요한 로직 수행
        ApiService.addConsultAndser(consultAnswerData)
            .then(res => {
                console.log('입력 성공:', res.data);
                // 필요한 작업 수행
                if (res.data.resultCode == '200') {
                    alert("답변 등록 성공");
                    history.push('/MyPage_consult_answer/:one_id'); // history.push()로 페이지를 이동합니다.
                } else {
                    alert("답변 등록 실패");
                    history.push('/MyPage_consult_answer/:one_id'); // history.push()로 페이지를 이동합니다.
                }
            })
            .catch(err => {
                console.error('답변 등록 에러:', err);
            });
        }



        useEffect(() => {
            reloadConsultDetail(one_id);
            reloadConsultAnswerList(one_id);
        }, [one_id]);

        const reloadConsultDetail = (one_id) => {
            ApiService.fetchConsultDetail(one_id)
                .then(res => {
                    console.log('one_id : ' + one_id)
                    console.log("test", res.data);
                    let consult = res.data;
                    setIb_type(consult.csdto.ib_type)
                    setIb_type_detail(consult.csdto.ib_type_detail)
                    setIb_title(consult.csdto.ib_title)
                    setIb_content(consult.csdto.ib_content)
                    setIb_date(consult.csdto.ib_date)
                    console.log("consult : " + consult);
                })
                .catch(err => {
                    console.log('reloadConsultDetail() Error!!', err);
                });
        }

        const reloadConsultAnswerList = (one_id) => {
            ApiService.fetchConsultAnswer(one_id)
                .then(res => {
                    console.log("test", res.data);
                    setConsultAnswer(res.data);

                })
                .catch(err => {
                    console.log('reloadConsultAnswerList() Error!!', err);
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
                                            <span>{ib_type}</span>
                                            &nbsp; | &nbsp;

                                        </strong>
                                        <span>{ib_title}</span>
                                        <dd style={{ width: '100%', marginLeft: '350px' }}>{ib_content}</dd>
                                    </dt>
                                </dl>
                                <div style={{ display: 'inline', justifyContent: 'right' }}>
                                    <div style={{ fontSize: '10px' }}>{ib_date}</div>
                                    <div className={`consult_status ${style.consult_status}`}>답변완료</div>
                                </div>
                            </td>
                        </tr>

                    {consultAnswer.map((consultAnswerItem, index) =>(
                        <tr key={index}>
                            <td style={{ textAlign: 'center' }}>
                                <dl>
                                    <dt className={`a ${style.a}`}>
                                        <div>
                                            <span className={`circleBefore2 ${style.circleBefore2}`}></span>
                                        </div>
                                        <dd style={{ width: '100%', marginLeft: '15px' }}>
                                            <pre>
                                                {consultAnswerItem.iba_content}
                                            </pre>
                                        </dd>
                                    </dt>
                                </dl>
                            </td>
                        </tr>
                    ))}
                        

                    </tbody>
                </table>


                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <table style={{ width: '100%', height: '300px' }}>
                        <tbody>
                            <tr>
                                <td><strong>답변</strong></td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea
                                        value={consultAnswerData.iba_content}
                                        onChange={handleChange}
                                        name='iba_content'
                                        style={{ width: '80%', height: '100%' }}
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type='hidden'
                                        value={one_id}
                                        onChange={handleChange}
                                        name='one_id'
                                    />
                                    <Button style={{ marginRight: '20px' }} onClick={saveConsultAnswer}>등록</Button>
                                    <Button onClick={resetForm}>취소</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }

export default MyPage_consult_answer_part;
