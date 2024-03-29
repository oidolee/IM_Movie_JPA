import React, { useState, useEffect } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Payment.css";
import Res_event from "../../assets/page_1/event.png";
import Res_movie1 from "../../assets/page_5/movie1.jpg"; // 파묘
import Res_movie2 from "../../assets/page_5/movie2.jpg"; // 듄2
import Res_movie3 from "../../assets/page_5/movie6.jpg"; // 밥말리
import Res_movie4 from "../../assets/page_5/movie9.jpg"; // 원 앤 온리
import Res_movie5 from "../../assets/page_5/movie4.jpg"; // 윙카
import Res_movie6 from "../../assets/page_5/movie8.jpg"; // 메이 디셈버
import Res_img18 from "../../assets/page_1/18.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";
import Res_img12 from "../../assets/page_1/12.jpg";
import Res_imgAll from "../../assets/page_1/all.jpg";
import Checkout from "./Checkout";
import Modal from "react-modal";
import ApiService from "../../ApiService";
import { useHistory } from "react-router-dom";
import bottom1 from "../../assets/page_3/bottom1.jpg";
import bottom2 from "../../assets/page_3/bottom2.jpg";

const Reservation_Payment = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [isPointClicked, setIsPointClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [adultQuantity, setAdultQuantity] = useState(0);
  const [teenQuantity, setTeenQuantity] = useState(0);
  const [childQuantity, setChildQuantity] = useState(0);
  const [disabledQuantity, setDisabledQuantity] = useState(0);
  const [selectedMovieInfo, setSelectedMovieInfo] = useState(null); // 선택한 영화 정보
  const history = useHistory();

  useEffect(() => {
    const storedSeat = JSON.parse(localStorage.getItem("selectedSeat"));
    setSelectedSeat(storedSeat);
    console.log("selectedSeat: ", storedSeat);

    const storedMovieInfo = localStorage.getItem("selectedMovieInfo");
    if (storedMovieInfo) {
      try {
        const parsedMovieInfo = JSON.parse(storedMovieInfo);
        setSelectedMovieInfo(parsedMovieInfo);
        console.log(parsedMovieInfo);
      } catch (error) {
        console.error("영화 정보를 파싱하는 중 오류 발생:", error);
      }
    }

    const storedSelectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    setSelectedSeats(storedSelectedSeats);
    console.log("setSelectedSeats : ", storedSelectedSeats);

    const storedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    const seatInfo = JSON.parse(localStorage.getItem("selectedSeatInfo"));
    console.log(seatInfo.totalQuantity);

    if (seatInfo) {
      setAdultQuantity(seatInfo.adultQuantity);
      setTeenQuantity(seatInfo.teenQuantity);
      setChildQuantity(seatInfo.childQuantity);
      setDisabledQuantity(seatInfo.disabledQuantity);
      setTotalQuantity(seatInfo.totalQuantity);
      setTotalPrice(storedTotalPrice);
    }

    console.log("setTotalPrice : ", storedTotalPrice);
    console.log("totalQuantity : ", seatInfo.totalQuantity);
    localStorage.setItem(
      "totalQuantity",
      JSON.stringify(seatInfo.totalQuantity || 0)
    );
  }, []);

  useEffect(() => {

    const timerStartTime = new Date();
    console.log("타이머 시작 시간:", timerStartTime);

    // 타이머 시작
    const timer = setInterval(() => {

      const currentTime = new Date();
      updateSeatStatus(currentTime);

      // 타이머 종료 시간
      const timerEndTime = new Date();
      console.log("타이머 종료 시간:", timerEndTime);
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // 1분 동안(테스트를 위해 1분으로 설정) 결제 완료 안할 시 좌석 초기화 - 타이머 설정
  const updateSeatStatus = (currentTime) => {
    console.log("selectedSeats : ", selectedSeats );
    const selectSeatPromises = selectedSeats.map((seat) => {
      const [lot, seatNumber, ip_no] = seat.split("-");
      const inputData = {
        st_id: ip_no,
        st_row: lot,
        st_column: seatNumber,
        st_check: "n",
      };

      console.log("inputData : ", inputData);

      return ApiService.updateSeat(inputData);
    });

    Promise.all(selectSeatPromises)
      .then(() => {
        alert("시간 초과로 메인화면으로 이동합니다.");
        history.push("/");

        localStorage.removeItem("selectedSeat");
        localStorage.removeItem("selectedSeats");
        localStorage.removeItem("totalQuantity");
        localStorage.removeItem("totalPrice");
        localStorage.removeItem("selectedSeatInfo");
      })
      .catch((error) => {
        console.error("좌석 상태 업데이트 중 오류 발생:", error);
      });
  };

  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (action === "POP") {
        const confirmResult = window.confirm("입력된 모든 정보가 사라집니다.");
        if (confirmResult) {
          const updateSeatPromises = selectedSeats.map((seat) => {
            const [lot, seatNumber, ip_no] = seat.split("-");
            const inputData = {
              st_id: ip_no,
              st_row: lot,
              st_column: seatNumber,
              st_check: "n",
            };

            console.log("inputData : ", inputData);

            return ApiService.updateSeat(inputData);
          });

          Promise.all(updateSeatPromises)
            .then(() => {
              history.push("/page_1/Reservation_Movie");

              localStorage.removeItem("selectedSeat");
              localStorage.removeItem("selectedSeats");
              localStorage.removeItem("totalQuantity");
              localStorage.removeItem("totalPrice");
              localStorage.removeItem("selectedSeatInfo");
            })
            .catch((error) => {
              console.error("좌석 정보 업데이트 중 오류 발생:", error);
            });
        }
      }
    });

    return () => {
      unlisten();
    };
  }, [selectedSeats, history]);

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

  const handleMovie = () => {
    const confirmResult = window.confirm("입력된 정보가 모두 사라집니다.");

    // 좌석 정보를 업데이트하고 페이지를 이동하는 함수
    const updateSeatAndNavigate = (destination) => {
      const updateSeatPromises = selectedSeats.map((seat) => {
        const [lot, seatNumber, ip_no] = seat.split("-");
        const inputData = {
          st_id: ip_no,
          st_row: lot,
          st_column: seatNumber,
          st_check: "n",
        };
        return ApiService.updateSeat(inputData);
      });

      Promise.all(updateSeatPromises)
        .then(() => {
          // 페이지 이동
          history.push(destination);
          // 로컬 스토리지에서 관련 정보 제거
          localStorage.removeItem("selectedSeat");
          localStorage.removeItem("selectedSeats");
          localStorage.removeItem("totalQuantity");
          localStorage.removeItem("totalPrice");
          localStorage.removeItem("selectedSeatInfo");
          if (destination === "/page_1/Reservation_Movie") {
            localStorage.removeItem("selectedMovieInfo");
          }
        })
        .catch((error) => {
          console.error("좌석 정보 업데이트 중 오류 발생:", error);
        });
    };

    // 확인을 누른 경우
    if (confirmResult) {
      updateSeatAndNavigate("/page_1/Reservation_Movie");
    }
  };

  const handleSeat = () => {
    const confirmResult = window.confirm("입력된 좌석이 사라집니다.");

    // 좌석 정보를 업데이트하고 페이지를 이동하는 함수
    const updateSeatAndNavigate = (destination) => {
      const updateSeatPromises = selectedSeats.map((seat) => {
        const [lot, seatNumber, ip_no] = seat.split("-");
        const inputData = {
          st_id: ip_no,
          st_row: lot,
          st_column: seatNumber,
          st_check: "n",
        };
        return ApiService.updateSeat(inputData);
      });

      Promise.all(updateSeatPromises)
        .then(() => {
          // 페이지 이동
          history.push(destination);
          // 로컬 스토리지에서 관련 정보 제거
          localStorage.removeItem("selectedSeat");
          localStorage.removeItem("selectedSeats");
          localStorage.removeItem("totalQuantity");
          localStorage.removeItem("totalPrice");
          localStorage.removeItem("selectedSeatInfo");
        })
        .catch((error) => {
          console.error("좌석 정보 업데이트 중 오류 발생:", error);
        });
    };

    // 확인을 누른 경우
    if (confirmResult) {
      updateSeatAndNavigate("/page_1/Reservation_Seat");
    }
  };

  // 연령에 대한 이미지
  const getMovieImage = (movieId) => {
    switch (movieId) {
      case 1:
      case 3:
        return <img src={Res_img15} className="age_img" alt="age" />;
      case 2:
      case 4:
        return <img src={Res_img12} className="age_img" alt="age" />;
      case 5:
        return <img src={Res_imgAll} className="age_img" alt="age" />;
      case 6:
        return <img src={Res_img18} className="age_img" alt="age" />;
      default:
        return null;
    }
  };

  const getTitleMovieImage = (movieId) => {
    switch (movieId) {
      case 1:
        return <img src={Res_movie1} className="movie_img" alt="movie" />;
      case 2:
        return <img src={Res_movie2} className="movie_img" alt="movie" />;
      case 3:
        return <img src={Res_movie3} className="movie_img" alt="movie" />;
      case 4:
        return <img src={Res_movie4} className="movie_img" alt="movie" />;
      case 5:
        return <img src={Res_movie5} className="movie_img" alt="movie" />;
      case 6:
        return <img src={Res_movie6} className="movie_img" alt="movie" />;
      default:
        return null;
    }
  };

  return (
    <div className={`Res_Payment ${style.Res_Payment}`}>
      <div className="Res_payment_content">
        <div className="Res_menu1">
          <ul>
            <li className="step" id="step2" onClick={handleMovie}>
              <a href="#Res_step01">
                <strong>
                  <span>
                    01
                    <br />
                    상영시간
                  </span>
                </strong>
                {selectedMovieInfo && (
                  <div className="step_content2">
                    <dl>
                      <dt>선택한 영화 제목</dt>
                      <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                        {selectedMovieInfo.movie_title}
                      </dd>
                      <dt>선택한 상영관</dt>
                      <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                        {selectedMovieInfo.theater_id}
                      </dd>
                      <dt>선택한 상영 시간</dt>
                      <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                        {selectedMovieInfo.movie_time}
                      </dd>
                    </dl>
                  </div>
                )}
              </a>
            </li>
            <li className="step" id="step2" onClick={handleSeat}>
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
                    <dt>총 인원</dt>
                    <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                      {totalQuantity}명
                    </dd>
                    <dt>총 합계</dt>
                    <dd style={{ textAlign: "left", marginLeft: "12px" }}>
                      {totalPrice.toLocaleString()}원
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
                {selectedMovieInfo && (
                  <li className="menu2_main">
                    {getTitleMovieImage(selectedMovieInfo.movie_id)}
                  </li>
                )}
                {selectedMovieInfo && (
                  <div className="menu2_sub">
                    <ul>
                      <li>
                        {getMovieImage(selectedMovieInfo.movie_id)}
                        <strong>{selectedMovieInfo.movie_title}</strong>
                      </li>
                      <li>
                        일시: {sysdate} / {selectedMovieInfo.movie_time}
                      </li>
                      <li>
                        성인: {adultQuantity}명, 청소년: {teenQuantity}명<br />
                        경로: {childQuantity}명, 장애인: {disabledQuantity}명
                        <br />
                        <br />
                        총: {totalQuantity}명
                      </li>
                      <li>
                        좌석:{" "}
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
                  <img src={Res_event} className="event_img1" alt="event" />
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
                  </li>
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
              <div className="event2">
                <img src={bottom2} className="event_img2" alt="event" />
                <img src={bottom1} className="event_img2" alt="event" />
              </div>
            </li>
            <li>
              <div className="menu4">
                <ul className="menu4_bottom">
                  <li className="paymentBtn">
                    상품금액: {totalPrice.toLocaleString()}
                  </li>

                  <li className="paymentBtn">
                    결제금액: {totalPrice.toLocaleString()}
                  </li>
                  <li>
                    <button
                      className="paymentBtn_total"
                      onClick={handlePaymentClick}
                    >
                      결제하기
                    </button>
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
