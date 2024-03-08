import React, { Component } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from '../../styles/page_4/signupCheck.module.css';
import { withRouter } from 'react-router-dom'; // withRouter import 추가

class SignupCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            requiredAgreement1: false, // 필수 약관 1 동의 상태
            requiredAgreement2: false, // 필수 약관 2 동의 상태
            optionalAgreement: false // 선택 약관 동의 상태
        };
    }

    // 전체 동의 체크박스 상태 변경
    handleCheck = () => {
        const checked = !this.state.checked;
        this.setState({
            checked,
            requiredAgreement1: checked,
            requiredAgreement2: checked,
            optionalAgreement: checked
        });
    };

    // 필수 약관 동의 체크박스 상태 변경
    handleRequiredAgreementChange = (name) => {
        this.setState({ [name]: !this.state[name] });
    };

    // 선택 약관 동의 체크박스 상태 변경
    handleOptionalAgreementChange = () => {
        this.setState({ optionalAgreement: !this.state.optionalAgreement });
    };

    goHome = () => {
        this.props.history.push("/");
    }

    gosignup = () => {
        // 필수 약관 동의 여부 확인
        if (!this.state.requiredAgreement1 || !this.state.requiredAgreement2) {
            alert("필수 약관을 모두 동의해 주세요");
            return;
        }
    
        this.props.history.push("/sign-up");
    }


    render() {
        return (
            <div id='wrappage' className={`wrappage ${style.wrappage}`}>
                <br/><br/>
                <h5>회원가입</h5>
                <br />
                <h6>필수 약관에 동의해주세요</h6>
                <hr />
                <br />
                <h6>약관</h6>
                <hr />
                {/* 전체 동의 체크박스 */}
                <div className={style.checkboxContainer}> {/* 왼쪽 정렬을 위한 스타일 추가 */}
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleCheck}
                        inputProps={{ 'aria-label': '전체 동의' }}
                    />
                    <label><h5>전체 동의</h5></label>
                </div>
                <hr />

                {/* 필수 약관 1 아코디언 */}
                <div className={style.checkboxContainer}> {/* 왼쪽 정렬을 위한 스타일 추가 */}
                    <Checkbox
                        checked={this.state.requiredAgreement1}
                        onChange={() => this.handleRequiredAgreementChange('requiredAgreement1')}
                        inputProps={{ 'aria-label': '필수 약관 1 동의' }}
                    />
                    <label>약관1 (필수)</label>
                    <br />
                </div>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <h6>필수 약관 1번</h6>
                    </AccordionSummary>
                    <AccordionDetails>
                        약관1번
                    </AccordionDetails>
                </Accordion>

                {/* 필수 약관 2 아코디언 */}
                <div className={style.checkboxContainer}> {/* 왼쪽 정렬을 위한 스타일 추가 */}
                    <Checkbox
                        checked={this.state.requiredAgreement2}
                        onChange={() => this.handleRequiredAgreementChange('requiredAgreement2')}
                        inputProps={{ 'aria-label': '필수 약관 2 동의' }}
                    />
                    <label>약관2 (필수)</label>
                    <br />
                </div>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <h6>필수 약관 2번</h6>
                    </AccordionSummary>
                    <AccordionDetails>
                        약관2번
                    </AccordionDetails>
                </Accordion>

                {/* 선택 약관 아코디언 */}
                <div className={style.checkboxContainer}> {/* 왼쪽 정렬을 위한 스타일 추가 */}
                    <Checkbox
                        checked={this.state.optionalAgreement}
                        onChange={this.handleOptionalAgreementChange}
                        inputProps={{ 'aria-label': '선택 약관 동의' }}
                    />
                    <label>약관3 (선택)</label>
                    <br />
                </div>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                        <h6>선택 약관</h6>
                    </AccordionSummary>
                    <AccordionDetails>
                        선택 약관3번
                    </AccordionDetails>
                </Accordion>

                <br /><br />
                <div id='signBtn' className={`signBtn ${style.signBtn}`}>
                    <Button id='goHome' className={`blackBtn ${style.blackBtn}`} onClick={this.goHome}>취소</Button>
                    <Button id='gosignup' className={`redBtn ${style.redBtn}`} onClick={this.gosignup}>다음</Button>
                </div>

                <br/><br/>
            </div>
        );
    }
}

export default withRouter(SignupCheck);

