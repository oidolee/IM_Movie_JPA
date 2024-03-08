import React, { Component } from 'react';
import style from '../../styles/page_4/resultFindID.css';


class resultFindID extends Component {

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
                    <br/>
                    <h4>{foundEmail}</h4>

                    



                </div>

            </div>
        )
    }
}
export default resultFindID;