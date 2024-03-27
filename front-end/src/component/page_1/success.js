import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../ApiService";

const Success = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // URL 쿼리 파라미터 가져오기

  // 상태 값 정의
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedMovieInfo, setSelectedMovieInfo] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  

  useEffect(() => {
    // 결제 정보와 선택된 영화 정보 로드
    const orderId = queryParams.get("orderId");
    const selectedMovieTitle = localStorage.getItem("selectedMovieTitle");
    const customerEmail = localStorage.getItem("customerEmail");
    const totalPrice = localStorage.getItem("totalPrice");

    // 결제 정보 출력
    console.log("결제 정보:", { orderId, selectedMovieTitle, customerEmail });

    // API에 전송할 데이터 구성
    const inputData = {
      pay_name: orderId,
      pay_order_name: selectedMovieTitle,
      ic_email: customerEmail,
      pay_amount: totalPrice,
      pay_company: "IM",
      pay_check: "y",
      pay_sysdate: new Date().toISOString(),
    };

    // 결제 정보 저장 및 선택된 영화 정보 로드
    try {
      ApiService.insertPayment(inputData)
        .then((res) => {
          console.log("결제 정보 저장 성공", res.data);
          const storedSelectedMovieInfo = JSON.parse(
            localStorage.getItem("selectedMovieInfo")
          );
          const storedSelectedSeats = JSON.parse(
            localStorage.getItem("selectedSeats")
          );
          const storedTotalPrice = JSON.parse(
            localStorage.getItem("totalPrice")
          );

          setSelectedSeats(storedSelectedSeats); // 선택된 좌석 설정

          // 나머지 정보 설정
          if (storedSelectedMovieInfo) {
            setTotalPrice(storedTotalPrice);
            setSelectedMovieInfo(storedSelectedMovieInfo);
          }
          console.log("selectedMovieInfo : ", storedSelectedMovieInfo);
          console.log("setSelectedSeats : ", storedSelectedSeats);
          console.log("setTotalPrice : ", storedTotalPrice);
        })
        .catch((error) => {
          console.error("결제 정보 저장 실패", error);
        });
    } catch (error) {
      console.error("결제 정보 저장 중 오류 발생", error);
    }
  }, [location]);

  useEffect(() => {
    // 좌석 정보가 변경될 때마다 총 수량 업데이트
    setTotalQuantity(selectedSeats.length);

    if (selectedMovieInfo && totalQuantity > 0) {
      // API에 전송할 데이터 구성
      const inputData2 = {
        st_id: parseInt(selectedSeats[0].slice(-2), 10), // 좌석 ID
        c_email: "11",
        res_count: totalQuantity, // 총 수량
        res_ticket_price: totalPrice,
        res_sysdate: new Date().toISOString(),
        res_check: "y",
      };

      // 예약 정보 저장 및 결제 성공 후 페이지 이동
      try {
        ApiService.addReservation(inputData2)
          .then((res) => {
            console.log("예약 정보 저장 성공", res.data);
            const confirmation = window.confirm(
              "결제가 성공적으로 이루어졌습니다. 확인하시겠습니까?"
            );
            if (confirmation) {
              window.location.assign("/MyPage_res");
            } else {
              window.location.assign("/");
            }
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
