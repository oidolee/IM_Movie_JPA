import React, { Component } from 'react';
import style from '../../styles/page_4/resultFindID.module.css';
import { Button, TextField } from '@mui/material';

class resultFindID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordConfirm: '',
            passwordValid: true,
            passwordMatched: true // 비밀번호 확인과 일치하는지 여부를 나타내는 상태 변수를 추가합니다.
        };
    }

    gologin = () => {
        this.props.history.push("/login");
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if (e.target.name === "passwordConfirm") {
                this.checkPasswordMatch();
            }
        });
    }

    // 비밀번호 확인과 일치하는지 검사하는 함수
    checkPasswordMatch = () => {
        const { password, passwordConfirm } = this.state;
        const isMatched = password === passwordConfirm;
        this.setState({ passwordMatched: isMatched });
    };

    validatePassword = (password) => {
        return password.length >= 4;
    };

    render() {
        const foundPWD = this.props.location.state.foundPWD;

        // 비밀번호를 찾은 경우
        return (
            <div id='wrappage' className={`wrappage ${style.wrappage}`}>




                <div id='result' className={`result ${style.result}`}>
                    <br /><br />
                    비밀번호 재설정
                    <br />
                    입력하신 정보와 일치하는 계정의 비밀번호를 재설정합니다.
                    <hr />
                    비밀번호 재설정
                    <br /><br />

                    {/* 비밀번호 입력 필드 */}
                    
                    <TextField
                        required
                        variant="standard"
                        label="비밀번호"
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder='비밀번호 입력'
                        onChange={this.onChange}
                        error={!this.state.passwordValid}
                        helperText={!this.state.passwordValid ? "비밀번호는 최소 4자리 이상이어야 합니다." : null}
                    />
                    <br /><br />
                    {/* 비밀번호 확인 입력 필드 */}
                    
                    <TextField
                        required
                        variant="standard"
                        label="비밀번호 확인"
                        type="password"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        placeholder='비밀번호 확인'
                        onChange={this.onChange}
                        error={!this.state.passwordMatched} // 일치하지 않을 경우 에러 상태를 설정합니다.
                        helperText={!this.state.passwordMatched ? "비밀번호가 일치하지 않습니다." : null} // 일치하지 않을 경우 에러 메시지를 표시합니다.
                    />
                    <br /><br />

                    <Button id="redBtn" className={`redBtn ${style.redBtn}`} onClick={this.gologin}>로그인</Button>
                </div>
            </div>
        );
    }
}

export default resultFindID;
