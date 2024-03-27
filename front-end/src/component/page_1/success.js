import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../ApiService";

const Success = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const orderId = queryParams.get("orderId");
  const orderName = queryParams.get("orderName");
  const customerEmail = queryParams.get("customerEmail");
  const totalPrice = queryParams.get("totalPrice");

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const selectedSeat = JSON.parse(localStorage.getItem("selectedSeat"));
  console.log("선택된 좌석 번호 : ", selectedSeat);

  useEffect(() => {
    const storedSelectedSeats = JSON.parse(
      localStorage.getItem("selectedSeats")
    );
    const storedTotalQuantity =
      JSON.parse(localStorage.getItem("selectedSeatInfo"))?.totalQuantity || 0;
    setSelectedSeats(storedSelectedSeats);
    setTotalQuantity(storedTotalQuantity);
  }, []);

  useEffect(() => {
    if (orderId && orderName && customerEmail && totalPrice && totalQuantity) {
      addReservation();
      insertPayment();
      updateSeatStatus();
    }
  }, [orderId, orderName, customerEmail, totalPrice, totalQuantity]);

  const addReservation = () => {
    const reservationsData = selectedSeat.map((seatId) => ({
      st_id: seatId,
      ic_email: customerEmail,
      res_count: totalQuantity,
      res_ticket_price: totalPrice,
      res_sysdate: new Date().toISOString(),
      res_check: "y",
    }));

    reservationsData.forEach((reservation) => {
      ApiService.addReservation(reservation)
        .then((res) => console.log("예약 추가 성공:", res.data))
        .catch((err) => console.log("예약 추가 실패:", err));
    });
  };

  const insertPayment = () => {
    const paymentData = {
      pay_name: orderId,
      pay_order_name: orderName,
      ic_email: customerEmail,
      pay_amount: totalPrice,
      pay_company: "IM",
      pay_sysdate: new Date().toISOString(),
      pay_check: "y",
    };

    ApiService.insertPayment(paymentData)
      .then((res) => console.log("결제 정보 추가 성공:", res.data))
      .catch((err) => console.log("결제 정보 추가 실패:", err));
  };

  const updateSeatStatus = () => {
    const seatPromises = selectedSeats.map((seat) => {
      const [lot, seatNumber, ip_no] = seat.split("-");
      const seatData = {
        st_id: ip_no,
        st_row: lot,
        st_column: seatNumber,
        st_check: "y",
      };
      return ApiService.updateSeat(seatData);
    });

    Promise.all(seatPromises)
      .then(() => console.log("좌석 업데이트가 완료되었습니다."))
      .catch((err) =>
        console.error("좌석 업데이트 작업 중 오류가 발생하였습니다.", err)
      );
      const confirmation = window.confirm(
        "결제가 성공적으로 이루어졌습니다. 확인하시겠습니까?"
      );
      if (confirmation) {
        window.location.assign("/MyPage_res");
      } else {
        window.location.assign("/");
      }
  };

  return <div>{/* 필요한 UI를 구성할 수 있습니다. */}</div>;
};

export default Success;
