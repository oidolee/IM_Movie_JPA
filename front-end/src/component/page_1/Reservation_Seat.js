import React from "react";
import { useHistory } from "react-router-dom";
import style from "../../styles/page_1/Reservation_Seat.css";
import Res_movie from "../../assets/page_1/movie.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";

const QuantityCounter = () => {
  const [quantity, setQuantity] = React.useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity >= 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
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

// 좌석
const SingleSquare1 = () => <div className="single-square1" />;
const SingleSquare2 = () => <div className="single-square2" />;
const SingleSquare3 = () => <div className="single-square3" />;
const SingleSquare4 = () => <div className="single-square4" />;

const SeatMap = ({ rows, columns }) => {
  const seats = [];

  // 알파벳 행 추가
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  for (let i = 0; i < rows; i++) {
    const rowContent = [];
    for (let j = 0; j < columns; j++) {
      rowContent.push(<Square key={`${i}-${j}`} row={i} column={j} />);
    }
    seats.push(
      <div className="seat_row">
        <sapn className="seat_alphabet">{alphabets[i]}</sapn>
        {rowContent}
      </div>
    );
    seats.push(<br key={`br-${i}`} />);
  }

  return <div className="MovieSeats">{seats}</div>;
};

const Square = ({ row, column }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    if (isDisabled()) {
      return;
    }
    setChecked(!checked);
  };

  const isDisabled = () => {
    return column === 2 || column === 11;
  };

  const squareClass = checked ? "square checked" : "square";
  const backgroundColor = column === 2 || column === 11 ? "#000" : "";

  return (
    <div
      className={squareClass}
      onClick={handleChange}
      style={{ backgroundColor }}
    >
      {checked && <div className="checked-square" />}
    </div>
  );
};

const Reservation_Seat = () => {
  const history = useHistory();

  const handlePayment = () => {
    history.push("/page_1/Reservation_Payment");
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
                  <img src={Res_movie} className="movie_img" />
                </li>
                <ul className="Res_movie_content">
                  <li>
                    <img src={Res_img15} className="age_img" />
                    <strong className="movie_name">파묘</strong> | 24.03.10(일)
                    | 20:30 ~ 22:54 | 영등포 1관
                  </li>
                  <li>
                    <div>
                      <ul className="Res_cnt">
                        <li>
                          성인
                          <QuantityCounter />
                        </li>
                        <li>
                          청소년
                          <QuantityCounter />
                        </li>
                        <li>
                          경로
                          <QuantityCounter />
                        </li>
                        <li>
                          장애인
                          <QuantityCounter />
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
                <SeatMap rows={8} columns={14} />
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
