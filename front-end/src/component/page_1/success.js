import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../ApiService";

const Success = () => {
  const location = useLocation();

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
      ic_email: customerEmail,
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
    // 결제 성공 후 페이지 이동
    // const confirmation = window.confirm(
    //   "결제가 성공적으로 이루어졌습니다. 확인하시겠습니까?"
    // );
    // if (confirmation) {
    //   window.location.assign("/MyPage_res");
    // } else {
    //   window.location.assign("");
    // }
  }, [location]);

  return <div></div>;
};

export default Success;
