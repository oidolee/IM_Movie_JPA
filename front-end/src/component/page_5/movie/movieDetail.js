import React, { useState } from 'react';
import style from "../../../styles/page_5/movieDetail.module.css";

// 이미지
import movie1 from "../../../assets/page_5/movie1.jpg";
import heart from "../../../assets/page_5_5/heart.png";
import send from "../../../assets/page_5_5/send.png";

import trailer1 from "../../../assets/page_5_5/trailer1.png";
import trailer2 from "../../../assets/page_5_5/trailer2.png";

function MovieDetail() {
  const [showModal, setShowModal] = useState(false); // 모달 창 열림/닫힘 상태

  // 클릭된 버튼의 트레일러 URL을 출력하는 함수
  const handleTrailerClick = () => {
    setShowModal(true); // 모달 창 열기
    
  };

  // 모달 창을 닫는 함수
  const handleCloseModal = () => {
    setShowModal(false); // 모달 창 닫기
  };

  return (
    <>
      <div className={`detail_movie_wrap ${style.detail_movie_wrap}`}>
        <div className={`detail_info ${style.detail_info}`}>
          <div className={`detail_img_box ${style.detail_img_box}`}>
            <img src={movie1} alt="파묘상세" style={{ width: "250px" }} />
          </div>

          <div className={`detail_text ${style.detail_text}`}>
            <div className={`detail_title ${style.detail_title}`}>
              <label htmlFor="pp_name">파묘</label>
            </div>

            <div className={`detail_con ${style.detail_con}`}>
              <div className={`detail_con1 ${style.detail_con1}`}>
                <label htmlFor="de_date">2024.02.22 개봉</label>
                <label htmlFor="de_time">| 134분 |</label>
                <label htmlFor="de_age">
                  {" "}
                  <span style={{ color: "orange" }}>15세이상관람가</span>
                </label>
                <label htmlFor="de_num">| 804.1만명</label>
              </div>
            </div>

            <div className={`btn_wrap1 ${style.btn_wrap1}`}>
              <button className={`detail_btn1 ${style.detail_btn1}`} id="10">
                &#9658;예고편 재생{" "}
              </button>
              <button className={`detail_btn2 ${style.detail_btn2}`} id="11">
                <img src={heart} alt="하트" />
                4,148
              </button>
              <button className={`detail_btn3 ${style.detail_btn3}`} id="12">
                <img src={send} alt="공유하기" />
              </button>
            </div>

            <div id="section4" className={`detail_box ${style.detail_box}`}>
              <p className={`detail_con2 ${style.detail_con2}`}>
                미국 LA, 거액의 의뢰를 받은 무당 ‘화림’(김고은)과
                ‘봉길’(이도현)은<br></br>
                기이한 병이 대물림되는 집안의 장손을 만난다.<br></br>
                조상의 묫자리가 화근임을 알아챈 ‘화림’은 이장을 권하고,<br></br>
                돈 냄새를 맡은 최고의 풍수사 ‘상덕’(최민식)과 장의사
                ‘영근’(유해진)이 합류한다.<br></br>
                <p />
                “전부 잘 알 거야… 묘 하나 잘못 건들면 어떻게 되는지”<br></br>
                절대 사람이 묻힐 수 없는 악지에 자리한 기이한 묘.<br></br>
                ‘상덕’은 불길한 기운을 느끼고 제안을 거절하지만,<br></br>
                ‘화림’의 설득으로 결국 파묘가 시작되고…<br></br>
                <p />
                나와서는 안될 것이 나왔다.
              </p>
            </div>

            <div className={`btn_wrap2 ${style.btn_wrap2}`}>
              <button className={`detail_btn4 ${style.detail_btn4}`} id="13">
                예매하기
              </button>
            </div>
          </div>
        </div>
        <div className={`detail_down ${style.detail_down}`}>
          <div className={`detail_down2 ${style.detail_down2}`}>
            <button className={`con_1 ${style.con_1}`} id="14">
              상세정보
            </button>
            <button className={`con_2 ${style.con_2}`} id="15">
              관람평
            </button>
            <hr></hr>
          </div>

          <div className={`detail_box1 ${style.detail_box1}`}>
            <p>영화정보</p>
            <p>
              <span style={{ color: "gray" }}>.장르</span> 미스터리/한국
            </p>
            <p>
              <span style={{ color: "gray" }}>.감독</span> 장재현
            </p>
            <p>
              <span style={{ color: "gray" }}>.출연</span>{" "}
              최민식,김고은,유해진,이도현
            </p>
          </div>

          <div className={`detail_down3 ${style.detail_down3}`}>
            <label for="de_title">트레일러</label>
          </div>
          <button
            className={`detail_trailer1 ${style.detail_trailer1}`}
            onClick={handleTrailerClick}
          >
            <img src={trailer1} alt="트레일러1" />
          </button>
          <button className={`detail_trailer2 ${style.detail_trailer2}`}>
            <img src={trailer2} alt="트레일러2" />
          </button>
        </div>
      </div>
      {showModal && (
        <div className={`modal ${style.modal}`} onClick={handleCloseModal}>
          <div
            className={`modal_content ${style.modal_content}`}
            onClick={(e) => e.stopPropagation()}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#FFF',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
          >
            <video
              src="https://cf.lottecinema.co.kr//Media/MovieFile/MovieMedia/202402/20808_301_1.mp4"
              controls
              autoPlay
            ></video>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
