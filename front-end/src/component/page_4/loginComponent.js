import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiService from '../../ApiService';
import style from '../../styles/page_4/login.module.css';
import SocialKakao from './SocialKakao';
import GoogleLoginButton from './GoogleLoginButton';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        let inputData = {
            email: id,
            password: password
        }

        console.log(inputData);

        ApiService.login(inputData)
            .then(res => {
                console.log(res.data);
                if(res.data.resultCode == 200){
                    alert("로그인 성공")
                    history.push('/');
                } else {
                    alert("로그인 실패")
                }
                
            })
            .catch(err => {
                console.log('에러', err);
                setMessage('로그인에 실패했습니다.');
            });
    };

    return (
        <div id='wrappage' className={`loginComponent_wrappage ${style.wrappage}`}>
            <br />
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
                <a href='/sign-up' id='signupPage' className={`signup ${style.signup}`}>회원가입</a>
                <a href='/searchID' id='confirmID' >아이디 찾기</a>
                <a href='/searchPWD' id='confrimPwd' className={`confirmPassword ${style.confirmPassword}`}>비밀번호 찾기</a>
            </div>
            <br /><br />

            <Button>
             <SocialKakao />
            </Button><br/>
            <Button>
                <GoogleLoginButton/>
            </Button>

        </div>
    );
}

export default Login;