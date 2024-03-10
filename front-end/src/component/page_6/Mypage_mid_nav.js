import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from '../../styles/page_6/Mypage_mid_nav.module.css'

function Mypage_mid_nav() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className={`Mypage_mid_nav ${style.Mypage_mid_nav}`}>
          <Nav className="me-auto">
            <NavDropdown title="결제내역" href="/MyPage_res">
              <Nav.Link href="/MyPage_res">예매내역</Nav.Link>
              <Nav.Link href="/MyPage_resCancle">취소내역</Nav.Link>
            </NavDropdown>
            <Nav.Link href="/MyPage_coupon">쿠폰함</Nav.Link>
            <Nav.Link href="/MyPage_event">MY 이벤트</Nav.Link>
            <NavDropdown title="MY 무비로그" href="/MyPage_wishMovie">
              <Nav.Link href="/MyPage_wishMovie">보고싶어요</Nav.Link>
            </NavDropdown>
            <Nav.Link href="/consult">1:1 문의</Nav.Link>
            <NavDropdown title="MY 정보 관리" href="/MyPage_myinfo">
              <Nav.Link href="/MyPage_myinfo">회원정보관리</Nav.Link>
              <Nav.Link href="/MyPage_consult_list">1:1문의내역</Nav.Link>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Mypage_mid_nav;