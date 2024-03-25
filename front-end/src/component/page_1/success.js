import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../ApiService";

const Success = () => {
  const location = useLocation();

  // 상태 값 정의
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0); // 초기값 0으로 설정
  const [totalPrice, setTotalPrice] = useState([]);
  const [selectedMovieInfo, setSelectedMovieInfo] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const orderId = queryParams.get("orderId");
    const orderName = queryParams.get("orderName");
    const customerEmail = queryParams.get("customerEmail");
    const payAmount = queryParams.get("amount");

    console.log("결제 정보:", { orderId, orderName, customerEmail });

    // API에 전송할 데이터 구성
    const inputData = {
      pay_name: orderId,
      pay_order_name: orderName,
      ic_email: "11",
      pay_amount: payAmount,
      pay_company: "토스",
      pay_check: "y",
      pay_sysdate: new Date().toISOString(),
    };

    // 결제 정보 저장
    try {
      ApiService.insertPayment(inputData)
        .then((res) => {
          console.log("결제 정보 저장 성공", res.data);
        })
        .catch((error) => {
          console.error("결제 정보 저장 실패", error);
        });
    } catch (error) {
      console.error("결제 정보 저장 중 오류 발생", error);
    }

    // 선택된 영화 정보 로드
    const storedSelectedMovieInfo = JSON.parse(
      localStorage.getItem("selectedMovieInfo")
    );

    // 좌석 정보 로드
    const storedSelectedSeats = JSON.parse(
      localStorage.getItem("selectedSeats")
    );

    // 총 가격 정보 로드
    const storedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));

    setSelectedSeats(storedSelectedSeats); // 선택된 좌석 설정

    // 나머지 정보 설정
    if (storedSelectedMovieInfo) {
      setTotalPrice(storedTotalPrice);
      setSelectedMovieInfo(storedSelectedMovieInfo);
    }

    console.log("selectedMovieInfo : ", storedSelectedMovieInfo);
    console.log("setSelectedSeats : ", storedSelectedSeats);
    console.log("setTotalPrice : ", storedTotalPrice);
  }, [location]);

  useEffect(() => {
    // 좌석 정보가 변경될 때마다 총 수량 업데이트
    setTotalQuantity(selectedSeats.length);
  }, [selectedSeats]);

  useEffect(() => {
    if (selectedMovieInfo && totalQuantity > 0) {
      const resCount = totalQuantity; // 총 수량으로 설정
      const st_id = parseInt(selectedSeats[0].slice(-2), 10);

      // API에 전송할 데이터 구성
      const inputData2 = {
        st_id: st_id,
        c_email: "11",
        res_count: resCount,
        res_ticket_price: totalPrice,
        res_sysdate: new Date().toISOString(),
        res_check: "y",
      };

      // 예약 정보 저장
      try {
        ApiService.addReservation(inputData2)
          .then((res) => {
            console.log("예약 정보 저장 성공", res.data);
          })
          .catch((error) => {
            console.error("예약 정보 저장 실패", error);
          });
      } catch (error) {
        console.error("예약 정보 저장 중 오류 발생", error);
      }
    }
  }, [selectedSeats, selectedMovieInfo, totalQuantity, totalPrice]);

  return <div></div>;
};

export default Success;
