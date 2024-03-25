import React, { useState, useEffect } from "react";
import style from "../../styles/page_1/Reservation_Seat.css";
import Res_movie from "../../assets/page_1/movie.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";
import ApiService from "../../ApiService";
import { useHistory } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import moment from "moment";

const QuantityCounter = ({ onQuantityChange, totalQuantity }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity < 9) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity >= 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    } else {
      setQuantity(0);
    }
  };

  useEffect(() => {
    if (totalQuantity > 8 || quantity > 8) {
      setQuantity(0);
    }
  }, [totalQuantity]);

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

const Reservation_Seat = () => {
  const [seats, setSeats] = useState([]);
  const [canSelectSeat, setCanSelectSeat] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const history = useHistory();
  const [selectedSeat, setSelectedSeat] = useState(null);
  const isChecked = false;
  const [checked, setChecked] = useState(isChecked);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0); // 총 수량
  const [adultQuantity, setAdultQuantity] = useState(0);
  const [teenQuantity, setTeenQuantity] = useState(0);
  const [childQuantity, setChildQuantity] = useState(0);
  const [disabledQuantity, setDisabledQuantity] = useState(0);
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());

  // 로컬 상태로 선택한 영화와 좌석 정보를 저장할 상태를 정의합니다.
  const [selectedMovie, selectedMovieInfo] = useState(null);

  // 각 인원별 가격 설정
  const adultPrice = 10000;
  const teenPrice = 8000;
  const childPrice = 6000;
  const disabledPrice = 5000;

  // 총 가격 계산
  const totalPrice =
    adultPrice * adultQuantity +
    teenPrice * teenQuantity +
    childPrice * childQuantity +
    disabledPrice * disabledQuantity;

  // 페이지가 로드될 때 로컬 스토리지에서 선택한 영화와 좌석 정보를 가져와서 상태에 설정합니다.
  useEffect(() => {
    const selectedMovie = localStorage.getItem("selectedMovieInfo");

    if (selectedMovie) {
      selectedMovieInfo(JSON.parse(selectedMovie));
    }

    console.log("selectedMovieInfo : ", selectedMovieInfo);
  }, []);

  // 로그인 상태 확인

  // 사용자 움직임 감지

  // 중복 예매 방지

  // 좌석 정보 가져오기
  useEffect(() => {
    listSeat();
  }, []);

  const listSeat = () => {
    ApiService.listSeat()
      .then((res) => {
        setSeats(res.data);
        console.log("listSeat 성공");
      })
      .catch((err) => {
        console.log("listSeat 오류 : ", err);
      });
  };

  useEffect(() => {
    const newTotalQuantity =
      adultQuantity + teenQuantity + childQuantity + disabledQuantity;

    if (newTotalQuantity <= 8) {
      setTotalQuantity(newTotalQuantity);
    } else {
      alert("인원은 최대 8명까지 가능합니다.");
      setAdultQuantity(0);
      setTeenQuantity(0);
      setChildQuantity(0);
      setDisabledQuantity(0);
      setSelectedSeats([]);
    }
  }, [adultQuantity, teenQuantity, childQuantity, disabledQuantity]);

  let parkingLot = {};

  for (let entry of seats) {
    if (!parkingLot.hasOwnProperty(entry.st_row)) {
      parkingLot[entry.st_row] = [];
    }
    parkingLot[entry.st_row].push([
      entry.st_column,
      entry.st_check,
      entry.st_id,
    ]);
  }

  const handleQuantityChange = (newQuantity) => {
    console.log("handleQuantityChange 함수 호출됨");
    console.log("수량 변경됨:", newQuantity);
    setQuantity(newQuantity);

    if (newQuantity > 0) {
      console.log("수량이 0보다 큼 - 좌석 선택 가능");
      setCanSelectSeat(true);
    } else {
      console.log("수량이 0임 - 좌석 선택 불가");
      setCanSelectSeat(false);
      alert("수량을 선택해야 좌석을 선택할 수 있습니다.");
      setSelectedSeats([]); // 수량이 0이 되면 선택된 좌석 초기화
    }
  };

  const handleChange = (e) => {
    const { canSelectSeat } = e.target.dataset;
    const isChecked = checked;
    const seatNumber = e.target.innerText;

    if (canSelectSeat === "true") {
      setChecked(!isChecked);
    } else {
      console.log("수량 선택 필요 - 좌석 선택 불가");
      alert("수량을 선택해야 좌석을 선택할 수 있습니다.");
    }

    const squareClass = canSelectSeat
      ? isChecked
        ? "square checked"
        : "square"
      : "square disabled";

    return (
      <div
        className={squareClass}
        onClick={handleChange}
        style={{ position: "relative" }}
      >
        <span className="checked_square">{seatNumber}</span>
      </div>
    );
  };

  const handleSeatSelect = (ip_no, lot, seatNumber, status) => {
    if (totalQuantity === 0) {
      alert("수량을 선택해야 좌석을 선택할 수 있습니다.");
      return;
    }

    if (status === "r") {
      alert("예매중인 좌석입니다.");
      return;
    }

    if (status === "y") {
      alert("예매완료 된 좌석입니다.");
      return;
    }

    const newSelectedSeat = `${lot}-${seatNumber}-${ip_no}`;
    const isSeatSelected = selectedSeats.includes(newSelectedSeat);
    const selectedSeatsCount = selectedSeats.length;

    if (isSeatSelected) {
      setSelectedSeats(
        selectedSeats.filter((seat) => seat !== newSelectedSeat)
      );
    } else if (selectedSeatsCount < totalQuantity) {
      console.log("totalQuantity", totalQuantity);
      setSelectedSeats([...selectedSeats, newSelectedSeat]);
    } else {
      alert("선택된 좌석 수량을 초과하였습니다.");
      return;
    }
  };

  const handlePayment = () => {
    if (selectedSeats.length === 0 && quantity === 0) {
      console.log("선택된 좌석 없음");
      alert("선택된 좌석이 없습니다.");
      return;
    }

    // 좌석 수와 인원 수 불일치
    if (selectedSeats.length !== totalQuantity) {
      console.log("좌석 수량과 카운터 수량이 일치하지 않음");
      alert("인원/수량 불일치합니다. 수량을 확인해주세요.");
      return;
    }

    const updateSeatPromises = selectedSeats.map((seat) => {
      const [lot, seatNumber, ip_no] = seat.split("-");
      const inputData = {
        st_id: ip_no,
        st_row: lot,
        st_column: seatNumber,
        st_check: "r",
      };

      console.log("inputData : ", inputData);

      return ApiService.updateSeat(inputData);
    });

    const inputData2 = {
      mov_id: 1,
      ip_num: 1,
      st_id: 1,
      c_email: "1",
      res_count: totalQuantity,
      res_ticket_price: totalPrice,
      res_sysdate: new Date().toISOString(),
      res_check: "y", 
    };
  
    // 예약 정보 저장
    try {
      ApiService.addReservation(inputData2)
        .then((response) => {
          console.log("예약 정보 저장 성공", response.data);
        })
        .catch((error) => {
          console.error("예약 정보 저장 실패", error);
        });
    } catch (error) {
      console.error("예약 정보 저장 중 오류 발생", error);
    }
    
    Promise.all(updateSeatPromises)
      .then((res) => {
        console.log("모든 좌석 업데이트 성공");
        // const firstSeat = selectedSeats[0].split('-')[2];
        // history.push(`/page_1/Reservation_Payment/${firstSeat}`); // url로 데이터 보내기 > customer 번호 보낼예정
        const selectedSeat = selectedSeats.map((seat) => seat.split("-")[2]);
        localStorage.setItem("selectedSeat", JSON.stringify(selectedSeat));

        history.push("/page_1/Reservation_Payment");
      })
      .catch((err) => {
        console.log("좌석 업데이트 오류 : ", err);
      });

  };

  const handleMovie = () => {
    const confirmResult = window.confirm("입력된 정보가 모두 사라집니다.");
    if (confirmResult) {
      history.push("/page_1/Reservation_Movie");
    }
  };

  return (
    <div className={`Res_seat ${style.Res_seat}`}>
      <div className="Res_seat_content">
        <div className="Res_seat1">
          <ul>
            <li className="step" id="step2" onClick={handleMovie}>
              <a href="#">
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
            <li className="step" id="step1">
              <a href="#">
                <strong>
                  <span>
                    02
                    <br />
                    인원/좌석
                  </span>
                </strong>
                <div className="step_content">
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
            <li className="step">
              <a href="#">
                <strong>
                  <span>
                    03
                    <br />
                    결제
                  </span>
                </strong>
                <div className="step_content">
                  <dl>
                    <dt>티켓금액</dt>
                    <dd>{totalPrice}</dd>
                    <dt>할인금액</dt>
                    <dd></dd>
                    <dt>총합계</dt>
                    <dd></dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step">
              <a href="#">
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
        <div className="Res_seat2">
          <ul>
            <div className="Res_tit">
              <li>
                인원/좌석 선택 <p>인원은 최대 8명까지 가능합니다.</p>
              </li>
            </div>
            <div className="Res_seat2_header">
              <ul className="Res_movie">
                <li>
                  <img src={Res_movie} className="movie_img" alt="movie" />
                </li>
                <ul className="Res_movie_content">
                  {selectedMovie && (
                    <li>
                      <img src={Res_img15} className="age_img" alt="age" />
                      <strong className="movie_name">
                        {selectedMovie.movie_title}
                      </strong>{" "}
                      | {selectedMovie.start_time}| {selectedMovie.theater_id}
                    </li>
                  )}
                  <li>
                    <div>
                      <ul className="Res_cnt">
                        <li>
                          성인
                          <QuantityCounter
                            onQuantityChange={(newQuantity) => {
                              setAdultQuantity(newQuantity);
                              setTotalQuantity(
                                newQuantity +
                                  teenQuantity +
                                  childQuantity +
                                  disabledQuantity
                              ); // 총 수량 업데이트
                            }}
                            totalQuantity={totalQuantity}
                          />
                        </li>
                        <li>
                          청소년
                          <QuantityCounter
                            onQuantityChange={(newQuantity) => {
                              setTeenQuantity(newQuantity);
                              setTotalQuantity(
                                adultQuantity +
                                  newQuantity +
                                  childQuantity +
                                  disabledQuantity
                              ); // 총 수량 업데이트
                            }}
                            totalQuantity={totalQuantity}
                          />
                        </li>
                        <li>
                          경로
                          <QuantityCounter
                            onQuantityChange={(newQuantity) => {
                              setChildQuantity(newQuantity);
                              setTotalQuantity(
                                adultQuantity +
                                  teenQuantity +
                                  newQuantity +
                                  disabledQuantity
                              ); // 총 수량 업데이트
                            }}
                            totalQuantity={totalQuantity}
                          />
                        </li>
                        <li>
                          장애인
                          <QuantityCounter
                            onQuantityChange={(newQuantity) => {
                              setDisabledQuantity(newQuantity);
                              setTotalQuantity(
                                adultQuantity +
                                  teenQuantity +
                                  childQuantity +
                                  newQuantity
                              ); // 총 수량 업데이트
                            }}
                            totalQuantity={totalQuantity}
                          />
                        </li>
                        <li>
                          <span>{totalQuantity}명</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="Res_seat2_main">
              <span className="Res_screen_top">SCREEN</span>
              <div className="seatOutput">
                {Object.keys(parkingLot).map((lot) => (
                  <div key={lot}>
                    <span>{lot}</span>
                    {parkingLot[lot].map(([seatNumber, status, ip_no]) => (
                      <span
                        key={`${lot}-${seatNumber}`}
                        style={{
                          marginRight:
                            seatNumber == 2 || seatNumber == 12 ? "30px" : "",
                        }}
                      >
                        <div
                          className={`square ${
                            selectedSeats.includes(
                              `${lot}-${seatNumber}-${ip_no}`
                            )
                              ? "selected" // 선택한 좌석
                              : status === "r"
                              ? "reserved" // 예약된 좌석
                              : status === "y"
                              ? "unavailable" // 결제된 좌석
                              : ""
                          }`}
                          onClick={() =>
                            handleSeatSelect(ip_no, lot, seatNumber, status)
                          }
                          style={{ position: "relative" }}
                        >
                          <span className="checked_square">{seatNumber}</span>
                        </div>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className="Res_seat2_bottom">
                <div className="square_with_label">
                  <div className="single_square1"></div>
                  <span>선택좌석</span>
                </div>
                <div className="square_with_label">
                  <div className="single_square2"></div>
                  <span>선택가능</span>
                </div>
                <div className="square_with_label">
                  <div className="single_square3"></div>
                  <span>예매완료</span>
                </div>
              </div>
            </div>
            <div className="seat_payment">
              <span>총 합계 : 0원 </span>
              <div>
                <button name="paymentBtn" onClick={handlePayment}>
                  결제하기
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reservation_Seat;