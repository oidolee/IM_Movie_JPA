import React, { Component } from 'react';
import style from '../../styles/page_4/resultFindID.module.css';
import { Button } from '@mui/material';

class resultFindID extends Component {

    gologin = () => {
        this.props.history.push("/login");
    }

    gofindPWD = () => {
        this.props.history.push("/login");
    }

    render() {

        const foundEmail = this.props.location.state.foundEmail;
        
        return (
            <div id='wrappage' className={`wrappage ${style.wrappage}`}>
                <div id='result' className={`result ${style.result}`}>
                    <br /><br />
                    아이디 찾기
                    <br />
                    입력하신 정보와 일치하는 아이디 입니다.
                    <br /><br />



                    아이디 찾기 결과
                    <hr />
                    IM_Movie ID
                    <br/><br/>
                    <h4>{foundEmail}</h4>

                    <Button id="blackBtn" className={`blackBtn ${style.blackBtn}`} onClick={this.gologin}>로그인</Button>
                    <Button id="redBtn" className={`redBtn ${style.redBtn}`} onClick={this.gofindPWD}>비밀번호 찾기</Button>

                    



                </div>

            </div>
        )
    }
}
export default resultFindID;