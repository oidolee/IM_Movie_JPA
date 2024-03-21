import React, { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import style from "../../styles/page_1/Checkout.css";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

// 클라이언트 키 test_ck_P9BRQmyarYxDGWlq5RNZVJ07KzLN
// 시크릿 키 test_sk_ex6BJGQOVDxv2GKPJdBnVW4w2zNb
// http://localhost:3000/success?paymentType=NORMAL&orderId=xygn4_PUn0O91OCQt1QNf&paymentKey=jvX2KBP9QADpexMgkW36obk1elyyXJVGbR5ozO06yLYlaEJ7&amount=100

const App = ({ handleCloseModal }) => {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(100);
  const [customers, setCustomers] = useState();

  useEffect(() => {
    const fetchPaymentWidget = async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        price
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    };

    fetchPaymentWidget();
  }, [price]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget === null) {
      return;
    }

    paymentMethodsWidget.updateAmount(
      price,
    );
  }, [price]);

  const handlePayment = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: "토스 티셔츠 외 2건",
        customerName: "김토스",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`Checkout ${style.Checkout}`}>
      <div className="Checkout_content">
        <h3 className="payment_tit">결제 정보</h3>
        <ul>
          <li>영화: </li>
          <li>일시: </li>
          <li>상영관: </li>
          <li>인원: </li>
          <li>좌석: </li>
        </ul>
        <div id="payment-widget" />
        <div className="paymentMethod_Main">
          <button className="paymentMethod" onClick={handlePayment}>
            결제하기
          </button>
          <button className="paymentMethod" onClick={handleCloseModal}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
