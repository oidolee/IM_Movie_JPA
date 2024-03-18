import React, {Component} from 'react';
import style from '../../../styles/page_6/event.moudle.css';

class Event_Home extends Component{
    render(){
        return(
            <div className={`event_Home ${style.event_Home}`}>
               <div className={`event_Home_top ${style.event_Home_top}`}>
                    <h5>전체 이벤트</h5>
                    <ul>
                        <li><a href="#">당첨자 발표</a></li>
                        <li><a href="#">응모내역</a></li>
                        <li><a href="#">지난 이벤트</a></li>
                    </ul>
               </div>
               <div className={`event_section event_section1  ${style.event_section1}`}>
                    <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px"}}>
                        <h5>쿠폰</h5>
                        <a>더보기</a>
                    </div>
                    <ul>
                        <li>
                            <a href="#">
                                <img src='https://cf.lottecinema.co.kr//Media/Event/692ddf478a124abe9b7e91fc9fb40d25.jpg' alt='coupon_1'/>
                            </a>
                            <p>2024.03.15 ~ 2024.03.21</p>
                        </li>
                        <li>
                            <a href="#">
                                <img src='https://cf.lottecinema.co.kr//Media/Event/f7a6e421af46446c9d64e9b4e38a71fc.jpg' alt='coupon_2'/>
                            </a>
                            <p>2024.03.15 ~ 2024.03.21</p>
                        </li>
                        <li>
                            <a href="#">
                                <img src='https://cf.lottecinema.co.kr//Media/Event/ea9b773da64943a8a876f7cb8d19deb8.jpg' alt='coupon_3'/>
                            </a>
                            <p>2024.03.15 ~ 2024.04.21</p>
                        </li>
                    </ul>
               </div>
               <div className={`event_section event_section2 ${style.event_section2}`}>
                    <h5>시사회 / 무대인사</h5>
                    <ul>
                        <li>
                            <a href="#">
                                <img src='https://cf.lottecinema.co.kr//Media/Event/da0a81fa98d4470daf2dd2344024cf44.jpg' alt='greeding_1'/>
                            </a>
                            <p>2024.03.15 ~ 2024.03.21</p>
                        </li>
                        <li>
                            <a href="#">
                                <img src='https://cf.lottecinema.co.kr//Media/Event/fd1311690570402eb783a9dbd6651548.jpg' alt='greeding_2'/>
                            </a>
                            <p>2024.03.15 ~ 2024.03.21</p>
                        </li>
                        <li>
                            <a href="#">
                                <img src='https://cf.lottecinema.co.kr//Media/Event/d1036ca775d54db9a8add7f22c505b29.jpg' alt='greeding_3'/>
                            </a>
                            <p>2024.03.15 ~ 2024.04.21</p>
                        </li>
                    </ul>
               </div>

               <div className={`event_section2 event_myTheater ${style.event_myTheater}`}>
                    <h5>우리동네영화관</h5>
                    <ul>
                        <li>
                            <a className={`bn_tit active ${style.bn_tit}`}>
                                <span class="txt_zone ty1">수유</span>
                                <strong>[수유] 조조시간 확대 시행 (~12시까지)</strong>
                                <span class="bn_tit_date">2024.02.21 ~ 2024.12.31</span>
                            </a>
                            <div class="bn_cont" style={{display: "none"}}>
                                내용1
                            </div>             
                        </li>

                        <li>
                            <a className={`bn_tit ${style.bn_tit}`}>
                                <span class="txt_zone ty5">수유</span>
                                <strong>[수유] 조조시간 확대 시행 (~12시까지)</strong>
                                <span class="bn_tit_date">2024.02.21 ~ 2024.12.31</span>
                            </a>
                            <div class="bn_cont" style={{display: "none"}}>
                                내용2
                            </div>             
                        </li>
                        
                        <li>
                            <a className={`bn_tit ${style.bn_tit}`}>
                                <span class="txt_zone ty2">수유</span>
                                <strong>[수유3] 조조시간 확대 시행 (~12시까지)</strong>
                                <span class="bn_tit_date">2024.02.21 ~ 2024.12.31</span>
                            </a>
                            <div class="bn_cont" style={{display: "none"}}>
                                내용3
                            </div>             
                        </li>
                    </ul>
               </div>

               <div className={`event_section3 event_add1 ${style.event_add1}`}>
                    <img src="https://cf2.lottecinema.co.kr/lotte_image/2024/BobMarley_OneLove/0311/BobMarley_OneLove_980180_2.jpg" alt='add1' />
               </div>
               <div className={`event_section3 event_add2 ${style.event_add2}`}>
                   <img src="https://cf2.lottecinema.co.kr/lotte_image/2022/Hyundaicard/Hyundaicard_980240.jpg" alt="hyundai"/>
               </div>

            </div>
        );
    }
}

export default Event_Home;