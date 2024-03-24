import React, { useState, useEffect } from 'react';
import logo from '../../assets/main/IM_Logo.png'
import { useCookies } from 'react-cookie'; // 로그인 확인용
import { Link, useLocation } from 'react-router-dom';
import '../../styles/main/Header.css'; 
import styled from 'styled-components';




function Header() {
    const [path, setPath] = useState('/');
    //상단 메뉴바 호버
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
    const [currentMenuValue, setCurrentMenuValue] = useState(null);

    //자손 호버
    const [sonisSubMenuVisible, setSonIsSubMenuVisible] = useState(false);
    const [soncurrentMenuValue, setSonCurrentMenuValue] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['idName']);


    // 페이지 로딩 시 경로 설정 (실제로는 해당 경로를 얻는 방법에 따라 다를 수 있음)
    useEffect(() => {
        const currentPath = window.location.pathname;
        console.log(currentPath)
        setPath(currentPath);
    }, []);

    //상단 메뉴바 호버
    const handleMouseOver = (value) => {
        setIsSubMenuVisible(true);
        setCurrentMenuValue(value);
    };

    const handleMouseOut = () => {
        setIsSubMenuVisible(false);
        setCurrentMenuValue(null);
    };

    //자손 호버
    const SonhandleMouseOver = (value) => {
        setSonIsSubMenuVisible(true);
        setSonCurrentMenuValue(value);
    };

    const SonhandleMouseOut = () => {
        setSonIsSubMenuVisible(false);
        setSonCurrentMenuValue(null);
    };

    const handleLogout = () => {
        // 쿠키 제거
        removeCookie('idName');
        alert('로그아웃 되었습니다.')
    };
    //헤더 동적 처리         
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    

    return (
        <div className={`header_section ${isHomePage ? '' : 'special_header'}`}>
            <div className='gnb'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} style={{ width: '100px' }} />
                    </Link>
                </div>

                <div className='right-gnb'>
                    <ul>
                        
                        {(cookies.idName == undefined) &&(<li><Link to="/login">로그인</Link></li>)}
                        {cookies.idName &&(
                            <>                              
                                <li><a href="/admin">관리자</a></li>
                                {/* <li><Link to="/admin">관리자</Link></li> */}
                                <li><Link to="/MyPage_res">마이페이지</Link></li>
                                <li><a href='#' onClick={handleLogout}>로그아웃</a></li>
                            </>
                        )}                                                  
                          <li><Link to="/customerlist">멤버쉽</Link></li>   
                          <li><Link to="/FAQ">고객센터</Link></li>   

                          {cookies.idName &&(
                                <>
                                    <li><Link to="/parking">주차등록</Link></li>   
                                </>
                            )}
                          <li><Link to="/groupform">단체관람/대관문의</Link></li>   
                    </ul>
                    <ul className='header-member-box'>                      
                        <li>
                            {!cookies.idName &&(
                                <>
                                    <i class="bi bi-person" className='bi-person'></i>
                                    <Link to="/signCheck">회원가입</Link>
                                </>
                            )}
                        </li>
                        
                        <li>
                            <Link to="/">
                                <a class="btn_reserve">바로예매</a>
                            </Link>
                            
                        </li>
                        <li><i class="bi bi-list" className='bi-list'></i></li>
                    </ul>
                    {cookies.idName && (
                        <p className="Header_user_name">{cookies.idName}님 환영합니다.</p>
                    )}

                </div>
            </div>
            <div className='nav'>
                <ul>
                    {/* 이벤트 버블링 */}
                    <li onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
                        <Link to="/page_1/Reservation_Movie">
                            <a onMouseEnter={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>예매</a>
                        </Link>
                        {isSubMenuVisible && currentMenuValue === 1 && (
                            <div className='bottom-menu-box'>
                                <ul>
                                    <li><Link to="/page_1/Reservation_Movie">예매하기</Link></li>
                                    <li><Link to="/page_1/Reservation_Movie_screen">상영시간표</Link></li>
                                    <li><Link to="/page_1/Discount">할인안내</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>
                        <Link to="/movieMain">
                            <a  onMouseEnter={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>영화</a>
                        </Link>
                        {isSubMenuVisible && currentMenuValue === 2 && (
                            <div>
                                <ul>
                                    <li><Link to="/movieMain">홈</Link></li>
                                    <li><Link to="/movieNow">현재상영작</Link></li>
                                    <li><Link to="/movieNext">상영예정작</Link></li>
                                    <li><Link to="/arte">아르떼</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>
                        <a href="#" onMouseEnter={() => handleMouseOver(3)} onMouseOut={()=>{SonhandleMouseOut(); handleMouseOut()}}>영화관</a>
                        {isSubMenuVisible && currentMenuValue === 3 && (
                        // {true && (
                            <div>
                                <ul>
                                    {/* <li onMouseOver={() => SonhandleMouseOver(1)}><a href="/theater/1">서울</a></li>
                                    <li onMouseOver={() => SonhandleMouseOver(2)}><a href="/theater/2">인천</a></li>
                                    <li onMouseOver={() => SonhandleMouseOver(3)}><a href="/theater/3">경기</a></li> */}

                                    <li onMouseOver={() => SonhandleMouseOver(1)}><Link to="/theater/1">서울</Link></li>
                                    <li onMouseOver={() => SonhandleMouseOver(2)}><Link to="/theater/3">경기</Link></li>
                                    <li onMouseOver={() => SonhandleMouseOver(3)}><Link to="/theater/2">인천</Link></li>
                                </ul>
                            </div>
                            
                        )}
                    </li>
                    <li onMouseOver={() => handleMouseOver(4)} onMouseOut={handleMouseOut}>
                        <a href="#" onMouseEnter={() => handleMouseOver(4)} onMouseOut={handleMouseOut}>이벤트</a>
                        {isSubMenuVisible && currentMenuValue === 4 && (
                            <div>
                                <ul>
                                    <li><Link to="/event_Home">홈</Link></li>
                                    <li><Link to="/event_Home">영화</Link></li>
                                    <li><Link to="/event_Home">시사회/무대인</Link></li>
                                    <li><Link to="/event_Home">HOT</Link></li>
                                    <li><Link to="/event_Home">제휴할인</Link></li>
                                    <li><Link to="/event_Home">우리동네영화관</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li onMouseOver={() => handleMouseOver(5)} onMouseOut={handleMouseOut}>
                        <a href="/page3" onMouseEnter={() => handleMouseOver(5)} onMouseOut={handleMouseOut}>스토어</a>
                        {isSubMenuVisible && currentMenuValue === 5 && (
                            <div>
                                <ul>
                                    <li><Link to="/page3#store1">베스트</Link></li>
                                    <li><Link to="/page3#store2">관람권</Link></li>
                                    <li><Link to="/page3#store3">스낵음료</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>

                </ul>

            </div>
            {/* {isSubMenuVisible && currentMenuValue === 3 && ( */}
            {sonisSubMenuVisible && (
                    <div className='header_nav_son' >
                        {/* {true && ( */}
                    {/* {soncurrentMenuValue == 1 &&( */}
                    {soncurrentMenuValue == 1 &&(
                        <ul onMouseOut={()=>{SonhandleMouseOut(); handleMouseOut()}} onMouseOver={() => { SonhandleMouseOver(1); handleMouseOver(3); }}>

                            <li><Link to="/theater/1">홍대입구</Link></li>
                            <li><Link to="/theater/2">용산</Link></li>
                            <li><Link to="/theater/3">합정</Link></li>
                            <li><Link to="/theater/4">에비뉴엘</Link></li>
                            <li><Link to="/theater/5">영등포</Link></li>
                        </ul>
                    )}
                    {soncurrentMenuValue == 2 && (
                        <ul onMouseOut={()=>{SonhandleMouseOut(); handleMouseOut()}} onMouseOver={() => { SonhandleMouseOver(2); handleMouseOver(3); }}>
                            <li><Link to="/theater/28">안양일번가</Link></li>
                            <li><Link to="/theater/29">광명아울렛</Link></li>
                            <li><Link to="/theater/30">위례</Link></li>
                        </ul>
                    )}
                    {soncurrentMenuValue == 3 && (
                        <ul onMouseOut={()=>{SonhandleMouseOut(); handleMouseOut()}} onMouseOver={() => { SonhandleMouseOver(3); handleMouseOver(3); }}>
                            <li><Link to="/theater/31">부평</Link></li>
                            <li><Link to="/theater/38">부평갈산</Link></li>
                            <li><Link to="/theater/40">부평역사</Link></li>
                        </ul>
                    )}

                </div>
      
            
            )}



            {/* <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">IM_Movie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '00px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/samples">SampleList</Nav.Link>
                            <NavDropdown title="마이페이지" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/add-sample">Sample 추가</NavDropdown.Item>
                            <NavDropdown.Item href="/add-sample">장바구니</NavDropdown.Item>
                            <NavDropdown.Item href="/add-sample">Sample 삭제</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">구매</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">환불</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="커뮤니티" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/board">게시판</NavDropdown.Item>
                            <NavDropdown.Item href="/qna">Q&A</NavDropdown.Item>
                            <NavDropdown.Item href="/notice">공지사항</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/#action4">찾아오기</NavDropdown.Item>
                            <NavDropdown.Item href="/#action5">컨택</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}



        </div>
    );
}

export default Header;







