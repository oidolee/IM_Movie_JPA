import React, { useState, useEffect } from 'react';
import Admin_RouterComponent from '../route/Admin_RouterComponent';
import { Link } from 'react-router-dom';
//import Admin_Contents from '../main/Admin_Contents'
//  import  '../../styles/admin/admin.css';
// import  '../../styles/admin/admin.module.css';
// import style from '../../styles/admin/admin.module.css';

import StyledHeader from './Admin_StyledHeader';

function Admin_Header() {
    const [sidebarToggled, setSidebarToggled] = useState(false);

    useEffect(() => {
        const storedToggle = localStorage.getItem('sb|sidebar-toggle');
        if (storedToggle === 'true') {
            setSidebarToggled(true);
        }
    }, []); // Run only once on component mount

    const toggleSidebar = () => {
        setSidebarToggled(prevState => {
            const newState = !prevState;
            localStorage.setItem('sb|sidebar-toggle', newState);
            return newState;
        });
    };


    return (
        // <div id="header_section" className='header_section'>

        // <div className={`sb_nav_fixed ${style.sb_nav_fixed}`}>
        <StyledHeader>
            <div className={`sb_nav_fixed ${sidebarToggled ? 'sb-sidenav-toggled' : ''}`}>


                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a class="navbar-brand ps-3" href="/admin">관리자</a>
                    <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!" onClick={toggleSidebar}><i class="fas fa-bars"></i></button>
                </nav>

                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div class="sb_sidenav_menu">
                                <div class="nav">
                                   
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                        <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                            관리메뉴
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    {/* 페이지 설정 */}
                                    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                        <nav class="sb_sidenav_menu-nested nav">

                                            <a class="nav-link" href="/admin/page_1/Admin_Discount_List">할인</a>
                                            <a class="nav-link" href="/admin/page_3/ListStore_Admin">스토어 관리</a>
                                            <a class="nav-link" href="/admin/page_5/Admin_Update_List">영화 홈</a>
                                            <a class="nav-link" href="/admin/page_5/Admin_Now_List">현재상영 영화</a>
                                            <a class="nav-link" href="/admin/page_5/Admin_Next_List">상영예정 영화</a>
                                            <a class="nav-link" href="/admin/page_5/Admin_Arte_List">아르떼 영화</a>
                                            <a class="nav-link" href="/admin/page_5/Admin_Notice_List">공지사항</a>
                                            <a class="nav-link" href="/admin/page_5/Admin_GroupForm_List">단체대관문의</a>
                                            <a class="nav-link" href="/admin/page_6/consult/Admin_consult">1:1문의</a>
                                            <a class="nav-link" href="/admin/page_6/coupon/Admin_coupon_List">쿠폰</a>
                                            <a class="nav-link" href="/admin/page_2/parking">주차 관리</a>
                                            <a class="nav-link" href="/admin/listCustomer">고객목록</a>
                                        </nav>
                                    </div>
                                   
                                    <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                        <nav class="sb_sidenav_menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                Authentication
                                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                            </a>
                                            <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                <nav class="sb_sidenav_menu-nested nav">
                                                    <a class="nav-link" href="login.html">Login</a>
                                                    <a class="nav-link" href="register.html">Register</a>
                                                    <a class="nav-link" href="password.html">Forgot Password</a>
                                                </nav>
                                            </div>
                                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Error
                                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                            </a>
                                            <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                <nav class="sb_sidenav_menu-nested nav">
                                                    <a class="nav-link" href="401.html">401 Page</a>
                                                    <a class="nav-link" href="404.html">404 Page</a>
                                                    <a class="nav-link" href="500.html">500 Page</a>
                                                </nav>
                                            </div>
                                        </nav>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="sb-sidenav-footer">
                                <div class="small">Logged in as:</div>
                                <a href='/'>
                                    IM_Movies
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        
                        <main>
                            <Admin_RouterComponent />
                        </main>
                      
                        <footer class="py-4 bg-light mt-auto">
                            <div class="container-fluid px-4">
                                <div class="d-flex align-items-center justify-content-between small">
                                    <div class="text-muted">Copyright &copy; Your Website 2024</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            </div>
        </StyledHeader>
    );
}

export default Admin_Header;







