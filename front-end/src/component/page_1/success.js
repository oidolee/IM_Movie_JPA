import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../ApiService";

const Success = () => {
  const location = useLocation();

  // 상태 값 정의
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [isPointClicked, setIsPointClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieInfo, setSelectedMovieInfo] = useState(null);
  const [adultQuantity, setAdultQuantity] = useState(0);
  const [teenQuantity, setTeenQuantity] = useState(0);
  const [childQuantity, setChildQuantity] = useState(0);
  const [disabledQuantity, setDisabledQuantity] = useState(0);

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
        .then((response) => {
          console.log("결제 정보 저장 성공", response.data);
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

    const storedQuantity = JSON.parse(localStorage.getItem("totalQuantity"));  
    setTotalQuantity(storedQuantity);

    // 좌석 정보 설정
    setSelectedSeats(storedSelectedSeats);

    // 나머지 정보 설정
    if (storedSelectedMovieInfo) {
      setAdultQuantity(storedSelectedMovieInfo.adultQuantity);
      setTeenQuantity(storedSelectedMovieInfo.teenQuantity);
      setChildQuantity(storedSelectedMovieInfo.childQuantity);
      setDisabledQuantity(storedSelectedMovieInfo.disabledQuantity);
      setTotalQuantity(storedSelectedMovieInfo.totalQuantity);
      setTotalPrice(storedTotalPrice);
      setSelectedMovieInfo(storedSelectedMovieInfo);
    }

    console.log("selectedMovieInfo : ", storedSelectedMovieInfo);
    console.log("setSelectedSeats : ", storedSelectedSeats);
    console.log("setTotalPrice : ", storedTotalPrice);
    console.log("storedQuantity : ", storedQuantity);
  }, [location]);

  useEffect(() => {
    if (selectedMovieInfo) {

      // API에 전송할 데이터 구성
      const inputData2 = {
        st_id: selectedSeats,
        c_email: "11",
        res_count: totalQuantity,
        res_ticket_price: totalPrice,
        res_sysdate: new Date().toISOString(),
        res_check: "y",
      };

      // 예약 정보 저장
      try {
        ApiService.addReservation(inputData2)
          .then((response) => {
            console.log("예약 정보 저장 성공", response.data);
          })
          .catch((error) => {
            console.error("예약 정보 저장 실패", error);
          });
      } catch (error) {
        console.error("예약 정보 저장 중 오류 발생", error);
      }
    }
  }, [selectedSeats, selectedMovieInfo]);

  return <div></div>;
};

export default Success;
