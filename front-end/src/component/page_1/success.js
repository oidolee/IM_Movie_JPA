import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../ApiService";

const Success = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const pay_id = queryParams.get("orderId");
    const pay_name = queryParams.get("orderName"); // 수정: orderName 대신에 customerName을 사용해야 합니다.
    const c_name = queryParams.get("customerName");
    const c_email = queryParams.get("customerEmail");
    const payAmount = queryParams.get("amount");

    console.log("결제 정보:", { pay_id, pay_name, c_name, c_email });

    // API에 전송할 데이터 구성
    const inputData = {
      pay_id,
      pay_name, 
      c_name,
      c_email,
      pay_method: "카드", // 예시로 고정된 값 사용
      pay_amount: payAmount,
      pay_company: "토스", // 예시로 고정된 값 사용
      pay_card_num: "1234-5678-9012-3456", // 예시로 고정된 값 사용
      pay_tel: "010-1234-5678", // 예시로 고정된 값 사용
      pay_sysdate: new Date().toISOString(),
    };

    // 결제 정보를 백엔드로 전송
    try {
      ApiService.insertPayment(inputData)
        .then(response => {
          console.log("결제 정보 저장 성공", response.data);
          // 여기에 추가적인 처리를 할 수 있습니다.
        })
        .catch(error => {
          console.error("결제 정보 저장 실패", error);
        });
    } catch (error) {
      console.error("결제 정보 저장 중 오류 발생", error);
    }
  }, [location]);

  return (
    <div>
      <h1>결제가 성공적으로 이루어졌습니다.</h1>
      {/* 성공 페이지의 내용을 추가할 수 있습니다. */}
    </div>
  );
};

export default Success;
