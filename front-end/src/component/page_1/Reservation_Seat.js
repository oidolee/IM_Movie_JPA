import React, { useState, useEffect } from "react";
import style from "../../styles/page_1/Reservation_Seat.css";
import Res_movie from "../../assets/page_1/movie.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";
import ApiService from "../../ApiService";
import { useHistory } from "react-router-dom";

const QuantityCounter = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity <= 7) {
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
    }
  };

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

  const handleChange = () => {
    if (canSelectSeat) {
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

  const handleSeatSelect = (ip_no, lot, seatNumber) => {
    if (!canSelectSeat) {
      console.log("수량 선택 필요 - 좌석 선택 불가");
      alert("수량을 선택해야 좌석을 선택할 수 있습니다.");
      return;
    }
  
    const newSelectedSeat = `${lot}-${seatNumber}-${ip_no}`;
    const isSeatSelected = selectedSeats.includes(newSelectedSeat);
    const selectedSeatsCount = selectedSeats.length;
  
    if (isSeatSelected) {
      setSelectedSeats(
        selectedSeats.filter((seat) => seat !== newSelectedSeat)
      );
    } else if (selectedSeatsCount < quantity) {
      setSelectedSeats([...selectedSeats, newSelectedSeat]);
    } else {
      console.log("선택된 좌석 수량 초과");
      alert("선택된 좌석 수량을 초과하였습니다.");
      return;
    }
  
    console.log("선택한 좌석 정보 행-열-번호 : ", lot, seatNumber, ip_no);
  };

  const handlePayment = (ip_no) => {
    if (selectedSeats.length === 0 && quantity === 0) {
      console.log("선택된 좌석 없음")
      alert("선택된 좌석이 없습니다.");
      return;
    }

    const inputData = selectedSeats.map((seat) => {
      const [lot, seatNumber, ip_no] = seat.split("-");
      return {
        st_id: ip_no,
        st_row: lot,
        st_column: seatNumber,
        st_check: "r",
      };
    });

    console.log("inputData : ", inputData);

    ApiService.updateSeat(inputData)
      .then((res) => {
        console.log("updateSeat 성공 : ", res.data);
        history.push("/page_1/Reservation_Payment");
      })
      .catch((err) => {
        console.log("updateSeat 오류 : ", err);
      });
  };

  return (
    <div className={`Res_seat ${style.Res_seat}`}>
      <div className="Res_seat_content">
        <div className="Res_seat1">
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
                <div className="step_content2">
                  <dl>
                    <dt>선택한 영화 제목</dt>
                    <dd></dd>
                    <dt>선택한 상영관</dt>
                    <dd></dd>
                    <dt>선택한 상영 날짜</dt>
                    <dd></dd>
                    <dt>선택한 상영 시간</dt>
                    <dd></dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step" id="step1">
              <a href="#Res_step02">
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
                    <dd></dd>
                    <dt>좌석</dt>
                    <dd></dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step">
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
                    <dt>티켓금액</dt>
                    <dd></dd>
                    <dt>할인금액</dt>
                    <dd></dd>
                    <dt>총합계</dt>
                    <dd></dd>
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
                  <li>
                    <img src={Res_img15} className="age_img" alt="age" />
                    <strong className="movie_name">파묘</strong> | 24.03.10(일)
                    | 20:30 ~ 22:54 | 영등포 1관
                  </li>
                  <li>
                    <div>
                      <ul className="Res_cnt">
                        <li>
                          성인
                          <QuantityCounter
                            onQuantityChange={handleQuantityChange}
                          />
                        </li>
                        <li>
                          청소년
                          <QuantityCounter
                            onQuantityChange={handleQuantityChange}
                          />
                        </li>
                        <li>
                          경로
                          <QuantityCounter
                            onQuantityChange={handleQuantityChange}
                          />
                        </li>
                        <li>
                          장애인
                          <QuantityCounter
                            onQuantityChange={handleQuantityChange}
                          />
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
                        key={`${lot}-${seatNumber}`} // 고유한 키 생성
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
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            handleSeatSelect(ip_no, lot, seatNumber)
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
                <div className="single_square1">선택좌석</div>
                <div className="single_square2">선택가능</div>
                <div className="single_square3">예매완료</div>
                <div className="single_square4">선택불가</div>
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
