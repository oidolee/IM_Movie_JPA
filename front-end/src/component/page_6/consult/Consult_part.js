import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import style from '../../../styles/page_6/consult_module.css'
import ApiService from '../../../ApiService';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';


function Consult_part() {
    const [showDetail, setShowDetail] = useState(false);

    const showBox = () => {
        setShowDetail(!showDetail)
    }
    const history = useHistory();
    //const [cookies_email, setCookie_email] = useCookies(['cookies_email']); // 쿠키 훅 
    const [email, setEmail] = useState('');


    const cus_grade = 'VIP';

    const [cus_name, setCus_Name] = useState('');

    useEffect(() => {
        const authToken = localStorage.getItem("auth_token");
        if (authToken) {
            const decodedToken = jwtDecode(authToken); // 수정 필요
            const userEmail = decodedToken.iss;
            setEmail(userEmail);
            console.log(email);
            reloadsearchCutomer(userEmail);
        }

    }, []);

    const reloadsearchCutomer = (email) => {
        ApiService.searchCutomer(email)
            .then(res => {
                console.log('res.data', res.data);
                setCus_Name(res.data.dto.name)
            })
            .catch(error => {
                console.error('요청 실패:', error);
                
            });
    }




    const [consultData, setConsultData] = useState({
        c_email: email,
        cus_name: '',
        ib_type: '',
        ib_type_detail: '',
        ib_title: '',
        ib_content: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setConsultData(prevState => ({
            ...prevState,
            c_email: email,
            cus_name: cus_name,
            [name]: value
        }));
    }

    const saveConsult = (e) => {
        e.preventDefault();
        // 필요한 로직 수행
        ApiService.addConsult(consultData)
            .then(res => {
                console.log('입력 성공:', res.data);
                // 필요한 작업 수행
                if (res.data.resultCode == '200') {
                    alert("문의 등록 성공");
                    history.push('/MyPage_consult_list');
                } else {
                    alert("문의 등록 실패");
                    history.push('/Consult');
                }
            })
            .catch(err => {
                console.error('문의 등록 에러:', err);
            });
    }

    const resetForm = () => {
        setConsultData({
            ib_type: '',
            ib_type_detail: '',
            ib_title: '',
            ib_content: '',
        });
    }


    return (
        <div className={`Consult ${style.Consult}`}>
            <div className={`Consult_table1${style.Consult_table1}`}>
                <table className={`Consult_table ${style.Consult_table}`}>
                    <tr>
                        <td style={{ paddingRight: '20px' }}>분류 *</td>
                        <td>
                            <select
                                className={`select1 ${style.select1}`}
                                required
                                value={consultData.ib_type}
                                onChange={handleChange}
                                name="ib_type"
                            >
                                <option value={'#'}>분류선택</option>
                                <option value={'영화관'}>영화관</option>
                                <option value={'영화'}>영화</option>
                                <option value={'멤버쉽'}>멤버쉽</option>
                                <option value={'쿠폰'}>쿠폰</option>
                                <option value={'홈페이지'}>홈페이지</option>
                                <option value={'개인정보'}>개인정보</option>
                            </select>
                            <select
                                className={`select2 ${style.select2}`}
                                value={consultData.ib_type_detail}
                                onChange={handleChange}
                                name="ib_type_detail"
                            >
                                <option value={'#'}>분류선택</option>
                                <option value={'theater'}>영화관</option>
                                <option value={'movie'}>영화</option>
                                <option value={'membership'}>멤버쉽</option>
                                <option value={'coupon'}>쿠폰</option>
                                <option value={'page'}>홈페이지</option>
                                <option value={'myinfo'}>개인정보</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>종류 *</td>
                        <td>
                            <select className={`consultType ${style.consultType}`}>
                                <option value={'movie2'}>영화관문의</option>
                                <option value={'else2'}>기타문의</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>제목 *</td>
                        <td>
                            <input
                                className={`consultTitle ${style.consultTitle}`}
                                type="text"
                                placeholder="제목을 입력해주세요"
                                required
                                style={{ background: 'rgba(211, 211, 211, 0.178)' }}
                                value={consultData.ib_title}
                                onChange={handleChange}
                                name="ib_title"

                            />
                        </td>
                    </tr>
                    <tr>
                        <td>내용 *</td>
                        <td>
                            <textarea
                                className={`consult_content ${style.consult_content}`}
                                value={consultData.ib_content}
                                onChange={handleChange}
                                name="ib_content"
                            ></textarea>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={`myinfo ${style.myinfo}`}>
                <div style={{marginTop:"20px", fontWeight:"bold", fontSize:"20px" }} className={`myinfo_name${style.Consult_name}`}>
                    <p>고객정보</p>
                    <hr></hr>
                </div>
                <div>
                    <table className={`myinfo_table ${style.myinfo_table}`}>
                        <tr>
                            <td>성명</td>
                            <td><input className={`myname ${style.myname}`} type="text" style={{ padding: '0px 18px', width: '150px', backgroundColor: 'rgba(211, 211, 211, 0.199)' }} value={cus_name}></input></td>
                        </tr>
                        <tr>
                            <td>연락처</td>
                            <td>
                                <input className={`tel1 ${style.tel1}`} type="text" style={{ marginRight: '10px', padding: '0px 18px', width: '80px', backgroundColor: 'rgba(211, 211, 211, 0.199)' }}></input>
                                -
                                <input className={`tel2 ${style.tel2}`} type="text" style={{ marginRight: '10px', marginLeft: '10px', padding: '0px 18px', width: '150px', backgroundColor: 'rgba(211, 211, 211, 0.199)' }}></input>
                                -
                                <input className={`tel3 ${style.tel3}`} type="text" style={{ marginRight: '10px', marginLeft: '10px', padding: '0px 18px', width: '150px', backgroundColor: 'rgba(211, 211, 211, 0.199)' }}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td>
                                <input className={`email1 ${style.email1}`} type="text" style={{ marginRight: '10px', padding: '0px 18px', backgroundColor: 'rgba(211, 211, 211, 0.199)' }} value={email}></input>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <input type="hidden" value={consultData.ib_date} name="ib_date" onChange={handleChange} />
                <input type="hidden" value={consultData.ib_show} name="ib_show" onChange={handleChange} />
                <Button style={{margin:"20px"}} className={`btn_cancle ${style.btn_cancle}`} variant="contained" color="primary" onClick={saveConsult}> 확인 </Button>
                <Button className={`btn_submit ${style.btn_submit}`} variant="contained" color="primary" onClick={resetForm}> 취소 </Button>
            </div>
        </div>
    );
}

export default Consult_part;