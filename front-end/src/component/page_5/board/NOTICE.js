import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ApiService from "../../../ApiService";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "../../../styles/page_5/NOTICE.module.css";
import { Link } from "@mui/material";


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
  
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const totalPages = 10; // 예시로 총 페이지 수를 7로 설정

  // 페이지 변경 시 처리할 함수
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log('페이지 변경:', pageNumber);
  };

  // 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const history = useHistory();
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    reloadNoticeList();
  }, []);

  const reloadNoticeList = () => {
    ApiService.noticeList()
      .then((res) => {
        console.log("test" + res);
        setNotice(res.data);
      })
      .catch((err) => {
        console.log("reloadNoticeList() Error!!", err);
      });
  };


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
        
        
        {notice.map((item, index) => (
        <div key={index} className={`notice_show ${style.notice_show}`}>
          <div>
            <label className={`notice_1 ${style.notice_1}`}>{item.notice_one}</label>
          </div>
          <div>
            <a href={`/NOTICE2/${item.notice_num}`}>
              <label className={`notice_2 ${style.notice_2}`}>{item.notice_title}</label>
            </a>
          </div>
          <div>
            <label className={`notice_3 ${style.notice_3}`}>{new Date(item.notice_date).toLocaleDateString()}</label> 
          </div>
        </div>
      ))}
      </div>

      <div id="NOTICE_page" className={`NOTICE_page ${style.NOTICE_page}`}>
        {/* 이전 페이지 버튼 */}
        <button
          className={`${style.pageNumber2} ${currentPage === 1 ? style.disabled : ''}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
      >
        이전
      </button>
      
      {/* 페이지 번호 버튼들 */}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${style.pageNumber2} ${pageNumber === currentPage ? style.active : ''}`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      {/* 다음 페이지 버튼 */}
      <button
        className={`${style.pageNumber2} ${currentPage === totalPages ? style.disabled : ''}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </button>
    </div>
  </div>
  );
}
export default NOTICE;
