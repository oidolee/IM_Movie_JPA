import React, { useState, useEffect } from 'react';
import logo from '../../assets/main/IM_Logo.png'

function Header() {
    const [path, setPath] = useState('/');
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
    const [currentMenuValue, setCurrentMenuValue] = useState(null);

    

    // 페이지 로딩 시 경로 설정 (실제로는 해당 경로를 얻는 방법에 따라 다를 수 있음)
    useEffect(() => {
        const currentPath = window.location.pathname;
        console.log(currentPath)
        setPath(currentPath);
    }, []);

    // 경로에 따라 다른 CSS 파일 import
    if (path.length === 1) {
        require('../../styles/main/Header.css');
    } else {
        require('../../styles/main/Header1.css');
    }
    const handleMouseOver = (value) => {
        setIsSubMenuVisible(true);
        setCurrentMenuValue(value);
    };

    const handleMouseOut = () => {
        setIsSubMenuVisible(false);
        setCurrentMenuValue(null);
       
    };


    return (
        <div id="header_section" className='header_section'>
            <div className='gnb'>
                <div className='logo'>
                    <a href="/">
                        <img src={logo} style={{ width: '100px' }} />
                    </a>
                </div>

                <div className='right-gnb'>
                    <ul>
                        <li><a href='/customerlist'>멤버쉽</a></li>
                        <li><a href='/FAQ'>고객센터</a></li>
                        <li><a href='/groupform'>단체관람/대관문의</a></li>
                        <li><a href='/login'>로그인</a></li>
                        <li><a href='/myPage'>마이페이지</a></li>
                        <li><a href='/parking'>주차등록</a></li>
                    </ul>
                    <ul className='header-member-box'>
                        <li>
                            <i class="bi bi-person" className='bi-person'></i>
                            <a href='/signCheck'>회원가입</a>
                        </li>
                        <li><a href='#' class="btn_reserve">바로예매</a></li>
                        <li><i class="bi bi-list" className='bi-list'></i></li>
                    </ul>
                </div>
            </div>
            <div className='nav'>
                <ul>
                    {/* 이벤트 버블링 */}
                    <li onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
                        <a href="/page_1/Reservation_Movie" onMouseEnter={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>예매</a>
                        {isSubMenuVisible && currentMenuValue === 1 && (
                            <div className='bottom-menu-box'>
                                <ul>
                                    <li><a href="/page_1/Reservation_Movie">예매하기</a></li>
                                    <li><a href="/page_1/Reservation_Movie_screen">상영시간표</a></li>
                                    <li><a href="#">할인</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>
                        <a href="#" onMouseEnter={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>영화</a>
                        {isSubMenuVisible && currentMenuValue === 2 && (
                            <div>
                                <ul>
                                    <li><a href="/movieMain">홈</a></li>
                                    <li><a href="/movieNow">현재상영작</a></li>
                                    <li><a href="movieNext">상영예정작</a></li>
                                    <li><a href="#">아르뗴</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>
                        <a href="#" onMouseEnter={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>영화관</a>
                        {isSubMenuVisible && currentMenuValue === 3 && (
                            <div>
                                <ul>
                                    <li><a href="#">스페셜관</a></li>
                                    <li><a href="/moviePlace">서울</a></li>
                                    <li><a href="#">경기/인천</a></li>
                                    <li><a href="#">전라/광주</a></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li onMouseOver={() => handleMouseOver(4)} onMouseOut={handleMouseOut}>
                        <a href="#" onMouseEnter={() => handleMouseOver(4)} onMouseOut={handleMouseOut}>이벤트</a>
                        {isSubMenuVisible && currentMenuValue === 4 && (
                            <div>
                                <ul>
                                    <li><a href="#">홈</a></li>
                                    <li><a href="#">영화</a></li>
                                    <li><a href="#">시사회/무대인사</a></li>
                                    <li><a href="#">HOT</a></li>
                                    <li><a href="#">제휴할인</a></li>
                                    <li><a href="#">우리동네영화관</a></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li onMouseOver={() => handleMouseOver(5)} onMouseOut={handleMouseOut}>
                        <a href="/page3" onMouseEnter={() => handleMouseOver(5)} onMouseOut={handleMouseOut}>스토어</a>
                        {isSubMenuVisible && currentMenuValue === 5 && (
                            <div>
                                <ul>
                                    <li><a href="page3#store1">베스트</a></li>
                                    <li><a href="page3#store2">관람권</a></li>
                                    <li><a href="page3#store3">스낵음료</a></li>
                                </ul>
                            </div>
                        )}
                    </li>
                  
                </ul>
               
            </div>


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







