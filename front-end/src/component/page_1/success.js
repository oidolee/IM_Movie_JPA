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
  const [payments, setPayments] = useState([]); // 결제
  const [reservation, setReservation] = useState([]); // 예약 

  const selectedSeat = JSON.parse(localStorage.getItem("selectedSeat"));
  console.log("선택된 좌석 번호 : ", selectedSeat);

  useEffect(() => {

    const storedSelectedSeats = JSON.parse(
      localStorage.getItem("selectedSeats")
    );
    const storedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    const seatInfo = JSON.parse(localStorage.getItem("selectedSeatInfo"));
    if (seatInfo) {
      setTotalQuantity(seatInfo.totalQuantity || 0);
    }

    console.log("setSelectedSeats : ", storedSelectedSeats);
    console.log("setTotalPrice : ", storedTotalPrice);
  }, []);

  useEffect(() => {
    // 여기서 필요한 처리를 수행하세요.
    console.log("주문 ID:", orderId);
    console.log("주문명:", orderName);
    console.log("고객 이메일:", customerEmail);
    console.log("총 가격:", totalPrice);

    // 이미 결제가 이루어졌는지 확인
    if (payments.length === 0) {
      insertPayment();
    }
    // 이미 예약이 이루어졌는지 확인
    if (reservation.length === 0) {
      addReservation();
    }

  }, [orderId, orderName, customerEmail, totalPrice, totalQuantity]);

  const addReservation = () => {
    // 예약할 좌석 정보를 담은 배열
    const reservationsData = selectedSeat.map(seatId => ({
      st_id: seatId,
      ic_email: customerEmail,
      res_count: totalQuantity,
      res_ticket_price: totalPrice,
      res_sysdate: new Date().toISOString(),
      res_check: "y",
    }));

    // 각 좌석에 대한 예약 정보를 서버에 전달
    const reservationPromises = reservationsData.map(reservation => {
      return ApiService.addReservation(reservation);
    });

    Promise.all(reservationPromises)
      .then(responses => {
        // 모든 예약이 완료된 후에 상태 업데이트
        setReservation(responses.map(res => res.data));
        console.log("모든 예약이 완료되었습니다.");
      })
      .catch(err => {
        console.error("예약 작업 중 오류가 발생하였습니다.", err);
      });
  };

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
        setPayments([res.data]); // 배열로 감싸서 상태 업데이트
        console.log("결제가 완료되었습니다.");
      })
      .catch(err => {
        console.error("결제 작업 중 오류가 발생하였습니다.", err);
      })
  }

  const updateSeatPromises = selectedSeats.map((seat) => {
    const [lot, seatNumber, ip_no] = seat.split("-");
    const inputData = {
      st_id: ip_no,
      st_row: lot,
      st_column: seatNumber,
      st_check: "y",
    };

    console.log("inputData : ", inputData);

    return ApiService.updateSeat(inputData);
  });

  return (
    <div>
      {/* 필요한 UI를 구성할 수 있습니다. */}
    </div>
  );
};

export default Success;
