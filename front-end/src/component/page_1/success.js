import React, { useEffect, useState } from "react";
import { useHistory, useSearchParams } from "react-router-dom";
import ApiService from "../../ApiService";

const Success = () => {
  const history = useHistory();
  const [searchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const orderName = searchParams.get("orderName");
  const customerEmail = searchParams.get("customerEmail");
  const totalPrice = searchParams.get("amount");

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

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
    }
  }, [orderId, orderName, customerEmail, totalPrice, totalQuantity]);  

  const addReservation = async () => {
    try {
      const reservationsData = selectedSeats.map((seatId) => ({
        st_id: seatId,
        ic_email: customerEmail,
        res_count: totalQuantity,
        res_ticket_price: totalPrice,
        res_sysdate: new Date().toISOString(),
        res_check: "y",
      }));

      await Promise.all(
        reservationsData.map((reservation) =>
          ApiService.addReservation(reservation)
        )
      );
      
      insertPayment();
    } catch (error) {
      console.log("예약 추가 실패:", error);
    }
  };

  const insertPayment = async () => {
    try {
      const paymentData = {
        pay_name: orderId,
        pay_order_name: orderName,
        ic_email: customerEmail,
        pay_amount: totalPrice,
        pay_company: "IM",
        pay_sysdate: new Date().toISOString(),
        pay_check: "y",
      };

      await ApiService.insertPayment(paymentData);
      
      updateSeatStatus();
    } catch (error) {
      console.log("결제 정보 추가 실패:", error);
    }
  };

  const updateSeatStatus = async () => {
    try {
      await Promise.all(
        selectedSeats.map((seat) => {
          const [lot, seatNumber, ip_no] = seat.split("-");
          const seatData = {
            st_id: ip_no,
            st_row: lot,
            st_column: seatNumber,
            st_check: "y",
          };
          return ApiService.updateSeat(seatData);
        })
      );

      const confirmation = window.confirm(
        "결제가 성공적으로 이루어졌습니다. 확인하시겠습니까?"
      );

      if (confirmation) {
        history.push("/MyPage_res");
      } else {
        history.push("/");
      }
    } catch (error) {
      console.error("좌석 업데이트 작업 중 오류가 발생하였습니다.", error);
    }
  };

  return <div></div>;
};

export default Success;
