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
  const [adultQuantity, setAdultQuantity] = useState(0);
  const [teenQuantity, setTeenQuantity] = useState(0);
  const [childQuantity, setChildQuantity] = useState(0);
  const [disabledQuantity, setDisabledQuantity] = useState(0);
  const [lastActivityTime, setLastActivityTime] = useState(Date.now())

  // 로그인 상태 확인

  useEffect(() => {
    // 좌석 정보 가져오기
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
    // "r" 상태이며 선택된 좌석이 있는지 확인
    if (selectedSeats.length > 0) {
      const timer = setTimeout(() => {
        // 10분 이상 경과한 경우 예약 취소 로직 실행
        const currentTime = Date.now();
        const timeDiff = currentTime - lastActivityTime;
        const minutesPassed = Math.floor(timeDiff / (1000 * 60)); // 밀리초를 분으로 변환
  
        if (minutesPassed >= 10) {
          // 10분이 지나고 선택된 좌석이 있는 경우
          alert("시간 초과로 예약이 취소되었습니다.");
          setSelectedSeats([]); // 선택된 좌석 초기화
          // 좌석 상태를 "n"으로 업데이트하여 예약 취소
          selectedSeats.forEach((seat) => {
            const [lot, seatNumber, ip_no] = seat.split("-");
            const updatedSeat = {
              st_id: ip_no,
              st_row: lot,
              st_column: seatNumber,
              st_check: "n", // 취소된 예약으로 상태 설정
            };
            ApiService.updateSeat(updatedSeat)
              .then((res) => {
                console.log("좌석 예약이 취소되었습니다:", seat);
              })
              .catch((err) => {
                console.log("좌석 예약 취소 오류:", err);
              });
          });
          history.push("/page_1/Reservation_Movie"); 
        }
      }, 600000); // 10분
  
      return () => clearTimeout(timer); // 컴포넌트가 언마운트되거나 다시 렌더링될 때 타이머 정리
    }
  }, [lastActivityTime, selectedSeats, history]);

  // 페이지가 언마운트될 때 로컬 스토리지에 상태 저장
  useEffect(() => {
    localStorage.setItem("lastActivityTime", lastActivityTime);
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [lastActivityTime, selectedSeats]);

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

  const handleSeatSelect = (ip_no, lot, seatNumber, status) => {
    if (!canSelectSeat) {
      console.log("수량 선택 필요 - 좌석 선택 불가");
      alert("수량을 선택해야 좌석을 선택할 수 있습니다.");
      return;
    }

    if (status === "r") {
      console.log("예약된 좌석");
      alert("예매중인 좌석입니다.");
      return;
    }

    if (status === "y") {
      console.log("결제 완료된 좌석");
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
    } else if (selectedSeatsCount < quantity) {
      setSelectedSeats([...selectedSeats, newSelectedSeat]);
    } else {
      console.log("선택된 좌석 수량 초과");
      alert("선택된 좌석 수량을 초과하였습니다.");
      return;
    }

    console.log("선택한 좌석 정보 행-열-번호 : ", lot, seatNumber, ip_no);
  };

  const handlePayment = () => {
    if (selectedSeats.length === 0 && quantity === 0) {
      console.log("선택된 좌석 없음");
      alert("선택된 좌석이 없습니다.");
      return;
    }
  
    // 좌석 수량과 카운터 수량 일치 여부 확인
    if (selectedSeats.length !== quantity) {
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
  
    Promise.all(updateSeatPromises)
      .then((res) => {
        console.log("모든 좌석 업데이트 성공");
        history.push("/page_1/Reservation_Payment");
      })
      .catch((err) => {
        console.log("좌석 업데이트 오류 : ", err);
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
                    <dd style={{textAlign: 'left', marginLeft: '15px'}}>
                      성인: {adultQuantity}명<br />
                      청소년: {teenQuantity}명<br />
                      경로: {childQuantity}명<br />
                      장애인: {disabledQuantity}명
                    </dd>
                    <dt>좌석</dt>
                    <dd style={{textAlign: 'left', marginLeft: '15px'}}>
                      {selectedSeats.map((seat, index) => (
                        <span key={index}>{seat}<br /></span>
                      ))}
                    </dd>
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