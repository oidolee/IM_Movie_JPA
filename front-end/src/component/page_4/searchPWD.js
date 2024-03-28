import React, { Component } from 'react';
import style from '../../styles/page_4/searchPWD.module.css';
import Accordion from 'react-bootstrap/Accordion';
import { TextField, Button } from '@mui/material';
import ApiService from '../../ApiService';

class searchPWD extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            activeKey: "0", // 아코디언 활성화 키
            emial: '',
            hp: ''
        };
    }

    componentDidMount() {
        // 페이지가 로드될 때 0번 아코디언이 열리도록 설정
        this.setState({ activeKey: "0" });
    }

    handleAccordionClick = (eventKey) => {
        this.setState({
            activeKey: eventKey === this.state.activeKey ? null : eventKey,
        });
    };

    handleRadioClick = (eventKey) => {
        this.setState({
            activeKey: eventKey,
        });
    };

    goHome = () => {
        this.props.history.push("/login");
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    findPWD = (e) => {
        e.preventDefault();

        let inputData = {
            id: this.state.id,
            hp: this.state.hp
        }
        ApiService.findPWD(inputData)
        .then(res => {
            console.log("비밀번호 찾기 성공 : ", res.data);
            // 비밀번호를 찾는 요청이 성공하면, 비밀번호 재설정 페이지로 이동!!
            this.props.history.push('/findPWD', { id: this.state.id, hp: this.state.hp });
        })
        .catch(err =>{
            console.log('findID() 에러 !! ', err);
            alert("이름과 휴대폰 번호를 확인 해 주세요.")
        })
        
    }

    render() {
        
        return (
            <div id='wrappage' className={`wrappage ${style.wrappage}`}>
                <br/><br/>
                <h6>비밀번호 찾기</h6>
                <br></br>
                <h5> 등록된 회원 정보로 비밀번호를 찾을 수 있습니다.</h5>
                <hr />

                <Accordion activeKey={this.state.activeKey} >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header onClick={() => this.handleAccordionClick("0")}>
                            <input
                                type="radio"
                                id="phone"
                                name="searchType"
                                value="phone"
                                checked={this.state.activeKey === "0"}
                                onChange={() => this.handleRadioClick("0")}
                            />
                            <label htmlFor="phone">휴대폰 번호로 찾기</label>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div id='hpfind' className={`hpfind ${style.hpfind}`}>
                                <div className={`text ${style.text}`}>아이디
                                {/* 이름 입력필드 */}
                                <TextField
                                    required
                                    type="text"
                                    name="id"
                                    InputProps={{ classes: { root: style.customTextField1 } }}
                                    value={this.state.id}
                                    placeholder='이메일을 입력해주세요.'
                                    onChange={this.onChange}
                                />
                                </div>
                                <br /><br />
                                <div className={`text ${style.text}`}>휴대폰 번호

                                {/* 핸드폰번호 입력필드 */}
                                <TextField
                                    required
                                    type="text"
                                    name="hp"
                                    value={this.state.hp}
                                    InputProps={{ classes: { root: style.customTextField2 } }}
                                    placeholder='휴대폰 번호를 -빼고 입력해 주세요'
                                    onChange={this.onChange}
                                />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    
                </Accordion>
                <br/><br/>

                <div id='signBtn' className={`signBtn ${style.signBtn}`}>
                    <Button id='goHome' className={`blackBtn ${style.blackBtn}`} onClick={this.goHome}>취소</Button>
                    <Button id='gosignup' className={`redBtn ${style.redBtn}`} onClick={this.findPWD}>다음</Button>
                </div>
                <br/><br/>
            </div>
        )
    }
}

export default searchPWD;
