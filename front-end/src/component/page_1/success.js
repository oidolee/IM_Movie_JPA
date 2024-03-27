import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../ApiService";

const Success = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // URL 쿼리 파라미터에서 값을 추출합니다.
  const orderId = queryParams.get("orderId");
  const orderName = queryParams.get("orderName");
  const customerEmail = queryParams.get("customerEmail");
  const totalPrice = queryParams.get("totalPrice");

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState([]);
  const [totalPriceFromLocalStorage, setTotalPriceFromLocalStorage] = useState([]);
  const [isPointClicked, setIsPointClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [adultQuantity, setAdultQuantity] = useState(0);
  const [teenQuantity, setTeenQuantity] = useState(0);
  const [childQuantity, setChildQuantity] = useState(0);
  const [disabledQuantity, setDisabledQuantity] = useState(0);
  const storedMovieInfo = localStorage.getItem("selectedMovieInfo");
  const [selectedMovieInfo, setSelectedMovieInfo] = useState({}); // 선택한 영화 정보
  const [payments, setPayments] = useState([]); // 결제
  const [reservation, setReservation] = useState([]); // 예약 

  const selectedSeat = JSON.parse(localStorage.getItem("selectedSeat"));
  console.log("선택된 좌석 번호 : ", selectedSeat);

  useEffect(() => {
    if (storedMovieInfo) {
      try {
        const parsedMovieInfo = JSON.parse(storedMovieInfo);
        setSelectedMovieInfo(parsedMovieInfo);
        console.log("영화", parsedMovieInfo);
      } catch (error) {
        console.error("영화 정보를 파싱하는 중 오류 발생:", error);
      }
    }

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
      setTotalPriceFromLocalStorage(storedTotalPrice);
    }

    console.log("setSelectedSeats : ", storedSelectedSeats);
    console.log("setTotalPrice : ", storedTotalPrice);
    console.log("totalQuantity : ", seatInfo.totalQuantity);
    localStorage.setItem(
      "totalQuantity",
      JSON.stringify(seatInfo.totalQuantity || 0)
    );
  }, [storedMovieInfo]);

  useEffect(() => {
    // 여기서 필요한 처리를 수행하세요.
    console.log("주문 ID:", orderId);
    console.log("주문명:", orderName);
    console.log("고객 이메일:", customerEmail);
    console.log("총 가격:", totalPrice);

    // 결제 정보를 백엔드로 전송합니다.
    insertPayment();

    // 예약 정보를 백엔드로 전송합니다.
    addReservation();

  }, [orderId, orderName, customerEmail, totalPrice]);

  const insertPayment = () => {
    const inputData1 = {
      pay_name: orderId,
      pay_order_name: orderName,
      ic_email: customerEmail,
      pay_amount: totalPrice,
      pay_company: "IM",
      pay_sysdate: new Date().toISOString(),
      pay_check: "y",
    }

    ApiService.insertPayment(inputData1)
      .then(res => {
        setPayments(res.data);
        console.log("insertPayment 성공", res.data);
      })
      .catch(err => {
        console.log("insertPayment 오류: ", err);
      })
  }

  const addReservation = () => {
    const inputData2 = {
      mov_id: selectedMovieInfo.movie_id,
      ip_num: selectedMovieInfo.ip_num,
      st_id: selectedSeat,
      ic_email: customerEmail,
      res_count: totalQuantity,
      res_ticket_price: totalPrice,
      res_sysdate: new Date().toISOString(),
      res_check: "y",
    }

    ApiService.addReservation(inputData2)
      .then(res => {
        setReservation(res.data);
        console.log("addReservation 성공", res.data);
      })
      .catch(err => {
        console.log("addReservation 오류: ", err);
      })
  }

  return (
    <div>
      {/* 필요한 UI를 구성할 수 있습니다. */}
    </div>
  );
};

export default Success;
