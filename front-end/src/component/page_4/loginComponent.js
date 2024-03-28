import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import ApiService from '../../ApiService';
import style from '../../styles/page_4/login.module.css';
import SocialKakao from './SocialKakao';
import GoogleLoginButton from './GoogleLoginButton';
import { useCookies } from 'react-cookie'; // useCookies import
import { setAuthToken } from '../../helpers/axios_helper';
import { onSnsSignInButtonClickHandler } from '../../SignIn/index.tsx';
import kakao from '../../assets/images/kakao.png'
import naver from '../../assets/images/naver.png'


function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();
    

    const handleLogin = () => {
        let inputData = {
            id: id,
            password: password
        };
    
        console.log(inputData);
    
        ApiService.login(inputData)
            .then(res => {
                console.log(res.data);
                if (res.data.token != null) {
                    // 토큰 저장
                    localStorage.setItem('auth_token', res.data.token);
                    // 헤더의 상태를 업데이트하여 다시 렌더링
                    setAuthToken(res.data.token);
                    alert("로그인 성공.")
                    history.push('/');
                    window.location.reload();
                } else if (res.data.error === 'no_id') {
                    alert("아이디가 없습니다.");
                } else if (res.data.error === 'wrong_password') {
                    alert("비밀번호를 확인해주세요.");
                } else {
                   
                }
    
            })
            .catch(err => {
                console.log('에러', err);
                alert("로그인 실패\n로그인 정보 확인 바랍니다.")

                


                setMessage('로그인에 실패했습니다.');
            });
    };

    const handleLogout = () => {
        // 로컬 스토리지에서 토큰 제거
        localStorage.removeItem('auth_token');
        // 토큰 상태 업데이트하여 헤더 컴포넌트 다시 렌더링
        setAuthToken(null);
        alert('로그아웃 되었습니다.');
    };

    return (
        <div id='wrappage' style={{height:'500px', marginTop : '100px'}} className={`loginComponent_wrappage ${style.loginComponent_wrappage}`}>
            <div className={`loginComponent_box ${style.loginComponent_box}`}>
                <div id='login-box' className={`login_box ${style.login_box}`}>
                    <div className={style.input_box}>
                        <TextField
                            required
                            variant="standard"
                            label="이메일"
                            type="text"
                            name="id"
                            value={id}
                            InputProps={{ style: { width: '300px' } }}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <TextField
                            required
                            variant="standard"
                            label="비밀번호"
                            type="password"
                            name="password"
                            value={password}
                            InputProps={{ style: { width: '300px' } }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button id='btn' className={`loginComponent_btn ${style.loginComponent_btn}`} variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                </div>
                <div id='login_bot' className={`login_bot ${style.login_bot}`}>
                    <a href='/signCheck' id='signupPage' className={`signup ${style.signup}`}>회원가입</a>
                    <a href='/searchID' id='confirmID' >아이디 찾기</a>
                    <a href='/searchPWD' id='confrimPwd' className={`confirmPassword ${style.confirmPassword}`}>비밀번호 찾기</a>
                </div>
                <br /><br />
                <div style={{ display: 'flex', justifyContent:'center' }}>
                    <div className='kakao' onClick={ () => onSnsSignInButtonClickHandler('kakao')} >
                        <Button className={`kakao ${style.kakao}`}><img style={{width:'50px'}} src={kakao} /></Button>
                    </div>
                    <div className='naver'onClick={ () => onSnsSignInButtonClickHandler('naver')}>
                        <Button className={`naver ${style.naver}`}><img style={{width:'50px'}} src={naver} /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
