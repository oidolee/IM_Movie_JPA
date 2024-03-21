import React, { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import style from "../../styles/page_1/Checkout.css";
import { useCookies } from 'react-cookie';

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

// 클라이언트 키 test_ck_P9BRQmyarYxDGWlq5RNZVJ07KzLN
// 시크릿 키 test_sk_ex6BJGQOVDxv2GKPJdBnVW4w2zNb
// http://localhost:3000/success?paymentType=NORMAL&orderId=xygn4_PUn0O91OCQt1QNf&paymentKey=jvX2KBP9QADpexMgkW36obk1elyyXJVGbR5ozO06yLYlaEJ7&amount=100

const App = ({ handleCloseModal }) => {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(100);
  const [cookies] = useCookies(['c_email', 'idName']); // 쿠키 가져오기

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
      paymentMethodsWidget.UPDATE_REASON.COUPON
    );
  }, [price]);

  const handlePayment = async () => {
    const paymentWidget = paymentWidgetRef.current;

    console.log("이름: " ,cookies['idName'], "이메일: ", cookies['c_email']);

    try {
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: "티켓",
        customerName: cookies['idName'],
        customerEmail: cookies['c_email'],
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