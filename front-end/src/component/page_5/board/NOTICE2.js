import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../../../ApiService';
import { useHistory } from 'react-router-dom';
import style from "../../../styles/page_5/NOTICE2.module.css";

import RabbitAcademy2_980180 from "../../../assets/page_5/RabbitAcademy2_980180.jpg";

function NOTICE() {
  const currentPage = 1; // 예시로 현재 페이지를 1로 설정
  const totalPages = 10; // 예시로 총 페이지 수를 7로 설정

  // 페이지 변경 시 처리할 함수
  const onPageChange = (pageNumber) => {
    // 페이지 변경 처리 로직 구현
    console.log("페이지 변경:", pageNumber);
  };

  // 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const { notice_num } = useParams(); // useParams 훅을 사용하여 URL의 id 값을 가져옴

  useEffect(() => {
    selectLoad();
  }, [notice_num]);

  // 공지상세
  const [noticeInfo, setNoticeInfo] = useState({
    notice_num: "",
    notice_one: "",
    notice_title: "",
    notice_date: new Date().toISOString(),
    notice_cnt: 0,
    notice_con: "",
  });

  const selectLoad = () => {
    ApiService.selectNotice(notice_num)
      .then((res) => {
        let list = res.data;
        console.log('res.data : ' + res.data)
        setNoticeInfo({
          notice_num: list.dto.notice_num,
          notice_one: list.dto.notice_one,
          notice_title: list.dto.notice_title,
          notice_date: list.dto.notice_date,
          notice_cnt: list.dto.notice_cnt,
          notice_con: list.dto.notice_con,
        });
        console.log("selectByIdUpdate 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("selectByIdUpdate 실패 : ", err);
        // 오류 발생 시 상태 초기화
      setNoticeInfo({
        notice_num: "",
        notice_one: "",
        notice_title: "",
        notice_date: new Date().toISOString(),
        notice_cnt: 0,
        notice_con: "",
      });
      });
  };

  const history = useHistory();

  const handleButtonClick = () => {
    // 이전 페이지로 이동
    history.goBack();
  };

   // 조회수 상태를 관리할 객체 생성
   const [viewCounts, setViewCounts] = useState({});

   // 공지사항 항목 클릭 시 조회수 증가 함수
   const increaseViewCount = (noticeId) => {
     setViewCounts((prevCounts) => ({
       ...prevCounts,
       [noticeId]: (prevCounts[noticeId] || 0) + 1,
     }));
   };
 

  return (
    <div
      id="NOTICE_wrappage2"
      className={`NOTICE_wrappage2 ${style.NOTICE_wrappage2}`}
    >
      <Navbar expand="lg">
        <Navbar.Brand
          href="#home"
          className={`NOTICE_title2 ${style.NOTICE_title2}`}
        >
          고객센터
        </Navbar.Brand>{" "}
        {/* 고객센터 제목 */}
      </Navbar>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/FAQ">FAQ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/NOTICE">공지사항</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Consult">1:1문의</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/groupform">단체관람/대관문의</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className={`NOTICE_content2 ${style.NOTICE_content2}`}>
       <br></br>
        <hr></hr>

        <div className={`notice_show2 ${style.notice_show2}`}>
          <div>
              <label className={`notice_3 ${style.notice_2}`}>
              {noticeInfo.notice_title}
              </label>
          </div>
        </div>

        <div className={`notice_show2 ${style.notice_show2}`}>
          <div>
            <label className={`notice_3 ${style.notice_3}`}>영화관</label>
            <label className={`notice_4 ${style.notice_4}`}>| {noticeInfo.notice_one}</label>
          </div>
          
          <div className={`notice_show3 ${style.notice_show3}`}>
            <label className={`notice_5 ${style.notice_5}`}>등록일</label>
            <label className={`notice_6 ${style.notice_6}`}>| {new Date(noticeInfo.notice_date).toLocaleDateString()}</label>
          </div>
        </div>

        <div className={`notice_con1 ${style.notice_con1}`}>
        <div className={`con4 ${style.con4}`} id="con3" rows="3"  required>
          {noticeInfo.notice_con.split('\n').map((line, index) => (
          <React.Fragment key={index}>
          {line}
          <br />
          </React.Fragment>
           ))}
        </div>
      </div>
      <hr />
      </div>
      
      <div className={`btn_0 ${style.btn_0}`}>
        <button type="submit" className={`btn4 ${style.btn4}`} onClick={handleButtonClick}>목록</button>
     </div>

     <div className={`mv_lastIMG7 ${style.mv_lastIMG7}`}>
          <ul>
            <li><a href='#'><img src={RabbitAcademy2_980180} alt="noitce_img_1" /></a></li>
          </ul>
      </div>
    </div>
  );
}
export default NOTICE;
