import React, { Component } from 'react';
import style from '../../styles/page_4/resultFindPWD.module.css';
import { Button, TextField } from '@mui/material';
import ApiService from '../../ApiService';

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


    

    change = () => {
        
        const { id, hp } = this.props.location.state;

        const requestData = {
            id: id,
            hp: hp,
            newPassword: this.state.password // 입력한 새로운 비밀번호를 가져옵니다.
        };

        ApiService.changePWD(requestData)
            .then(res => {
                this.setState({

                })
                console.log("비밀번호 변경 성공 : ", res.data);
                alert("비밀번호 변경 성공 \n 변경된 비밀번호로 로그인 해주세요")
                this.props.history.push("/login");
            })
            .catch(err => {
                console.log("비밀번호 변경 실패", err);
                alert("변경 실패")
            })
        
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
        

        // 비밀번호를 찾은 경우
        return (
            <div id='wrappage' className={`wrappage ${style.wrappage}`}>




                <div id='result' className={`result ${style.result}`}>
                    <br />
                    
                    <br /><br /><br /><br />
                    <h4><strong>비밀번호 재설정</strong></h4>
                    <br /><br />

                    {/* 비밀번호 입력 필드 */}
                    
                    <TextField
                        required
                        style={{ width: '350px' }} // width 값을 설정합니다.
                        variant="standard"
                        label="비밀번호"
                        type="password"
                        name="password"
                        value={this.state.password}
                        InputProps={{ classes: { root: `${style.customTextField1}` } }}
                        placeholder='비밀번호 입력'
                        onChange={this.onChange}
                        error={!this.state.passwordValid}
                        helperText={!this.state.passwordValid ? "비밀번호는 최소 4자리 이상이어야 합니다." : null}
                    />
                    <br /><br />
                    {/* 비밀번호 확인 입력 필드 */}
                    
                    <TextField
                        required
                        style={{ width: '350px' }} // width 값을 설정합니다.
                        variant="standard"
                        label="비밀번호 확인"
                        type="password"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        InputProps={{ classes: { root: `${style.customTextField1} ${style.customInput}` } }}
                        placeholder='비밀번호 확인'
                        onChange={this.onChange}
                        error={!this.state.passwordMatched} // 일치하지 않을 경우 에러 상태를 설정합니다.
                        helperText={!this.state.passwordMatched ? "비밀번호가 일치하지 않습니다." : null} // 일치하지 않을 경우 에러 메시지를 표시합니다.
                    />
                    <br /><br />
                    <strong>비밀번호 재설정</strong> 입력하신 정보와 일치하는 계정의 비밀번호를 재설정합니다.

                    <br /><br /><br />

                    <Button id="redBtn" className={`redBtn ${style.redBtn}`} onClick={this.change}>변경</Button>
                    <br /><br /><br /><br />
                    
                </div>
            </div>
        );
    }
}

export default resultFindID;
