import React, { useState, useEffect } from 'react';

import style from '../../styles/main/MainBody.module.css';
import Button from 'react-bootstrap/Button';
import slide_1 from '../../assets/main/slide_1.jpg';
import event_1 from '../../assets/main/event_1.jpg';
import event_2 from '../../assets/main/event_2.jpg';
import event_3 from '../../assets/main/event_3.jpg';
import event_4 from '../../assets/main/event_4.jpg';
import event_5 from '../../assets/main/event_5.jpg';
import greeting_1 from '../../assets/main/greeting_1.jpg';
import greeting_2 from '../../assets/main/greeting_2.jpg';
import greeting_3 from '../../assets/main/greeting_3.jpg';
import Hyundaicard from '../../assets/main/Hyundaicard_296511.jpg';
import noitce_img_1 from '../../assets/main/noitce_img_1.jpg';

import Main_Swiper from "./Main_Swiper";

const MainBody = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timer, setTimer] = useState(null); // 타이머 상태 추가
    const [isPlaying, setIsPlaying] = useState(true); // 재생 상태를 처음에는 true로 설정
    let checkMove = "";
    useEffect(() => {
        console.log("isPlaying : " + isPlaying)
        if (isPlaying) {
            if (timer === null) { // 타이머가 없을 때만 타이머 시작
                checkMove = setInterval(() => {
                    setCurrentIndex(prevIndex => (prevIndex + 1) % newsArr.length);
                }, 2000);
            }
        } else {
            if (timer !== null) { // 타이머가 있는 경우에만 타이머 중지
                console.log("stop")
                clearInterval(checkMove);
                setTimer(null);
            }
        }
        
        return () => {
                clearInterval(checkMove);
                setTimer(null); // 컴포넌트가 언마운트될 때 타이머를 중지하고 초기화합니다.
        };
    }, [isPlaying]);
    
    const handleTogglePlay = () => {
        setIsPlaying(prevState => {
            return !prevState; // isPlaying 상태를 토글
        });
    };

    const eventArr = [
        '올해 최고의 영화를 뽑아라',
        '영화는 IM_Movie와 함꼐',
        '시작 무비 타임!'
    ];

    const greetingArr = [
        '시사회 베스트는?',
        '영등포 영화관 20주년 시사회',
        '파묘 시사회 시작'
    ];

    const newsArr = [
        'IM_Movie 공지 사항 안내',
        '올해의 신작 소개',
        '굿즈 패키지 이벤트 시작!'
    ];


  return (
    <div>
      <div className={`slide_box ${style.slide_box}`}>
        <Main_Swiper />
      </div>
      <div className={`MainBody_contents ${style.MainBody_contents}`}>

        <div className={`MainBody_contents_top MainBody_contents_top_3 ${style.MainBody_contents_top} ${style.MainBody_contents_top_3}`}>
          <span>이벤트</span>
          <ul style={{ height: '24px', overflowY: 'hidden' }}>
            {eventArr.map((item, index) => (
                <li key={index} style={{ transition: 'transform 0.5s', transform: `translateY(${currentIndex * -24}px)` }}>
                    <a href="#">
                        {item}
                    </a>
                </li>
            ))}
          </ul>
          <Button variant="primary" onClick={handleTogglePlay}>{isPlaying ? '일시정지' : '재생'}</Button>{' '}
        </div>
        <div className={`MainBody_section_1 ${style.MainBody_section_1}`}>
          <div className={`MainBody_contents_left ${style.MainBody_contents_left}`}>
            <div className={`MainBody_contents1_leftTop ${style.MainBody_contents1_leftTop}`}>
              <ul>
                <li><a href='#'><img src={event_1} alt="event_1" /></a></li>
                <li><a href='#'><img src={event_2} alt="event_2" /></a></li>
                <li><a href='#'><img src={event_3} alt="event_3" /></a></li>
              </ul>
            </div>
            <div className={`MainBody_contents1_leftBottom ${style.MainBody_contents1_leftBottom}`}>
              <ul>
                <li><a href='#'><img src={event_4} alt="event_4" /></a></li>
                <li><a href='#'><img src={event_5} alt="event_5" /></a></li>
              </ul>
            </div>
          </div>
          <div className={`MainBody_contents_right ${style.MainBody_contents_right}`}>
            <a href='#'>
              <img src={Hyundaicard} alt="Hyundaicard" />
            </a>
          </div>
        </div>
        <div className={`MainBody_contents_top MainBody_contents_top_3 ${style.MainBody_contents_top} ${style.MainBody_contents_top_3}`}>
          <span style={{marginBottom : "20px"}}>시사회</span>
          <a href='#' style={{position:"absolute", right:"0"}}>더보기</a>
        </div>
        <div className={`MainBody_section_2 ${style.MainBody_section_2}`}>
          <ul>
            <li><a href='#'><img src={greeting_1} alt="greeting_1" /></a></li>
            <li><a href='#'><img src={greeting_2} alt="greeting_2" /></a></li>
            <li><a href='#'><img src={greeting_3} alt="greeting_3" /></a></li>
          </ul>
        </div>
        <div className={`MainBody_contents_top MainBody_contents_top_3 ${style.MainBody_contents_top} ${style.MainBody_contents_top_3}`}>
          <span>공지사항</span>
          <ul style={{ height: '24px', overflowY: 'hidden' }}>
            {newsArr.map((item, index) => (
                <li key={index} style={{ transition: 'transform 0.5s', transform: `translateY(${currentIndex * -24}px)` }}>
                    <a href="#">
                        {item}
                    </a>
                </li>
            ))}
          </ul>
          <Button variant="primary" onClick={handleTogglePlay}>{isPlaying ? '일시정지' : '재생'}</Button>{' '}
        </div>
        <div className={`MainBody_section_2 ${style.MainBody_section_2}`}>
          <ul>
            <li><a href='#'><img src={noitce_img_1} alt="noitce_img_1" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
