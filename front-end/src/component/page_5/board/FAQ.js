import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import style from '../../../styles/page_5/FAQ.css';


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
    <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
      <legend style={{ display: 'none' }}>검색</legend>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex' }}>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: '300px', padding: '10px', border: 'none', outline: 'none' }}
          />
          <button
            onClick={handleSearchSubmit}
            style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '0 5px 5px 0', padding: '10px 20px', cursor: 'pointer' }}
          >
            검색
          </button>
        </div>
      </div>
    </fieldset>
  );
}


function FAQ() {
  return (
    <div id='wrappage' className={`wrappage ${style.wrappage}`}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">고객센터</Navbar.Brand> {/* 고객센터 제목 */}
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

      <div class = "icon_wrap">
        <h3 class="hidden">FAQ</h3>
        <button class = "active ico_01" id="7">영화관 이용</button>
        <button class = "ico_02" id="14">스폐셜관</button>
        <button class = "ico_03" id="3">회원</button>
        <button class = "ico_04" id="5">온라인</button>
        <button class = "ico_05" id="6">할인혜택</button>
        <button class = "ico_06" id="12">관람권</button>
        <button class = "ico_07" id="13">스토어</button>
      </div>

      <SearchBox /> {/* 검색창 컴포넌트 추가 */}

      <thead>
        <tr>
          <th scope="col" id="thread0">구분</th>
          <th scope="col" id="thread1">질문</th>
        </tr>
      </thead>


      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
       <Accordion.Header>군인 할인은 어떻게 받나요?</Accordion.Header>
        <Accordion.Body>
          [군인할인] 군인 고객님들에게 할인 혜택을 제공하고 있습니다.
          <br/><br/>

          ■ 대상:
          <br/>
          대한민국 군장변(ROTC, 사관생도, 부사관후보생, 상근예비역, 간부포함) / 대한민국 예비군 1~2년차 / 국방부 공,군무원, 한국 국방연구원, 병무청 전직원 / 방위사업청, 방위산업기술지원센터, 국방과학연구소 전직원 / 20년 이상 복무 후 전역한 예비역, 군인공제회 전직원 / 사회복무요원, 병역명문가 병역 이행자 및 가족 / 주한미군, 한국전 참전국 주한군인, 국방부 공무직
          <br/><br/>
          ■ 2D 영화:
          주중 9,000원 / 주말 10,000원 관람 (동반 3인)
          <br/>
          ■ 3D 영화:
          주중 10,000원 / 주말 11,000원 관람 (동반 3인)
          <br/><br/>
          ■ 매점 콤보 세트:
          2,000원 할인(더블콤보 4,000원 할인)
          <br/>
          * 일부 영화관에 따라 매점혜택 적용 불가
          <br/><br/>
          ※ 현장 할인 적용방법:
          <br/>
          - 병사: 휴가증, 외박/외출증 제시 시 적용
          <br/>
          - 부사관 후보생: 외박/외출증 제시 시 적용
          <br/>
          - 현역간부: 공무원증 제시 시 적용
          <br/>
          - 사관생도/ROTC: 사관생도증, 학군사관후보생증 제시 시 적용
          <br/>
          - 예비군(1~2년차): 24년 예비군 교육훈련 필증 및 신분증 제시 시 적용
          <br/>
          - 방위사업청/방위산업기술지원센터/국방과학연구소/국방기술품질원/국방연구원병무청/군인공제회: 소속기관 신분증 제시 시 적용
          <br/>
          - 병역명문가: 병역명문가증 및 가족관계 증명서 제시 시 적용
          <br/>
          - 20년 이상 복무 전역한 예비역: 군인연금증, 군인연금카드 제시 시 적용
          <br/>
          - 국방부 공무직: 공무원증 제시 시 적용
          <br/><br/>
          ※ 온라인 예매 방법:
          <br/>
          - 결제단계 시 [제휴포인트/할인] - [군인할인] 선택 시 적용 가능
          <br/><br/>
          ※ 타인의 신분증 제시 시 입장에 제한이 있을 수 있으므로, 반드시 입장하시는 당사자 본인의 신분증을 지참해주시기 바랍니다. (온라인 예매 시에도 동일 정책 적용)
          <br/>
        ※ 유의사항
        <br/>
        - 4D, 샤롯데관 등 스페셜관은 할인대상에 포함되지 않습니다.
        <br/>
        - 기타할인과 중복 할인 불가합니다.
        <br/>
        - 본 이벤트의 혜택은 일부 영화관에서 사용 불가합니다.(전주송천) 
      </Accordion.Body>
      </Accordion.Item>

        
        <Accordion.Item eventKey="1">
          <Accordion.Header>소방/경찰 할인은 어떻게 받나요?</Accordion.Header>
          <Accordion.Body>
          [경찰할인] 경찰 & 해양경찰 소속 공무원 고객님들에게 할인 혜택을 제공하고 있습니다.

            ■ 대상 : 경찰관 및 경찰청(해양경찰청 포함) 소속 공무원, 의무경찰, 신임경찰교육생, 민간해양구조대, 국민방제대, 구조협회
            ■ 2D 영화 : 주중 9,000원 / 주말 10,000원 관람 (동반 3인)
            ■ 3D 영화 : 주중 10,000원 / 주말 11,000원 관람 (동반 3인)
            ■ 매점 콤보 세트 : 2,000원 할인(더블콤보 4,000원 할인)

            ※ 현장 할인 적용방법

            - 경찰청(해양경찰청) 소속 신분증 제시 시 적용

            - 의무경찰 휴가증, 외출증 제시 시 적용

            - 구조협회, 해양구조대, 국민방제대 회원증 제시 시 적용

            ※ 온라인 예매 방법

            - 결제단계 시 [제휴포인트/할인] - [경찰할인] 선택 시 적용 가능
            ※ 타인의 신분증 제시 시 입장에 제한이 있을 수 있으므로, 반드시 입장하시는 당사자 본인의 신분증을 지참해주시기 바랍니다. (온라인 예매 시에도 동일 정책 적용)

            ※ 유의사항

            - 4D, 샤롯데관 등 스페셜관은 할인대상에 포함되지 않습니다.

            - 기타할인과 중복 할인 불가합니다.

            - 본 이벤트의 혜택은 일부 영화관에서 사용 불가합니다.

            [소방할인] 2023년 12월 31일부 소방공무원 할인 제휴가 종료되어 2024년부 할인 적용이 불가능합니다. 이후 좋은 기회를 통해 찾아뵙겠습니다. 감사합니다.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>영화 경품(굿즈)수량 확인은 어떻게 하나요?</Accordion.Header>
          <Accordion.Body>
          ■ 영화 경품(굿즈) 수량 확인 방법

          · 각 영화 경품(굿즈) 증정 이벤트 페이지 하단 [잔여수량확인] 탭을 통해 확인 가능합니다.

          - [홈페이지/모바일] > [이벤트] > [영화] > 이벤트페이지 클릭 후 하단의 [잔여수량확인] 탭 확인

          · 영화 경품(굿즈) 증정 이벤트를 진행하는 영화관에 한해 조회가 가능합니다.

          · 이벤트 페이지를 통해 확인한 영화 경품(굿즈) 잔여수량은 현장 방문시점과 상이할 수 있습니다. 

          · 경품(굿즈)의 실시간 재고 소진 특성상 통합고객센터를 통한 수량 문의 시 안내가 어렵습니다.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>카드로 결제할 경우 환불은 언제 되나요?</Accordion.Header>
          <Accordion.Body>
          ■ 환불안내
 
          ㆍ 신용카드
            - 결제 후 3일 이내 취소시 승인취소 가능합니다.
            - 3일 이후 예매 취소 시 영업일 기준 3일 ~7일 이내 카드사에서 환불됩니다.
            
          ㆍ 체크카드
            - 결제 후 3일 이내 취소 시 당일 카드사에서 환불 처리됩니다.
            - 3일 이후 예매 취소 시 카드사에 따라 3일 ~ 10일 이내 카드사에서 환불됩니다.
            
          ㆍ 휴대폰 결제
            - 결제 일자 기준 당월(1일~말일까지) 취소만 가능합니다.
            - 익월 취소의 경우 롯데시네마 고객센터(1544-8855)로 문의 주시기 바랍니다.
          
          ㆍ카카오페이 간편결제
            - 카카오페이머니를 사용하신 경우 카카오페이머니 잔액으로 원복됩니다.
            - 카드 결제를 한 경우 카드사 정책에 따라 승인취소가 진행되며,
              3일 이후 매입 취소 시 영업일 기준 3~10일 소요됩니다.
          
          ㆍ페이코 간편결제
            - PAYCO 쿠폰/포인트를 사용하신 경우 각각의 쿠폰/포인트로 원복됩니다. 
            - 카드 결제 금액은 카드사 정책에 따라 승인취소가 진행되며,
              3일 이후 매입취소 시 영업일 기준 3~10일 소요됩니다.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>국가유공자 할인은 어떻게 받나요?</Accordion.Header>
          <Accordion.Body>
          국가보훈처에서 지정한 보훈대상임을 증명할 수 있는 국가유공자증 및 유족증 소지자 본인에 한해 일반 2D 영화 5천원, 3D 영화 8천원 관람이 가능합니다. (특수관의 경우, 일부 추가금액이 발생할 수 있습니다.)

            ※ 대상 : 독립유공자/유족, 국가유공자/유족, 5.18민주유공자/유족, 특수임무유공자/유족, 보훈보상대상자/유족, 고엽제후유증, 고엽제후유증2세, 참전유공자, 기타 지원대상자 (지원공상군경 등)
            국가유공자 할인의 경우, 온라인 예매 시에는 할인 적용이 불가하며 영화관 현장에서 예매할 시에만 할인 적용이 가능합니다.
            또한, 국가유공상인 고객님께서는 장애인석을 이용하실 수 있습니다.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>SWEET SPOT이 무엇인가요?</Accordion.Header>
          <Accordion.Body>
          SWEET SPOT이란, 스크린 가운데에서 상영관 뒤 벽까지 직선 거리의 2/3 지점으로, 롯데시네마가 추천하는 최적의 화면과 사운드를 즐길 수 있는 좌석입니다.
          별도의 추가 요금은 없습니다.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>분실물을 찾고 싶어요</Accordion.Header>
          <Accordion.Body>
          영화관을 이용하시다가 소지물품을 분실하신 경우에는
          롯데시네마 홈페이지 [고객센터] - [분실물문의]에서 분실물 접수 시 담당자 확인 후 안내드리고 있습니다.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>단체 관람의 경우 할인 혜택이 어떻게 되나요?</Accordion.Header>
          <Accordion.Body>
          단체 관람의 경우, 10명 이상 티켓 구매 시 1인당 1,000원씩 할인 혜택을 받으실 수 있습니다.
          단체 관람과 관련하여 문의가 있으실 경우 롯데시네마 [홈페이지] → [고객센터] → [단체관람/대관문의]로 내용 접수해주시기 바랍니다.
          ※ 조조, 심야, 문화의 날, 공휴일, 주말 등 일부는 제외될 수 있습니다.
          ※ 영화관 별로 단체 관람 대상 인원수 및 할인 혜택에 일부 차이가 있을 수 있습니다.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>장애인 할인 혜택에 대해 알려 주세요</Accordion.Header>
          <Accordion.Body>
          ■ 일반 2D 영화 : 5,000원 관람 /  3D 영화 : 8,000원 관람
          ■ 장애의 정도가 심한 장애인(중증) : 본인 및 동반 1인 할인적용 가능
          ■ 장애의 정도가 심하지 않은 장애인(경증) : 본인만 할인 적용 가능
          ※ 온라인으로 예매를 하셨더라도, 티켓 발권을 위해 복지카드를 가지고 영화관 인포메이션 데스크를 방문해주셔야 합니다.
          ※ 온라인 예매 시에는 장애인 2인을 선택해주셔야 동반인원 할인이 적용됩니다.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header>경로 할인 혜택에 대해 알려주세요</Accordion.Header>
          <Accordion.Body>
          만 65세 이상의 고객님들에게 할인 혜택을 제공하고 있습니다.
          ■ 일반 2D 영화 : 7,000원
          ■ 3D 영화 : 9,000원
          티켓발권을 위해 본인의 신분증(만 65세 이상)을 가지고 영화관 인포메이션 데스크를 방문해주셔야 합니다. 타인의 신분증 제시 시 입장에 제한이 있을 수 있으므로, 반드시 입장하시는 당사자 본인의 신분증을 지참해주시기 바랍니다. (온라인 예매 시에도 동일 정책 적용)
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ


