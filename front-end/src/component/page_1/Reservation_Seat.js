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
  const [seatData, setSeatData] = useState([]);
  const [seats, setSeats] = useState([]);
  const [canSelectSeat, setCanSelectSeat] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const history = useHistory();
  const [selectedSeat, setSelectedSeat] = useState(null);

  useEffect(() => {
    listSeat();
  }, []);

  const listSeat = () => {
    ApiService.listSeat()
      .then((res) => {
        const seat = res.data;

        setSeatData({
          st_id: seat.st_id,
          st_row: seat.st_row,
          st_column: seat.st_column,
          st_check: seat.st_check,
        });

        setSeats(res.data);
      })
      .catch((err) => {
        console.log("listSeat 오류 : ", err);
      });
  };

  const SeatMap = ({ rows, columns, canSelectSeat, seats, onSeatSelect }) => {
    const seatElements = [];

    for (let i = 0; i < rows; i++) {
      const rowContent = [];
      for (let j = 0; j < columns; j++) {
        const seat = seats.find((seat) => seat.row === i && seat.column === j);
        const isDisabled = seat ? true : false;
        const isChecked = seat ? true : false;
        rowContent.push(
          <Square
            key={`${i}-${seatNumber}`}
            row={i}
            column={j}
            canSelectSeat={canSelectSeat && !isDisabled}
            isChecked={isChecked}
            onSeatSelect={onSeatSelect}
          />
        );
      }

      seatElements.push(
        <div className="seat_row" key={`row-${i}`}>
          {rowContent}
        </div>
      );
      seatElements.push(<br key={`br-${i}`} />);
    }

    return <div className="MovieSeats">{seatElements}</div>;
  };

  const SingleSquare1 = () => <div className="single-square1" />;
  const SingleSquare2 = () => <div className="single-square2" />;
  const SingleSquare3 = () => <div className="single-square3" />;
  const SingleSquare4 = () => <div className="single-square4" />;

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
    }
  };

  const Square = ({
    count,
    canSelectSeat,
    isChecked,
    onSeatSelect,
  }) => {
    const [checked, setChecked] = useState(isChecked);

    const handleChange = () => {
      console.log("handleChange 함수 호출됨");
      console.log("canSelectSeat 상태:", canSelectSeat);

      if (canSelectSeat) {
        onSeatSelect(!checked);
        setChecked(!checked);
        console.log("isChecked 값:", !checked);
      } else {
        console.log("수량 선택 필요 - 좌석 선택 불가");
        alert("수량을 선택해야 좌석을 선택할 수 있습니다.");
      }
    };

    const squareClass = checked ? "square checked" : "square";

    return (
      <div
        className={squareClass}
        onClick={handleChange}
        style={{ position: "relative" }}
      >
        <span className="checked_square">{count}</span>
      </div>
    );
  };

  const handleSeatSelect = (row, column, isChecked) => {
    console.log("handleSeatSelect 호출 성공 : ", isChecked);
    const updatedSeats = seats.map((seat) => {
      if (seat.row === row && seat.column === column) {
        return {
          ...seat,
          isChecked: isChecked
        };
      }
      return seat;
    });
    setSeats(updatedSeats);
    setSelectedSeat({isChecked});
  };

  const handlePayment = () => {
    console.log("handlePayment 호출 성공");

    if (!selectedSeat || !selectedSeat.isChecked) {
      console.log("선택된 좌석이 없습니다.");
      return;
    }

    let inputData = {
      st_id: seats.st_id,
      st_row: seats.st_row,
      st_column: selectedSeat.column,
      st_check: "r",
    };

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

  // console.log(parkingLot);

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
                    {parkingLot[lot].map(([seatNumber]) => (
                      <span
                        key={`${lot}-${seatNumber}`} // 고유한 키 생성
                        style={{
                          marginRight:
                            seatNumber == 2 || seatNumber == 12 ? "30px" : "",
                        }}
                      >
                        <Square
                          key={`${lot}-${seatNumber}`} // 고유한 키 생성
                          count={seatNumber}
                          quantity={quantity}
                          seats={seats}
                          setSeats={setSeats}
                          onSeatSelect={handleSeatSelect}
                          canSelectSeat={canSelectSeat}
                        />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className="Res_seat2_bottom">
                <SingleSquare1 /> 선택좌석
                <SingleSquare2 /> 선택가능
                <SingleSquare3 /> 예매완료
                <SingleSquare4 /> 선택불가
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
