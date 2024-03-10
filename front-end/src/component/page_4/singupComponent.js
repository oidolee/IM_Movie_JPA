import React, { Component } from 'react';
import ApiService from '../../ApiService';
import { TextField, Button, Modal } from '@mui/material';
import DaumPostcode from 'react-daum-postcode';
import style from '../../styles/page_4/signup.module.css';

class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            password: '',
            passwordConfirm: '',
            hp: '',
            birthday: null,
            zipcode: '',
            address: '',
            addr1: '',
            addr2: '',
            isModalOpen: false,
            emailValid: true,
            passwordValid: true,
            phoneValid: true,
            passwordMatched: true // 비밀번호 확인과 일치하는지 여부를 나타내는 상태 변수를 추가합니다.
        };
    }

    // 모달 열기
    handleDaumPostcode = () => {
        this.setState({ isModalOpen: true });
    };

    // 모달 닫기
    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    // 유효성검사
    validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    validatePassword = (password) => {
        return password.length >= 4;
    };

    validatePhone = (phone) => {
        const phoneRegex = /^010[0-9]{8}$/;
        return phoneRegex.test(phone);
    };

    // 비밀번호 확인과 일치하는지 검사하는 함수
    checkPasswordMatch = () => {
        const { password, passwordConfirm } = this.state;
        const isMatched = password === passwordConfirm;
        this.setState({ passwordMatched: isMatched });
    };

    // 주소 선택이 완료되었을 때 호출되는 메서드
    handleAddressComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        this.setState({
            zipcode: data.zonecode,
            addr1: fullAddress,
        });

        // 모달을 닫습니다.
        this.handleCloseModal();
    };

    onChange = (e) => {
        if (e.target.name === 'passwordConfirm') {
            this.setState({ passwordConfirm: e.target.value }, this.checkPasswordMatch);
        } else if (e.target.name === 'email') {
            const isValid = this.validateEmail(e.target.value);
            this.setState({ email: e.target.value, emailValid: isValid });
        } else if (e.target.name === 'password') {
            const isValid = this.validatePassword(e.target.value);
            this.setState({ password: e.target.value, passwordValid: isValid });
        } else if (e.target.name === 'hp') {
            const isValid = this.validatePhone(e.target.value);
            this.setState({ hp: e.target.value, phoneValid: isValid });
        } else if (e.target.name === 'name') {
            this.setState({ name: e.target.value });
        } else if (e.target.name === 'birthday') { // 이 부분을 수정
            this.setState({ birthday: e.target.value });
        }
    };

    // 회원가입 시 이메일 주소 유효성을 검사하는 함수
    saveCustomer = (e) => {
        e.preventDefault();

        // 이메일 주소가 유효하지 않은 경우 경고 메시지를 표시하고 함수를 종료합니다.
        if (!this.state.emailValid) {
            alert("올바른 이메일 주소를 입력하세요.");
            return;
        }

        // 비밀번호가 유효하지 않은 경우 경고 메시지를 표시하고 함수를 종료합니다.
        if (!this.state.passwordValid) {
            alert("비밀번호는 최소 4자리 이상이어야 합니다.");
            return;
        }

        // 핸드폰 번호가 유효하지 않은 경우 경고 메시지를 표시하고 함수를 종료합니다.
        if (!this.state.phoneValid) {
            alert("올바른 핸드폰 번호를 입력하세요.");
            return;
        }

        // 비밀번호 확인과 일치하지 않은 경우 경고 메시지를 표시하고 함수를 종료합니다.
        if (!this.state.passwordMatched) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        const address = `${this.state.addr1} ${this.state.addr2}`;
        const inputData = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            hp: this.state.hp,
            birthday: this.state.birthday,
            address: address
        };

        console.log(inputData);

        // 등록처리 
        ApiService.addCustomer(inputData)
            .then(res => {
                this.setState({});
                console.log('input 성공 : ', res.data);

                if (res.data.resultCode == 200) {
                    alert("회원가입 성공");
                    this.props.history.push('/login');
                } else {
                    alert("회원가입 실패");
                    this.props.history.push('/signCheck');
                }
            })
            .catch(err => {
                console.log('addCustomer() 에러 ', err);
            });
    };

    render() {
        return (
            <div id='Page' className={`singupComponent ${style.singupComponent}`} >
                <div className={`singupComponent_box ${style.singupComponent_box}`}>
                    <h6>이메일</h6>
                    {/* 이메일 주소 입력 필드에 유효성을 검사하는 상태에 따라 스타일을 조절합니다. */}
                    <TextField
                        required
                        variant="standard"
                        label="이메일"
                        type="text"
                        name="email"
                        value={this.state.email}
                        placeholder='이메일 입력'
                        onChange={this.onChange}
                        error={!this.state.emailValid}
                        helperText={!this.state.emailValid ? "올바른 이메일 주소를 입력하세요." : null} // 유효성 검사 실패 시 에러 메시지를 표시합니다.
                    />
                    <Button variant="contained" color="primary" onClick={this.CheckEmail}> 인증요청 </Button>
                    <br /><br />

                    {/* 이름 입력 필드 */}
                    <h6>이름</h6>
                    <TextField
                        required
                        variant="standard"
                        label="이름"
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder='이름 입력'
                        onChange={this.onChange}
                    />
                    <br /><br />

                    {/* 비밀번호 입력 필드 */}
                    <h6>비밀번호</h6>
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
                    <h6>비밀번호 확인</h6>
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

                    {/* 핸드폰 번호 입력 필드 */}
                    <h6>핸드폰</h6>
                    <TextField
                        required
                        variant="standard"
                        label="핸드폰 번호"
                        type="text"
                        name="hp"
                        value={this.state.hp}
                        placeholder='핸드폰 번호 - 빼고 입력하세요'
                        onChange={this.onChange}
                        error={!this.state.phoneValid}
                        helperText={!this.state.phoneValid ? "올바른 핸드폰 번호를 입력하세요." : null}
                        className={`singupComponent_text ${style.singupComponent_text}`}
                    />
                    <br /><br />

                    {/* 생년월일 입력 필드 */}
                    <h6>생년월일</h6>
                    <TextField
                        required
                        variant="standard"
                        type="date"
                        name="birthday"
                        value={this.state.birthday}
                        onChange={this.onChange}
                        className={`singupComponent_text ${style.singupComponent_text}`}
                    />
                    <br /><br />

                    {/* 주소 입력 관련 필드들 */}
                    <form action="" name="form1">
                        <input type="text" name="zipcode" maxLength="5" value={this.state.zipcode} readOnly />
                        {/* 주소검색 버튼을 클릭하면 모달이 열리도록 수정합니다. */}
                        <Button variant="contained" color="primary" onClick={this.handleDaumPostcode} id='addressBtn' className={`addressBtn ${style.addressBtn}`}>우편번호검색</Button> <br />
                        <input type="text" name="addr1" value={this.state.addr1} readOnly />
                        <input type="text" name="addr2" value={this.state.addr2} onChange={(e) => this.setState({ addr2: e.target.value })} />
                    </form>

                    {/* 모달 */}
                    <Modal
                        open={this.state.isModalOpen} // 모달 열림 여부를 상태 변수에 바인딩합니다.
                        onClose={this.handleCloseModal} // 모달을 닫는 핸들러를 설정합니다.
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div>
                            {/* DaumPostcode 컴포넌트를 모달 내에 렌더링합니다. */}
                            <DaumPostcode
                                onComplete={this.handleAddressComplete}
                                autoClose
                                animation
                            />
                        </div>
                    </Modal>

                    <br /> <br />

                    {/* 회원가입 버튼 */}
                    <Button id="btn" className={`singupComponent_btn ${style.singupComponent_btn}`} variant="contained" color="primary" onClick={this.saveCustomer}>회원가입</Button>
                </div>
            </div>
        )
    }
}

export default SignupComponent;
