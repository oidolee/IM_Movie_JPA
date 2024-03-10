import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import style from '../../../styles/page_5/FAQ.css';
import movieuse from '../../../assets/page_5_2/movieuse.png';
import special from '../../../assets/page_5_2/special.png';
import user from '../../../assets/page_5_2/user.png';
import online from '../../../assets/page_5_2/online.png';
import sale from '../../../assets/page_5_2/sale.png';
import ticket from '../../../assets/page_5_2/ticket.png';
import store from '../../../assets/page_5_2/store.png';


function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // 검색 기능 구현
    console.log('검색어:', searchTerm);
  };

  return (
    <div className='search_box'>
      <div className='search'>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"/>
        <button
          onClick={handleSearchSubmit}
          className="search-button">검색</button>     
      </div>
      <div class = "help_wrap">
          <p>더 궁금한 점이 있거나, 이미 문의한 내용과 답변을 확인하려면?</p>
          <a href = "#none">1:1문의 바로가기</a>
      </div>
    </div> //d
  );
}


function FAQ() {
  return (
    <div id='wrappage' className={`wrappage ${style.wrappage}`}>
      <Navbar expand="lg">
        <Navbar.Brand href="#home" className='title'>고객센터</Navbar.Brand> {/* 고객센터 제목 */}
      </Navbar>

      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">FAQ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">공지사항</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">1:1문의</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">단체관람/대관문의</Nav.Link>
        </Nav.Item>
      </Nav>

    <div className = "box">
      <div className="icon_wrap">
        <button className="ico_01" id="7"><img src={movieuse}/></button>
        <button className="ico_01" id="7"><img src={special}/></button>
        <button className="ico_01" id="7"><img src={user}/></button>
        <button className="ico_01" id="7"><img src={online}/></button>
        <button className="ico_01" id="7"><img src={sale}/></button>
        <button className="ico_01" id="7"><img src={ticket}/></button>
        <button className="ico_01" id="7"><img src={store}/></button>
               
      </div>
    </div>

    <SearchBox /> {/* 검색창 컴포넌트 추가 */}

      <div id='accordian_all' className={`accordian_all ${style.accordian_all}`}>
      <div className={`test1 ${style.test1}`}>
        <p>구분</p>
        <p>질문</p>
      </div>


      <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
       <Accordion.Header className='header' >영화관 이용&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;영화티켓 예매 및 취소는 어떻게 하나요?</Accordion.Header>
        <Accordion.Body>
        ■ 티켓예매 (결제 방법)
        ㆍ 홈페이지, 모바일 앱/웹 예매는 영화시작시간 10분 후까지 예매 가능합니다.
        ㆍ 영화관 현장 예매는   영화시작시간 직전까지 예매 가능합니다.
        ■ 티켓취소
        ㆍ 홈페이지, 모바일 앱/웹 예매는 영화시작시간 20분 전까지 취소 가능합니다.
        ㆍ 영화관 현장 취소는 영화시작시간 직전까지 취소 가능합니다.
        ※ 현장에서 티켓으로 출력을 진행한 경우 온라인 취소가 불가능하며,

            영화관 매표소 / 스위트샵을 통해 상영시간 전까지 취소 가능합니다.

        ※ 스페셜 상영회 및 무대인사가 포함된 영화의 경우 행사의 원활한 진행을 위해

        상영전일 23시 59분 전까지만 취소 가능합니다.
      </Accordion.Body>
      </Accordion.Item>

        
        <Accordion.Item eventKey="1">
          <Accordion.Header className='header'>영화관 이용&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;관람등급 안내</Accordion.Header>
          <Accordion.Body>
          롯데시네마는 영화 및 비디오 진흥에 관한 법률(이하 영비법)을 준수합니다.
            ■ 등급 기준
            ㆍ 전체 관람가 : 모든 연령의 관람객이 관람할 수 있는 영화
            ㆍ 12세 관람가 : 만 12세 미만의 관람객은 관람할 수 없는 영화(보호자 동반 시 12세 미만 관람가)
            ㆍ 15세 관람가 : 만 15세 미만의 관람객은 관람할 수 없는 영화(보호자 동반 시 15세 미만 관람가)
            ㆍ 청소년 관람불가 : 만 18세 미만의 관람객은 관람할 수 없는 영화

            영비법 29조에 따르면 [만 12세 이상 관람가/ 만 15세 이상 관람가]의 등급이라도
            부모 등 보호자를 동반하는 경우 어린이(유아) 동반이 가능합니다.
            반드시 보호자의 동반이 필요함을 양지하여 주시기 바랍니다.

            단, 청소년 관람불가 영화는 보호자 동반과 관계없이
            만 18세 미만이거나 연령 조건을 만족하여도 초중고 재학 중인 청소년 및 영유아 관람이 절대 불가합니다.

            영화관 현장에서 연령확인 불가 시 입장이 제한될 수 있습니다.

            또한 상영등급에 맞지 않는 영화를 관람하거나 무단입장을 하는 경우 형사처벌 및 손해 배상의 대상이 될 수 있습니다.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header className='header'>영화관 이용&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;48개월 미만(만 4세 미만)의 아동 관련 요금 안내</Accordion.Header>
          <Accordion.Body>
          ■ 미취학 자녀 기준 : 48개월 미만(만 4세 미만)
            48개월 미만(만 4세 미만)의 자녀와 함께 영화 관람 시
            1인 1좌석에 보호자와 자녀가 함께 동반 착석 시에만 별도의 관람료를 받고 있지 않습니다.
            ※ 48개월 이상부터 만 6세 어린이까지는 영화관별로 티켓 예매 요금이 청소년, 어린이, 유아요금으로 적용되고 있습니다.
            이 점 유의하시기 바라며, 자세한 사항은 아래의 내용 확인 바랍니다.

            ■ 미취학 자녀 티켓 예매 안내
            보호자 1인과 48개월 미만 자녀 1인 동반 시
            ㆍ 2인 1좌석 이용시 → 1인 일반요금 예매
            ㆍ 2인 2좌석 이용시 → 1인 일반요금 예매 + 1인 청소년, 어린이, 유아요금 예매

            ■ 특이사항 안내
            보호자 1인에 48개월 미만 자녀 2인 동반 시
            ㆍ 3인 2좌석 이용시 → 1인 일반요금 예매 + 1인 청소년, 어린이, 유아요금 예매
            ㆍ 3인 3좌석 이용시 → 1인 일반요금 예매 + 2인 청소년, 어린이, 유아요금 예매
            ※ 48개월 미만 자녀 1인에게 좌석을 별도 배정시마다 청소년, 어린이, 유아요금이 부과됩니다.
            영화관 방문시에는 아동의 나이를 확인할 수 있는 확인증(의료보험증 등)을 지참하여 방문해 주시기 바랍니다.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

       
      <Pagination className='page'>
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item> 
      </Pagination>
    </div>
    </div>

      
  );
}

export default FAQ


