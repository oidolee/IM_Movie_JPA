import React, { Component } from 'react';
import ApiService from '../../ApiService';
import { TextField, Button, Modal } from '@mui/material';
import DaumPostcode from 'react-daum-postcode';
import style from '../../styles/page_4/signup.module.css';
import { setAuthToken } from '../../helpers/axios_helper';

import { styled } from '@mui/material/styles';

// 모달 스타일
const CustomModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height:600,
}));

// 모달 컨텐츠 스타일
const ModalContent = styled('div')({
    width: '80%',
    maxWidth: 600,
    maxHeight: 500, // 최대 높이 설정
    overflowY: 'auto', // 세로 스크롤이 필요한 경우에만 스크롤 표시
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  });

class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
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
    validateEmail = (id) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(id);
    };
    // 유효성검사
    validatePassword = (password) => {
        return password.length >= 4;
    };
    // 유효성검사
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

    checkDuplicateEmail = () => {
        // 현재 상태에서 이메일 값을 가져옵니다.
        const { id } = this.state;
    
        // 이메일 중복을 검사하기 위해 ApiService의 메서드를 호출합니다.
        ApiService.checkDuplicateEmail(id)
            .then(res => {
                // 서버로부터 받은 응답에 따라 중복 여부를 판단합니다.
                if (res.data != 0) {
                    // 중복된 경우 경고 메시지를 표시합니다.
                    alert("이미 사용 중인 이메일입니다.");
                } else {
                    // 중복되지 않은 경우 메시지를 표시합니다.
                    alert("사용 가능한 이메일입니다.");
                }
            })
            .catch(err => {
                // 중복 검사 과정에서 오류가 발생한 경우 오류 메시지를 표시합니다.
                console.error("이메일 중복 체크 에러:", err);
                alert("이메일 중복 체크에 실패했습니다.");
            });
    };
    onChange = (e) => {
        if (e.target.name === 'passwordConfirm') {
            this.setState({ passwordConfirm: e.target.value }, this.checkPasswordMatch);
        } else if (e.target.name === 'id') { 
            const isValid = this.validateEmail(e.target.value);
            this.setState({ id: e.target.value, emailValid: isValid });
        } else if (e.target.name === 'password') {
            const isValid = this.validatePassword(e.target.value);
            this.setState({ password: e.target.value, passwordValid: isValid });
        } else if (e.target.name === 'hp') {
            const isValid = this.validatePhone(e.target.value);
            this.setState({ hp: e.target.value, phoneValid: isValid });
        } else if (e.target.name === 'name') {
            this.setState({ name: e.target.value });
        } else if (e.target.name === 'birthday') {
            this.setState({ birthday: e.target.value });
        }
    };
    

    // 회원가입 시 이메일 주소 유효성을 검사하는 함수
    saveCustomer = (e) => {
        e.preventDefault();

        // 필수 항목을 모두 입력 했는지 확인합니다.
        if (!this.state.id || !this.state.name || !this.state.password || !this.state.hp || !this.state.birthday || !this.state.addr1 || !this.state.addr2) {
            alert("모든 필수 항목을 입력하세요.");
            return;
        }

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
        
        // IC_regdate를 현재 날짜로 설정
        const regdate = new Date();

        // IC_show를 기본값으로 설정
        const state = 'y';
        const role = 'ROLE_USER';
        const type = "web";


        const address = `${this.state.addr1} ${this.state.addr2}`;
        const inputData = {
            id: this.state.id,
            name: this.state.name,
            password: this.state.password,
            hp: this.state.hp,
            birthday: this.state.birthday,
            address: address,
            regdate: regdate,
            state: state,
            role: role,
            type: type,
        };

        console.log(inputData);

        // 등록처리 
        ApiService.addCustomer(inputData)
            .then(res => {
                this.setState({});
                console.log('input 성공 : ', res.data);

                if (res.data.token != null) {
                    alert("회원가입 성공");
                    setAuthToken(res.data.token);
                    this.props.history.push('/login');
                } else {
                    alert("회원가입 실패");
                    setAuthToken(null);
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
                        name="id"
                        value={this.state.id}
                        placeholder='이메일 입력'
                        onChange={this.onChange}
                        error={!this.state.emailValid}
                        helperText={!this.state.emailValid ? "올바른 이메일 주소를 입력하세요." : null} // 유효성 검사 실패 시 에러 메시지를 표시합니다.
                    />
                    <Button variant="contained" style={{marginLeft:'50px', marginTop:'13px'}} color="primary" onClick={this.checkDuplicateEmail}> 중복확인 </Button>
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
                        placeholder="이름 입력"
                        onChange={this.onChange}
                        style={{ width: 330 }}
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
                        style={{ width: 330 }}
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
                        style={{ width: 330 }}
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
                        style={{ width: 330 }}
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
                        style={{ width: 330 }}
                        className={`singupComponent_text ${style.singupComponent_text}`}
                    />
                    <br /><br />

                    {/* 주소 입력 관련 필드들 */}
                    <form action="" name="form1">
                        <input type="text" name="zipcode" maxLength="5" value={this.state.zipcode} readOnly />
                        {/* 주소검색 버튼을 클릭하면 모달이 열리도록 수정합니다. */}
                        <Button variant="contained" style={{marginLeft:'40px'}} color="primary" onClick={this.handleDaumPostcode} id='addressBtn' className={`addressBtn ${style.addressBtn}`}>우편번호검색</Button> <br />
                        <input type="text"  style={{ width: 330, marginTop:'10px' }} name="addr1" value={this.state.addr1} readOnly />
                        <br />
                        <input type="text" style={{ width: 330, marginTop:'10px' }} name="addr2" value={this.state.addr2} onChange={(e) => this.setState({ addr2: e.target.value })} />
                    </form>

                    {/* 모달 */}
                    <div className={`addressBox ${style.addressBox}`}>
                        <CustomModal
                        open={this.state.isModalOpen}
                        onClose={this.handleCloseModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <ModalContent>
                            <DaumPostcode
                            onComplete={this.handleAddressComplete}
                            autoClose
                            animation
                            />
                        </ModalContent>
                        </CustomModal>
                    </div>


                    <br /> <br />

                    {/* 회원가입 버튼 */}
                    <Button id="btn" className={`singupComponent_btn ${style.singupComponent_btn}`} variant="contained" color="primary" onClick={this.saveCustomer}>회원가입</Button>
                </div>
            </div>
        )
    }
}

export default SignupComponent;
