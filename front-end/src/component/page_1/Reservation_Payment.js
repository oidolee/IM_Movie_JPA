import React, { useState, useEffect } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Payment.css";
import Res_event from "../../assets/page_1/event.png";
import Res_movie1 from "../../assets/page_1/movie1.jpg";
import Res_img18 from "../../assets/page_1/18.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";
import Res_img12 from "../../assets/page_1/12.jpg";
import Res_imgAll from "../../assets/page_1/all.jpg";
import Checkout from "./Checkout";
import Modal from "react-modal";
import ApiService from "../../ApiService";
import { useLocation } from "react-router-dom";

const Reservation_Payment = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [isPointClicked, setIsPointClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, selectedMovieInfo] = useState(null);
  const [adultQuantity, setAdultQuantity] = useState(0);
  const [teenQuantity, setTeenQuantity] = useState(0);
  const [childQuantity, setChildQuantity] = useState(0);
  const [disabledQuantity, setDisabledQuantity] = useState(0);

  const selectedSeat = JSON.parse(localStorage.getItem("selectedSeat"));
  console.log("선택된 좌석 번호 : ", selectedSeat);

  useEffect(() => {
    const selectedMovieInfo = JSON.parse(
      localStorage.getItem("selectedMovieInfo")
    );
    const storedSelectedSeats = JSON.parse(
      localStorage.getItem("selectedSeats")
    );
    const storedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    const seatInfo = JSON.parse(localStorage.getItem("selectedSeatInfo"));
    console.log(seatInfo.totalQuantity);

    if (seatInfo) {
      setAdultQuantity(seatInfo.adultQuantity);
      setTeenQuantity(seatInfo.teenQuantity);
      setChildQuantity(seatInfo.childQuantity);
      setDisabledQuantity(seatInfo.disabledQuantity);
      setTotalQuantity(seatInfo.totalQuantity);
      setSelectedSeats(storedSelectedSeats);
      setTotalPrice(storedTotalPrice);
    }

    console.log("selectedMovieInfo : ", selectedMovieInfo);
    console.log("setSelectedSeats : ", storedSelectedSeats);
    console.log("setTotalPrice : ", storedTotalPrice);
    console.log("totalQuantity : ", seatInfo.totalQuantity);
    localStorage.setItem(
      "totalQuantity",
      JSON.stringify(seatInfo.totalQuantity)
    );
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePaymentClick = () => {
    setShowModal(true);
  };

  const handlePointClick = () => {
    setIsPointClicked((prevState) => !prevState);
  };

  const sysdate = moment().format("YYYY-MM-DD");

  return (
    <div className={`Res_Payment ${style.Res_Payment}`}>
      <div className="Res_payment_content">
        <div className="Res_menu1">
          <ul>
            <li className="step" id="step2">
              <a href="#Res_step01">
                <strong>
                  <span>
                    01
                    <br />
                    상영시간
                  </span>
                </strong>
                {selectedMovie && (
                  <div className="step_content2">
                    <dl>
                      <dt>선택한 영화 제목</dt>
                      <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                        {selectedMovie.movie_title}
                      </dd>
                      <dt>선택한 상영관</dt>
                      <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                        {selectedMovie.theater_id}
                      </dd>
                      <dt>선택한 상영 날짜/시간</dt>
                      <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                        {selectedMovie.movie_time}
                      </dd>
                    </dl>
                  </div>
                )}
              </a>
            </li>
            <li className="step" id="step2">
              <a href="/page_1/Reservation_Seat">
                <strong>
                  <span>
                    02
                    <br />
                    인원/좌석
                  </span>
                </strong>
                <div className="step_content2">
                  <dl>
                    <dt>인원</dt>
                    <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                      성인: {adultQuantity}명, 청소년: {teenQuantity}명<br />
                      경로: {childQuantity}명, 장애인: {disabledQuantity}명
                      <br />
                      총: {totalQuantity}명
                    </dd>
                    <dt>좌석</dt>
                    <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                      {selectedSeats.map((seat, index) => (
                        <span key={index}>
                          {seat}
                          {index % 2 === 1 ? <br /> : ", "}
                        </span>
                      ))}
                    </dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step" id="step1">
              <a href="#Res_step03">
                <strong>
                  <span>
                    03
                    <br />
                    결제
                  </span>
                </strong>
                <div className="step_content">
                  <dl>
                    <dt>결제금액</dt>
                    <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                      {totalPrice}
                    </dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step">
              <a href="#Res_step04">
                <strong>
                  <span>
                    04
                    <br />
                    결제완료
                  </span>
                </strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="Res_menu2">
          <ul>
            <div className="Res_tit">
              <li>영화선택</li>
            </div>
            <div className="menu2">
              <ul>
                <li className="menu2_main">
                  <img src={Res_movie} className="movie_img" alt="movie" />
                </li>
                {selectedMovie && (
                  <div className="menu2_sub">
                    <ul>
                      <li>
                        <img src={Res_img15} className="age_img" alt="age" />
                        <strong>{selectedMovie.movie_title}</strong>
                      </li>
                      <li>일시 2024-03-07 (목) 17:05 ~ 19~29</li>
                      <li>
                        성인: {adultQuantity}명, 청소년: {teenQuantity}명<br />
                        경로: {childQuantity}명, 장애인: {disabledQuantity}명
                        <br />
                        총: {totalQuantity}명
                      </li>
                      <li>
                        {selectedSeats.map((seat, index) => (
                          <span key={index}>
                            {seat}
                            {index % 2 === 1 ? <br /> : ", "}
                          </span>
                        ))}
                      </li>
                    </ul>
                  </div>
                )}
                <a href="/page3">
                  <img src={Res_event} className="event_img" alt="event" />
                </a>
              </ul>
            </div>
          </ul>
        </div>
        <div className="Res_menu3">
          <ul>
            <div className="Res_tit">
              <li>결제수단</li>
            </div>
            <li>
              <div className="menu3">
                <ul>
                  <li className="menu3_main">최종 결제수단</li>
                  <li>
                    <button
                      className="payment_seat"
                      onClick={handlePaymentClick}
                    >
                      결제수단
                    </button>
                    <Modal
                      isOpen={showModal}
                      onRequestClose={handleCloseModal}
                      className="Modal"
                      overlayClassName="Overlay"
                    >
                      <div className="ModalContent">
                        <Checkout handleCloseModal={handleCloseModal} />
                      </div>
                    </Modal>
                    <button className="point_seat" onClick={handlePointClick}>
                      포인트
                    </button>
                  </li>
                  <div className="point_seat_main">
                    <ul className="point_seat_sub">
                      {isPointClicked && (
                        <div className="usePoint">
                          <li>회원ID : </li>
                          <li>잔여 포인트 : </li>
                          <li>
                            사용 포인트 :{" "}
                            <input
                              type="text"
                              placeholder="사용할 포인트 입력하세요."
                            />
                          </li>
                          <li>
                            <button
                              className="usePointBtn"
                              onClick={handlePointClick}
                            >
                              사용
                            </button>
                          </li>
                        </div>
                      )}
                    </ul>
                  </div>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="Res_menu4">
          <ul>
            <div className="Res_tit">
              <li>결제하기</li>
            </div>
            <li>
              <div className="menu4">
                <ul className="menu4_bottom">
                  <li className="paymentBtn">
                    <span>상품금액</span>
                  </li>
                  <li className="paymentBtn">할인금액</li>
                  <li className="paymentBtn">결제금액</li>
                  <li>
                    <button className="paymentBtn_total"></button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reservation_Payment;
