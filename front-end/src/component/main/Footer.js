import React, {Component} from 'react';
import style from  '../../styles/main/Footer.css'
import logo from '../../assets/main/IM_Logo.png'
class Footer extends Component{
    render(){
        return(
            <div className='footer_box'>
                <div className='footer_son footer_son1'>
                    <div className={`Footer_logo ${style.Footer_logo}`}>
                        <img src={logo} />
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
        )
    }
}
export default Footer;