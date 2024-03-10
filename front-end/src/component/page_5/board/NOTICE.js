import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import style from "../../../styles/page_5/NOTICE.module.css";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // 검색 기능 구현
    console.log("검색어:", searchTerm);
  };

  const [selectedValue, setSelectedValue] = useState(1);

  const handleSelect = (event) => {
    const value = parseInt(event.target.value);
    setSelectedValue(value);
  };

  return (
    <div className={`SearchBox_search_box2 ${style.SearchBox_search_box2}`}>
      <div className={`SearchBox_select_box ${style.SearchBox_select_box}`}>
        <select onChange={handleSelect}>
          <option value={1}>서울</option>
          <option value={2}>경기/인천</option>
          <option value={3}>전라/광주</option>
        </select>
      </div>

      {/* <div id="region_1" className={`region_box ${style.region_box}`}>경기</div>
        <div id="region_2" className={`region_box ${style.region_box}`}>서울</div> */}

      <div className={`SearchBox_search2 ${style.SearchBox_search2}`}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={handleSearchChange}
          className={`SearchBox_search_input ${style.SearchBox_search_input}`}
        />
        <button
          onClick={handleSearchSubmit}
          className={`SearchBox_search_btn ${style.SearchBox_search_btn}`}
        >
          검색
        </button>
      </div>
    </div>
  );
}

function NOTICE() {
  
  const currentPage = 1; // 예시로 현재 페이지를 1로 설정
  const totalPages = 10; // 예시로 총 페이지 수를 7로 설정

  // 페이지 변경 시 처리할 함수
  const onPageChange = (pageNumber) => {
    // 페이지 변경 처리 로직 구현
    console.log('페이지 변경:', pageNumber);
  };

  // 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }


  return (
    <div
      id="NOTICE_wrappage"
      className={`NOTICE_wrappage ${style.NOTICE_wrappage}`}
    >
      <Navbar expand="lg">
        <Navbar.Brand
          href="#home"
          className={`NOTICE_title ${style.NOTICE_title}`}
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
      <SearchBox /> {/* 검색창 컴포넌트 추가 */}
      <div className={`NOTICE_content ${style.NOTICE_content}`}>
        <div className={`NOTICE_test2 ${style.NOTICE_test2}`}>
          <p>구분</p>
          <p>제목</p>
          <p>등록일</p>
        </div>
        <hr></hr>
        
        
        <div className={`notice_show ${style.notice_show}`}>
            <div>
              <label className={`notice_1 ${style.notice_1}`}>전체</label>
            </div>
            <div>
              <label className={`notice_2 ${style.notice_2}`}>회사 사칭 피싱 사기 주의</label>
            </div>
            <div>
              <label className={`notice_3 ${style.notice_3}`}>2024-02-05</label>
            </div>
        </div>

        <div className={`notice_show ${style.notice_show}`}>
            <div>
              <label className={`notice_1 ${style.notice_1}`}>전체</label>
            </div>
            <div>
              <label className={`notice_2 ${style.notice_2}`}>롯데시네마 개인정보처리방침 개정 안내</label>
            </div>
            <div>
              <label className={`notice_3 ${style.notice_3}`}>2024-01-02</label>
            </div>
        </div>

        <div className={`notice_show ${style.notice_show}`}>
            <div>
              <label className={`notice_1 ${style.notice_1}`}>전체</label>
            </div>
            <div>
              <label className={`notice_2 ${style.notice_2}`}>	롯데시네마 영상정보처리기기 운영 및 관리방침 개정 안내</label>
            </div>
            <div>
              <label className={`notice_3 ${style.notice_3}`}>2024-01-19</label>
            </div>
        </div>

        <div className={`notice_show ${style.notice_show}`}>
            <div>
              <label className={`notice_1 ${style.notice_1}`}>수원(수원역)</label>
            </div>
            <div>
              <label className={`notice_2 ${style.notice_2}`}>▣ 수원관 리뉴얼 공사 안내 ▣</label>
            </div>
            <div>
              <label className={`notice_3 ${style.notice_3}`}>2024-01-05</label>
            </div>
        </div>

        <div className={`notice_show ${style.notice_show}`}>
            <div>
              <label className={`notice_1 ${style.notice_1}`}>동탄</label>
            </div>
            <div>
              <label className={`notice_2 ${style.notice_2}`}>▣ 동탄관 방문 안내 ▣</label>
            </div>
            <div>
              <label className={`notice_3 ${style.notice_3}`}>2024-01-02</label>
            </div>
        </div>

        <div className={`notice_show ${style.notice_show}`}>
            <div>
              <label className={`notice_1 ${style.notice_1}`}>용산</label>
            </div>
            <div>
              <label className={`notice_2 ${style.notice_2}`}>■ 롯데시네마 용산관 상영관 리뉴얼 안내 ■</label>
            </div>
            <div>
              <label className={`notice_3 ${style.notice_3}`}>2023-11-05</label>
            </div>
        </div>

        <div className={`notice_show ${style.notice_show}`}>
            <div>
              <label className={`notice_1 ${style.notice_1}`}>김포공항</label>
            </div>
            <div>
              <label className={`notice_2 ${style.notice_2}`}>■ 김포공항관 순간 정전에 따른 사과 안내■</label>
            </div>
            <div>
              <label className={`notice_3 ${style.notice_3}`}>2023-08-27</label>
            </div>
        </div>

        <div className={`notice_show ${style.notice_show}`}>
            <div>
              <label className={`notice_1 ${style.notice_1}`}>가산디지털</label>
            </div>
            <div>
              <label className={`notice_2 ${style.notice_2}`}>■ 롯데시네마 가산디지털 비상 대피 관련 안내 ■</label>
            </div>
            <div>
              <label className={`notice_3 ${style.notice_3}`}>2023-09-05</label>
            </div>
        </div>

        <div className={`notice_show ${style.notice_show}`}>
            <div>
              <label className={`notice_1 ${style.notice_1}`}>부평</label>
            </div>
            <div>
              <label className={`notice_2 ${style.notice_2}`}>■ 롯데시네마 부평 재오픈 안내 ■</label>
            </div>
            <div>
              <label className={`notice_3 ${style.notice_3}`}>2023-07-25</label>
            </div>
        </div>

        <div className={`notice_show ${style.notice_show}`}>
            <div>
              <label className={`notice_1 ${style.notice_1}`}>광복</label>
            </div>
            <div>
              <label className={`notice_2 ${style.notice_2}`}>[롯데시네마 광복 8관, 9관 임시 미운영 안내]</label>
            </div>
            <div>
              <label className={`notice_3 ${style.notice_3}`}>2023-04-28</label>
            </div>
        </div>
  
      </div>
      <div  className={`NOTICE_page ${style.NOTICE_page}`}>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${style.pageNumber2} ${pageNumber === currentPage ? style.active : ''}`} onClick={() => onPageChange(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </div>
  </div>
  );
}
export default NOTICE;
