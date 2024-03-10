import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from '../../../styles/page_5/groupform.module.css';
import group1 from '../../../assets/page_5_3/group1.png';
import Consult_part from './Consult_part' 


function Form() {
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };  
  
    return (
      <div id='Form_wrappage' className={`Form_wrappage ${style.Form_wrappage}`}>
        <Navbar expand="lg">
          <Navbar.Brand href="#home" className={`Form_title ${style.Form_title}`}>고객센터</Navbar.Brand> {/* 고객센터 제목 */}
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
  
        <div className={`Form_box ${style.Form_box}`}>
          <button className={`Form_grp01 ${style.Form_grp01}`} id="8"><img src={group1} alt='그룹1'/></button>
        </div>
  
        <div className={`Form_make ${style.Form_make}`}>
          <p>문의내용</p>
          <hr></hr>
        </div>

        <div id='Form_content' className={`Form_content ${style.Form_content}`}>
          <form onSubmit={handleSubmit}>
            <Consult_part />
          </form>
        </div>
      </div>
    );
  }
  
  export default Form;
