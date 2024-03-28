import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from '../../../styles/page_5/groupform.module.css';
import group1 from '../../../assets/page_5_3/group1.png';
import { useHistory } from 'react-router-dom';
import ApiService from "../../../ApiService";
import { jwtDecode } from 'jwt-decode';
import FaqMoiveLocation from '../../page_2/FaqMoiveLocation'


function Form() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [movieLocation, setMovieLocation] = useState(''); // 영화관선택 값
  const [cus_name, setCus_Name] = useState(''); // 영화관선택 값
  const [yes, setYes] = useState(false); // 동의 여부 체크


  const handleLocationChange = (location) => {
    setMovieLocation(location);

    setAddInfo({
      ...addInfo,
      group_loc: location  // movieLocation 값을 최신으로 업데이트
    });
  };
  useEffect(() => {
    window.localStorage.removeItem("ticketmap_name");
    const authToken = localStorage.getItem("auth_token");
    if (authToken) {
      const decodedToken = jwtDecode(authToken); // 수정 필요
      const userEmail = decodedToken.iss;
      setEmail(userEmail);

      setAddInfo({
        ...addInfo,
        c_email: userEmail  // movieLocation 값을 최신으로 업데이트
      });
      reloadSearchcustomer(userEmail)
    }
  }, []);

    const reloadSearchcustomer = (email) => {
      ApiService.searchCutomer(email)
          .then(res => {
              console.log('res.data', res.data);
              setCus_Name(res.data.dto.name)

              
          })
          .catch(error => {
              console.error('요청 실패:', error);
              // 삭제 요청이 실패했을 때 필요한 동작 수행
          });
    }


  const [addInfo, setAddInfo] = useState({
    group_id: '',
    c_email: email,
    group_loc: movieLocation,
    group_type: "",
    group_expeople: "",
    group_date: "",
    group_time1: "",
    group_time2: "",
    group_movtitle: "",
    group_title: "",
    group_con: "",
    group_name: "",
    custo_name: "",
    custo_phone1: "",
    custo_phone2: "",
    custo_phone3: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setAddInfo({
      ...addInfo,
      c_email:email,
      custo_name: cus_name,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setMovieLocation('');
    setCus_Name('');
    setYes(false);
    setAddInfo({
      group_id: '',
      c_email: email,
      group_loc: '',
      group_type: "",
      group_expeople: "",
      group_date: "",
      group_time1: "",
      group_time2: "",
      group_movtitle: "",
      group_title: "",
      group_con: "",
      group_name: "",
      custo_name: "",
      custo_phone1: "",
      custo_phone2: "",
      custo_phone3: "",
    });
  };

  const saveUpdate = (e) => {
    e.preventDefault();

    const agreed = document.getElementById('yes').checked;

    if (!agreed) {
      alert("개인정보 수집에 대한 이용약관에 동의해주세요.");
      return; // Stop further execution
    }

    console.log("addInfo : ")
    console.log(addInfo)
    ApiService.groupAdd(addInfo)
      .then((res) => {
        console.log("GroupInsert 결과 : ", res.data);

        window.localStorage.removeItem("ticketmap_name");
        
        if (res.data.resultCode != 200) {
            alert("대관문의 등록 오류 입니다.");
        } else {
            console.log("GroupInsert 성공 : ", res.data.resultCode);
            alert("대관문의 성공 입니다.");
            window.location.href="/";
        }
      })
      .catch((err) => {
        window.localStorage.removeItem("ticketmap_name");
        console.log(addInfo);
        console.log("GroupInsert 실패 : ", err);
      });
  };
  


  const [showModal, setShowModal] = useState(false); // 모달 열림 여부 상태
  const [selectedTheater, setSelectedTheater] = useState(""); // 선택된 영화관 정보 상태

  // 모달 열기 함수
  const openModal = () => {
    setShowModal(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setShowModal(false);
  };

  // 영화관 선택 함수
  const handleTheaterSelection = (theater) => {
    setSelectedTheater(theater);
    closeModal(); // 영화관 선택 후 모달 닫기
  };

  // 예시로 사용할 영화관 리스트
  const theaterList = [
    { id: 1, name: "영화관 1", location: "지역 1" },
    { id: 2, name: "영화관 2", location: "지역 2" },
    { id: 3, name: "영화관 3", location: "지역 3" },
  ];

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
        <button style={{marginTop:"20px"}} className={`Form_grp01 ${style.Form_grp01}`} id="8"><img src={group1} alt='그룹1' /></button>
      </div>

      <div className={`Form_make ${style.Form_make}`}>
        <p>문의내용</p>
        <hr></hr>
      </div>

      <div id='Form_content' className={`Form_content ${style.Form_content}`}>
        <form onSubmit={handleSubmit}>

          <div className={`Form_group ${style.Form_group}`}>
            <label htmlFor="g_movie">영화관</label>
            <button className={`mvchsbtn ${style.mvchsbtn}`} onClick={openModal}>영화관 선택</button>
            <hr></hr>
          </div>

          <input
            type="hidden"
            id="movie_location"
            className={`movie_location ${style.movie_location}`}
            name="movie_location"
            value={movieLocation}
            onChange={(e) => setMovieLocation(e.target.value)}
          />
          {/* 모달 컴포넌트 */}
          {/* {true && ( */}
          {showModal && (
            <FaqMoiveLocation close={closeModal} onLocationChange={handleLocationChange} />
          )}

          {/* 선택된 영화관 정보 출력 */}
          {selectedTheater && (
            <div>
              <span>선택된 영화관: {selectedTheater.name}</span>
              <span>위치: {selectedTheater.location}</span>
            </div>
          )}


          <div className={`Form_group ${style.Form_group}`}>
            <label for="g_type">분류</label>
            <input type="radio" id="category1" className={`category1 ${style.category1}`} name="group_type" value="단체관람" checked={addInfo.group_type === "단체관람"} onChange={onChange} />
            <label for="category1">단체관람</label>

            <input type="radio" id="category2" className={`category2 ${style.category2}`} name="group_type" value="대관" checked={addInfo.group_type === "대관"} onChange={onChange} />
            <label for="category2">대관</label>
            <hr></hr>
          </div>

          <div className={`Form_group ${style.Form_group}`}>
            <label for="g_num">예상인원</label>
            <input type="text" id="num1" className={`num1 ${style.num1}`} name="group_expeople" onChange={onChange} />&nbsp;
            <label>{addInfo.group_expeople}명</label>
            <hr></hr>
          </div>

          <div className={`Form_group ${style.Form_group}`}>
            <label for="g_date">희망일</label>
            <input type="date" id="date1" className={`date1 ${style.date1}`} maxlength="4" name="group_date" placeholder="연도 월 일" value={addInfo.group_date} onChange={onChange} />
            <hr></hr>
          </div>


          <div className={`Form_group ${style.Form_group}`}>
            <label for="g_time">희망시간</label>
            <input type="text" id="time1" className={`time1 ${style.time1}`} name="group_time1" onChange={onChange} />&nbsp;
            <label>{addInfo.group_time1}시~</label>
            <input type="text" id="time2" className={`time2 ${style.time2}`} name="group_time2" onChange={onChange} />&nbsp;
            <label>{addInfo.group_time2}시 사이</label>
            <hr></hr>
          </div>

          <div className={`Form_group ${style.Form_group}`}>
            <label for="g_con">내용</label>
            <div className={`con ${style.con}`}>
              <input type="text" id="con1" className={`con1 ${style.con1}`} name="group_movtitle" placeholder="영화명을 입력해주세요" value={addInfo.group_movtitle} onChange={onChange} />
              <input type="text" id="con2" className={`con2 ${style.con2}`} name="group_title" placeholder="제목을 입력해주세요" value={addInfo.group_title} onChange={onChange} />
              <textarea className={`con3 ${style.con3}`} id="con3" name="group_con" rows="3" placeholder="내용 및 첨부파일에 개인정보(카드번호,계좌번호,주민번호)가 포함되지 않도록 유의하여 입력해주세요." value={addInfo.group_con} onChange={onChange} ></textarea>
            </div>
          </div>


          <div className={`Form_make2 ${style.Form_make2}`}>
            <p>신청자 정보</p>
            <hr></hr>
          </div>

          <div className={`Form_group ${style.Form_group}`}>
            <label for="gg_group">단체명</label>
            <input type="text" id="group_name" className={`group_name ${style.group_name}`} name="group_name" value={addInfo.group_name} onChange={onChange} />
            <hr></hr>
          </div>

          <div className={`Form_group ${style.Form_group}`}>
            <label for="gg_name">성명</label>
            <input type="text" id="name1" className={`name1 ${style.name1}`} name="custo_name" value={cus_name} onChange={onChange} />
            <hr></hr>
          </div>

          <div className={`Form_group ${style.Form_group}`}>
            <label for="gg_tel">연락처</label>
            <select id="tel1" className={`tel1 ${style.tel1}`} name="custo_phone1" value={addInfo.custo_phone1} onChange={onChange}>
              <option>선택</option>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </select>

            <input type="tel" id="tel2" className={`tel2 ${style.tel2}`} name="custo_phone2" value={addInfo.custo_phone2} onChange={onChange} />
            <input type="tel" id="tel3" className={`tel3 ${style.tel3}`} name="custo_phone3" value={addInfo.custo_phone3} onChange={onChange} />

            <hr></hr>
          </div>

          <div className={`Form_group ${style.Form_group}`}>
            <label for="gg_email">이메일</label>
            <input type="text" id="email1" className={`email1 ${style.email1}`} name="c_email" value={email} onChange={onChange} />
          </div>

          <div className={`Form_make3 ${style.Form_make3}`}>
            <p>개인정보 수집에 대한 동의</p>
            <label className={`warning3 ${style.warning3}`}>문의를 통해 아래의 개인정보를 수집합니다. 수집된 개인정보는 문의 외 목적으로 사용하지 않습니다.</label>
          </div>

          <div id="section3" className={`agree_box ${style.agree_box}`}>
            <p className={`agree_con ${style.agree_con}`}>
              개인정보의 수집목적 및 항목<br />
              ① 수집 목적 : 원활한 고객 상담, 단체관람/대관문의 관련 서비스의 제공<br />
              ② 수집 항목<br />
              *필수입력사항<br />
              - 이용자 식별을 위한 항목 : 성명, 연락처, 이메일, 아이디(로그인 시 수집)<p />

              <p className={`agree_con2 ${style.agree_con2}`}>
                개인정보의 보유 및 이용기간<br />
                최적의 서비스 제공을 위하여 입력하신 개인정보를 다음과 같이 보유합니다.<br />
                보유기간 : 문의접수 후 처리 완료시점으로 부터 1년<p />
              </p>
              ※ 단체 문의 서비스 제공을 위한 최소한의 개인정보이며 거부할 수 있습니다. 다만, 수집에 동의하지 않을 경우 서비스 이용이 제한됩니다.<br></br>
            </p>
          </div>

          <div className={`agree1 ${style.agree1}`}>
            <input type="radio" id="yes" className={`yes ${style.yes}`} name="yes" value="yes" />
            <label for="yes">동의</label>

            <input type="radio" id="no" className={`no ${style.no}`} name="no" value="no" />
            <label for="no">동의하지않음</label>
          </div>

          <div className={`btn_0 ${style.btn_0}`}>
            <button type="submit" className={`btn1 ${style.btn1}`} onClick={handleCancel}>취소</button>
            <span className="gap"></span> {/* 간격 요소 */}
            <button type="submit" className={`btn2 ${style.btn2}`} onClick={saveUpdate}>확인</button>
          </div>

        </form>
      </div>
    </div>
  )
};

export default Form;
