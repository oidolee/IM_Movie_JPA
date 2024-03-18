import React, { useState } from 'react';
import style from  '../../styles/main/Footer.css'
import logo from '../../assets/main/IM_Logo.png'
import styled from 'styled-components';

const Footer = () => {
    const [isOn, setIsOn] = useState(false);

    // StyledBoxAndImage 컴포넌트를 정의합니다.
    const StyledBoxAndImage = styled.div`
        /* StyledBoxAndImage 컴포넌트의 스타일을 정의합니다. */
        width: 50px;
        height: 50px;
        background-color: #f2f2f2;
        border: 1px solid #ccc;
        padding: 10px 20px;
        border-radius: 50%;
        cursor: pointer;
        position: fixed;
        bottom: 10px; /* 화면 제일 아래에 고정합니다. */
        right: 20px; /* 화면 오른쪽에 고정합니다. */
        color: red; /* 글자색을 빨간색으로 설정합니다. */
        font-size: 20px; /* 글자 크기를 20px로 설정합니다. */
        z-index:999;
        transition: right 0.3s ease; /* 부드러운 이동 효과를 추가합니다. */
        
        &.chat_toggle_on {
            right: 20px; /* 화면 오른쪽에 고정합니다. */
        }
    `;

    const toggleChatBot = () => {
        if(!isOn) {
            // Chatbot 열기
            document.querySelector('.react-chatbot-kit-chat-container').style.right = '20px'; // 오른쪽으로 이동
        } else {
            // Chatbot 숨기기
            document.querySelector('.react-chatbot-kit-chat-container').style.right = '-500px'; // 오른쪽으로 숨김
        }
        setIsOn(!isOn);
    }

    return (
        <div className={`footer_con ${style.footer_con}`}>
            {/* StyledBoxAndImage 컴포넌트를 사용하여 박스와 이미지 스타일을 적용합니다. */}
            <div>

                
            </div>
            <StyledBoxAndImage
                className={isOn ? 'chat_toggle_on' : ''}
                onClick={toggleChatBot}
            >
                {!isOn && (
                    <div>?</div>
                )}
                {isOn && (
                    <div>X</div>
                )}
            </StyledBoxAndImage>
            <div className='footer_box'>
                <div className='footer_son footer_son1'>
                    <div className={`Footer_logo ${style.Footer_logo}`}>
                        <img src={logo} alt="IM_Logo" />
                    </div>
                    
                    <div className={`Footer_right ${style.Footer_right}`}>
                        <ul>
                            <li>서울특별시 송파구 올림픽로 300 롯데월드타워 27층</li>
                            <li>
                                대표 이메일 lottecultureworks@lotte.net고객센터 1544-8855 (유료)사업자등록번호 313-87-00979통신판매업신고번호 제1184호사업자정보확인
                            </li>
                            <li>
                                대표이사 최병환개인정보 보호 책임자 김병문호스팅 제공자 롯데정보통신
                            </li>
                            <li>
                                Copyright © IM_Moive All Right Reserved.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
