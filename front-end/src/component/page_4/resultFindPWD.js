import React, { Component } from 'react';
import style from '../../styles/page_4/resultFindID.module.css';
import { Button } from '@mui/material';

class resultFindID extends Component {

    gologin = () => {
        this.props.history.push("/login");
    }

    

    render() {

        const foundPWD = this.props.location.state.foundPWD;
        
        return (
            <div id='wrappage' className={`wrappage ${style.wrappage}`}>
                <div id='result' className={`result ${style.result}`}>
                    <br /><br />
                    비밀번호 찾기
                    <br />
                    입력하신 정보와 일치하는 비밀번호 입니다.
                    <br /><br />



                    아이디 찾기 결과
                    <hr />
                    IM_Movie Password
                    <br/><br/>
                    <h4>{foundPWD}</h4>

                    <Button id="redBtn" className={`redBtn ${style.redBtn}`} onClick={this.gologin}>로그인</Button>

                    



                </div>

            </div>
        )
    }
}
export default resultFindID;